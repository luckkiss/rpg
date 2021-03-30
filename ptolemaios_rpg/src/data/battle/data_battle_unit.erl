-module(data_battle_unit).

-include("plm_lib.hrl").

-include("battle.hrl").

-export([get/1, get/2, get/3]).

get(Args1) -> get(Args1, undefined, true).

get(Args1, Default) -> get(Args1, Default, true).

get(1, _, _) ->
    #data_battle_unit{
        id = 1, name = <<"\"普通近战怪物\""/utf8>>, type = [1,102], 
        radius = 1000, skill_arg_1 = [{rate,2},{radius,1000}], skill_arg_2 = [{attack,100}]
    };
get(2, _, _) ->
    #data_battle_unit{
        id = 2, name = <<"\"普通远程怪物\""/utf8>>, type = [1,103], 
        radius = 5000, skill_arg_1 = [{rate,2},{radius,5000}], skill_arg_2 = [{attack,100}]
    };
get(Args1, Default, IsWarning) ->
    ?DO_IF(IsWarning, ?LOG_WARNING("~w:get(~p) not exist!!", [?MODULE, Args1])),
    Default.

