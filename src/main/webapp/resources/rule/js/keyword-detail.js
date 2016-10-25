$(function() {
	var code = getQueryString('code');
	var router = '/rule/keyword';
	
	var fields = [{
		title: '关键字',
		field: 'word',
		readonly: true
	}, {
		title: '最近修改人',
		field: 'updater',
		readonly: true
	}, {
		title: '最近修改时间',
		field: 'updateDatetime',
		formatter: dateTimeFormat,
		readonly: true
	}, {
		title: '备注',
		field: 'remark',
		readonly: true
	}];
	
	buildDetail(router, fields, code, {
		buttons: [{
			title: '返回',
			handler: function() {
				goBack();
			}
		}]
	});
});