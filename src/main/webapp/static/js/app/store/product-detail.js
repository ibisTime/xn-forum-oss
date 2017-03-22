$(function() {
    var code = getQueryString('code');


    var fields = [{
        title: '名称',
        field: 'name',
        readonly: true
    }, {
        title: '广告图',
        field: 'pic',
        readonly: true,
        type: 'img'
    }, {
        title: '定价',
        field: 'price',
        readonly: true,
        amount: true
    }, {
        title: '库存',
        field: 'quantity',
        readonly: true
    }, {
        title: '状态',
        field: 'status',
        required: true,
        type: 'select',
        key: 'prod_status',
        readonly: true
    }, {
        title: '大类',
        field: 'kind',
        required: true,
        type: 'select',
        key: 'prod_kind',
        readonly: true
    }, {
        title: '简介',
        field: 'description',
        readonly: true
    }];

    buildDetail({
        fields: fields,
        code: code,
        detailCode: ' ',

    });
});