$(function() {
	
	var code = getQueryString('code');
	var router = '/user/level';
	
	var fields = [{
		title: '名称',
		field: 'name',
		required: true,
		maxlength: 10
	}, {
		title: '积分上',
		field: 'amountMax',
		required: true,
		amount: true
	}, {
		title: '积分下',
		field: 'amountMin',
		required: true,
		amount: true
	}, {
		title: '是否审核',
		field: 'effect',
		required: true,
		formatter: Dict.getNameForList('true_false'),
		type: 'select',
		key: 'true_false'
	}, {
		title: '备注',
		field: 'remark',
		maxlength: 250
	}];
	
	buildDetail(router, fields, code);
	
});