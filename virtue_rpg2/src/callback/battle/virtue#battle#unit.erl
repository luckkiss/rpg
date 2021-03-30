-module('virtue#battle#unit').

-behaviour(virtue_callback).

-include("plm_lib.hrl").
-include("virtue.hrl").
-include("virtue#battle#unit.hrl").

%% tag
-define(PRIV_TAG, battle).
-define(PRIV_SUB_TAG, unit).
%% todo 生成的文件名字, hrl复制的mask
-define(PRIV_ERL_FILE, "data_battle_unit.erl").
-define(PRIV_HRL_FILE, "battle.hrl").
-define(PRIV_COPY_MASK, "data_battle_unit").

%% todo compile_body用的arg
%% 转换, 使用进程字典, 方便ide提示 + 缩写
-define(PRIV_TO_BIN2(Index), virtue_util:to_bin(#data_battle_unit.Index, get(?PD_VIRTUE_ROW))).
-define(PRIV_TO_INT2(Index), virtue_util:to_int(#data_battle_unit.Index, get(?PD_VIRTUE_ROW))).
-define(PRIV_TO_FLOAT2(Index), virtue_util:to_float(#data_battle_unit.Index, get(?PD_VIRTUE_ROW))).
-define(PRIV_TO_TERM2(Index), virtue_util:to_term(#data_battle_unit.Index, get(?PD_VIRTUE_ROW))).
-define(PRIV_TO_JSON2(Index), virtue_util:to_json(#data_battle_unit.Index, get(?PD_VIRTUE_ROW))).
-export([get_index/0]).

-export([update_dets/1, compile/1, clean/1, clean_compile/1]).

%% 字典数据, 用于报错
init_pd(Sheet) ->
    put(?PD_VIRTUE_SHEET, Sheet),
    put(?PD_VIRTUE_FIELD_DEF, record_info(fields, data_battle_unit)).

clean_pd() ->
    erase(?PD_VIRTUE_SHEET),
    erase(?PD_VIRTUE_FIELD_DEF),
    erase(?PD_VIRTUE_ROW).

update_dets(#virtue_sheet{raw_data = RawData} = Sheet) ->
    init_pd(Sheet),

    [RowList1, Index] = virtue:convert_raw_row(RawData, fun init_record/3, [[], #{}]),
    RowList2 = lists:reverse(RowList1),
    Sheet1 = Sheet#virtue_sheet{raw_data = maps:remove(?VIRTUE_KEY_DATA, RawData)},
    Dets = virtue_util:dets_name(?PRIV_TAG),
    dets:insert(Dets, {?VIRTUE_DETS_KEY_SHEET1(?PRIV_SUB_TAG), Sheet1}),
    dets:insert(Dets, {?VIRTUE_DETS_KEY_ROW_LIST1(?PRIV_SUB_TAG), RowList2}),
    %% 保存自定义数据
    dets:insert(Dets, {?VIRTUE_DETS_KEY_INDEX1(?PRIV_SUB_TAG), Index}),

    clean_pd().

init_record(Row, RowList, Index) ->
    TypeList = ?PRIV_TO_JSON2(type),
    ?IF_NOT(is_list(TypeList), ?VIRTUE_PD_ERROR2("type 请配置 [数字1, 数字1]", []),
        lists:foreach(fun(Type) ->
            ?DO_IF_NOT(is_integer(Type), ?VIRTUE_PD_ERROR2("type ~p 不是数字", [Type]))
                      end, TypeList)),
    ValidWord = [radius, rate, attack],
    SkillArgCheck = fun(E) ->
        case is_integer(E) of
            true -> E;
            _ ->
                E1 = plm_convert:atom(E),
                ?IF(lists:member(E1, ValidWord), E1,
                    ?VIRTUE_PD_ERROR2("无效配置 ~ts", [E]))
        end
                    end,
    SkillArg1 = maps:fold(fun(K, V, Acc) ->
        [{SkillArgCheck(K), SkillArgCheck(V)} | Acc]
                          end, [], ?PRIV_TO_JSON2(skill_arg_1)),
    SkillArg2 = maps:fold(fun(K, V, Acc) ->
        [{SkillArgCheck(K), SkillArgCheck(V)} | Acc]
                          end, [], ?PRIV_TO_JSON2(skill_arg_2)),
    %% todo 选择转换类型, 或根据需求转换成正确的数据, 这里可以做格式检查
    Record1 = #data_battle_unit{
        id = ?PRIV_TO_INT2(id),
        name = ?PRIV_TO_BIN2(name),
        type = ?PRIV_TO_JSON2(type),
        radius = ?PRIV_TO_INT2(radius),
        skill_arg_1 = SkillArg1,
        skill_arg_2 = SkillArg2
    },
    RowList1 = [Row#virtue_row{record = Record1} | RowList],
    %% todo 生成自定义数据索引, 用来优化表交叉验证数据的效率
    %% todo 默认生成record第一个字段为key的map结构, 不需要可以删除
    Index1 = Index#{Record1#data_battle_unit.id => true},
    [RowList1, Index1].

%% todo 对应的获取自定义索引, 不需要可以删除
get_index() ->
    Dets = virtue_util:dets_name(?PRIV_TAG),
    virtue_util:ensure_dets(Dets),
    K = ?VIRTUE_DETS_KEY_INDEX1(?PRIV_SUB_TAG),
    [{_, V}] = dets:lookup(Dets, K),
    V.

compile(#virtue_cb_args{hrl_path = HrlPath, erl_path = ErlPath} = Args) ->
    Dets = virtue_util:dets_name(?PRIV_TAG),
    [{_, Sheet}] = dets:lookup(Dets, ?VIRTUE_DETS_KEY_SHEET1(?PRIV_SUB_TAG)),
    [{_, RowList}] = dets:lookup(Dets, ?VIRTUE_DETS_KEY_ROW_LIST1(?PRIV_SUB_TAG)),
    init_pd(Sheet),
    clean_compile(Args),

    %% todo 复制hrl定义, 不需要可以删除
    virtue_util:copy_mask_body(?MODULE, ?PRIV_COPY_MASK, HrlPath ++ "/" ++ ?PRIV_HRL_FILE),

    Dir = ErlPath ++ "/" ++ atom_to_list(?PRIV_TAG),
    File = Dir ++ "/" ++ ?PRIV_ERL_FILE,
    file:make_dir(Dir),
    CommonHead = [
        "-module(", filename:rootname(?PRIV_ERL_FILE), ").\n\n",
        "-include(\"plm_lib.hrl\").\n\n"
        "-include(\"", ?PRIV_HRL_FILE, "\").\n\n"
    ],
    GetCompile = #virtue_compile_key_record{
        row_list = RowList,
        key_pos_list = [#data_battle_unit.id],
        fun_name = "get"
    },
    {GetExport, GetBody} = virtue_compile:compile(GetCompile),
    ok = file:write_file(File, [CommonHead, GetExport, GetBody]),

    dets:delete(?DETS_VIRTUE_CLEAN_MASK, ?MODULE),
    clean_pd().

clean(Args) ->
    Dets = virtue_util:dets_name(?PRIV_TAG),
    %% 先删dets
    virtue_util:ensure_dets(Dets),
    dets:delete(Dets, ?VIRTUE_DETS_KEY_SHEET1(?PRIV_SUB_TAG)),
    dets:delete(Dets, ?VIRTUE_DETS_KEY_ROW_LIST1(?PRIV_SUB_TAG)),
    dets:delete(Dets, ?VIRTUE_DETS_KEY_INDEX1(?PRIV_SUB_TAG)),
    %% 再删生成的内容
    clean_compile(Args).

clean_compile(#virtue_cb_args{erl_path = ErlPath, hrl_path = HrlPath}) ->
    %% todo 复制hrl定义, 不需要可以删除
    virtue_util:delete_mask_body(?PRIV_COPY_MASK, HrlPath ++ "/" ++ ?PRIV_HRL_FILE),
    file:delete(ErlPath ++ "/" ++ atom_to_list(?PRIV_TAG) ++ "/" ++ ?PRIV_ERL_FILE).

