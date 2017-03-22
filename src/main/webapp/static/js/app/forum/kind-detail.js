$(function() {

    var code = getQueryString('code');

    var fields = [{
        title: '名称',
        field: 'name',
        readonly: true
    }, {
        title: '顺序',
        field: 'orderNo',
        readonly: true
    }];

    buildDetail({
        fields: fields,
        code: code,
        detailCode: '',
    });

});