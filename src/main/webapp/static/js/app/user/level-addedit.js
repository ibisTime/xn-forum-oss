$(function() {
    var view = getQueryString('v');
    var code = getQueryString('code');
    //	var router = '/user/level';

    var fields = [{
        title: '名称',
        field: 'name',
        required: true,
        maxlength: 10,
        readonly: view
    }, {
        title: '积分上',
        field: 'amountMax',
        required: true,
        amount: true,
        readonly: view
    }, {
        title: '积分下',
        field: 'amountMin',
        required: true,
        amount: true,
        readonly: view
    }, {
        title: '是否审核',
        field: 'effect',
        required: true,
        formatter: Dict.getNameForList('true_false'),
        type: 'select',
        key: 'true_false',
        readonly: view
    }, {
        title: '备注',
        field: 'remark',
        maxlength: 250,
        readonly: view
    }];

    buildDetail({
        fields: fields,
        code: code,
        view: view,
        detailCode: ' ',
        addCode: ' ',
        editCode: ' '
    });

});