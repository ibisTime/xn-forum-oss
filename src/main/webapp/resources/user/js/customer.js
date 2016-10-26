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
		valueName: 'name',
		search: true
	},{
		field: 'companyName',
		title: '归属'
	},{
		field : 'ljAmount',
		title : '积分',
		formatter: moneyFormat
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
	
	$('#lockBtn').click(function() {
		var selRecords = $('#tableList').bootstrapTable('getSelections')
		if(selRecords.length <= 0){
			alert("请选择记录");
			return;
		}
		if(!confirm("确认锁定用户["+selRecords[0].loginName+"]?")){
    		return false;
    	}
		var data = {"userId":selRecords[0].userId};
		var url = $("#basePath").val()+"/user/drop";
		doPostAjax(url, data, function(res) {
			if (res.success) {
				alert('操作成功');
				$('#tableList').bootstrapTable('refresh',{url: $('#tableList').bootstrapTable('getOptions').url});
			}
		});
	});
})

