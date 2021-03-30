-ifndef(VIRTUE_HRL).
-define(VIRTUE_HRL, true).
-include("plm_lib.hrl").

-define(VIRTUE, virtue).

-define(PT_VIRTUE_LOG_FILE, virtue_log_file).
-define(PT_VIRTUE_LOG_LEVEL, virtue_log_level).
-define(PT_VIRTUE_XLSX_DIR, virtue_xlsx_dir).
-define(PT_VIRTUE_ERL_DIR, virtue_erl_dir).
-define(PT_VIRTUE_HRL_DIR, virtue_hrl_dir).
-define(PT_VIRTUE_DETS_DIR, virtue_dets_dir).
-define(PT_VIRTUE_SPLIT, virtue_split).
-define(PT_VIRTUE_RECORD_PREFIX, virtue_record_prefix).
-define(PT_VIRTUE_RECORD_LINE_SIZE, virtue_record_line_size).

-define(PT_VIRTUE_ZIP_FD1(Filename), {virtue_zip_fd, Filename}).

%% 模块依赖
-define(DETS_VIRTUE_MODULE_DEPEND, virtue_module_depend).% #virtue_module_depend{}
%% 清理mask
%%  1, 因为dets生成出错时会清空数据, 无法根据dets数据判断
%%  2, 文件生成内容是不固定的, 无法根据生成内容是否存在判断
-define(DETS_VIRTUE_CLEAN_MASK, virtue_clean_mask).% {Module}

%% dets key
-define(VIRTUE_DETS_KEY_UPDATE, update).% xlsx文件更新时间
-define(VIRTUE_DETS_KEY_SHEET1(Tag), {sheet, Tag}).% #virtue_sheet{}
-define(VIRTUE_DETS_KEY_ROW_LIST1(Tag), {row_list, Tag}).% #{?VIRTUE_KEY_XXX => [#virtue_row{}]}
-define(VIRTUE_DETS_KEY_INDEX1(Tag), {index, Tag}).% dets索引

-define(VIRTUE_CB_PATH, "src/callback").% callback路径
-define(VIRTUE_INCLUDE_PATH, "include").% include路径

%% mask字符串
-define(VIRTUE_MASK_START1(Tag), "%% virtue mask start " ++ Tag).
-define(VIRTUE_MASK_END1(Tag), "%% virtue mask end " ++ Tag).

%% sheet第一行key
-define(VIRTUE_KEY_SEARCH_LIMIT, 100).% 工作表搜索非VIRTUE_KEY_DATA最大行数
-define(VIRTUE_KEY_COMMENT, "COMMENT").% 工作表标识哪一行是注释
-define(VIRTUE_KEY_KEY, "KEY").% 工作表标识哪一行是key
-define(VIRTUE_KEY_DATA, "DATA").% 工作表标识哪一行是data
-define(VIRTUE_KEY_LIST, [?VIRTUE_KEY_COMMENT, ?VIRTUE_KEY_KEY, ?VIRTUE_KEY_DATA]).

%% 进程字典
%% VIRTUE_ERROR2用的
-define(PD_VIRTUE_SHEET, virtue_sheet).
-define(PD_VIRTUE_ROW, virtue_row).
-define(PD_VIRTUE_FIELD_DEF, virtue_record_def).
%% 缓存数据
-define(PD_VIRTUE_SHARE_STRING1(Filename), {virtue_share_string, Filename}).

%% 错误处理
-define(VIRTUE_ERROR, virtue_error).
-define(VIRTUE_ERROR2(Format, Args), ?LOG_ERROR(Format, Args), exit(?VIRTUE_ERROR)).
%% 打印错误信息, 精确到哪一行, 需要进程字典支持
-define(VIRTUE_PD_ERROR2(Format, Args),
    ?LOG_ERROR("配错了!!!!!, 工作簿: ~ts, 数据表: ~ts, 第 ~p 行~n" ++ Format ++ "~n~9999999p",
        [filename:basename((get(?PD_VIRTUE_SHEET))#virtue_sheet.filename), (get(?PD_VIRTUE_SHEET))#virtue_sheet.name,
            (get(?PD_VIRTUE_ROW))#virtue_row.line] ++ Args ++ [(get(?PD_VIRTUE_ROW))#virtue_row.record]),
    exit(?VIRTUE_ERROR)).% 打印错误

-record(virtue_module_depend, {
    name,% module or tag
    update_time,
    be_depend_list,
    depend_list
}).

-record(virtue_raw_row, {
    line :: integer(),
    data :: [{Index :: atom(), V :: string()}]
}).

-record(virtue_row, {
    line :: integer(),
    record :: Record :: tuple()
}).

-record(virtue_sheet, {
    %% excel数据
    tag :: atom(),
    sub_tag :: atom(),
    name :: string(),% sheet名
    filename :: string(),% xlsx文件名
    module :: atom(),% 对应的回调模块
    id :: string(),% r:id
    taget :: string(),% 对应sheet的xml
    md5 :: binary(),
    %% #{VIRTUE_KEY_XXX => [#virtue_raw_row{}]}
    %% 存到dets时, VIRTUE_KEY_DATA单独拿出来存
    %% 读取时可以少拉点数据
    raw_data :: map()
}).

-record(virtue_workbook, {
    tag :: atom(),% 工作簿对应的名字
    file_name :: string(),% 全名
    sheet_list :: [#virtue_sheet{}]
}).

-record(virtue_cb_args, {
    erl_path,
    hrl_path
}).

-record(virtue_compile_key_record, {
    row_list = exit({required, key_pos_list}) :: [#virtue_row{}],% xlsx数据
    key_pos_list = exit({required, key_pos_list}),% record的下标列表
    fun_name = exit({required, fun_name}),% 生成函数名字
    check,% 检查函数, erlang:apply(F, [Row|Arg]) -> Arg1
    check_args,% 检查函数参数
    line_size = 3% 每行多少个字段
}).

-record(virtue_compile_key_keys, {
    row_list = exit({required, key_pos_list}) :: [#virtue_row{}],% xlsx数据
    key_pos_list = exit({required, key_pos_list}),% record的下标列表
    fun_name = exit({required, fun_name}),% 生成函数名字
    keys_pos_list = exit({required, key_pos_list}),% 生成的keys, record的下标列表
    check,% 检查函数, erlang:apply(F, [Row|Arg]) -> Arg1
    check_args,% 检查函数参数
    line_size = 3,% 每行多少个元素
    is_unique = false% 生成的列表(keys_pos_list), 是否去重
}).

-record(virtue_compile_key_records, {
    row_list = exit({required, key_pos_list}) :: [#virtue_row{}],% xlsx数据
    key_pos_list = exit({required, key_pos_list}),% record的下标列表
    fun_name = exit({required, fun_name}),% 生成函数名字
    check,% 检查函数, erlang:apply(F, [Row|Arg]) -> Arg1
    check_args,% 检查函数参数
    line_size = 3% record, 每行多少个字段
}).

-endif.