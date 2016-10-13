$(function() {
	
	var code = getQueryString('code');
	var router = '/rule/report';
	
	var fields = [{
		title: '次数',
		field: 'value',
		required: true,
		maxlength: 30,
		'Z+': true
	}, {
		title: '作用等级',
		field: 'level',
		required: true
	}, {
		title: '备注',
		field: 'remark',
		maxlength: 250
	}];
	
	buildDetail(router, fields, code);
	
});