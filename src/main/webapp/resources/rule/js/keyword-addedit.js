$(function() {
	
	var code = getQueryString('code');
	var router = '/rule/keyword';
	
	var fields = [{
		title: '关键字',
		field: 'word',
		required: true,
		maxlength: 30
	}, {
		title: '权重',
		field: 'weight',
		required: true,
		number: true,
		min: 0,
		max: 1
	}, {
		title: '作用等级',
		field: 'level',
		required: true
	}, {
		title: '反应',
		field: 'reaction',
		required: true,
		type: 'select',
		key: 'kw_reaction'
	}, {
		title: '备注',
		field: 'remark',
		maxlength: 250
	}];
	
	buildDetail(router, fields, code);
	
});