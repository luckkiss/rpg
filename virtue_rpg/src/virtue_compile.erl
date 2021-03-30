%%%-------------------------------------------------------------------
%%% @author Dominic
%%% @copyright (C) 2021, <COMPANY>
%%% @doc 生成文件
%%%
%%% @end
%%% Created : 18. 3月 2021 15:34
%%%-------------------------------------------------------------------
-module(virtue_compile).
-author("Dominic").

-include("virtue.hrl").

%% API
-export([compile/1, key_record/1, key_keys/1, key_records/1]).

%% @doc 生成文本, 检查函数: apply(Fun, [Row|Args]) -> Args1
compile(#virtue_compile_key_record{} = Compile) ->
    key_record(Compile);
compile(#virtue_compile_key_keys{} = Compile) ->
    key_keys(Compile);
compile(#virtue_compile_key_records{} = Compile) ->
    key_records(Compile).

%% @doc 生成key-record, 自带检查key是否重复, name(1,2,3) -> #abc{a=1,b=2,c=3}
-spec key_record(#virtue_compile_key_record{}) -> {Export :: iolist(), Body :: iolist()}.
key_record(Compile) ->
    FieldList = [atom_to_list(Field) || Field <- get(?PD_VIRTUE_FIELD_DEF)],
    key_record_1(Compile, FieldList, [], #{}).

key_record_1(#virtue_compile_key_record{row_list = []} = Compile, _FieldList, Body, _KeyMap) ->
    #virtue_compile_key_record{
        key_pos_list = KeyPosList,
        fun_name = FunName
    } = Compile,
    KeyNum = length(KeyPosList),
    Args = args(KeyNum),
    Warning = warning(FunName, KeyNum),
    Body1 = [
        [FunName, $(, Args, ") -> ", FunName, $(, Args, ", undefined, true).\n\n"],
        [FunName, $(, Args, ", Default) -> ", FunName, $(, Args, ", Default, true).\n\n"],
        lists:reverse([Warning | Body])
    ],
    Export = [
        "-export([", FunName, "/", integer_to_list(KeyNum), ", ",
        FunName, "/", integer_to_list(KeyNum + 1), ", ",
        FunName, "/", integer_to_list(KeyNum + 2), "]).\n\n"
    ],
    {Export, Body1};
key_record_1(#virtue_compile_key_record{row_list = [#virtue_row{record = Record} = H | T]} = Compile, FieldList, Body, KeyMap) ->
    #virtue_compile_key_record{
        key_pos_list = KeyPosList,
        fun_name = FunName, check = CheckFun,
        check_args = CheckArgs, line_size = LineSize
    } = Compile,
    put(?PD_VIRTUE_ROW, H),
    Key = [element(KeyPos, Record) || KeyPos <- KeyPosList],
    ?DO_IF(maps:is_key(Key, KeyMap), ?VIRTUE_PD_ERROR2("key重复了: ~w", [Key])),
    CheckArgs1 =
        case CheckFun of
            undefined -> CheckArgs;
            _ -> erlang:apply(CheckFun, [H | CheckArgs])
        end,
    Line = [FunName, $(, record_args(Record, KeyPosList), ", _, _) ->\n", record(Record, FieldList, "    ", 1, LineSize), ";\n"],
    Compile1 = Compile#virtue_compile_key_record{row_list = T, check_args = CheckArgs1},
    key_record_1(Compile1, FieldList, [Line | Body], KeyMap#{Key => 1}).

%% @doc 生成key-keys, 多对多
%%
%% [#a{a=1,aa=2},#a{a=1,aa=3},#a{a=2,aa=2}] => (1) -> [{1,2},{1,3}];(2) -> [{2,2}]
key_keys(Compile) ->
    key_keys_1(Compile, #{}).

key_keys_1(#virtue_compile_key_keys{row_list = []} = Compile, KeysMap) ->
    #virtue_compile_key_keys{
        key_pos_list = KeyPosList, fun_name = FunName,
        line_size = LineSize, is_unique = IsUnique
    } = Compile,
    KeyNum = length(KeyPosList),
    Args = args(KeyNum),
    Warning = warning(FunName, KeyNum),
    Body =
        lists:foldl(fun({K, V}, Acc) ->
            ArgsStr = string:join([virtue_util:to_iolist(Key) || Key <- K], ", "),
            V1 = ?IF(IsUnique, lists:usort(V), lists:reverse(V)),
            Content = keys_join(V1, "        ", 1, LineSize),
            Line = [FunName, $(, ArgsStr, ", _, _) ->\n    [\n", Content, "    ];\n"],
            [Line | Acc]
                    end, [], lists:ukeysort(1, maps:to_list(KeysMap))),
    Body1 = [
        [FunName, $(, Args, ") -> ", FunName, $(, Args, ", undefined, true).\n\n"],
        [FunName, $(, Args, ", Default) -> ", FunName, $(, Args, ", Default, true).\n\n"],
        [lists:reverse(Body), Warning]
    ],
    Export = [
        "-export([", FunName, "/", integer_to_list(KeyNum), ", ",
        FunName, "/", integer_to_list(KeyNum + 1), ", ",
        FunName, "/", integer_to_list(KeyNum + 2), "]).\n\n"
    ],
    {Export, Body1};
key_keys_1(#virtue_compile_key_keys{row_list = [#virtue_row{record = Record} = H | T]} = Compile, KeysMap) ->
    #virtue_compile_key_keys{
        key_pos_list = KeyPosList, keys_pos_list = KeysPosList,
        check = CheckFun, check_args = CheckArgs
    } = Compile,
    put(?PD_VIRTUE_ROW, H),
    Key = [element(KeyPos, Record) || KeyPos <- KeyPosList],
    CheckArgs1 =
        case CheckFun of
            undefined -> CheckArgs;
            _ -> erlang:apply(CheckFun, [H | CheckArgs])
        end,
    Compile1 = Compile#virtue_compile_key_keys{row_list = T, check_args = CheckArgs1},
    Keys = [element(KeyPos, Record) || KeyPos <- KeysPosList],
    KeysMap1 = KeysMap#{Key => [Keys | maps:get(Key, KeysMap, [])]},
    key_keys_1(Compile1, KeysMap1).


%% @doc 生成key-records, 多对多
%%
%% [#a{a=1,aa=2},#a{a=1,aa=3},#a{a=2,aa=2}] => (1) -> [#a{a=1,aa=2},#a{a=1,aa=3}];(2) -> [#a{a=2,aa=2}]
key_records(Compile) ->
    FieldList = [atom_to_list(Field) || Field <- get(?PD_VIRTUE_FIELD_DEF)],
    key_records_1(Compile, FieldList, #{}).

key_records_1(#virtue_compile_key_records{row_list = []} = Compile, _FieldList, KeysMap) ->
    #virtue_compile_key_records{
        key_pos_list = KeyPosList, fun_name = FunName
    } = Compile,
    KeyNum = length(KeyPosList),
    Args = args(KeyNum),
    Warning = warning(FunName, KeyNum),
    Body =
        lists:foldl(fun({K, V}, Acc) ->
            ArgsStr = string:join([virtue_util:to_iolist(Key) || Key <- K], ", "),
            Content = string:join(V, ",\n"),
            Line = [FunName, $(, ArgsStr, ", _) ->\n    [\n", Content, "\n    ];\n"],
            [Line | Acc]
                    end, [], lists:ukeysort(1, maps:to_list(KeysMap))),
    Body1 = [
        [FunName, $(, Args, ") -> ", FunName, $(, Args, ", undefined, true).\n\n"],
        [FunName, $(, Args, ", Default) -> ", FunName, $(, Args, ", Default, true).\n\n"],
        [lists:reverse(Body), Warning]
    ],
    Export = [
        "-export([", FunName, "/", integer_to_list(KeyNum), ", ",
        FunName, "/", integer_to_list(KeyNum + 1), ", ",
        FunName, "/", integer_to_list(KeyNum + 2), "]).\n\n"
    ],
    {Export, Body1};
key_records_1(#virtue_compile_key_records{row_list = [#virtue_row{record = Record} = H | T]} = Compile, FieldList, KeysMap) ->
    #virtue_compile_key_records{
        key_pos_list = KeyPosList,
        check = CheckFun, check_args = CheckArgs,
        line_size = LineSize
    } = Compile,
    put(?PD_VIRTUE_ROW, H),
    Key = [element(KeyPos, Record) || KeyPos <- KeyPosList],
    CheckArgs1 =
        case CheckFun of
            undefined -> CheckArgs;
            _ -> erlang:apply(CheckFun, [H | CheckArgs])
        end,
    Compile1 = Compile#virtue_compile_key_records{row_list = T, check_args = CheckArgs1},
    Line = record(Record, FieldList, "        ", 1, LineSize),
    KeysMap1 = KeysMap#{Key => [Line | maps:get(Key, KeysMap, [])]},
    key_records_1(Compile1, FieldList, KeysMap1).

warning(_FunName, 0) ->
    [];
warning(FunName, KeyNum) ->
    Args = args(KeyNum),
    Warning = [FunName, $(, Args, ", Default, IsWarning) ->\n    ?DO_IF(IsWarning, ?LOG_WARNING(\"~w:", FunName, "(", string:join(lists:duplicate(KeyNum, "~p"), ", "), ") not exist!!\", [?MODULE, ", Args, "])),\n    Default.\n\n"],
    Warning.

args(0) ->
    [];
args(N) ->
    args(1, N).

args(N, N) ->
    ["Args" ++ integer_to_list(N)];
args(N, M) ->
    ["Args" ++ integer_to_list(N) ++ ", " | args(N + 1, M)].

record_args(_Record, []) ->
    [];
record_args(Record, [H]) ->
    [virtue_util:to_iolist(element(H, Record))];
record_args(Record, [H | T]) ->
    [virtue_util:to_iolist(element(H, Record)), $, | record_args(Record, T)].

record(Record, FieldList, Prefix, N, M) ->
    [RecordName | ValueList] = tuple_to_list(Record),
    [Prefix, $#, atom_to_list(RecordName), ${, $\n, record_field(ValueList, FieldList, Prefix ++ "    ", N, M), Prefix, $}].

record_field([], [], _, _, _) ->
    [];
record_field([Value], [Field], Prefix, N, _) ->
    ?IF(N == 1,
        [Prefix, Field, " = ", virtue_util:to_iolist(Value), $\n],
        [Field, " = ", virtue_util:to_iolist(Value), $\n]);
record_field([Value | ValueT], [Field | FieldT], Prefix, N, M) ->
    Line =
        ?IF(N == 1,
            [Prefix, Field, " = ", virtue_util:to_iolist(Value), ", "],
            [Field, " = ", virtue_util:to_iolist(Value), ", "]),
    case N == M of
        true ->
            [Line, $\n | record_field(ValueT, FieldT, Prefix, 1, M)];
        _ ->
            [Line | record_field(ValueT, FieldT, Prefix, N + 1, M)]
    end.

keys_join([], _, _, _) ->
    [];
keys_join([H], PreFix, N, _M) ->
    [[_, _, HH0] | H0] = [[$,, $ , virtue_util:to_iolist(Value)] || Value <- H],
    H1 = [${, [HH0 | H0], $}],
    ?IF(N == 1, [PreFix, H1, $\n], [H1, $\n]);
keys_join([H | T], PreFix, N, M) ->
    [[_, _, HH0] | H0] = [[$,, $ , virtue_util:to_iolist(Value)] || Value <- H],
    H1 = [${, [HH0 | H0], $}],
    H2 = ?IF(N == 1, [PreFix, H1], H1),
    ?IF(N == M, [H2, $,, $\n | keys_join(T, PreFix, 1, M)], [H2, $,, $  | keys_join(T, PreFix, N + 1, M)]).
