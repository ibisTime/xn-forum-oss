//页面初始化
$(function(){
	//按钮权限判断
	showPermissionControl();
	//表格初始化
	queryTableData();
	
	//$('#type').renderDropdown(Dict.getName('vendor_type'));
	//$('#status').renderDropdown(Dict.getName('vendor_updown'));
	
	$('#editBtn').click(function() {
		var selRecords = $('#tableList').bootstrapTable('getSelections')
		if(selRecords.length <= 0){
			alert("请选择记录");
			return;
		}
		window.location.href = $("#basePath").val()+"/vendor/score_edit.htm?code="+selRecords[0].code;
	});
	
	$('#searchBtn').click(function() {
		$('#tableList').bootstrapTable('refresh',{url: $("#basePath").val()+"/score/page"});
	});
	
	//表格初始化
	function queryTableData(){
		var columns = [{
				field : '',
				title : '',
				checkbox : true
			},{
				field : '',
				title : '产生项'
			},{
				field : '',
				title : '权重'
		    },{
		    	field : '',
				title : '作用等级'
		    },{
		    	field : '',
				title : '最近修改人'
			}, {
				field : '',
				title : '最近修改时间'
			}, {
				field : 'remark',
				title : '备注'
			}];
		
		$('#tableList').bootstrapTable({
			method : "get",
			url : $("#basePath").val()+"/score/page",
			striped : true,
			clickToSelect : true,
			singleSelect : true,
			queryParams : function(params) {
				return {
					start : params.offset / params.limit + 1,
					limit : params.limit
				};
			},
			queryParamsType : 'limit',
			responseHandler : function(res) {
				return {
					rows : res.data.list,
					total : res.data.totalCount
				};
			},
			pagination : true,
			sidePagination : 'server', // 服务端请求
			totalRows : 0,
			pageNumber : 1,
			pageSize : 10,
			pageList : [ 10, 20, 30, 40, 50 ],
			columns : columns
		});
	}
})

