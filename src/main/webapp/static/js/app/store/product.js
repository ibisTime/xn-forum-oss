$(function() {

    var columns = [{
        field: '',
        title: '',
        checkbox: true
    }, {
        field: 'name',
        title: '名称',
        search: true
    }, {
        field: 'kind',
        title: '大类',
        listCode: '',
        // url: $('#basePath').val() + '/store/product/kind/list?companyCode=' + getCityId(getUserId()),
        search: true,
        type: 'select',
        keyName: 'code',
        valueName: 'name'
    }, {
        field: 'price',
        title: '定价（积分）',
        amount: true
    }, {
        field: 'quantity',
        title: '库存'
    }, {
        field: 'status',
        title: '状态',
        formatter: Dict.getNameForList('prod_status'),
        search: true,
        key: 'prod_status'
    }];
    buildList({
        router: "product",
        columns: columns,
        // searchParams: {
        //     'companyCode': getCityId(getUserId())
        // },
        pageCode: "",
    });

    $('#updownBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections')
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        window.location.href = "./product_addedit.html?action=updown&code=" + selRecords[0].code;

        //    	var url = $("#basePath").val()+"/store/product/updown";
        //    	var data = {code:selRecords[0].code};
        //		ajaxPost(url, data).then(function(res) {
        //			if (res.success) {
        //				alert('操作成功');
        //				$('#tableList').bootstrapTable('refresh',{url: $('#tableList').bootstrapTable('getOptions').url});
        //			} else {
        //				alert(res.msg);
        //			}
        //		});
    });
})