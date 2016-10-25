$(function() {
	
	var code = getQueryString('code');
	var router = '/view';
	
	var fields = [{
		field: 'companyCode',
		type: 'hidden',
		defaultValue: '0'
	}, {
		title: '名字',
		field: 'name',
		required: true,
		maxlength: 30,
		readonly: true
	}, {
		title: '顺序',
		field: 'orderNo',
		required: true,
		number: true,
		maxlength: 10,
		readonly: true
	}, {
		title: 'url类型',
		field: 'urlKind',
		required: true,
		type: 'select',
		readonly: true,
		data: {'1': '内部', '2': '外部'},
		onChange: function(r) {
			if (r == 1) {
				$('#url1').parent().show();
				$('#url').parent().hide();
			} else if (r == 2) {
				$('#url1').parent().hide();
				$('#url').parent().show();
			} else {
				$('#url1').parent().hide();
				$('#url').parent().hide();
			}
			$('#url1').val('');
			$('#url').val('');
		},
		value: function(r) {
			if (r.url.indexOf('page:') == -1) {
				return '2';
			} else {
				return '1';
			}
		}
	}, {
		title: '内部页',
		field: 'url1',
		required: true,
		type: 'select',
		readonly: true,
		data: {'page:headline': '头条页', 
			'page:forum': '有料页',
			'page:xiaomi': '客服页',
			'page:custom': '自定义页',
			'page:mine': '个人中心页'},
		onChange: function(r) {
			$('#url').val(r);
		},
		value: function(r) {
			if (r.url.indexOf('page:') == -1) {
				return '';
			} else {
				return r.url;
			}
		}
	}, {
		title: 'url',
		field: 'url',
		required: true,
		maxlength: 200,
		readonly: true
	}, {
		title: '图片',
		field: 'pic',
		type: 'img',
		required: true,
		readonly: true
	}, {
		title: '属于',
		field: 'belong',
		required: true,
		type: 'select',
		key: 'view_belong',
		readonly: true
	}];
	
	buildDetail(router, fields, code, {
		buttons: [{
			title: '返回',
			handler: function() {
				goBack();
			}
		}]
	});
	
});