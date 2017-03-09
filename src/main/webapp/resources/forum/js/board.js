$(function(){
	showPermissionControl();
	var branch = getQueryString('b') || "";
	var cityId = branch ? 0 : getCityId(getUserId());
	var router = '/forum/board';
	var columns = [{
		field : '',
		title : '',
		checkbox : true
	},{
		field : 'name',
		title : '名称',
		search: true
	},{
		field : 'kind',
		title : '大类',
		url: $('#basePath').val() + '/forum/board/kind/list?companyCode=' + cityId,
		search: true,
		type: 'select',
		keyName: 'code',
		valueName: 'name'
    },{
    	field : 'status',
		title : '状态',
		formatter: Dict.getNameForList('active_status'),
		search: true,
		key: 'active_status'
    },{
		field : 'loginName',
		title : '版主'
	}, {
		field: 'remark',
		title: '备注'
	}];
	branch && columns.splice(4, 1);
	buildList(router, columns, {
		searchParams: {
			'siteCode': cityId
		},
		urlParams: {
			b: branch
		}
	});
});