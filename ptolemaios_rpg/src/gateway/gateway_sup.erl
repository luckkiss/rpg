%% @private
%%%-------------------------------------------------------------------
%%% @author dominic
%%% @copyright (C) 2020, <COMPANY>
%%% @doc 网关sup
%%% @end
%%%-------------------------------------------------------------------
-module(gateway_sup).

-behaviour(supervisor).

-export([start_link/0, init/1]).

start_link() ->
    supervisor:start_link({local, ?MODULE}, ?MODULE, []).

init([]) ->
    {ok, Config} = application:get_env(ptolemaios, gateway),
    Port = proplists:get_value(port, Config),
    {_, Path} = lists:keyfind(path, 1, Config),
    Dispatch = cowboy_router:compile([
        {'_', [{Path, gateway_svr, []}]}
    ]),
    {ok, _} = cowboy:start_clear(game,
        [{port, Port}],
        #{env => #{dispatch => Dispatch}}
    ),
    {ok, {#{strategy => one_for_one,
        intensity => 5,
        period => 30}, []}}.
