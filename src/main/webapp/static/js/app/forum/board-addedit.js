$(function() {
    var view = getQueryString('v');
    var code = getQueryString('code');
    // var branch = !!getQueryString('b');
    // var cityId = branch ? 0 : getCityId(getUserId());

    var fields = [
        // {
        //     field: 'siteCode',
        //     type: 'hidden',
        //     value: cityId
        // }, 
        {
            hidden: true,
            field: 'location',
            value: '1'
        }, {
            field: 'kind',
            title: '大类',
            pageCode: '',
            // url: $('#basePath').val() + '/forum/board/kind/list?companyCode=' + cityId,
            search: true,
            required: true,
            type: 'select',
            keyName: 'code',
            valueName: 'name',
            readonly: view
        }, {
            title: '名称',
            field: 'name',
            required: true,
            maxlength: 32,
            readonly: view
        }, {
            title: '状态',
            field: 'status',
            required: true,
            type: 'select',
            key: 'active_status',
            readonly: view
        }, {
            title: '顺序',
            field: 'orderNo',
            required: true,
            maxlength: 10,
            number: true,
            readonly: view
        }, {
            title: '版主手机号',
            field: 'mobile',
            required: true,
            mobile: true,
            // afterSet: function(v, data) {
            //     var res = v;
            //     if (code && !branch && data.userId) {
            //         $.ajax({
            //             type: 'get',
            //             async: false,
            //             //url: $("#basePath").val() + '/customer/list?userId=' + data.userId + "&companyCode=" + cityId,
            //             dataType: 'json',
            //             success: function(d) {
            //                 res = d.data[0].mobile;
            //             }
            //         });
            //         $("#mobile").val(res);
            //     }
            // },
            // hidden: branch
        },
        {
            title: '图片',
            field: 'pic',
            required: true,
            type: 'img',
            readonly: view
        }, {
            title: '备注',
            field: 'remark',
            maxlength: 200,
            readonly: view
        }
    ];

    buildDetail({
        fields: fields,
        code: code,
        view: view,
        detailCode: '',
        addCode: "",
        editCode: "",
    });
});