%%%-------------------------------------------------------------------
%%% @author dominic
%%% @copyright (C) 2020, <COMPANY>
%%% @doc behaviour
%%%
%%% @end
%%%-------------------------------------------------------------------
-module(virtue_callback).
-author("dominic").

-include("virtue.hrl").

-callback update_dets(#virtue_sheet{}) -> any().
-callback compile(#virtue_cb_args{}) -> any().
-callback clean(#virtue_cb_args{}) -> any().
