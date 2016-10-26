$(function() {
	
	var code = getQueryString('code');
	var isBranch = !!getQueryString('b');
	var router = '/view';
	
	var fields = [{
		field: 'type',
		type: 'hidden'
	}, {
		field: 'isCompanyEdit',
		type: 'hidden',
		value: isBranch ? '1' : '0'
	}, {
		field: 'status',
		type: 'hidden',
		value: '1'
	}, {
		field: 'location',
		type: 'hidden',
		value: '0'
	}, {
		field: 'companyCode',
		type: 'hidden',
		value: isBranch ? getCityId(getUserId) : '0'
	}, {
		title: '名字',
		field: 'name',
		required: true,
		maxlength: 30
	}, {
		title: '顺序',
		field: 'orderNo',
		required: true,
		number: true,
		maxlength: 10
	}, {
		title: 'url类型',
		field: 'urlKind',
		required: true,
		type: 'select',
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
		data: {'page:headline': '头条页', 
			'page:forum': '有料页',
			'page:xiaomi': '客服页',
			'page:custom': '自定义页',
			'page:mine': '个人中心页',
			'page:mall': '商城页',
			'page:signin': '签到'},
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
		maxlength: 200
	}, {
		title: '图片',
		field: 'pic',
		type: 'img',
		required: true
	}, {
		title: '属于',
		field: 'belong',
		required: true,
		type: 'select',
		key: 'view_belong',
		data: {'1': '全局', '2': '地方默认'},
		hidden: isBranch
	}];
	
	buildDetail(router, fields, code);
	
});