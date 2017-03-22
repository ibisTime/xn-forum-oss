$(function() {



    var columns = [{
        field: '',
        title: '',
        checkbox: true
    }, {
        field: 'title',
        title: '标题',
        search: true
    }, {
        field: 'plateCode',
        title: '版块',
        type: 'select',
        pageCode: '',
        // url: $('#basePath').val() + '/forum/board/list?siteCode=' + getCityId(getUserId()),
        keyName: 'code',
        valueName: 'name'
    }, {
        field: 'status',
        title: '状态',
        formatter: Dict.getNameForList('post_status'),
        search: true,
        key: 'post_status'
    }, {
        field: 'location',
        title: '位置',
        formatter: Dict.getNameForList('post_location'),
        search: true,
        key: 'post_location'
    }, {
        field: 'loginName',
        title: '发帖人'
    }, {
        field: 'publishDatetime',
        title: '发布时间',
        formatter: dateTimeFormat
    }, {
        field: 'remark',
        title: '备注'
    }];

    buildList({
        router: 'post',
        columns: columns,
        pageCode: "",
        // searchParams: {
        //     siteCode: getCityId(getUserId())
        // },
        singleSelect: false

    });
    $('#topBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }

        if (selRecords[0].status == 'A') {
            toastr.info('该记录不能进行该操作');
            return;
        }
        window.location.href = "./post_addedit.html?type=1&code=" + (selRecords[0].code || selRecords[0].id);
    });

    $('#digestBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }

        if (selRecords[0].status == 'A') {
            toastr.info('该记录不能进行该操作');
            return;
        }
        window.location.href = "./post_addedit.html?type=2&code=" + (selRecords[0].code || selRecords[0].id);
    });

    $('#headlineBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }

        if (selRecords[0].status == 'A') {
            toastr.info('该记录不能进行该操作');
            return;
        }
        window.location.href = "./post_addedit.html?type=5&code=" + (selRecords[0].code || selRecords[0].id);
    });

    $('#changeBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }

        if (selRecords[0].status == 'A') {
            toastr.info('该记录不能进行该操作');
            return;
        }
        window.location.href = "./post_addedit.html?type=3&code=" + (selRecords[0].code || selRecords[0].id);
    });

    $('#lockBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        if (selRecords.length >= 2) {
            toastr.info("请选择一条记录");
            return;
        }
        if (selRecords[0].status == 'A') {
            toastr.info('该记录不能进行该操作');
            return;
        }
        window.location.href = "./post_addedit.html?type=4&code=" + (selRecords[0].code || selRecords[0].id);
    });

    $('#multideleteBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            alert("请选择记录");
            return;
        }
        var codeList = [];
        selRecords.forEach(function(item) {
            codeList.push(item.code);
        });
        var data = { codeList: codeList, type: '1', approveResult: '0', approveNote: '删除' };
        confirm("确认删除该记录？").then(function() {
            reqApi({
                code: ' ',
                json: { "code": selRecords[0].code, data }
            }).then(function() {
                toastr.info("操作成功");
                $('#tableList').bootstrapTable('refresh', { url: $('#tableList').bootstrapTable('getOptions').url });
            });
        });
    });

})