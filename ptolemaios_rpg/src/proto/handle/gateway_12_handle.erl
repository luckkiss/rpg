%% @private auto create
-module(gateway_12_handle).

-include("plm_lib.hrl").
-include("game.hrl").
-include("gateway_12_pb.hrl").
-include("gateway.hrl").
-include("player.hrl").

-export([handle/2]).

-spec handle(proto:msg(), #player_state{}) -> #player_state{}.
%% 账号登录
handle(#gateway_c_login{account = MsgAccount}, #player_state{account = Account, gateway = Gateway} = Player) ->
    %% 是否已登录
    ?M11_IF2(Account =/= undefined, ?M11_EC_HAD_LOGIN),
    %% 是否被锁定
    ?M11_NOT_MATCH3(plm_ll:lock(?M13_LL_ACCOUNT1(MsgAccount)), lock, ?M11_EC_OTHER_HAD_LOGIN),
    %% 锁住该账号, 防止并发
    Player1 = Player#player_state{account = MsgAccount},
    Msg = #gateway_s_login{account = MsgAccount, role_list = pkg_role_list(Player1)},
    gateway_svr:send_proto(Gateway, Msg),
    Player1;

handle(#gateway_c_create_role{name = Name, career = Career}, #player_state{account = Account, gateway = Gateway} = Player) ->
    %% 是否已登录
    ?M11_IF2(Account == undefined, ?M11_EC_NOT_LOGIN),
    %% 数据库是否成功
    ?M11_NOT_MATCH3(plm_sql:query(?M13_SQL_CREATE3(Account, Name, Career), false),
        ok, ?M11_EC_HAD_REGISTER),
    gateway_svr:send_proto(Gateway, #gateway_s_create_role{role_list = pkg_role_list(Player)}),
    Player;

handle(#gateway_c_select_role{id = MsgPlayerId},
    #player_state{account = Account, id = PlayerId, gateway = Gateway} = Player) ->
    %% 是否已登录
    ?M11_IF2(Account == undefined, ?M11_EC_NOT_LOGIN),
    ?M11_IF2(PlayerId =/= undefined, ?M11_EC_HAD_LOGIN),
    plm_sql:ensure_load_ets(player, [MsgPlayerId]),
    %% 角色是否存在
    ?M11_NOT_MATCH3(plm_sql:lookup_ets(player, [MsgPlayerId]),
        #player{}, ?M11_EC_NO_ROLE),
    %% 先锁定这个id
    gateway_svr:send_proto(Gateway, #gateway_s_select_role{id = MsgPlayerId}),
    Player#player_state{id = MsgPlayerId};

%% 心跳包
handle(#gateway_c_heart{}, #player_state{gateway = Gateway} = Player) ->
    gateway_svr:send_proto(Gateway, #gateway_s_heart{}),
    Player;

handle(Msg, Acc) ->
    ?LOG_WARNING("unknow msg ~w", [Msg]),
    {[], Acc}.

pkg_role_list(#player_state{account = Account}) ->
    %% 直接操作数据库
    case plm_sql:query(?M13_SQL_SELECT_ID(Account)) of
        {ok, _, Rows} ->
            lists:map(fun([PlayerId]) ->
                plm_sql:ensure_load_ets(player, [PlayerId]),
                #player{name = Name, career = Career} = plm_sql:lookup_ets(player, [PlayerId]),
                #gateway_p_role_info{id = PlayerId, name = Name, career = Career}
                      end, Rows);
        _ ->% 失败了
            []
    end.