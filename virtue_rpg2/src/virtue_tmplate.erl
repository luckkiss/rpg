%%%-------------------------------------------------------------------
%%% @author dominic
%%% @copyright (C) 2021, <COMPANY>
%%% @doc
%%%
%%% @end
%%%-------------------------------------------------------------------
-module(virtue_tmplate).
-author("dominic").

-include("virtue.hrl").


%% API
-export([make/1, make/2, make/3, make/4, make_hrl/1, make_hrl/2, make_hrl/3]).

%% @equiv make(Sheet, default, default)
make(#virtue_sheet{} = Sheet) ->
    make(Sheet, default, default).
make(Filename, SheetName) ->
    make(Filename, SheetName, default, default).

%% @doc 生成模板
make(Filename, SheetName, ErlPath, HrlPath) ->
    SheetList = virtue_xlsx:sheets(Filename),
    SheetNameAtom = list_to_atom(SheetName),
    case lists:keyfind(SheetNameAtom, #virtue_sheet.sub_tag, SheetList) of
        false -> ?VIRTUE_ERROR2("~ts 中的工作表 ~ts 不存在", [Filename, SheetName]);
        Sheet ->
            [Sheet1] = virtue_xlsx:fill_data([Sheet], [{?VIRTUE_KEY_KEY, 1}, {?VIRTUE_KEY_COMMENT, 1}], ?VIRTUE_KEY_SEARCH_LIMIT),
            make(Sheet1, ErlPath, HrlPath)
    end.

make(#virtue_sheet{raw_data = Data} = Sheet, ErlPath, HrlPath) ->
    #virtue_sheet{sub_tag = SubTag, tag = Tag} = Sheet,
    TagStr = atom_to_list(Tag),
    SubTagStr = atom_to_list(SubTag),
    ModuleStr = atom_to_list(virtue_util:erl_name(TagStr, SubTagStr)),
    RecordNameStr = atom_to_list(virtue_util:record_name(TagStr, SubTagStr)),
    [#virtue_raw_row{data = KeyList} | _] = maps:get(?VIRTUE_KEY_KEY, Data),
    {_, FirstKey} = hd(KeyList),
    Head =
        "-module('" ++ ModuleStr ++ "').\n\n"
    "-behaviour(virtue_callback).\n\n"
    "-include(\"plm_lib.hrl\").\n"
    "-include(\"virtue.hrl\").\n"
    "-include(\"" ++ ModuleStr ++ ".hrl\").\n\n"
    "%% tag\n"
    "-define(PRIV_TAG, " ++ TagStr ++ ").\n"
    "-define(PRIV_SUB_TAG, " ++ SubTagStr ++ ").\n"
    "%% todo 生成的文件名字, hrl复制的mask\n"
    "-define(PRIV_ERL_FILE, \"" ++ RecordNameStr ++ ".erl\").\n"
    "-define(PRIV_HRL_FILE, \"" ++ TagStr ++ ".hrl\").\n"
    "-define(PRIV_COPY_MASK, \"" ++ RecordNameStr ++ "\").\n\n"
    "%% todo compile_body用的arg\n"
    "%% 转换, 使用进程字典, 方便ide提示 + 缩写\n"
    "-define(PRIV_TO_BIN2(Index), virtue_util:to_bin(#" ++ RecordNameStr ++ ".Index, get(?PD_VIRTUE_ROW))).\n"
    "-define(PRIV_TO_INT2(Index), virtue_util:to_int(#" ++ RecordNameStr ++ ".Index, get(?PD_VIRTUE_ROW))).\n"
    "-define(PRIV_TO_FLOAT2(Index), virtue_util:to_float(#" ++ RecordNameStr ++ ".Index, get(?PD_VIRTUE_ROW))).\n"
    "-define(PRIV_TO_TERM2(Index), virtue_util:to_term(#" ++ RecordNameStr ++ ".Index, get(?PD_VIRTUE_ROW))).\n"
    "-define(PRIV_TO_JSON2(Index), virtue_util:to_json(#" ++ RecordNameStr ++ ".Index, get(?PD_VIRTUE_ROW))).\n"
    "",
    Export =
        "-export([get_index/0]).\n\n"
        "-export([update_dets/1, compile/1, clean/1, clean_compile/1]).\n\n",
    Pd =
        "%% 字典数据, 用于报错\n"
        "init_pd(Sheet) ->\n"
        "    put(?PD_VIRTUE_SHEET, Sheet),\n"
        "    put(?PD_VIRTUE_FIELD_DEF, record_info(fields, " ++ RecordNameStr ++ ")).\n\n"
    "clean_pd() ->\n"
    "    erase(?PD_VIRTUE_SHEET),\n"
    "    erase(?PD_VIRTUE_FIELD_DEF),\n"
    "    erase(?PD_VIRTUE_ROW).\n"
    "\n",
    UpdateDets =
        "update_dets(#virtue_sheet{raw_data = RawData} = Sheet) ->\n"
        "    init_pd(Sheet),\n"
        "\n"
        "    [RowList1, Index] = virtue:convert_raw_row(RawData, fun init_record/3, [[], #{}]),\n"
        "    RowList2 = lists:reverse(RowList1),\n"
        "    Sheet1 = Sheet#virtue_sheet{raw_data = maps:remove(?VIRTUE_KEY_DATA, RawData)},\n"
        "    Dets = virtue_util:dets_name(?PRIV_TAG),\n"
        "    dets:insert(Dets, {?VIRTUE_DETS_KEY_SHEET1(?PRIV_SUB_TAG), Sheet1}),\n"
        "    dets:insert(Dets, {?VIRTUE_DETS_KEY_ROW_LIST1(?PRIV_SUB_TAG), RowList2}),\n"
        "    %% 保存自定义数据\n"
        "    dets:insert(Dets, {?VIRTUE_DETS_KEY_INDEX1(?PRIV_SUB_TAG), Index}),\n"
        "\n"
        "    clean_pd().\n"
        "\n"
        "init_record(Row, RowList, Index) ->\n"
        "    %% todo 选择转换类型, 或根据需求转换成正确的数据, 这里可以做格式检查\n"
        "    Record1 = #" ++ RecordNameStr ++ "{\n"
        ++ string:join([["        ", Field, " = ?PRIV_TO_(", Field, ")"] || {_, Field} <- KeyList], ",\n") ++
        "\n"
        "    },\n"
        "    RowList1 = [Row#virtue_row{record = Record1} | RowList],\n"
        "    %% todo 生成自定义数据索引, 用来优化表交叉验证数据的效率\n"
        "    %% todo 默认生成record第一个字段为key的map结构, 不需要可以删除\n"
        "    Index1 = Index#{Record1#" ++ RecordNameStr ++ "." ++ FirstKey ++ " => true},\n"
    "    [RowList1, Index1].\n"
    "\n",
    Index =
        "%% todo 对应的获取自定义索引, 不需要可以删除\n"
        "get_index() ->\n"
        "    Dets = virtue_util:dets_name(?PRIV_TAG),\n"
        "    virtue_util:ensure_dets(Dets),\n"
        "    K = ?VIRTUE_DETS_KEY_INDEX1(?PRIV_SUB_TAG),\n"
        "    [{_, V}] = dets:lookup(Dets, K),\n"
        "    V.\n"
        "\n",
    Compile =
        "compile(#virtue_cb_args{hrl_path = HrlPath, erl_path = ErlPath} = Args) ->\n"
        "    Dets = virtue_util:dets_name(?PRIV_TAG),\n"
        "    [{_, Sheet}] = dets:lookup(Dets, ?VIRTUE_DETS_KEY_SHEET1(?PRIV_SUB_TAG)),\n"
        "    [{_, RowList}] = dets:lookup(Dets, ?VIRTUE_DETS_KEY_ROW_LIST1(?PRIV_SUB_TAG)),\n"
        "    init_pd(Sheet),\n"
        "    clean_compile(Args),\n"
        "\n"
        "    %% todo 复制hrl定义, 不需要可以删除\n"
        "    virtue_util:copy_mask_body(?MODULE, ?PRIV_COPY_MASK, HrlPath ++ \"/\" ++ ?PRIV_HRL_FILE),\n"
        "\n"
        "    Dir = ErlPath ++ \"/\" ++ atom_to_list(?PRIV_TAG),\n"
        "    File = Dir ++ \"/\" ++ ?PRIV_ERL_FILE,\n"
        "    file:make_dir(Dir),\n"
        "    CommonHead = [\n"
        "        \"-module(\", filename:rootname(?PRIV_ERL_FILE), \").\\n\\n\",\n"
        "        \"-include(\\\"plm_lib.hrl\\\").\\n\\n\"\n"
        "        \"-include(\\\"\", ?PRIV_HRL_FILE, \"\\\").\\n\\n\"\n"
        "    ],\n"
        "    GetCompile = #virtue_compile_key_record{\n"
        "        row_list = RowList,\n"
        "        key_pos_list = [#" ++ RecordNameStr ++ "." ++ FirstKey ++ "],\n"
    "        fun_name = \"get\"\n"
    "    },\n"
    "    {GetExport, GetBody} = virtue_compile:compile(GetCompile),\n"
    "    ok = file:write_file(File, [CommonHead, GetExport, GetBody]),\n"
    "\n"
    "    dets:delete(?DETS_VIRTUE_CLEAN_MASK, ?MODULE),\n"
    "    clean_pd().\n"
    "\n",
    Clean =
        "clean(Args) ->\n"
        "    Dets = virtue_util:dets_name(?PRIV_TAG),\n"
        "    %% 先删dets\n"
        "    virtue_util:ensure_dets(Dets),\n"
        "    dets:delete(Dets, ?VIRTUE_DETS_KEY_SHEET1(?PRIV_SUB_TAG)),\n"
        "    dets:delete(Dets, ?VIRTUE_DETS_KEY_ROW_LIST1(?PRIV_SUB_TAG)),\n"
        "    dets:delete(Dets, ?VIRTUE_DETS_KEY_INDEX1(?PRIV_SUB_TAG)),\n"
        "    %% 再删生成的内容\n"
        "    clean_compile(Args).\n"
        "\n"
        "clean_compile(#virtue_cb_args{erl_path = ErlPath, hrl_path = HrlPath}) ->\n"
        "    %% todo 复制hrl定义, 不需要可以删除\n"
        "    virtue_util:delete_mask_body(?PRIV_COPY_MASK, HrlPath ++ \"/\" ++ ?PRIV_HRL_FILE),\n"
        "    file:delete(ErlPath ++ \"/\" ++ atom_to_list(?PRIV_TAG) ++ \"/\" ++ ?PRIV_ERL_FILE).\n"
        "\n",
    ErlFile =
        case ErlPath of
            default ->
                Dir = ?VIRTUE_CB_PATH ++ "/" ++ TagStr,
                file:make_dir(Dir),
                Dir ++ "/" ++ ModuleStr ++ ".erl";
            _ ->
                case filelib:is_dir(ErlPath) of
                    true ->
                        Dir = ErlPath ++ "/" ++ TagStr,
                        file:make_dir(Dir),
                        Dir ++ "/" ++ ModuleStr ++ ".erl";
                    _ ->
                        ?VIRTUE_ERROR2("~ts 不是有效的文件夹!", [ErlPath])
                end
        end,
    ?LOG_DEBUG("write template file " ++ ErlFile),
    ok = file:write_file(ErlFile, unicode:characters_to_binary([Head, Export, Pd, UpdateDets, Index, Compile, Clean])),
    make_hrl(Sheet, HrlPath).

make_hrl(#virtue_sheet{} = Sheet) ->
    make_hrl(Sheet, default).

make_hrl(Filename, SheetName, HrlPath) ->
    SheetList = virtue_xlsx:sheets(Filename),
    SheetNameAtom = list_to_atom(SheetName),
    case lists:keyfind(SheetNameAtom, #virtue_sheet.sub_tag, SheetList) of
        false -> ?VIRTUE_ERROR2("~ts 中的工作表 ~ts 不存在", [Filename, SheetName]);
        Sheet ->
            [Sheet1] = virtue_xlsx:fill_data([Sheet], [{?VIRTUE_KEY_KEY, 1}, {?VIRTUE_KEY_COMMENT, 1}], ?VIRTUE_KEY_SEARCH_LIMIT),
            make_hrl(Sheet1, HrlPath)
    end.

make_hrl(Filename, SheetName) when is_list(Filename) ->
    make_hrl(Filename, SheetName, default);
make_hrl(#virtue_sheet{raw_data = Data} = Sheet, HrlPath) ->
    #virtue_sheet{
        sub_tag = SheetNameAtom, name = SheetFullName,
        tag = WorkbookNameAtom
    } = Sheet,
    WorkbookName = atom_to_list(WorkbookNameAtom),
    SheetName = atom_to_list(SheetNameAtom),
    ModuleStr = atom_to_list(virtue_util:erl_name(WorkbookName, SheetName)),
    RecordNameStr = atom_to_list(virtue_util:record_name(WorkbookName, SheetName)),
    [#virtue_raw_row{data = KeyList} | _] = maps:get(?VIRTUE_KEY_KEY, Data),
    [#virtue_raw_row{data = CommentList} | _] = maps:get(?VIRTUE_KEY_COMMENT, Data, [#virtue_raw_row{data = []}]),
    Split = persistent_term:get(?PT_VIRTUE_SPLIT),
    [SheetComment, _] = string:split(SheetFullName, Split),

    Head = ?VIRTUE_MASK_START1(RecordNameStr) ++ "\n",
    Body =
        %% 转换成unicode的0-255编码
        "%% " ++ [unicode:characters_to_binary(SheetComment)] ++ "\n"
    "-record(" ++ RecordNameStr ++ ", {\n"
        ++ make_field_comment_str(KeyList, CommentList) ++
        "}).\n"
        "",
    Tail = ?VIRTUE_MASK_END1(RecordNameStr) ++ "\n",
    HrlFile =
        case HrlPath of
            default ->
                ?VIRTUE_INCLUDE_PATH ++ "/" ++ ModuleStr ++ ".hrl";
            _ ->
                case filelib:is_dir(HrlPath) of
                    true ->
                        HrlPath ++ "/" ++ ModuleStr ++ ".hrl";
                    _ ->
                        ?VIRTUE_ERROR2("~ts 不是有效的文件夹!", [HrlPath])
                end
        end,
    ?LOG_DEBUG("write template file " ++ HrlFile),
    ok = file:write_file(HrlFile, [Head, Body, Tail]).

make_field_comment_str([{Index, Key} | T], CommentList) ->
    case lists:keyfind(Index, 1, CommentList) of
        false -> Comment = "";
        {_, Comment} -> ok
    end,
    case T of
        [] -> ["    ", Key, "% ", Comment, "\n"];
        _ -> ["    ", Key, ",% ", Comment, "\n" | make_field_comment_str(T, CommentList)]
    end.
    
    
    