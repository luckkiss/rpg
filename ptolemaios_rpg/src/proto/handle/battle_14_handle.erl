%% @private auto create
-module(battle_14_handle).

-include("plm_lib.hrl").
-include("game.hrl").
-include("player.hrl").
-include("battle_14_pb.hrl").
-include("battle.hrl").

-export([handle/2]).

-spec handle(proto:msg(), #player_state{}) -> #player_state{}.
handle(Msg, State) ->
    ?LOG_WARNING("unknow msg ~w", [Msg]),
    State.

