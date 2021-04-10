%%%-------------------------------------------------------------------
%%% @author dominic
%%% @copyright (C) 2020, <COMPANY>
%%% @doc 玩家进程
%%%
%%% @end
%%%-------------------------------------------------------------------
-module(player_svr).
-author("dominic").

-behaviour(plm_svr).

-include("plm_lib.hrl").
-include("game.hrl").
-include("game_11_pb.hrl").
-include("player.hrl").
-include("gateway.hrl").

%% API
-export([init/1, handle_call/3, handle_cast/2, handle_info/2]).

-export([start_link/1, get_pid/1, stop/1]).

start_link([Gateway]) ->
    plm_svr:start_link(?MODULE, [Gateway], []).

%% @doc 根据玩家id获取pid
-spec get_pid(non_neg_integer()) -> undefined|pid().
get_pid(Id) ->
    whereis(name(Id)).

name(Id) ->
    list_to_atom("player_" ++ integer_to_list(Id)).

stop(Pid) ->
    plm_svr:cast(Pid, ?MSG13_STOP).

init([Gateway]) ->
    {ok, #player_state{gateway = Gateway}}.

handle_call(Request, From, State) ->
    ?LOG_ERROR("~w ~w", [Request, From]),
    {reply, error, State}.

handle_cast(?MSG13_GATEWAY_PROTO1(Msg), #player_state{id = Id, gateway = Gateway} = State) ->
    Rollback = plm_svr:hold(State),
    try
        ?M11_IF2(Id == undefined andalso ?M12_PROTO_HEAD1(proto_mapping:proto(Msg)) =/= ?M12, ?M11_EC_NOT_LOGIN),
        case proto_mapping:route(Msg, State) of
            #player_state{} = State1 ->
                {noreply, State1};
            UnKnow ->%% ????
                ?LOG_ERROR("unknown return ~w", [UnKnow]),
                Proto = proto_mapping:proto(Msg),
                gateway_svr:send_proto(Gateway, #game_s_error{code = ?M11_EC_ERROR, proto = Proto}),
                State1 = plm_svr:rollback(Rollback),
                {noreply, State1}
        end
    catch
        throw:?M11_EC1(ErrorCode) ->
            StateThrow = plm_svr:rollback(Rollback),
            ThrowProto = proto_mapping:proto(Msg),
            gateway_svr:send_proto(Gateway, #game_s_error{code = ErrorCode, proto = ThrowProto}),
            {noreply, StateThrow};
        C:E:S ->
            erlang:raise(C, E, S)
    end;
handle_cast(?MSG13_GATEWAY_DISCONNECT, State) ->
    ?LOG_NOTICE("gateway disconnect"),
    stop(self()),
    {noreply, State};
handle_cast(?MSG13_STOP, #player_state{account = Account} = State) ->
    ?DO_IF(Account =/= undefined, plm_ll:release(?M13_LL_ACCOUNT1(Account))),
    {stop, normal, State};
handle_cast(Request, State) ->
    ?LOG_ERROR("~w", [Request]),
    {noreply, State}.

handle_info(Info, State) ->
    ?LOG_ERROR("~w", [Info]),
    {noreply, State}.

