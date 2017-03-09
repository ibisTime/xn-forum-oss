$(function(){
	showPermissionControl();
	
	var router = '/store/product/kind';
	var columns = [{
		field : '',
		title : '',
		checkbox : true
	},{
		field : 'pic',
		title : '图片',
		formatter: function(v) {
			return v ? '<img src="'+v+'" style="width: 50px;"/>' : '-';
		}
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
			'companyCode': getCityId(getUserId())
		},
		pageRouter: '/store/kind'
	});
})

