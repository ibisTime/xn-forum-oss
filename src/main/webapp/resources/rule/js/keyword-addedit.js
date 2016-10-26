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
		max: 1,
		value: 0,
		hidden: true
	}, {
		field : 'level',
		title : '作用等级',
		type: 'select',
		url: $('#basePath').val() + '/user/level/page?start=1&limit=100000',
		keyName: 'code',
		valueName: 'name',
		defaultOption: 'All',
		defaultValue: '0',
		required: true,
		hidden: true
	}, {
		title: '反应',
		field: 'reaction',
		required: true,
		type: 'select',
		key: 'kw_reaction',
		defaultValue: '2',
		hidden: true
	}, {
		title: '备注',
		field: 'remark',
		maxlength: 250
	}];
	
	buildDetail(router, fields, code);
	
});