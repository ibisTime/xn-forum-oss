$(function() {
	//按钮权限判断
	showPermissionControl();
	var isBranch = !!getQueryString('b');
	
	var router = '/view';
	var columns = [{
		field : '',
		title : '',
		checkbox : true
	}, {
		field: 'name',
		title: '名字',
		search: true
	}, {
		field: 'parentCode',
		title: '父菜单',
		type: 'select',
		url: $('#basePath').val() + '/view/list?companyCode=0',
		keyName: 'code',
		valueName: 'name'
	}, {
		field : 'type',
		title : '类型',
		formatter: Dict.getNameForList('view_type'),
		search: true,
		key: 'view_type'
    },{
    	field : 'orderNo',
    	title: '顺序'
    },{
    	field : 'belong',
		title : '属于',
		formatter: Dict.getNameForList('view_belong'),
		key: 'view_belong',
		data: {'1': '全局', '2': '地方默认'}
	}];
	
	var searchParams = {isDfNavigate: 0,companyCode: 0};
	if (isBranch) {
		searchParams.companyCode = getCityId(getUserId());
		searchParams.isDfNavigate = 1;
	}
	
	buildList(router, columns, {
		searchParams: searchParams,
		pageRouter: '/view/menu',
		urlParams: isBranch ? {b: 1} : {}
	});
});

