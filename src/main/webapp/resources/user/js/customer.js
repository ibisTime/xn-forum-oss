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
		title : '登录名',
		search: true
	},{
		field : 'nickname',
		title : '昵称'
	},{
		field : 'mobile',
		title : '手机号'
    },{
		field : 'email',
		title : '邮箱',
		formatter: function(v, r) {
			return r.userExt && r.userExt.email;
		}
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
		field : 'amount',
		title : '积分',
		formatter: moneyFormat
	},{
		field : 'remark',
		title : '备注'
	}];

	var options = {pageRouter: '/user/customer'};
	if (!isGlobal) {
		options.searchParams = {
			'companyCode': getCityId(getUserId())
		};
		options.urlParams = {
			b: 1
		};
	}
	buildList(router, columns, options);

	$('#lockBtn').click(function() {
		var selRecords = $('#tableList').bootstrapTable('getSelections')
		if(selRecords.length <= 0){
			alert("请选择记录");
			return;
		}

		var data = {"userId":selRecords[0].userId};
		var url = $("#basePath").val()+"/user/" + (selRecords[0].status == 0 ? 'drop' : 'active');
		doPostAjax(url, data, function(res) {
			if (res.success) {
				alert('操作成功');
				$('#tableList').bootstrapTable('refresh',{url: $('#tableList').bootstrapTable('getOptions').url});
			}
		});
	});

	$("#edit1Btn").click(function(){
		var selRecords = $('#tableList').bootstrapTable('getSelections');
		if(selRecords.length <= 0){
			alert("请选择记录");
			return;
		}
		location.href = $("#basePath").val() + "/user/customer_addedit.htm?code=" + selRecords[0].userId + "&comCode=" + selRecords[0].companyCode + (isGlobal ? "" : "&b=1");
	});

	$('#detail1Btn').click(function() {
		var selRecords = $('#tableList').bootstrapTable('getSelections');
		if(selRecords.length <= 0){
			alert("请选择记录");
			return;
		}
		location.href = $("#basePath").val() + "/user/customer_detail.htm?code=" + selRecords[0].userId + (isGlobal ? "" : "&b=1");
	});

	$('#resetBtn').click(function() {
		var selRecords = $('#tableList').bootstrapTable('getSelections')
		if(selRecords.length <= 0){
			alert("请选择记录");
			return;
		}
		location.href = $("#basePath").val()+"/security/user_pwd_reset.htm?userId=" + selRecords[0].userId + '&loginName=' + selRecords[0].loginName;
	});
})
