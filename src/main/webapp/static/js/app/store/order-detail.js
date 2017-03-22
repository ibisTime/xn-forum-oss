$(function() {

    var code = getQueryString('code');


    var fields = [{
        field: 'code1',
        title: '订单编号',
        '[value]': 'code',
        readonly: true
    }, {
        title: '商品',
        field: 'productName',
        readonly: true
    }, {
        title: '价格',
        field: 'payPrice',
        readonly: true,
        amount: true
    }, {
        title: '下单时间',
        field: 'payDatetime',
        readonly: true,
        formatter: dateTimeFormat
    }, {
        title: '状态',
        field: 'status',
        readonly: true,
        type: 'select',
        key: 'order_status'
    }, {
        title: '意见说明',
        field: 'takeNote',
        maxlength: 250
    }];

    var options = {
        fields: fields,
        code: code,
        detailCode: ' '
    };

    options.buttons = [{
        title: '已题',
        handler: function() {
            if ($('#jsForm').valid()) {
                var data = $('#jsForm').serializeObject();
                reqApi({
                    code: " ",
                    json: data
                }).done(function() {
                    sucDetail();
                });
            }
        }
    }, {
        title: '作废',
        handler: function() {
            if ($('#jsForm').valid()) {
                // var data = {};
                // data['code'] = code;
                // data['approver'] = sessionStorage.getItem('userName');
                // data["approveResult"] = "0";
                // data["remark"] = $("#remark").val();
                var data = $('#jsForm').serializeObject();
                reqApi({
                    code: " ",
                    json: data
                }).done(function() {
                    sucDetail();
                });
            }
        }
    }, {
        title: '返回',
        handler: function() {
            goBack();
        }
    }];

    buildDetail(options);
});