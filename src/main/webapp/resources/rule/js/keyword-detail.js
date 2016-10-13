$(function() {
	var code = getQueryString('code');
	var router = '/rule/keyword';
	
	var fields = [{
		title: '关键字',
		field: 'word'
	}, {
		title: '权重',
		field: 'weight'
	}, {
		title: '作用等级',
		field: 'level'
	}, {
		title: '反应',
		field: 'reaction',
		type: 'select',
		key: 'kw_reaction'
	}, {
		title: '备注',
		field: 'remark'
	}];
	
	buildDetailView(router, fields, code);
});