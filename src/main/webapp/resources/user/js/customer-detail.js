$(function() {
	
	var code = getQueryString('code');
	var router = '/customer';
	
	var fields = [{
		title: '归属',
		field: 'companyCode',
		url: $('#basePath').val() + '/general/city/detail',
		keyName: 'code',
		valueName: 'name',
		type: 'select',
		readonly: true
	}, {
		title: '登录名',
		field: 'loginName',
		readonly: true
	}, {
		title: '昵称',
		field: 'nickname',
		readonly: true
	}, {
		title: '手机号',
		field: 'mobile',
		mobile: true,
		readonly: true
	}, {
		title: '邮箱',
		field: 'userExt-email',
		readonly: true
	}, {
		title: '状态',
		type: 'select',
		key: 'user_status',
		field: 'status',
		readonly: true
	}, {
		field : 'level',
		title : '用户组',
		type: 'select',
		url: $('#basePath').val() + '/user/level/detail',
		keyName: 'code',
		valueName: 'name',
		readonly: true
	},{
		field : 'amount',
		title : '积分',
		formatter: moneyFormat,
		readonly: true
	},{
		field : 'totalFansNum',
		title: '粉丝数',
		readonly: true
	},{
		field : 'totalFollowNum',
		title: '关注数',
		readonly: true
	},{
		field : 'remark',
		title : '备注',
		readonly: true
	}];
	var options = {pageRouter: '/user/customer',
			buttons: [{
				title: '返回',
				handler: function() {
					goBack();
				}
			}]};
	buildDetail(router, fields, code, options);
	
});