$(function(){
	showPermissionControl();
	
	var router = '/forum/post';
	var columns = [{
		field : '',
		title : '',
		checkbox : true
	}, {
		field : 'title',
		title : '标题',
		search: true
	}, {
    	field : 'loginName',
		title : '发帖人'
	}, {
		field: 'publishDatetime',
		title: '发布时间',
		formatter: dateTimeFormat
	}, {
		field : 'remark',
		title : '备注'
	}];
	buildList(router, columns, {
		searchParams: {
			siteCode: getCityId(getUserId()),
			status: 'E'
		}
	});
	
	$('#restoreBtn').click(function() {
		var selRecords = $('#tableList').bootstrapTable('getSelections');
		if(selRecords.length <= 0){
			alert("请选择记录");
			return;
		}
		else if(selRecords.length >= 2){
			alert("请选择一条记录");
			return;
		}
		
    	var url = $("#basePath").val()+ router + '/restore';
    	var data = {code: selRecords[0].code, type: '1'};
		ajaxPost(url, data).then(function(res) {
			if (res.success) {
				alert('操作成功');
				$('#tableList').bootstrapTable('refresh',{url: $('#tableList').bootstrapTable('getOptions').url});
			}
		});
	});
	
	$('#fdeleteBtn').click(function() {
		var selRecords = $('#tableList').bootstrapTable('getSelections');
		if(selRecords.length <= 0){
			alert("请选择记录");
			return;
		}
		
		if(!confirm("确认是否删除该记录？")){
    		return false;
    	}
    	var url = $("#basePath").val()+ router + '/multi/delete';
    	var codeList = [];
    	selRecords.forEach(function(item) {
    		codeList.push(item.code);
    	});
    	var data = {codeList: codeList};
		ajaxPost(url, data).then(function(res) {
			if (res.success) {
				alert('操作成功');
				$('#tableList').bootstrapTable('refresh',{url: $('#tableList').bootstrapTable('getOptions').url});
			}
		});
	});
})

