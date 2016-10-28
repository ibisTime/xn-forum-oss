$(function() {
	
	var code = getQueryString('code');
	var router = '/forum/board';
	var cityId = getCityId(getUserId());
	
	var fields = [{
		field: 'siteCode',
		type: 'hidden',
		value: cityId
	}, {
		hidden: true,
		field: 'location',
		value: '1'
	}, {
		title: '大类',
		field: 'kind',
		required: true,
		type: 'select',
		key: 'plate_kind'
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
		url: $("#basePath").val() + '/customer/list?companyCode=' + cityId,
		keyName: 'userId',
		valueName: 'loginName'
	}, {
		title: '图片',
		field: 'pic',
		required: true,
		type: 'img'
	}, {
		title: '备注',
		field: 'remark',
		maxlength: 200
	}];
	
	buildDetail(router, fields, code);
});