$(function(){
	showPermissionControl();
	
	var router = '/customer';
	
	var isGlobal = !getQueryString('b');
	
	var columns = [{
		field : '',
		title : '',
		checkbox : true
	},{
		field : 'loginName',
		title : '用户名',
		search: true
	},{
		field : 'mobile',
		title : '手机号'
    },{
		field : 'email',
		title : '邮箱'
    },{
    	field : 'status',
		title : '状态',
		type: 'select',
		key: 'user_status',
		search: true,
		formatter: Dict.getNameForList('user_status')
    },{
		field : 'level',
		title : '用户组',
		type: 'select',
		url: $('#basePath').val() + '/user/level/page?start=1&limit=1000000',
		keyName: 'code',
		valueName: 'level',
		search: true
	},{
		field: '',
		title: '归属'
	},{
		field : 'ljAmount',
		title : '积分'
	},{
		field : 'remark',
		title : '备注'
	}];
	
	var options = {pageRouter: 'user/customer'};
	if (!isGlobal) {
		options.searchParams = {
			'companyCode': getCityId(getUserId())
		};
	}
	buildList(router, columns, options);
})

