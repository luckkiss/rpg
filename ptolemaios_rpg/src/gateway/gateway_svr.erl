%%%-------------------------------------------------------------------
%%% @author dominic
%%% @copyright (C) 2020, <COMPANY>
%%% @doc
%%% 路由进程
%%% @end
%%%-------------------------------------------------------------------
-module(gateway_svr).
-author("dominic").

-behaviour(cowboy_websocket).

-include("plm_lib.hrl").
-include("game.hrl").
-include("game_11_pb.hrl").
-include("gateway_12_pb.hrl").
-include("gateway.hrl").
-include("player.hrl").

%% API
-export([init/2, terminate/3, websocket_init/1, websocket_handle/2, websocket_info/2]).

-export([start_link/3, send_proto/2]).

%% @private
start_link(Ref, Transport, Opts) ->
    plm_svr:start_link(?MODULE, [Ref, Transport, Opts], []).

%% @doc 发送一条协议到网关进程
-spec send_proto(pid(), gateway:proto()) -> any().
send_proto(Pid, Msg) ->
    plm_svr:send(Pid, ?MSG12_SEND_MSG1(Msg)).

%% @private
init(Req, State) ->
    {cowboy_websocket, Req, State, #{idle_timeout => infinity}}.

%% @private
websocket_init(_State) ->
    {ok, PlayerPid} = player_sup:start_child([self()]),
    erlang:monitor(process, PlayerPid),
    {ok, #gateway_state{player_pid = PlayerPid}}.

%% @private
websocket_info(?MSG12_SEND_MSG1(Msg), #gateway_state{} = State) ->
    Bin = gateway:pack(Msg),
    {reply, {binary, Bin}, State};
websocket_info({'DOWN', _Ref, process, Pid, _Reason}, #gateway_state{player_pid = Pid} = State) ->
    State1 = close(State),
    {stop, State1};
websocket_info(Request, State) ->
    ?LOG_ERROR("~w", [Request]),
    {ok, State}.

%% @private
websocket_handle({binary, Bin}, State) ->
    decode_bin(State#gateway_state{bin = Bin});
websocket_handle(Info, State) ->
    ?LOG_ERROR("~w", [Info]),
    {ok, State}.

terminate(_Reason, _Req, #gateway_state{player_pid = PlayerPid}) ->
    plm_svr:cast_imm(PlayerPid, ?MSG13_GATEWAY_DISCONNECT),
    ok.

decode_bin(#gateway_state{bin = WarpProtoBin, player_pid = PlayerPid} = State) ->
    try
        #gateway_c_warp{proto = Proto, data = ProtoBin} = proto_mapping:decode(?M12_PROTO_C_WARP, WarpProtoBin),
        case proto_mapping:decode(Proto, ProtoBin) of
            {error, Error} ->
                ?LOG_ERROR("~w", [Error]),
                State2 = close(State),
                {stop, State2};
            Msg ->% 玩家进程的协议
                plm_svr:cast_imm(PlayerPid, ?MSG13_GATEWAY_PROTO1(Msg)),
                {ok, State}
        end
    catch
        C:E:S ->
            ?LOG_ERROR("~w, ~w~n~w", [C, E, S]),
            ErrorState = close(State),
            {stop, ErrorState}
    end.


close(#gateway_state{} = State) ->
    State.