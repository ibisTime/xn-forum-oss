$(function() {
	
	var code = getQueryString('code');
	var router = '/forum/board/kind';
	var branch = getQueryString('b');
	var cityId = branch ? 0 : getCityId(getUserId());
	
	var fields = [{
		field: 'companyCode',
		type: 'hidden',
		value: cityId
	}, {
		hidden: true,
		field: 'type',
		value: '1'
	}, {
		hidden: true,
		field: 'parentCode',
		value: '0'
	}, {
		title: '名称',
		field: 'name',
		required: true,
		maxlength: 32
	}, {
		title: '顺序',
		field: 'orderNo',
		required: true,
		maxlength: 10,
		number: true
	}];
	
	buildDetail(router, fields, code);
});