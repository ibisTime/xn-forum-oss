var dictServe=null;
var dictQuote=null;
var dictLevel=null;
var dicttype=null;
var subjectCode=null;
$(function(){
    //页面数据字典初始化
	initData();
	//获取项目详情
	subjectCode=getQueryString("subjectCode");
	var data = {"subjectCode":subjectCode};
	var url = $("#basePath").val()+"/project/subject/detail";
	doGetAjax(url, data, doGetDetailBack);
	queryTableData();
	
	//流标
	$('#passBtn').click(function() {
		var data = {"checkNote":$("#checkNote").html(),"checkResult":1,"tradePwd":$("#tradePwd").val(),"projectCode":projectCode};
		var url = $("#basePath").val()+"/project/subject/end";
		doPostAjax(url, data, doSuccessBack);
	});
	//返回
	$('#backBtn').click(function() {
		location.href = $("#basePath").val()+"/project/project_business.htm";
	});
	
});
//表格初始化
function queryTableData(){
	//绑定列表
	$('#tableList').bootstrapTable({
		method : "get",
		url : $("#basePath").val()+"/project/business/page",
		striped : true,
		singleSelect : true,
		clickToSelect : true,
		queryParams : function(params) {
			return {
			    subjectCode:subjectCode,
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
		columns : [{
				field : 'code',
				title : '业务单号',
				align : 'left',
				valign : 'middle',
				sortable : false
			},{
				field : 'name',
				title : '业务名称',
				align : 'left',
				valign : 'middle',
				sortable : false
			},{
				field : 'status',
				title : '状态',
				align : 'left',
				valign : 'middle',
				formatter : Dict.getNameForList('business_status'),
				sortable : false
			},{
				field : 'principal',
				title : '本金',
				align : 'left',
				valign : 'middle',
				formatter : moneyFormatter,
				sortable : false
			},{
				field : 'profit',
				title : '收益',
				align : 'left',
				valign : 'middle',
				formatter : moneyFormatter,
				sortable : false
			},{
				field : 'startDatetime',
				title : '开始时间',
				align : 'left',
				valign : 'middle',
				formatter : dateFormatter,
				sortable : false
			},{
				field : 'endDatetime',
				title : '结束时间',
				align : 'left',
				valign : 'middle',
				formatter : dateFormatter,
				sortable : false
			},{
				field : 'applyUser',
				title : '发起人',
				align : 'left',
				valign : 'middle',
				sortable : false
			},{
				field : 'applyDatetime',
				title : '发起时间',
				align : 'left',
				valign : 'middle',
				formatter : dateFormatter,
				sortable : false
			},{
				field : 'checkUser',
				title : '审核人',
				align : 'left',
				valign : 'middle',
				sortable : false
			},{
				field : 'checkDatetime',
				title : '审核时间',
				align : 'left',
				valign : 'middle',
				formatter : dateFormatter,
				sortable : false
			}]
		
	});
}
function doGetDetailBack(res){
	if (res.success == true) {
		if(res.data != null){
			result=res.data;
		   $("#name").html(result.name);
		   $("#serve").html(Dict.getName('serve_type', (result.serve)));
		   $("#quote").html(Dict.getName('quote', (result.quote)));
		   $("#totalAmount").html(moneyFormatter(result.totalAmount));
		   $("#totalProfit").html(moneyFormatter(result.totalProfit));
		   $("#type").html(typeFormatter(result.type));
		   $("#trader").html(traderFormatter(result.trader));
		   $("#startDatetime").html(dateFormatter(result.startDatetime));
		   $("#remark").html(result.remark);
		}else{
			alert("根据项目编号获取详情为空");
		}
	}else{
		alert(res.msg);
	}
}
function initData(){
    var data= {"key":"serve_type"};
	doGetAjaxIsAsync($("#dictUrl").val(), data, false, doSucBackServe);
    var data= {"key":"quote"};
	doGetAjaxIsAsync($("#dictUrl").val(), data, false, doSucBackQuote);
    var data= {"key":"customer_level"};
	doGetAjaxIsAsync($("#dictUrl").val(), data, false, doSucBackLevel);
    var data= {"key":"project_type"};
	doGetAjaxIsAsync($("#dictUrl").val(), data, false, doSucBacktype);
	
	var data= {"key":"business_status"};
	doGetAjaxIsAsync($("#dictUrl").val(), data, false, doSucBackStatus);
	
	var url = $("#basePath").val()+"/general/operator/list";
	doGetAjaxIsAsync(url, data, false, doSucBackTrader);
}

//数据字典（）关联的回执方法
function doSucBackStatus(res){
	dictStatus = res.data;
}
//转化
function statusFormatter(value, row) {
	for(var i = 0;i < dictStatus.length;i++){
		if(dictStatus[i].value == value){
			return dictStatus[i].remark;
		}
	}
}


//数据字典（）关联的回执方法
function doSucBackServe(res){
	dictServe = res.data;
}
//转化
function serveFormatter(value, row) {
	for(var i = 0;i < dictServe.length;i++){
		if(dictServe[i].value == value){
			return dictServe[i].remark;
		}
	}
}

//数据字典（）关联的回执方法
function doSucBackQuote(res){
	dictQuote = res.data;
}
//转化
function quoteFormatter(value, row) {
	for(var i = 0;i < dictQuote.length;i++){
		if(dictQuote[i].value == value){
			return dictQuote[i].remark;
		}
	}
}
//数据字典（）关联的回执方法
function doSucBackLevel(res){
	dictLevel = res.data;
}
//转化
function levelFormatter(value, row) {
	for(var i = 0;i < dictLevel.length;i++){
		if(dictLevel[i].value == value){
			return dictLevel[i].remark;
		}
	}
}
//数据字典（）关联的回执方法
function doSucBacktype(res){
	dicttype = res.data;
}
//转化
function typeFormatter(value, row) {
	for(var i = 0;i < dicttype.length;i++){
		if(dicttype[i].value == value){
			return dicttype[i].remark;
		}
	}
}

function doSucBackTrader(res){
	dictTrader = res.data;
}

//转化  
function traderFormatter(value, row) {
	for(var i = 0;i < dictTrader.length;i++){
		if(dictTrader[i].userId == value){
			return dictTrader[i].realName;
		}
	}
}

function doSuccessBack(res) {
	if (res.success == true) {
		alert("操作成功");
		window.location.href = $("#basePath").val()+"/project/project_business.htm";
	}else{
		alert(res.msg);
	}
}
//时间格式化
function dateFormatter(value, row){
	return dateFormat(value,'yyyy-MM-dd HH:mm:ss');
}
//格式化金额
function moneyFormatter(value, row){
	return moneyFormat(value, 2);
}
