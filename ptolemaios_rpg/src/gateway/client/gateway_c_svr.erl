%%%-------------------------------------------------------------------
%%% @author dominic
%%% @copyright (C) 2020, <COMPANY>
%%% @doc 客户端进程
%%%
%%% 链接到服务器, 模拟收发协议
%%%
%%% 使用gateway_c_sup开启!!
%%% @end
%%%-------------------------------------------------------------------
-module(gateway_c_svr).
-author("dominic").

-behaviour(plm_svr).

-include("plm_lib.hrl").
-include("gateway.hrl").
-include("gateway_12_pb.hrl").

%% API
-export([init/1, handle_call/3, handle_cast/2, handle_info/2]).

-export([start_link/4, send_proto/2]).

-callback init(Args :: term()) ->
    {ok, State :: term()} | {ok, State :: term(), timeout() | hibernate | {continue, term()}} |
    {stop, Reason :: term()} | ignore.
%% 处理服务器信息
-callback handle_msg(Proto :: gateway:proto(), State :: term()) ->
    {noreply, NewState :: term()} |
    {noreply, NewState :: term(), timeout() | hibernate | {continue, term()}} |
    {stop, Reason :: term(), NewState :: term()}.
-callback handle_call(Request :: term(), From :: {pid(), Tag :: term()},
    State :: term()) ->
    {reply, Reply :: term(), NewState :: term()} |
    {reply, Reply :: term(), NewState :: term(), timeout() | hibernate | {continue, term()}} |
    {noreply, NewState :: term()} |
    {noreply, NewState :: term(), timeout() | hibernate | {continue, term()}} |
    {stop, Reason :: term(), Reply :: term(), NewState :: term()} |
    {stop, Reason :: term(), NewState :: term()}.
-callback handle_cast(Request :: term(), State :: term()) ->
    {noreply, NewState :: term()} |
    {noreply, NewState :: term(), timeout() | hibernate | {continue, term()}} |
    {stop, Reason :: term(), NewState :: term()}.
-callback handle_info(Info :: timeout | term(), State :: term()) ->
    {noreply, NewState :: term()} |
    {noreply, NewState :: term(), timeout() | hibernate | {continue, term()}} |
    {stop, Reason :: term(), NewState :: term()}.

%% @private
start_link(Ip, Port, Module, Args) ->
    plm_svr:start_link(?MODULE, [Ip, Port, Module, Args], []).

%% @doc 发送一条协议到服务器
-spec send_proto(pid(), gateway:proto()) -> any().
send_proto(Pid, Msg) ->
    plm_svr:cast_imm(Pid, ?MSG12_SEND_MSG1(Msg)).

%% @private
init([Ip, Port, Module, Args]) ->
    {ok, Socket} = gun:open(Ip, Port),
    {ok, http} = gun:await_up(Socket),
    {ok, Config} = application:get_env(ptolemaios, gateway),
    {_, Path} = lists:keyfind(path, 1, Config),
    StreamRef = gun:ws_upgrade(Socket, Path, []),
    receive
        {gun_upgrade, Socket, StreamRef, _, _Headers} ->
            _MRef = monitor(process, Socket),
            plm_svr:put(?PD12_C_SOCKET, Socket),
            plm_svr:put(?PD12_C_REF, StreamRef),
            plm_svr:put(?PD12_C_MODULE, Module),
            ?DYM12_C_CB3(Module, init, [Args]);
        {gun_response, Socket, _, _, Status, Headers} ->
            {stop, {ws_upgrade_failed, Status, Headers}};
        {gun_error, Socket, StreamRef, Reason} ->
            {stop, {ws_upgrade_failed, Reason}}
    %% More clauses here as needed.
    after 1000 ->
        {stop, timeout}
    end.

%% @private
handle_call(Request, From, State) ->
    Module = plm_svr:get(?PD12_C_MODULE),
    ?DYM12_C_CB3(Module, handle_call, [Request, From, State]).

%% @private
handle_cast(?MSG12_SEND_MSG1(Msg), State) ->
    Bin = gateway:c_pack(Msg),
    gun:ws_send(plm_svr:get(?PD12_C_SOCKET), {binary, Bin}),
    ?LOG_NOTICE("send ~p ~p", [proto_mapping:proto(Msg), Msg]),
    {noreply, State};
handle_cast(Request, State) ->
    Module = plm_svr:get(?PD12_C_MODULE),
    ?DYM12_C_CB3(Module, handle_cast, [Request, State]).


%% @private
handle_info({gun_ws, _ConnPid, _StreamRef, {binary, WarpBin}}, State) ->
    #gateway_s_warp{proto = Proto, data = Bin} = proto_mapping:decode(?M12_PROTO_S_WARP, WarpBin),
    ?LOG_NOTICE("receive ~p ~p", [Proto, proto_mapping:decode(Proto, Bin)]),
    {noreply, State};
handle_info({'DOWN', _MRef, process, Socket, Reason} = Info, State) ->
    case Socket == plm_svr:get(?PD12_C_SOCKET) of
        true ->
            ?DO_IF(Reason =/= normal, ?LOG_ERROR("~p", [Reason])),
            {stop, normal, State};
        _ ->
            Module = plm_svr:get(?PD12_C_MODULE),
            ?DYM12_C_CB3(Module, handle_info, [Info, State])
    end;
handle_info({gun_down, _, ws, closed, _, _}, State) ->
    {stop, normal, State};
handle_info(Info, State) ->
    Module = plm_svr:get(?PD12_C_MODULE),
    ?DYM12_C_CB3(Module, handle_info, [Info, State]).