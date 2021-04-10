-module(proto_mapping).

-include("plm_lib.hrl").

-export([load/0, proto/1, encode/1, decode/2, route/2]).

-spec load() -> ok.
load() ->
    DefList =
        player_13_pb:get_msg_defs() ++
        gateway_12_pb:get_msg_defs() ++
        game_11_pb:get_msg_defs() ++
        battle_14_pb:get_msg_defs(),
    enif_protobuf:load_cache(DefList),
    ok.

-spec proto(tuple()) -> error|integer().
proto(Msg) when element(1, Msg) == player_c_info -> 1301;
proto(Msg) when element(1, Msg) == player_s_info -> 1302;
proto(Msg) when element(1, Msg) == gateway_c_login -> 1201;
proto(Msg) when element(1, Msg) == gateway_s_login -> 1202;
proto(Msg) when element(1, Msg) == gateway_c_select_role -> 1203;
proto(Msg) when element(1, Msg) == gateway_s_select_role -> 1204;
proto(Msg) when element(1, Msg) == gateway_c_create_role -> 1205;
proto(Msg) when element(1, Msg) == gateway_s_create_role -> 1206;
proto(Msg) when element(1, Msg) == gateway_c_heart -> 1207;
proto(Msg) when element(1, Msg) == gateway_s_heart -> 1208;
proto(Msg) when element(1, Msg) == gateway_c_warp -> 1209;
proto(Msg) when element(1, Msg) == gateway_s_warp -> 1210;
proto(Msg) when element(1, Msg) == gateway_c_exit_role -> 1211;
proto(Msg) when element(1, Msg) == gateway_s_exit_role -> 1212;
proto(Msg) when element(1, Msg) == gateway_c_exit_account -> 1213;
proto(Msg) when element(1, Msg) == gateway_s_exit_account -> 1214;
proto(Msg) when element(1, Msg) == game_s_error -> 1110;
proto(Msg) when element(1, Msg) == battle_c_all_unit -> 1400;
proto(Msg) when element(1, Msg) == battle_s_all_unit -> 1401;
proto(Msg) when element(1, Msg) == battle_s_update_unit -> 1403;
proto(Msg) when element(1, Msg) == battle_s_del_unit -> 1405;
proto(Msg) when element(1, Msg) == battle_c_skill -> 1408;
proto(Msg) when element(1, Msg) == battle_s_skill -> 1409;
proto(Msg) when element(1, Msg) == battle_s_hit -> 1410;
proto(Msg) when element(1, Msg) == battle_c_move_start -> 1411;
proto(Msg) when element(1, Msg) == battle_s_move_start -> 1412;
proto(Msg) when element(1, Msg) == battle_c_move_end -> 1413;
proto(Msg) when element(1, Msg) == battle_s_move_end -> 1414;
proto(_) -> error.

-spec encode(tuple()) -> {error, atom()} | binary().
encode(Msg) ->
    enif_protobuf:encode(Msg).

-spec decode(integer(), tuple()) -> {error, term()} | tuple().
decode(1301, Bin) ->
  enif_protobuf:decode(Bin, player_c_info);
decode(1302, Bin) ->
  enif_protobuf:decode(Bin, player_s_info);
decode(1201, Bin) ->
  enif_protobuf:decode(Bin, gateway_c_login);
decode(1202, Bin) ->
  enif_protobuf:decode(Bin, gateway_s_login);
decode(1203, Bin) ->
  enif_protobuf:decode(Bin, gateway_c_select_role);
decode(1204, Bin) ->
  enif_protobuf:decode(Bin, gateway_s_select_role);
decode(1205, Bin) ->
  enif_protobuf:decode(Bin, gateway_c_create_role);
decode(1206, Bin) ->
  enif_protobuf:decode(Bin, gateway_s_create_role);
decode(1207, Bin) ->
  enif_protobuf:decode(Bin, gateway_c_heart);
decode(1208, Bin) ->
  enif_protobuf:decode(Bin, gateway_s_heart);
decode(1209, Bin) ->
  enif_protobuf:decode(Bin, gateway_c_warp);
decode(1210, Bin) ->
  enif_protobuf:decode(Bin, gateway_s_warp);
decode(1211, Bin) ->
  enif_protobuf:decode(Bin, gateway_c_exit_role);
decode(1212, Bin) ->
  enif_protobuf:decode(Bin, gateway_s_exit_role);
decode(1213, Bin) ->
  enif_protobuf:decode(Bin, gateway_c_exit_account);
decode(1214, Bin) ->
  enif_protobuf:decode(Bin, gateway_s_exit_account);
decode(1110, Bin) ->
  enif_protobuf:decode(Bin, game_s_error);
decode(1400, Bin) ->
  enif_protobuf:decode(Bin, battle_c_all_unit);
decode(1401, Bin) ->
  enif_protobuf:decode(Bin, battle_s_all_unit);
