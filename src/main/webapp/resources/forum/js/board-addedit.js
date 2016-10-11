$(function() {
	
	var code = getQueryString('code');
	var router = '/forum/board';
	
	var fields = [{
		title: '大类',
		field: 'kind',
		required: true,
		type: 'select',
		key: 'board_category'
	}, {
		title: '名称',
		field: 'name',
		required: true,
		maxlength: 32
	}, {
		title: '状态',
		field: 'status',
		required: true,
		type: 'select',
		key: 'active_status'
	}, {
		title: '地位',
		field: 'location',
		required: true,
		type: 'select',
		key: 'board_location'
	}, {
		title: '顺序',
		field: 'orderNo',
		required: true,
		maxlength: 10,
		number: true
	}, {
		title: '版主',
		field: 'userId',
		required: true,
		type: 'select',
		url: $("#basePath").val() + '/customer/list',
		keyName: 'userId',
		valueName: 'loginName'
	}, {
		title: '图片',
		field: 'pic',
		required: true,
		type: 'img'
	}];
	
	buildDetail(router, fields, code);
	
});