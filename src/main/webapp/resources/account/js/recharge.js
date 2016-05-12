//订单状态
var orderStatus = null;
$(function() {
	//按钮权限判断
	showPermissionControl();
	
	//页面数据字典初始化
	initData();
	
	// 表格初始化
	queryTableData();
	
	// 查询事件绑定
	$('#searchBtn').click(function() {
		$('#tableList').bootstrapTable('refresh',{url: $("#basePath").val()+"/account/recharge/page"});
	});
	
	//申请事件绑定
	$('#applyBtn').click(function(){
		location.href = $("#basePath").val()+"/account/recharge_apply.htm";
	});
	
	// 审核事件绑定
	$('#approveBtn').click(function() {
		var selRecords = $('#tableList').bootstrapTable('getSelections');
		if(selRecords.length <= 0){
			alert("请选择记录");
			return;
		}
		if(selRecords[0].status != "1"){
			alert("该订单状态不是待审批状态");
			return;
		}
		location.href = $("#basePath").val()+"/account/recharge_approve.htm?cqNo="+selRecords[0].cqNo+"&accountNumber="+selRecords[0].accountNumber+"&rechargeType=01";
	});
	
	// 查看详情
	$('#detailBtn').click(function() {
		var selRecords = $('#tableList').bootstrapTable('getSelections')
		if(selRecords.length <= 0){
			alert("请选择记录");
			return;
		}
		location.href = $("#basePath").val()+"/account/recharge_detail.htm?cqNo="+selRecords[0].cqNo+"&accountNumber="+selRecords[0].accountNumber+"&rechargeType=01&rechargeStatus=normal";
	});
	
	//导出
	$('#exportBtn').click(function() {
		var url=$("#basePath").val()+"/account/recWith/list/export?cqNo="+$("#cqNoSearch").val()+"&mobile="+$("#mobileSearch").val()+"&realName="+$("#realNameSearch").val()+"&direction=1"+"&status=1"+"&channel=01"+"&dateStart="+$("#dateStartSearch").val()+"&dateEnd="+$("#dateEndSearch").val()+"&fileName=线下充值列表";
		window.open(url);
	});
});

//表格初始化
function queryTableData(){
	// 绑定列表
	$('#tableList').bootstrapTable({
		method : "get",
		url : $("#basePath").val()+"/account/recharge/page",
		height : $(window).height() - 180,
		striped : true,
		clickToSelect : true,
		singleSelect : true,
		sortName : 'createDatetime',
		sortOrder : 'desc',
		queryParams : function(params) {
			return {
				cqNo : $("#cqNoSearch").val(),
				//mobile : $("#mobileSearch").val(),
				//realName : $("#realNameSearch").val(),
				accountNumber : $("#accountNumberSearch").val(),
				status : "1",
				channel : "01",//线下
				dateStart : $("#dateStartSearch").val(),
				dateEnd : $("#dateEndSearch").val(),
				start : params.offset / params.limit + 1,
				limit : params.limit,
				orderColumn : this.sortName,
				orderDir : this.sortOrder
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
		columns : [{
			field : '',
			title : '',
			align : 'left',
			valign : 'middle',
			checkbox : true
		},{
			field : 'cqNo',
			title : '订单编号',
			align : 'left',
			valign : 'middle',
			sortable : false
		},{
			field : 'mobile',
			title : '手机号',
			align : 'left',
			valign : 'middle',
			sortable : false,
			visible : false
		},{
			field : 'realName',
			title : '真实姓名',
			align : 'left',
			valign : 'middle',
			sortable : false,
			visible : false
		},{
			field : 'accountNumber',
			title : '账户编号',
			align : 'left',
			valign : 'middle',
			sortable : false
		},{
			field : 'amount',
			title : '金额',
			align : 'left',
			valign : 'middle',
			sortable : true,
			formatter : moneyFormatter
		},{
			field : 'status',
			title : '状态',
			align : 'left',
			valign : 'middle',
			sortable : false,
			formatter : statusFormatter
		},{
			field : 'createDatetime',
			title : '申请时间',
			align : 'left',
			valign : 'middle',
			sortable : true,
			formatter : dateFormatter
		},{
			field : 'approveUser',
			title : '审批人',
			align : 'left',
			valign : 'middle',
			sortable : false,
			visible : false
		},{
			field : 'approveDatetime',
			title : '审批时间',
			align : 'left',
			valign : 'middle',
			sortable : false,
			visible : false,
			formatter : dateFormatter
		},{
			field : 'payUser',
			title : '支付人',
			align : 'left',
			valign : 'middle',
			sortable : false,
			visible : false
		},{
			field : 'payDatetime',
			title : '支付时间',
			align : 'left',
			valign : 'middle',
			sortable : false,
			visible : false,
			formatter : dateFormatter
		},{
			field : 'payNo',
			title : '支付编号',
			align : 'left',
			valign : 'middle',
			sortable : false,
			visible : false
		},{
			field : 'payFee',
			title : '支付手续费',
			align : 'left',
			valign : 'middle',
			sortable : false,
			visible : false
		},{
			field : 'workDate',
			title : '对账日期',
			align : 'left',
			valign : 'middle',
			sortable : false,
			visible : false
		},{
			field : 'remark',
			title : '备注',
			align : 'left',
			valign : 'middle',
			sortable : false,
			visible : false
		}]
	});
}
function initData(){
	//订单状态
	var data= {"key":"order_status"};
	doGetAjaxIsAsync($("#dictUrl").val(), data,false, doSucBackStatus);
}
//数据字典（对方系统）关联的回执方法
function doSucBackStatus(res){
	orderStatus = res.data;
}
//状态转化
function statusFormatter(value, row) {
	for(var i = 0;i < orderStatus.length;i++){
		if(orderStatus[i].value == value){
			return orderStatus[i].remark;
		}
	}
}
//格式化金额
function moneyFormatter(value, row){
	return moneyFormat(value, 2);
}
//格式化时间
function dateFormatter(value, row){
	return dateFormat(value,'yyyy-MM-dd HH:mm:ss');
}