decode(1403, Bin) ->
  enif_protobuf:decode(Bin, battle_s_update_unit);
decode(1405, Bin) ->
  enif_protobuf:decode(Bin, battle_s_del_unit);
decode(1408, Bin) ->
  enif_protobuf:decode(Bin, battle_c_skill);
decode(1409, Bin) ->
  enif_protobuf:decode(Bin, battle_s_skill);
decode(1410, Bin) ->
  enif_protobuf:decode(Bin, battle_s_hit);
decode(1411, Bin) ->
  enif_protobuf:decode(Bin, battle_c_move_start);
decode(1412, Bin) ->
  enif_protobuf:decode(Bin, battle_s_move_start);
decode(1413, Bin) ->
  enif_protobuf:decode(Bin, battle_c_move_end);
decode(1414, Bin) ->
  enif_protobuf:decode(Bin, battle_s_move_end);
decode(_Proto, _Bin) ->
    {error, noexist}.

-spec route(tuple(), term()) -> term().
route(Msg, Acc) when element(1, Msg) == player_c_info ->
  player_13_handle:handle(Msg, Acc);
route(Msg, Acc) when element(1, Msg) == player_s_info ->
  player_13_handle:handle(Msg, Acc);
route(Msg, Acc) when element(1, Msg) == gateway_c_login ->
  gateway_12_handle:handle(Msg, Acc);
route(Msg, Acc) when element(1, Msg) == gateway_s_login ->
  gateway_12_handle:handle(Msg, Acc);
route(Msg, Acc) when element(1, Msg) == gateway_c_select_role ->
  gateway_12_handle:handle(Msg, Acc);
route(Msg, Acc) when element(1, Msg) == gateway_s_select_role ->
  gateway_12_handle:handle(Msg, Acc);
route(Msg, Acc) when element(1, Msg) == gateway_c_create_role ->
  gateway_12_handle:handle(Msg, Acc);
route(Msg, Acc) when element(1, Msg) == gateway_s_create_role ->
  gateway_12_handle:handle(Msg, Acc);
route(Msg, Acc) when element(1, Msg) == gateway_c_heart ->
  gateway_12_handle:handle(Msg, Acc);
route(Msg, Acc) when element(1, Msg) == gateway_s_heart ->
  gateway_12_handle:handle(Msg, Acc);
route(Msg, Acc) when element(1, Msg) == gateway_c_warp ->
  gateway_12_handle:handle(Msg, Acc);
route(Msg, Acc) when element(1, Msg) == gateway_s_warp ->
  gateway_12_handle:handle(Msg, Acc);
route(Msg, Acc) when element(1, Msg) == gateway_c_exit_role ->
  gateway_12_handle:handle(Msg, Acc);
route(Msg, Acc) when element(1, Msg) == gateway_s_exit_role ->
  gateway_12_handle:handle(Msg, Acc);
route(Msg, Acc) when element(1, Msg) == gateway_c_exit_account ->
  gateway_12_handle:handle(Msg, Acc);
route(Msg, Acc) when element(1, Msg) == gateway_s_exit_account ->
  gateway_12_handle:handle(Msg, Acc);
route(Msg, Acc) when element(1, Msg) == game_s_error ->
  game_11_handle:handle(Msg, Acc);
route(Msg, Acc) when element(1, Msg) == battle_c_all_unit ->
  battle_14_handle:handle(Msg, Acc);
route(Msg, Acc) when element(1, Msg) == battle_s_all_unit ->
  battle_14_handle:handle(Msg, Acc);
route(Msg, Acc) when element(1, Msg) == battle_s_update_unit ->
  battle_14_handle:handle(Msg, Acc);
route(Msg, Acc) when element(1, Msg) == battle_s_del_unit ->
  battle_14_handle:handle(Msg, Acc);
route(Msg, Acc) when element(1, Msg) == battle_c_skill ->
  battle_14_handle:handle(Msg, Acc);
route(Msg, Acc) when element(1, Msg) == battle_s_skill ->
  battle_14_handle:handle(Msg, Acc);
route(Msg, Acc) when element(1, Msg) == battle_s_hit ->
  battle_14_handle:handle(Msg, Acc);
route(Msg, Acc) when element(1, Msg) == battle_c_move_start ->
  battle_14_handle:handle(Msg, Acc);
route(Msg, Acc) when element(1, Msg) == battle_s_move_start ->
  battle_14_handle:handle(Msg, Acc);
route(Msg, Acc) when element(1, Msg) == battle_c_move_end ->
  battle_14_handle:handle(Msg, Acc);
route(Msg, Acc) when element(1, Msg) == battle_s_move_end ->
  battle_14_handle:handle(Msg, Acc);
route(Msg, Acc) ->
    ?LOG_WARNING("unknow msg ~w", [Msg]),
    Acc.

