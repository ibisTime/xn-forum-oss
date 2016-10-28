$(function() {
	
	var code = getQueryString('code');
	var router = '/customer';
	
	var fields = [{
		title: '归属',
		field: 'companyCode',
		url: $('#basePath').val() + '/general/city/list?code=' + getCityId(getUserId()),
		keyName: 'code',
		valueName: 'name',
		type: 'select',
		value: getCityId(getUserId()),
		hidden: !!getCityId(getUserId()),
		required: true
	}, {
		title: '手机号',
		field: 'mobile',
		required: true,
		mobile: true
	}];
	var options = {pageRouter: '/user/customer'};
	buildDetail(router, fields, code, options);
	
});