virtue
=====

    xlsx => 模板文件 => 修改模板文件 => 目标文件(.erl, .hrl)
    通过virtue_util:xxx_mask_body可以覆盖指定内容(为hrl设计)到目标文件
    
Compare
-----
    
    python一键生成
        不需要任何代码, 填上表头即可生成
        修改字段, 修改表头
        配置扩展性不足, 只能生成某些固定格式
        生成的数据无法在生成时做复杂检查, 多表数据交叉检查, 与业务高度耦合的检查
        不能在生成时优化代码
        python实现, 如果需要修改, 需要再去学习python
    virtue
        每个sheet都需要写erl代码, 简单格式基本不需要更改模板
        修改字段, 修改文件代码
        自定义生成的文件和内容
        可以做复杂检查
        可以在生成做优化
        erlang实现

Use
-----
    大致流程:
        创建包含 "KEY", "DATA", "COMMON"(可选)关键字的xlsx, 参考xlsx/T测试#test.xlsx
        生成模板文件
        根据需求修改模板文件'todo'注释部分, 主要包含
            转换验证数据结构/类型
            生成内部索引
            选择生成erl模板, 或按需求自己实现
        生成erl文件
    
    生成erl文本的模板在virtue_compile中, 使用record传参数
        支持key-record(一对一)
        key-keys(一对多)
        key-records(一对多)

    生成所有表格
    rebar3 escriptize&"_build/default/bin/virtue" compile
    只生成改变的(erl文件对应)表格
    rebar3 escriptize&"_build/default/bin/virtue" compile_change
    清理所有生成内容
    rebar3 escriptize&"_build/default/bin/virtue" clean
    生成模板文件
    rebar3 escriptize&"_build/default/bin/virtue" template xlsx/T测试#test.xlsx goods[ ./tmp ./tmp]
    生成模板hrl
    rebar3 escriptize&"_build/default/bin/virtue" template_hrl xlsx/T测试_test.xlsx goods[ ./tmp]

Extend
-----
    自动检查workbook/sheet是否被删除, 若被删除执行一次clean