$(function() {
    var view = getQueryString('v');
    var code = getQueryString('code');
    var companyCode = getQueryString('comCode');
    var branch = !!getQueryString('b');

    var fields = [{
        hidden: true,
        field: "userId",
        defaultValue: code || ""
    }, {
        title: '归属',
        field: 'companyCode',
        listCode: "",
        //url: $('#basePath').val() + '/general/city/list',
        keyName: 'code',
        valueName: 'name',
        type: 'select',
        value: companyCode,
        // hidden: !!getCityId(getUserId()),
        required: true,
        readonly: view
    }, {
        title: '手机号',
        field: 'mobile',
        required: !code,
        mobile: true,
        hidden: code,
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