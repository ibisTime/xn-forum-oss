$(function() {

    var isGlobal = !getQueryString('b');

    var columns = [{
        field: '',
        title: '',
        checkbox: true
    }, {
        field: '',
        title: '用户名',
        search: true
    }, {
        field: 'mobile',
        title: '手机号'
    }, {
        field: 'email',
        title: '邮箱',
        formatter: function(v, r) {
            return r.userExt && r.userExt.email;
        }
    }, {
        field: 'status',
        title: '状态',
        type: 'select',
        key: 'user_status',
        search: true,
        formatter: Dict.getNameForList('user_status')
    }, {
        field: 'level',
        title: '用户组',
        type: 'select',
        //url: $('#basePath').val() + '/user/level/page?start=1&limit=1000000',
        listCode: '',
        keyName: 'code',
        valueName: 'name',
        search: true
    }, {
        field: 'companyName',
        title: '归属'
    }, {
        field: 'amount',
        title: '积分',
        formatter: moneyFormat
    }, {
        field: 'remark',
        title: '备注'
    }];

    //var options = { pageRouter: '/user/customer' };
    // if (!isGlobal) {
    //     options.searchParams = {
    //         'companyCode': getCityId(getUserId())
    //     };
    //     options.urlParams = {
    //         b: 1
    //     };
    // }

    buildList({
        router: 'customer',
        columns: columns,
        pageCode: ' ',
    });

    $('#lockBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections')
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        confirm('msg').then(function() {
            reqApi({
                code: '',
                json: { "code": selRecords[0].code }
            }).then(function() {
                toastr.info("操作成功");
                $('#tableList').bootstrapTable('refresh', { url: $('#tableList').bootstrapTable('getOptions').url });
            });
        });
    });


    $("#edit1Btn").click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        //location.href = $("#basePath").val() + "/user/customer_addedit.htm?code=" + selRecords[0].userId + "&comCode=" + selRecords[0].companyCode + (isGlobal ? "" : "&b=1");
        window.location.href = "./customer_addedit.html?code=" + selRecords[0].userId + "&comCode=" + selRecords[0].companyCode + (isGlobal ? "" : "&b=1");

    });

    $('#detail1Btn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        //location.href = $("#basePath").val() + "/user/customer_detail.htm?code=" + selRecords[0].userId + (isGlobal ? "" : "&b=1");
        window.location.href = "./customer_detail.html?code=" + selRecords[0].userId + (isGlobal ? "" : "&b=1");

    });

    $('#resetBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections')
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        //location.href = "../security/user_pwd_reset.htm?userId=" + selRecords[0].userId + '&loginName=' + selRecords[0].loginName;
        window.location.href = "../security/user_pwd_reset.html?code=" + selRecords[0].userId + ' &loginName =' + selRecords[0].loginName;


    });
});