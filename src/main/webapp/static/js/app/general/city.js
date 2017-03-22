$(function() {
    //按钮权限判断
    //showPermissionControl();

    //var router = '/general/city';
    var columns = [{
        field: '',
        title: '',
        checkbox: true
    }, {
        field: 'name',
        title: '名称',
        search: true
    }, {
        field: 'location',
        title: '优先级',
        type: "select",
        formatter: Dict.getNameForList('city_location'),
        search: true,
        key: 'city_location'
    }, {
        field: 'userId',
        title: '负责人',
        type: 'select',
        //url: $('#basePath').val() + '/user/list',
        pageCode: '',
        keyName: 'userId',
        valueName: 'loginName'
    }, {
        field: 'isDefault',
        title: '默认',
        type: "select",
        formatter: Dict.getNameForList('true_false'),
        search: true,
        key: 'true_false'
    }, {
        field: 'remark',
        title: '备注'
    }];
    buildList({
        router: 'city',
        columns: columns,
        pageCode: "",
        deleteCode: ''

    });

    $('#defaultBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections')
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }

        confirm("msg？").then(function() {
            reqApi({
                code: '',
                json: { "code": selRecords[0].code }
            }).then(function() {
                toastr.info("操作成功");
                $('#tableList').bootstrapTable('refresh', { url: $('#tableList').bootstrapTable('getOptions').url });
            });
        });
    });
});