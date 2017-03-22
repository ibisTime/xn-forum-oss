$(function() {

    var code = getQueryString('code');
    var view = getQueryString('v');

    var fields = [{
        title: '次数',
        field: 'value',
        required: true,
        maxlength: 30,
        'Z+': true,
        readonly: view,
    }, {
        field: 'level',
        title: '作用等级',
        type: 'select',
        url: $('#basePath').val() + '/user/level/page?start=1&limit=100000',
        keyName: 'code',
        valueName: 'name',
        defaultOption: 'All',
        defaultValue: '0',
        required: true,
        readonly: view,
    }, {
        title: '备注',
        field: 'remark',
        maxlength: 250,
        readonly: view,
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