$(function(){
	showPermissionControl();
	var branch = getQueryString('b') || "";
	
	var router = '/forum/board/kind';
	var columns = [{
		field : '',
		title : '',
		checkbox : true
	},{
		field : 'name',
		title : '名称',
		search: true
	},{
		field: 'orderNo',
		title: '顺序'
	}];
	buildList(router, columns, {
		searchParams: {
			'companyCode': branch ? 0 : getCityId(getUserId())
		},
		urlParams: {
			b: branch
		},
		pageRouter: '/forum/kind'
	});
})

