$(function() {
	var code = getQueryString('code');
	var router = '/message';
	
	var fields = [{
		title: '标题',
		field: 'title',
		readonly: true
	}, {
		title: '内容',
		field: 'content',
		readonly: true
	}, {
		field : 'toSite',
		title : '作用地区',
		type: 'select',
		url: $('#basePath').val() + '/general/city/page?start=1&limit=100000',
		keyName: 'code',
		valueName: 'name',
		defaultOption: 'All',
		readonly: true
	}, {
		field : 'toLevel',
		title : '作用等级',
		type: 'select',
		url: $('#basePath').val() + '/user/level/detail',
		keyName: 'code',
		valueName: 'name',
		defaultOption: 'All',
		readonly: true
	}, {
		field : 'toUser',
		title : '作用人',
		type: 'select',
		url: $('#basePath').val() + '/customer/page?start=1&limit=100000',
		keyName: 'userId',
		valueName: 'loginName',
		defaultOption: 'All',
		readonly: true
	}, {
		title: '备注',
		field: 'remark',
		readonly: true
	}];
	
	buildDetail(router, fields, code, {
		pageRouter: '/message/notice',
		buttons: [{
			title: '返回',
			handler: function() {
				goBack();
			}
		}]
	});
});