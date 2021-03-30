%%%-------------------------------------------------------------------
%%% @author dominic
%%% @copyright (C) 2021, <COMPANY>
%%% @doc 读取xlsx
%%%
%%% @end
%%%-------------------------------------------------------------------
-module(virtue_xlsx).
-author("dominic").


-include("virtue.hrl").

%% API
-export([sheets/1, fill_data/1, fill_data/3, fill_data_md5/1, fill_data_md5/3]).

-export([to_form/1, convert_xml_string/1]).

-spec sheets(file:filename()) -> [#virtue_sheet{}].
sheets(Filename) ->
    Split = persistent_term:get(?PT_VIRTUE_SPLIT),
    FD = get_fd(Filename),
    {ok, {_, WorkbookXml}} = zip:zip_get("xl/workbook.xml", FD),
    WorkbookForm = xml_to_form("workbook", WorkbookXml, Filename),
    SheetsForm = form_find("sheets", WorkbookForm),
    {ok, {_, RekXml}} = zip:zip_get("xl/_rels/workbook.xml.rels", FD),
    RelsForm = xml_to_form("Relationships", RekXml, Filename),
    %% 构造rId和sheet.xml的map
    RIdMapping =
        lists:foldl(fun({"Relationship", RelationshipAttr, _}, Acc) ->
            Acc#{attr_find("Id", RelationshipAttr) => attr_find("Target", RelationshipAttr)}
                    end, #{}, RelsForm),
    FileRootName = filename:basename(Filename, ".xlsx"),
    [_, TagStr] = string:split(FileRootName, Split),
    lists:foldr(fun({"sheet", SheetAttr, _}, Acc) ->
        SheetName = attr_find("name", SheetAttr),
        case string:split(SheetName, Split) of
            [_, SubTagStr] ->
                RId = attr_find("r:id", SheetAttr),
                [#virtue_sheet{
                    sub_tag = list_to_atom(SubTagStr),
                    %% FullName 读起来是unicode的数字列表, ~ts打印会乱码
                    name = unicode:characters_to_list(list_to_binary(SheetName)),
                    tag = list_to_atom(TagStr), filename = Filename,
                    module = virtue_util:erl_name(TagStr, SubTagStr),
                    id = RId,
                    taget = "xl/" ++ maps:get(RId, RIdMapping),
                    raw_data = #{}
                } | Acc];
            _ ->% 名字格式不对
                Acc
        end
                end, [], SheetsForm).


fill_data(SheetList) ->
    fill_data(SheetList, [{Key, 99999999} || Key <- ?VIRTUE_KEY_LIST], 99999999).

%% 获取sheet和数据
fill_data(SheetList, KeyTimesList, SearchLimit) ->
    ReadXlsxST = erlang:system_time(millisecond),
    %% 数量大的话, 解析xml的时候进程会吃满内存, gc不降低
    %% 继续在那个进程操作很可能爆掉
    %% 发回来耗时很低, 可以有效降低内存使用
    Self = self(),
    {Pid, Ref} = spawn_monitor(fun() ->
        Self ! {fill_data, fill_data_1(SheetList, KeyTimesList, SearchLimit, [])}
                               end),
    [#virtue_sheet{filename = Filename} | _] = SheetList,
    receive
        {fill_data, Data} ->
            erlang:demonitor(Ref, [flush]),
            ReadXlsxET = erlang:system_time(millisecond),
            ?LOG_DEBUG("read ~ts cost ~w", [Filename, ReadXlsxET - ReadXlsxST]),
            Data;
        {'DOWN', Ref, process, Pid, Reason} ->
            ?VIRTUE_ERROR2("读取 ~ts 数据错误, 请联系管理员~n~p", [Filename, Reason])
    end.

fill_data_1([], _, _, SheetWithDataList) ->
    [Sheet#virtue_sheet{
        raw_data = maps:map(fun(_K, V) -> lists:reverse(V) end, Sheet#virtue_sheet.raw_data)
    } || Sheet <- SheetWithDataList];
fill_data_1([#virtue_sheet{sub_tag = SubTag, filename = Filename, taget = Target} = Sheet | T], KeyTimesList, SearchLimit, SheetWithDataList) ->
    FD = get_fd(Filename),
    {ok, {_, Xml}} = zip:zip_get(Target, FD),
    SheetForm = xml_to_form("worksheet", Xml, Filename),
    SheetDataForm = form_find("sheetData", SheetForm),
    ShareString = get_share_string(Filename),
    Sheet1 = fill_data_2(Sheet, Xml, SheetWithDataList),
    %% 构造行数据
    Key2RowListMap = fill_data_key2row_list(SheetDataForm, KeyTimesList, SearchLimit, ShareString, Sheet1#virtue_sheet.raw_data),
    Sheet2 = Sheet1#virtue_sheet{raw_data = Key2RowListMap},
    SheetWithDataList1 = lists:keystore(SubTag, #virtue_sheet.sub_tag, SheetWithDataList, Sheet2),
    fill_data_1(T, KeyTimesList, SearchLimit, SheetWithDataList1).


fill_data_md5(SheetList) ->
    fill_data_md5(SheetList, [{Key, 99999999} || Key <- ?VIRTUE_KEY_LIST], 99999999).

%% md5不一样的才会返回, 同fill_data
fill_data_md5(SheetList, KeyTimesList, SearchLimit) ->
    ReadXlsxST = erlang:system_time(millisecond),
    %% 数量大的话, 解析xml的时候进程会吃满内存, gc不降低
    %% 继续在那个进程操作很可能爆掉
    %% 发回来耗时很低, 可以有效降低内存使用
    Self = self(),
    {Pid, Ref} = spawn_monitor(fun() ->
        Self ! {fill_data, fill_data_md5_1(SheetList, KeyTimesList, SearchLimit, [])}
                               end),
    [#virtue_sheet{filename = Filename} | _] = SheetList,
    receive
        {fill_data, Data} ->
            erlang:demonitor(Ref, [flush]),
            ReadXlsxET = erlang:system_time(millisecond),
            ?LOG_DEBUG("read ~ts cost ~w", [Filename, ReadXlsxET - ReadXlsxST]),
            Data;
        {'DOWN', Ref, process, Pid, Reason} ->
            ?VIRTUE_ERROR2("读取 ~ts 数据错误, 请联系管理员~n~p", [Filename, Reason])
    end.

fill_data_md5_1([], _, _, SheetWithDataList) ->
    [Sheet#virtue_sheet{
        raw_data = maps:map(fun(_K, V) -> lists:reverse(V) end, Sheet#virtue_sheet.raw_data)
    } || Sheet <- SheetWithDataList];
fill_data_md5_1([#virtue_sheet{sub_tag = SheetName, filename = Filename, taget = Target, tag = Tag} = Sheet | T], KeyTimesList, SearchLimit, SheetWithDataList) ->
    FD = get_fd(Filename),
    {ok, {_, Xml}} = zip:zip_get(Target, FD),
    Sheet1 = fill_data_2(Sheet, Xml, SheetWithDataList),
    Dets = virtue_util:dets_name(Tag),
    IsChange =
        case Sheet1#virtue_sheet.md5 =/= undefined of
            true ->
                virtue_util:ensure_dets(Dets),
                case dets:lookup(Dets, ?VIRTUE_DETS_KEY_SHEET1(SheetName)) of
                    [{_, #virtue_sheet{md5 = Md5}}] -> not Md5 == Sheet1#virtue_sheet.md5;
                    _ -> true
                end;
            _ ->
                true
        end,
    case IsChange of
        true ->
            SheetForm = xml_to_form("worksheet", Xml, Filename),
            SheetDataForm = form_find("sheetData", SheetForm),
            ShareString = get_share_string(Filename),
            %% 构造行数据
            Key2RowListMap = fill_data_key2row_list(SheetDataForm, KeyTimesList, SearchLimit, ShareString, Sheet1#virtue_sheet.raw_data),
            Sheet2 = Sheet1#virtue_sheet{raw_data = Key2RowListMap},
            SheetWithDataList1 = lists:keystore(SheetName, #virtue_sheet.sub_tag, SheetWithDataList, Sheet2),
            fill_data_md5_1(T, KeyTimesList, SearchLimit, SheetWithDataList1);
        _ ->
            fill_data_md5_1(T, KeyTimesList, SearchLimit, SheetWithDataList)
    end.

%% 找到已经出现过的数据
fill_data_2(Sheet, Xml, SheetWithDataList) ->
    case lists:keyfind(Sheet#virtue_sheet.sub_tag, #virtue_sheet.sub_tag, SheetWithDataList) of
        false ->
            %% 只校验数据, 这里会有额外的性能损失
            {match, [DataBin]} = re:run(Xml, "<sheetData>.*</sheetData>", [{capture, [0], binary}]),
            Md5 = erlang:md5(DataBin),
            Sheet#virtue_sheet{md5 = Md5};
        #virtue_sheet{} = OldSheet ->
            %% todo 合表不支持md5校验
            OldSheet
    end.

fill_data_key2row_list([], _KeyTimesList, _SearchLimit, _ShareString, Key2RowListMap) ->
    Key2RowListMap;
fill_data_key2row_list(_, [], _SearchLimit, _ShareString, Key2RowListMap) ->
    Key2RowListMap;
fill_data_key2row_list(_, _KeyTimesList, SearchLimit, _ShareString, Key2RowListMap) when SearchLimit =< 0 ->
    Key2RowListMap;
fill_data_key2row_list([{"row", _RowAttr, []} | T], KeyTimesList, SearchLimit, ShareString, Key2RowListMap) ->
    fill_data_key2row_list(T, KeyTimesList, SearchLimit - 1, ShareString, Key2RowListMap);
fill_data_key2row_list([{"row", RowAttr, [{"c", CAttrH, CFormH} | RowFormT]} | T], KeyTimesList, SearchLimit, ShareString, Key2RowListMap) ->
    %% 先看下是不是有效的行
    KeyNum =
        case get_cell_value(ShareString, CAttrH, CFormH) of
            undefined ->
                CellValueH = false;
            CellValueH ->
                lists:keyfind(CellValueH, 1, KeyTimesList)
        end,
    Key2RowListMap1 =
        case KeyNum of
            false ->
                Key2RowListMap;
            _ ->
                Line = list_to_integer(attr_find("r", RowAttr)),
                CellList =
                    lists:foldr(fun({"c", CAttr, CForm}, Acc2) ->
                        case get_cell_value(ShareString, CAttr, CForm) of
                            undefined ->
                                attr_find("s", CAttr),
                                %% 目前已知合并单元格除了左上角那格有东西其他都是[]
                                %% 合并的单元格的数据都一定不是需要导出的数据
                                %% 所以, 只记录左上角数据, 甚至不记录也可以
                                Acc2;
                            CellValue ->
                                ColumnIndex = get_column_index(attr_find("r", CAttr)),
                                [{ColumnIndex, CellValue} | Acc2]
                        end
                                end, [], RowFormT),
                RowList = maps:get(CellValueH, Key2RowListMap, []),
                RowList1 = [#virtue_raw_row{line = Line, data = CellList} | RowList],
                Key2RowListMap#{CellValueH => RowList1}
        end,
    KeyTimesList1 =
        case KeyNum of
            false -> KeyTimesList;
            {_, Times} ->
                ?IF(Times =< 1,
                    lists:keydelete(CellValueH, 1, KeyTimesList),
                    lists:keyreplace(CellValueH, 1, KeyTimesList, {CellValueH, Times - 1}))
        end,
    fill_data_key2row_list(T, KeyTimesList1, SearchLimit - 1, ShareString, Key2RowListMap1).

get_cell_value(ShareString, CAttr, CForm) ->
    V = form_find("v", CForm, undefined),
    case attr_find("t", CAttr, "str") of
        "s" -> % ShareString
            maps:get(V, ShareString);
        "b" -> % boolean
            ?IF(V == "1", "TRUE", "FALSE");
        "str" ->
            convert_xml_string(V)
    end.

xml_to_form(Tag, Xml, _Filename) ->
    [{Tag, _Attr, Form}] = to_form(Xml),
    Form.

%% 把FD存起来, 有可能会跨进程
get_fd(Filename) ->
    case persistent_term:get(?PT_VIRTUE_ZIP_FD1(Filename), undefined) of
        undefined ->
            case zip:zip_open(Filename, [memory]) of
                {ok, FD} ->
                    persistent_term:put(?PT_VIRTUE_ZIP_FD1(Filename), FD),
                    FD;
                Error ->
                    ?VIRTUE_ERROR2("打开文件 ~ts 错误, 请联系管理员~n~w", [Filename, Error])
            end;
        FD ->
            FD
    end.

%% 这个缓存在工作进程即可
get_share_string(Filename) ->
    case get(?PD_VIRTUE_SHARE_STRING1(Filename)) of
        undefined ->
            FD = get_fd(Filename),
            {ok, {_, Xml}} = zip:zip_get("xl/sharedStrings.xml", FD),
            %% 把sst标签的xmlns部分去掉
            ShareStringForm = xml_to_form("sst", Xml, Filename),
            {_, Map} =
                lists:foldl(fun({"si", _, SIForm}, {I, M}) ->
                    case lists:keyfind("t", 1, SIForm) of
                        false ->
                            %% 看别人实现有这种情况
                            RForm = form_find("r", SIForm),
                            {_, _, [Str]} = form_find("t", RForm),
                            {I + 1, M#{integer_to_list(I) => convert_xml_string(Str)}};
                        {_, _, Str} ->
                            {I + 1, M#{integer_to_list(I) => convert_xml_string(Str)}}
                    end
                            end, {0, #{}}, ShareStringForm),
            put(?PD_VIRTUE_SHARE_STRING1(Filename), Map),
            Map;
        Map ->
            Map
    end.


attr_find(K, L) ->
    case lists:keyfind(K, 1, L) of
        false -> ?VIRTUE_ERROR2("在中 ~p 不存属性 ~p, 请联系管理员", [L, K]);
        {_, V} -> convert_xml_string(V)
    end.

attr_find(K, L, Default) ->
    case lists:keyfind(K, 1, L) of
        false -> Default;
        {_, V} -> V
    end.

form_find(K, L) ->
    case lists:keyfind(K, 1, L) of
        false -> ?VIRTUE_ERROR2("在中 ~p 不存属性 ~p, 请联系管理员", [L, K]);
        {_, _Attr, Form} -> Form
    end.

form_find(K, L, Default) ->
    case lists:keyfind(K, 1, L) of
        false -> Default;
        {_, _Attr, Form} -> Form
    end.

get_column_index(ColumnStr) ->
    {match, [WordStr]} = re:run(ColumnStr, "[A-Z]+", [{capture, all, list}]),
    {_, Sum} =
        lists:foldr(fun(Char, {Exp, S}) ->
            {Exp * 26, (Char - $A + 1) * Exp + S}
                    end, {1, 0}, WordStr),
    Sum.


%% List遍历的效率 >> Binary
to_form(Bin) when is_binary(Bin) ->
    to_form(binary_to_list(Bin));
to_form(List) ->
    case List of
        "<?xml" ++ List1 ->% 去掉xml定义
            to_form_body(to_form_skip_xml_head(List1), []);
        _ ->
            to_form_body(List, [])
    end.

%% 属性值里的字符串, 防止冲突 xxx="yyy"
to_form_skip_xml_head([$" | List]) ->
    List1 = to_form_skip_xml_head_string(List),
    to_form_skip_xml_head(List1);
to_form_skip_xml_head([$  | List]) ->
    to_form_skip_xml_head(List);
%% 结束 ?>\r\n
to_form_skip_xml_head([$?, $>, $\r, $\n | List]) ->
    List;
%% 其他字符直接跳过就行
to_form_skip_xml_head([_ | List]) ->
    to_form_skip_xml_head(List).

to_form_skip_xml_head_string([$\\, $" | List]) ->
    to_form_skip_xml_head_string(List);
to_form_skip_xml_head_string([$" | List]) ->
    List;
to_form_skip_xml_head_string([_ | List]) ->
    to_form_skip_xml_head_string(List).

%% <a></a> => {"a", [], []}
%% <a b="b"></a> => {"a", [{"b", "b"}], []}
%% <a b="b">c</a> => {"a", [{"b", "b"}], "c"}
%% <a b="b"><c/></a> => {"a", [{"b", "b"}], [{"c", [], []}]}
to_form_body([], Acc) ->
    lists:reverse(Acc);
%% 开始转换标签 <xxx...
to_form_body([$< | List], Acc) ->
    {Element, List1} = to_form_element(List, []),
    to_form_body(List1, [Element | Acc]).

%% 标签名字收集完成 <xxx attr="attr"...
to_form_element([$  | List], Tag) ->
    to_form_element_attr(List, lists:reverse(Tag), [], []);
%% "空的"标签 <xxx/>
to_form_element([$/, $> | List], Tag) ->
    {{lists:reverse(Tag), [], []}, List};
%% 开始的标签 <xxx>yyyyyy...
to_form_element([$> | List], Tag) ->
    {Listody, List1} =
        case List of
            %% 标签的内容是标签 <xxx><yyy....
            [$< | _] -> to_form_element_body_element(List, []);
            %% 标签的内容是字符串 <xxx>yyy...
            _ -> to_form_element_body_string(List, [])
        end,
    {{lists:reverse(Tag), [], Listody}, List1};
%% 收集标签名字
to_form_element([C | List], Tag) ->
    to_form_element(List, [C | Tag]).

%% 属性名字收集完成 xxx="yyy....
to_form_element_attr([$=, $" | List], Tag, Attr, AttrList) ->
    {Value, List1} = to_form_element_attr_value(List, []),
    to_form_element_attr(List1, Tag, [], [{lists:reverse(Attr), Value} | AttrList]);
%% 标签结束 <xxx yyy="yyy"/>
to_form_element_attr([$/, $> | List], Tag, _Attr, AttrList) ->
    {{Tag, lists:reverse(AttrList), []}, List};
%% 标签结束 <xxx yyy="yyy">
to_form_element_attr([$> | List], Tag, _Attr, AttrList) ->
    {Body, List1} =
        case List of
            %% 标签的内容是标签 <xxx><yyy....
            [$< | _] -> to_form_element_body_element(List, []);
            %% 标签的内容是字符串 <xxx>yyy...
            _ -> to_form_element_body_string(List, [])
        end,
    {{Tag, lists:reverse(AttrList), Body}, List1};
%% 属性空格隔开, 忽略即可 <xxx yyy="yyy" zzz="zzz"...
to_form_element_attr([$  | List], Tag, _Attr, AttrList) ->
    to_form_element_attr(List, Tag, _Attr, AttrList);
%% 收集属性名字
to_form_element_attr([C | List], Tag, Attr, AttrList) ->
    to_form_element_attr(List, Tag, [C | Attr], AttrList).

%% 去掉前后双引号, 值都是 "\"xxxx\""
to_form_element_attr_value([$\\, $" | List], Value) ->
    to_form_element_attr_value(List, [$\\, $" | Value]);
to_form_element_attr_value([$" | List], Value) ->
    {lists:reverse(Value), List};
to_form_element_attr_value([C | List], Value) ->
    to_form_element_attr_value(List, [C | Value]).

%% 出现结束标签 </xxx...>
%% 这里不会检查名字
to_form_element_body_element([$<, $/ | List1], Body) ->
    {lists:reverse(Body), to_form_skip_tag(List1)};
%% 出现标签
to_form_element_body_element([$< | List], Body) ->
    {Element, List1} = to_form_element(List, []),
    to_form_element_body_element(List1, [Element | Body]).

%% 字符串内容
to_form_element_body_string([$<, $/ | List1], Body) ->
    {lists:reverse(Body), to_form_skip_tag(List1)};
to_form_element_body_string([C | List], Body) ->
    to_form_element_body_string(List, [C | Body]).

to_form_skip_tag([$> | List]) -> List;
to_form_skip_tag([_ | List]) -> to_form_skip_tag(List).

%% 转义字符
%% &lt; -> <
%% &gt; -> >
%% &amp; -> &
%% &apos; -> '
%% &quot; -> "
convert_xml_string(List) ->
    %% 粗过滤
    case lists:member($&, List) of
        true ->
            convert_xml_string(List, []);
        _ ->
            List
    end.

convert_xml_string([], List) ->
    lists:reverse(List);
convert_xml_string([$&, $l, $t, $; | T], List) ->
    convert_xml_string(T, [$< | List]);
convert_xml_string([$&, $g, $t, $; | T], List) ->
    convert_xml_string(T, [$> | List]);
convert_xml_string([$&, $a, $m, $p, $; | T], List) ->
    convert_xml_string(T, [$< | List]);
convert_xml_string([$&, $a, $p, $o, $s, $; | T], List) ->
    convert_xml_string(T, [$< | List]);
convert_xml_string([$&, $q, $u, $o, $t, $; | T], List) ->
    convert_xml_string(T, [$< | List]);
convert_xml_string([H | T], List) ->
    convert_xml_string(T, [H | List]).