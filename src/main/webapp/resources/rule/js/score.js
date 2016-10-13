$(function(){
	showPermissionControl();
	
	var router = '/rule/score';
	var columns = [{
		field : '',
		title : '',
		checkbox : true
	}, {
		title: '产生项',
		field: 'type',
		type: 'select',
		formatter: Dict.getNameForList('rule_type'),
		key: 'rule_type',
		search: true
	}, {
		field : 'value',
		title : '权重'
	}, {
    	field : 'level',
		title : '作用等级',
		search: true
    }, {
		field : 'updater',
		title : '最近修改人'
	}, {
		field : 'updateDatetime',
		title : '最近修改时间',
		formatter: dateTimeFormat
	}, {
		field : 'remark',
		title : '备注'
	}];
	buildList(router, columns);
})

