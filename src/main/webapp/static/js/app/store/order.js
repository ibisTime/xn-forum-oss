$(function() {


    var columns = [{
        field: '',
        title: '',
        checkbox: true
    }, {
        field: 'code',
        title: '订单编号'
    }, {
        field: 'productName',
        title: '商品'
    }, {
        field: 'status',
        title: '状态',
        formatter: Dict.getNameForList('order_status'),
        search: true,
        type: 'select',
        key: 'order_status'
    }, {
        field: 'payDatetime',
        title: '下单时间',
        formatter: dateTimeFormat
    }, {
        field: 'remark',
        title: '备注'
    }];
    buildList({
        router: 'order',
        columns: columns,
        // searchParams: {
        //     'companyCode': getCityId(getUserId())
        // },
        pageCode: "",
    });

    $('#actionBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections')
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        if (selRecords[0].status != 1) {
            toastr.info("订单状态不是已支付");
            return;
        }
        window.location.href = "./order_detail.html?code=" + selRecords[0].code;
    });
})