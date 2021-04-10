-ifndef(PLAYER_HRL).
-define(PLAYER_HRL, true).

%% message
-define(MSG13_GATEWAY_PROTO1(Msg), {gateway_proto, Msg}).
-define(MSG13_GATEWAY_DISCONNECT, gateway_disconnect).
-define(MSG13_STOP, stop).

%% marco
-define(M13_LL_ACCOUNT1(Account), {account, Account}).

%% sql
-define(M13_SQL_SELECT_ID(Account), io_lib:format("select id from player where account='~s'", [Account])).
-define(M13_SQL_CREATE3(Account, Name, Career), io_lib:format("insert into player set account='~s', name='~s', career='~p'", [Account, Name, Career])).

-record(player, {
    id :: integer(),
    account :: binary(),
    name :: binary(),
    career :: integer()
}).

-record(player_state, {
    account :: binary(),
    id :: integer(),
    gateway :: pid()
}).

-endif.