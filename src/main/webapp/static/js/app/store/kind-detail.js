$(function() {

    var code = getQueryString('code');
    //svar router = '/store/product/kind';

    var fields = [{
        title: '名称',
        field: 'name',
        readonly: true
    }, {
        title: '顺序',
        field: 'orderNo',
        readonly: true
    }, {
        title: '图片',
        field: 'pic',
        type: 'img',
        readonly: true
    }];

    buildDetail({
        fields: fields,
        code: code,

        detailCode: ' ',

    });

});