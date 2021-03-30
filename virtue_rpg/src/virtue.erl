-module(virtue).

-include("virtue.hrl").
-include_lib("kernel/include/file.hrl").


%% private
-export([main/1, convert_raw_row/3, convert_raw_row/5]).

%%====================================================================
%% API functions
%%====================================================================

main(Args) ->
    init_config(),
    virtue_util:ensure_dets(?DETS_VIRTUE_MODULE_DEPEND, #virtue_module_depend.name),
    virtue_util:ensure_dets(?DETS_VIRTUE_CLEAN_MASK),
    %% copy form plm_log.erl
    LogFile = persistent_term:get(?PT_VIRTUE_LOG_FILE),
    Level = persistent_term:get(?PT_VIRTUE_LOG_LEVEL),
    file:delete(LogFile),
    logger:add_handler(?VIRTUE, logger_disk_log_h, #{config => #{file => LogFile,
        type => halt},
        level => Level,
        filesync_repeat_interval => 1000}),
    logger:update_formatter_config(?VIRTUE, #{template => [level, " ", time, " ", pid, " ", mfa, ":", line, "\n", msg, "\n"], single_line => false}),
    logger:update_formatter_config(default, #{template => [level, " ", time, " ", pid, " ", mfa, ":", line, "\n", msg, "\n"], single_line => false}),
    logger:set_primary_config(#{level => Level}),
    case catch do_main(Args) of
        {'EXIT', ?VIRTUE_ERROR} -> ok;
        {'EXIT', Error} -> ?LOG_ERROR("未知错误, 请联系管理员 ~w", [Error]);
        _ -> ok
    end,
    logger_disk_log_h:filesync(?VIRTUE).

%% @private escript 自动执行export文件下所有的erl文件
do_main(["compile"]) ->
    XlsxDir = persistent_term:get(?PT_VIRTUE_XLSX_DIR),
    ErlDir = persistent_term:get(?PT_VIRTUE_ERL_DIR),
    HrlDir = persistent_term:get(?PT_VIRTUE_HRL_DIR),
    DetsDir = persistent_term:get(?PT_VIRTUE_DETS_DIR),
    file:make_dir(ErlDir),
    file:make_dir(HrlDir),
    file:make_dir(DetsDir),
    WorkbookList = make_workbook_list(XlsxDir),

    update_cb_depend(),
    clean_not_exist(WorkbookList),

    UpdateDetsSheetList =
        lists:foldl(fun(#virtue_workbook{sheet_list = SheetList}, Acc) ->
            virtue_xlsx:fill_data(SheetList) ++ Acc
                    end, [], WorkbookList),

    %% 基础设置
    erlang:process_flag(trap_exit, true),
    %% [{processor, [CoreInfo]}], Cpu数量
    CpuNum = length(element(2, hd(erlang:system_info(cpu_topology)))),
    %% 多进程更新dets
    compile_update_dets(UpdateDetsSheetList, [], CpuNum, CpuNum),

    %% 多进程调用对应compile函数
    UpdateModuleList = [Module || #virtue_sheet{module = Module} <- UpdateDetsSheetList],
    CallbackArgs = #virtue_cb_args{erl_path = ErlDir, hrl_path = HrlDir},
    compile_do_compile(UpdateModuleList, CallbackArgs, [], CpuNum, CpuNum),

    %% 更新更新时间
    update_update_time(UpdateDetsSheetList),

    %% 关闭所有dets
    close_dets(),
    ?LOG_NOTICE("生成文件完成");
do_main(["compile_change"]) ->
    XlsxDir = persistent_term:get(?PT_VIRTUE_XLSX_DIR),
    ErlDir = persistent_term:get(?PT_VIRTUE_ERL_DIR),
    HrlDir = persistent_term:get(?PT_VIRTUE_HRL_DIR),
    DetsDir = persistent_term:get(?PT_VIRTUE_DETS_DIR),
    file:make_dir(ErlDir),
    file:make_dir(HrlDir),
    file:make_dir(DetsDir),
    WorkbookList = make_workbook_list(XlsxDir),

    update_cb_depend(),
    clean_not_exist(WorkbookList),

    %% 需要重新生成的xlsx和模块
    UpdateDetsSheetList =
        lists:foldl(fun(#virtue_workbook{tag = Tag, file_name = Filename, sheet_list = SheetList}, Acc) ->
            Dets = virtue_util:dets_name(Tag),
            virtue_util:ensure_dets(Dets),
            {ok, #file_info{mtime = WorkbookMTime}} = file:read_file_info(Filename),
            % 保证文件夹存在
            TagDir = ?VIRTUE_CB_PATH ++ "/" ++ atom_to_list(Tag),
            file:make_dir(TagDir),
            {ok, #file_info{mtime = TagDirMTime}} = file:read_file_info(TagDir),
            %% 对比所有文件的修改时间
            case dets:lookup(Dets, ?VIRTUE_DETS_KEY_UPDATE) of
                [{_, UpdateTime}] when UpdateTime < WorkbookMTime ->% workbook变了
                    virtue_xlsx:fill_data(SheetList) ++ Acc;
                [{_, UpdateTime}] when UpdateTime > TagDirMTime ->% 两边都没变
                    Acc;
                [{_, UpdateTime}] ->
                    compile_filter_modify_erl(SheetList, TagDir, UpdateTime);
                _ ->
                    virtue_xlsx:fill_data(SheetList) ++ Acc
            end
                    end, [], WorkbookList),

    %% 基础设置
    erlang:process_flag(trap_exit, true),
    %% [{processor, [CoreInfo]}], Cpu数量
    CpuNum = length(element(2, hd(erlang:system_info(cpu_topology)))),
    %% 多进程更新dets
    compile_update_dets(UpdateDetsSheetList, [], CpuNum, CpuNum),

    %% 添加依赖模块
    UpdateModuleList1 =
        lists:foldl(fun(#virtue_sheet{module = Module}, Acc) ->
            [#virtue_module_depend{be_depend_list = BeDependList}] = dets:lookup(?DETS_VIRTUE_MODULE_DEPEND, Module),
            BeDependList ++ [Module | Acc]
                    end, [], UpdateDetsSheetList),
    UpdateModuleList2 = lists:usort(UpdateModuleList1),

    %% 多进程调用对应compile函数
    CallbackArgs = #virtue_cb_args{erl_path = ErlDir, hrl_path = HrlDir},
    compile_do_compile(UpdateModuleList2, CallbackArgs, [], CpuNum, CpuNum),

    %% 更新更新时间
    update_update_time(UpdateDetsSheetList),

    %% 关闭所有dets
    close_dets(),
    ?LOG_NOTICE("生成文件完成");
do_main(["clean"]) ->
    XlsxDir = persistent_term:get(?PT_VIRTUE_XLSX_DIR),
    ErlDir = persistent_term:get(?PT_VIRTUE_ERL_DIR),
    HrlDir = persistent_term:get(?PT_VIRTUE_HRL_DIR),
    file:make_dir(ErlDir),
    file:make_dir(HrlDir),
    WorkbookList = make_workbook_list(XlsxDir),

    clean_not_exist(WorkbookList),

    %% 执行所有callback
    Args = #virtue_cb_args{erl_path = ErlDir, hrl_path = ErlDir},
    filelib:fold_files(?VIRTUE_CB_PATH, ".erl", true,
        fun(FileName, _) ->
            Start = erlang:system_time(millisecond),
            Module = list_to_atom(filename:basename(FileName, ".erl")),
            case catch Module:clean(Args) of
                {'EXIT', Error} ->
                    ?VIRTUE_ERROR2("清理错误, 请联系管理员~n~w error~n~p", [Module, Error]);
                _ ->
                    End = erlang:system_time(millisecond),
                    ?LOG_DEBUG("~w clean success, cost ~p ms", [Module, End - Start])
            end
        end, []),

    close_dets(),
    ?LOG_NOTICE("清理完成");
do_main(["template", XlsxFile, SheetName]) ->
    virtue_tmplate:make(XlsxFile, SheetName);
do_main(["template", XlsxFile, SheetName, ErlPath0, HrlPath0]) ->
    ErlPath = filename:absname(ErlPath0),
    HrlPath = filename:absname(HrlPath0),
    file:make_dir(ErlPath),
    file:make_dir(HrlPath),
    virtue_tmplate:make(XlsxFile, SheetName, ErlPath, HrlPath);
do_main(["template_hrl", XlsxFile, SheetName]) ->
    virtue_tmplate:make_hrl(XlsxFile, SheetName);
do_main(["template_hrl", XlsxFile, SheetName, HrlPath0]) ->
    HrlPath = filename:absname(HrlPath0),
    file:make_dir(HrlPath),
    virtue_tmplate:make_hrl(XlsxFile, SheetName, HrlPath);
do_main(_) ->
    io:format(
        "compile: \"../rebar3\" escriptize&\"_build/default/bin/virtue\" compile\n"
        "compile_change: \"../rebar3\" escriptize&\"_build/default/bin/virtue\" compile_change\n"
        "clean: \"../rebar3\" escriptize&\"_build/default/bin/virtue\" clean\n"
        "template: \"../rebar3\" escriptize&\"_build/default/bin/virtue\" template xlsx/T测试_test.xlsx goods\n"
        "template_hrl: \"../rebar3\" escriptize&\"_build/default/bin/virtue\" template_hrl xlsx/T测试_test.xlsx goods\n").

%% 多进程编译
compile_update_dets([], [], _, _) ->
    ok;
compile_update_dets(CompileList, ReceiveList, SpawnNum, ProcessNum) when CompileList == [] orelse SpawnNum == 0 ->
    compile_receive_spawn(?FUNCTION_NAME, ReceiveList),
    compile_update_dets(CompileList, [], ProcessNum, ProcessNum);
compile_update_dets([#virtue_sheet{tag = Tag, module = Module, filename = FileName} = Sheet | T], ReceiveList, SpawnNum, ProcessNum) ->
    %% dets开一下
    Dets = virtue_util:dets_name(Tag),
    virtue_util:ensure_dets(Dets),
    Start = erlang:system_time(millisecond),
    Pid = spawn_link(fun() ->
        case (catch Module:update_dets(Sheet)) of
            {'EXIT', {undef, [{Module, update_dets, [_], _} | _]}} ->
                ?LOG_NOTICE("自动生成模板模块 ~p, 如果您是不是开发人员, 请联系管理员", [Module]),
                %% 没有这个erlang文件, 自动创建模板
                virtue_tmplate:make(Sheet),
                close_dets(),
                exit(?VIRTUE_ERROR);
            {'EXIT', Error} ->
                ?DO_IF_NOT(Error == ?VIRTUE_ERROR, ?LOG_ERROR("~ts 更新dets错误, 请联系管理员~n~p error~n~p", [FileName, Module, Error])),
                close_dets(),
                file:delete(persistent_term:get(?PT_VIRTUE_DETS_DIR) ++ "/" ++ atom_to_list(Module)),
                exit(?VIRTUE_ERROR);
            _ ->
                End = erlang:system_time(millisecond),
                ?LOG_DEBUG("update dets ~ts, cost ~p ms", [Module, End - Start])
        end
                     end),
    ReceiveList1 = [{Pid, Module} | ReceiveList],
    compile_update_dets(T, ReceiveList1, SpawnNum - 1, ProcessNum).

%% 多进程编译
compile_do_compile([], _, [], _, _) ->
    ok;
compile_do_compile(CompileList, CallbackArgs, ReceiveList, SpawnNum, ProcessNum) when CompileList == [] orelse SpawnNum == 0 ->
    compile_receive_spawn(?FUNCTION_NAME, ReceiveList),
    compile_do_compile(CompileList, CallbackArgs, [], ProcessNum, ProcessNum);
compile_do_compile([Module | T], CallbackArgs, ReceiveList, SpawnNum, ProcessNum) ->
    Pid = spawn_link(fun() ->
        Start = erlang:system_time(millisecond),
        case catch Module:compile(CallbackArgs) of
            {'EXIT', Error} ->
                ?VIRTUE_ERROR2("生成文件错误, 请联系管理员~n~w error~n~p", [Module, Error]);
            _ ->
                End = erlang:system_time(millisecond),
                ?LOG_DEBUG("compile ~w success, cost ~p ms", [Module, End - Start])
        end
                     end),
    compile_do_compile(T, CallbackArgs, [{Pid, Module} | ReceiveList], SpawnNum - 1, ProcessNum).

compile_receive_spawn(FunctionName, ReceiveList) ->
    ErrorList =
        lists:foldl(fun(_, Acc) ->
            receive
                {'EXIT', Pid, Reason} ->
                    case lists:keymember(Pid, 1, ReceiveList) andalso Reason == normal of
                        true ->
                            Acc;
                        _ ->
                            case lists:keyfind(Pid, 1, ReceiveList) of
                                false -> Module = undefined;
                                {_, Module} -> ok
                            end,
                            [{Module, Reason} | Acc]
                    end;
                Unknown ->
                    [{unknown, Unknown} | Acc]
            end
                    end, [], ReceiveList),
    case ErrorList of
        [] ->
            ok;
        _ ->
            close_dets(),
            case lists:filter(fun({_Module, Reason}) ->
                case Reason of
                    ?VIRTUE_ERROR -> false;
                    _ -> true
                end end, ErrorList)
            of
                [] -> exit(?VIRTUE_ERROR);
                ErrorList1 -> ?VIRTUE_ERROR2("生成文件错误, 请联系管理员~nerror ~w: ~w", [FunctionName, ErrorList1])
            end
    end.

compile_filter_modify_erl(SheetList, ErlDir, UpdateTime) ->
    %% 遍历所有erlnag文件
    SheetWithDataList =
        filelib:fold_files(ErlDir, ".erl", false,
            fun(FN, FilterSWDList) ->
                {ok, #file_info{mtime = ErlMTime}} = file:read_file_info(FN),
                %% 对比更新时间
                case UpdateTime < ErlMTime of
                    true ->
                        Module = virtue_util:filename_to_atom(FN),
                        %% 拿到sheet数据
                        case lists:keyfind(Module, #virtue_sheet.module, SheetList) of
                            false ->
                                %% 文件没有对应的数据表???
                                ?DO_IF_NOT(dets:member(?DETS_VIRTUE_CLEAN_MASK, Module),
                                    ?LOG_WARNING("模块 ~w 关联的sheet不存在, 请联系管理员", [Module])),
                                FilterSWDList;
                            Sheet ->
                                [SWD] = virtue_xlsx:fill_data([Sheet]),
                                [SWD | FilterSWDList]
                        end;
                    _ ->
                        FilterSWDList
                end
            end, []),
    SheetWithDataList.

close_dets() ->
    lists:foreach(fun(Name) ->
        case is_atom(Name) andalso "virtue_" -- atom_to_list(Name) == [] of
            true -> dets:close(Name);
            _ -> skip
        end
                  end, dets:all()).

make_workbook_list(XlsxDir) ->
    Split = persistent_term:get(?PT_VIRTUE_SPLIT),
    %% 搜索全部xlsx文件
    filelib:fold_files(XlsxDir, ".xlsx", true,
        fun(FileName, Acc) ->
            BaseName = filename:basename(FileName, ".xlsx"),
            FileNameFirstChar = hd(BaseName),
            case FileNameFirstChar =/= $~
                andalso string:split(filename:rootname(BaseName), Split)
            of
                [_, TagStr] ->
                    case catch list_to_atom(TagStr) of
                        Tag when is_atom(Tag), Tag =/= '' ->
                            [#virtue_workbook{
                                tag = Tag,
                                file_name = FileName,
                                sheet_list = virtue_xlsx:sheets(FileName)
                            } | Acc];
                        _ ->
                            Acc
                    end;
                false ->% 中间文件
                    Acc;
                _ ->
                    Acc
            end
        end, []).

%% 把行数据转换成record
%% virtue_raw_row 转换成 virtue_row
%% 返回的数据是倒序的
%% erlang:apply(InitFun, [Record | Args]) -> Acc1
convert_raw_row(RawData, InitFun, Args) ->
    #virtue_sheet{tag = Tag, sub_tag = SubTag} = get(?PD_VIRTUE_SHEET),
    RecordName = virtue_util:record_name(Tag, SubTag),
    convert_raw_row(RawData, RecordName, get(?PD_VIRTUE_FIELD_DEF), InitFun, Args).
convert_raw_row(RawData, RecordName, FieldList, InitFun, Args) ->
    #{
        ?VIRTUE_KEY_KEY := [#virtue_raw_row{data = KeyRow} | _],
        ?VIRTUE_KEY_DATA := Data
    } = RawData,
    KeyRow1 = [{ColumnIndex, list_to_atom(Value)} || {ColumnIndex, Value} <- KeyRow, Value =/= ""],
    %% 先检查字段对不对得上
    ColumnIndexList =
        lists:map(fun(Field) ->
            case lists:keyfind(Field, 2, KeyRow1) of
                {ColumnIndex, _Value} ->
                    ColumnIndex;
                _ ->
                    ?VIRTUE_ERROR2("~w 中缺少字段 ~w~n有效字段未: ~w",
                        [RecordName, Field, [Key || {_, Key} <- []]])
            end
                  end, FieldList),
    lists:foldl(fun(#virtue_raw_row{line = Line, data = DataRow}, Acc) ->
        FieldValueList = [element(2, lists:keyfind(ColumnIndex, 1, DataRow)) || ColumnIndex <- ColumnIndexList],
        Record = list_to_tuple([RecordName | FieldValueList]),
        Row = #virtue_row{line = Line, record = Record},
        put(?PD_VIRTUE_ROW, Row),
        erlang:apply(InitFun, [Row | Acc])
                end, Args, Data).


update_update_time(UpdateDetsSheetList) ->
    lists:foldl(fun(#virtue_sheet{tag = Tag}, Acc) ->
        case lists:member(Tag, Acc) of
            true -> Acc;
            _ ->
                Dets = virtue_util:dets_name(Tag),
                virtue_util:ensure_dets(Dets),
                dets:insert(Dets, {?VIRTUE_DETS_KEY_UPDATE, erlang:localtime()}),
                [Tag | Acc]
        end
                end, [], UpdateDetsSheetList).

init_config() ->
    {ok, ConfigList} = file:script("virtue.config"),
    persistent_term:put(?PT_VIRTUE_LOG_FILE, element(2, lists:keyfind(log_file, 1, ConfigList))),
    persistent_term:put(?PT_VIRTUE_LOG_LEVEL, element(2, lists:keyfind(log_level, 1, ConfigList))),
    persistent_term:put(?PT_VIRTUE_XLSX_DIR, element(2, lists:keyfind(xlsx_dir, 1, ConfigList))),
    persistent_term:put(?PT_VIRTUE_ERL_DIR, element(2, lists:keyfind(out_erl_dir, 1, ConfigList))),
    persistent_term:put(?PT_VIRTUE_HRL_DIR, element(2, lists:keyfind(out_hrl_dir, 1, ConfigList))),
    persistent_term:put(?PT_VIRTUE_DETS_DIR, element(2, lists:keyfind(dets_dir, 1, ConfigList))),
    persistent_term:put(?PT_VIRTUE_SPLIT, element(2, lists:keyfind(split, 1, ConfigList))),
    persistent_term:put(?PT_VIRTUE_RECORD_PREFIX, element(2, lists:keyfind(record_prefix, 1, ConfigList))),
    persistent_term:put(?PT_VIRTUE_RECORD_LINE_SIZE, element(2, lists:keyfind(record_line_size, 1, ConfigList))),
    ok.

%% 定义:'依赖'总是通过 A表的Key==B表的Key 实现, 类似mysql的外键
%% 如果A文件被B文件依赖, B文件被C文件依赖(物品被装备依赖, 装备被装备属性依赖)
%% 当A文件改变时(物品), 同时重新生成被'直接'依赖的文件(装备), 但不会生成'间接'依赖的文件(装备属性)
%% 例如, A表数据变了, B/C表不变
%% 那么A表的key可能变了, 导致B表的key对应不上, 所以需要重新生成
%% 但是C表的key依赖B表的key, B表并没有改变, 所以不需要生成
update_cb_depend() ->
    StartTime = erlang:system_time(millisecond),
    {ok, TagDirList} = file:list_dir(?VIRTUE_CB_PATH),
    lists:foreach(fun(TagDir) ->
        TagDirPath = ?VIRTUE_CB_PATH ++ "/" ++ TagDir,
        case filelib:is_dir(TagDirPath) of
            true ->
                {ok, #file_info{mtime = TagDirMTime}} = file:read_file_info(TagDirPath),
                Tag = virtue_util:filename_to_atom(TagDir),
                case dets:lookup(?DETS_VIRTUE_MODULE_DEPEND, Tag) of
                    [#virtue_module_depend{update_time = UpdateTime}] when UpdateTime >= TagDirMTime ->
                        ok;
                    _ ->
                        filelib:fold_files(TagDirPath, ".erl", true,
                            fun(FN, _) ->
                                Module = virtue_util:filename_to_atom(FN),
                                {ok, #file_info{mtime = FileMTime}} = file:read_file_info(FN),
                                case dets:lookup(?DETS_VIRTUE_MODULE_DEPEND, Module) of
                                    [#virtue_module_depend{update_time = UpdateTime}] when UpdateTime >= FileMTime ->
                                        ok;
                                    _ ->
                                        update_cb_depend(FN)
                                end
                            end, []),
                        VirtueDepend = #virtue_module_depend{
                            name = Tag,
                            update_time = erlang:system_time(second)
                        },
                        dets:insert(?DETS_VIRTUE_MODULE_DEPEND, VirtueDepend)
                end;
            _ ->% ??????
                ?LOG_ERROR("回调文件夹下的 ~ts 不是文件夹, 请联系管理员", [TagDir]),
                close_dets(),
                exit(?VIRTUE_ERROR)
        end end, TagDirList),
    EndTime = erlang:system_time(millisecond),
    ?LOG_DEBUG("update callback depend cost ~w", [EndTime - StartTime]).

update_cb_depend(FN) ->
    {ok, Binary} = file:read_file(FN),
    Module = virtue_util:filename_to_atom(FN),
    %% 如果有动态调用的话epp找不到, 所以直接正则找
    %% 正则找出所有 非注释内非virtue_util的 virtue_xxx
    Split = persistent_term:get(?PT_VIRTUE_SPLIT),
    ModuleRe = "virtue" ++ Split ++ "[a-z][A-z0-9_]*" ++ Split ++ "[a-z][A-z0-9_]*",
    case re:run(Binary, "^[^%]*" ++ ModuleRe, [global, multiline, {capture, [0], binary}]) of
        {match, MatchLineList} ->
            DependList =
                lists:foldl(fun([MatchLine], Acc) ->
                    {match, MatchModuleList} = re:run(MatchLine, ModuleRe, [global, {capture, [0], binary}]),
                    lists:foldl(fun([MatchModule], Acc2) ->
                        MatchModuleAtom = binary_to_atom(MatchModule),
                        [MatchModuleAtom | Acc2]
                                end, Acc, MatchModuleList)
                            end, [], MatchLineList),
            DependList1 = lists:delete(Module, lists:usort(DependList)),

            Now = erlang:system_time(second),
            %% 更新自己
            OldDependList =
                case dets:lookup(?DETS_VIRTUE_MODULE_DEPEND, Module) of
                    [] ->
                        NewVirtueDepend = #virtue_module_depend{
                            name = Module,
                            update_time = Now,
                            be_depend_list = [],
                            depend_list = DependList1
                        },
                        dets:insert(?DETS_VIRTUE_MODULE_DEPEND, NewVirtueDepend),
                        [];
                    [#virtue_module_depend{} = OldVirtueDepend] ->
                        OldVirtueDepend1 = OldVirtueDepend#virtue_module_depend{depend_list = DependList1},
                        dets:insert(?DETS_VIRTUE_MODULE_DEPEND, OldVirtueDepend1),
                        OldVirtueDepend#virtue_module_depend.depend_list
                end,
            %% 新增的模块
            lists:foreach(fun(DependModule) ->
                {DependBeDependList1, DependDependList1} =
                    case dets:lookup(?DETS_VIRTUE_MODULE_DEPEND, DependModule) of
                        [#virtue_module_depend{
                            be_depend_list = BeDependDependList,
                            depend_list = DependDependList
                        }] ->
                            {[Module | lists:delete(Module, BeDependDependList)], DependDependList};
                        _ ->
                            {[Module], []}
                    end,
                VirtueDepend = #virtue_module_depend{
                    name = DependModule,
                    update_time = Now,
                    be_depend_list = DependBeDependList1,
                    depend_list = DependDependList1
                },
                dets:insert(?DETS_VIRTUE_MODULE_DEPEND, VirtueDepend)
                          end, DependList1 -- OldDependList),
            %% 减少的模块
            lists:foreach(fun(DependModule) ->
                case dets:lookup(?DETS_VIRTUE_MODULE_DEPEND, DependModule) of
                    [#virtue_module_depend{
                        be_depend_list = BeDependDependList,
                        depend_list = DependDependList
                    }] ->
                        VirtueDepend = #virtue_module_depend{
                            name = DependModule,
                            update_time = Now,
                            be_depend_list = lists:delete(Module, BeDependDependList),
                            depend_list = DependDependList
                        },
                        dets:insert(?DETS_VIRTUE_MODULE_DEPEND, VirtueDepend);
                    _ ->% ????
                        ?LOG_WARNING("~p 找不到依赖模块 ~p 的dets数据, 请联系管理员", [Module, DependModule]),
                        ok
                end
                          end, OldDependList -- DependList1),
            ok;
        _ ->
            ok
    end.

%% workbook/sheet已经不存在, 清理生成的内容
clean_not_exist(WorkBookList) ->
    StartTime = erlang:system_time(millisecond),
    ErlDir = persistent_term:get(?PT_VIRTUE_ERL_DIR),
    HrlDir = persistent_term:get(?PT_VIRTUE_HRL_DIR),
    {ok, TagDirList} = file:list_dir(?VIRTUE_CB_PATH),
    CBArgs = #virtue_cb_args{erl_path = ErlDir, hrl_path = HrlDir},

    lists:foreach(fun(TagDir) ->
        Tag = list_to_atom(TagDir),
        case lists:keyfind(Tag, #virtue_workbook.tag, WorkBookList) of
            false ->% 工作簿已经不存在
                clean_not_exist_workbook(TagDir, CBArgs);
            WorkBook ->
                %% 检查sheet还在不在
                clean_not_exist_sheet(TagDir, CBArgs, WorkBook)
        end
                  end, TagDirList),
    EndTime = erlang:system_time(millisecond),
    ?LOG_DEBUG("clean not exist workbook cost ~w", [EndTime - StartTime]).

clean_not_exist_workbook(TagDir, CBArgs) ->
    %% 执行全部erl文件的clean函数
    filelib:fold_files(?VIRTUE_CB_PATH ++ "/" ++ TagDir, ".erl", true,
        fun(FN, _Acc) ->
            Module = virtue_util:filename_to_atom(FN),
            IsClean =
                case dets:member(?DETS_VIRTUE_CLEAN_MASK, Module) of
                    false ->
                        case erlang:function_exported(Module, clean, 1) of
                            true ->
                                true;
                            _ ->
                                ?LOG_WARNING("工作簿不存在, 但 ~w 未执行清理, 请联系管理员", [Module]),
                                false
                        end;
                    _ ->
                        false
                end,
            ?DO_IF(IsClean, do_clean_not_exist(Module, CBArgs))
        end, []).

clean_not_exist_sheet(TagDir, CBArgs, #virtue_workbook{sheet_list = SheetList}) ->
    filelib:fold_files(?VIRTUE_CB_PATH ++ "/" ++ TagDir, ".erl", true,
        fun(FN, _Acc) ->
            Module = virtue_util:filename_to_atom(FN),
            IsClean =
                case dets:member(?DETS_VIRTUE_CLEAN_MASK, Module)
                    orelse lists:keymember(Module, #virtue_sheet.module, SheetList)
                of
                    false ->
                        case erlang:function_exported(Module, clean, 1) of
                            true ->
                                true;
                            _ ->
                                ?LOG_WARNING("工作表不存在, 但 ~w 未执行清理, 请联系管理员", [Module]),
                                false
                        end;
                    _ ->
                        false
                end,
            ?DO_IF(IsClean, do_clean_not_exist(Module, CBArgs))
        end, []).

do_clean_not_exist(Module, CBArgs) ->
    Module:clean(CBArgs),
    dets:insert(?DETS_VIRTUE_CLEAN_MASK, {Module}).
