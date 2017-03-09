$(function() {
	var code = getQueryString('code');
	var router = '/general/city/kefu';
	
	var fields = [{
		field: 'companyCode',
		type: 'hidden'
	}, {
		field: 'account',
		title: '参数键',
		readonly: true,
		pass: true
	}, {
		field: 'password',
		title: '参数值',
		required: true,
		maxlength: 60
	}, {
		field: 'remark',
		type: 'hidden'
	}];
	
	buildDetail(router, fields, code);
	
});