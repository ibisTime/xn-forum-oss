$(function() {
    var code = getQueryString('code');


    var fields = [{
        title: '名称',
        field: 'name',
        readonly: true
    }, {
        title: '积分上',
        field: 'amountMax',
        formatter: moneyFormat,
        readonly: true
    }, {
        title: '积分下',
        field: 'amountMin',
        formatter: moneyFormat,
        readonly: true
    }, {
        title: '是否审核',
        field: 'effect',
        formatter: Dict.getNameForList('true_false'),
        type: 'select',
        key: 'true_false',
        readonly: true
    }, {
        title: '备注',
        field: 'remark',
        readonly: true
    }];

    buildDetail({
        fields: fields,
        code: code,
        detailCode: ' ',
    });
});