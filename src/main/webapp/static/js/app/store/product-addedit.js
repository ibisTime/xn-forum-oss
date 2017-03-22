$(function() {

    var code = getQueryString('code');
    var view = getQueryString('v');

    // var router = '/store/product';
    //var view = getQueryString('action') == 'updown';

    var fields = [{
        field: 'siteCode',
        type: 'hidden',
        value: getCityId(getUserId())
    }, {
        title: '名称',
        field: 'name',
        required: true,
        maxlength: 30,
        readonly: view
    }, {
        title: '广告图',
        field: 'pic',
        required: true,
        type: 'img',
        readonly: view
    }, {
        title: '定价',
        field: 'price',
        required: true,
        amount: true,
        hidden: !view,
    }, {
        title: '状态',
        field: 'status',
        required: true,
        type: 'select',
        key: 'prod_status',
        defaultValue: '0',
        hidden: true,
        readonly: view
    }, {
        title: '库存',
        field: 'quantity',
        required: true,
        'Z+': true,
        maxlength: 10,
        readonly: view
    }, {
        field: 'kind',
        title: '大类',
        //url: $('#basePath').val() + '/store/product/kind/list?companyCode=' + getCityId(getUserId()),
        search: true,
        required: true,
        type: 'select',
        keyName: 'code',
        valueName: 'name',
        readonly: view
    }, {
        title: '简介',
        field: 'description',
        required: true,
        type: 'textarea',
        readonly: view
    }];
    // var options = {};
    // if (view) {
    // 	$('.form-title').after('<div class="alert-warning">状态为未发布和已下架时为下架操作， 状态为上架中为下架操作</div>');
    // 	options.buttons = [{
    // 		title: '上下架',
    // 		handler: function() {
    // 			if ($('#jsForm').valid()) {
    // 				var data = $('#jsForm').serializeObject();
    // 				$('#jsForm').find('input[type=file]').parent().next().each(function(i, el) {
    // 					data[el.id] = $(el).attr('src');
    // 				});

    // 				var url = $("#basePath").val()+"/store/product/updown";
    // 				ajaxPost(url, data).then(function(res) {
    // 					if (res.success) {
    // 						alert("操作成功");
    // 						goBack();
    // 					}
    // 				});
    // 			}
    // 		}
    // 	}, {
    // 		title: '返回',
    // 		handler: function() {
    // 			goBack();
    // 		}
    // 	}];
    // }
    // buildDetail(router, fields, code, options);
    var options = {
        fields: fields,
        code: code,
        detailCode: ' '
    };
    options.buttons = [{
        title: '上下架',
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
        title: '返回',
        handler: function() {
            goBack();
        }
    }];

    buildDetail(options);

});