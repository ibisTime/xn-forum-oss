$(function() {

	var code = getQueryString('code');
	var companyCode = getQueryString('comCode');
	var branch = !!getQueryString('b');
	var router = '/customer';

	var fields = [{
		hidden: true,
		field: "userId",
		defaultValue: code || ""
	}, {
		title: '归属',
		field: 'companyCode',
		url: $('#basePath').val() + '/general/city/list',
		keyName: 'code',
		valueName: 'name',
		type: 'select',
		value: companyCode,
//		hidden: !!getCityId(getUserId()),
		required: true
	},{
		title: '手机号',
		field: 'mobile',
		required: !code,
		mobile: true,
		hidden: code
	}];
	var options = {pageRouter: '/user/customer'};
	buildDetail(router, fields, code, options);

});
