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
		field: 'plateCode',
		title: '版块',
		type: 'select',
		url: $('#basePath').val() + '/forum/board/list?siteCode=' + getCityId(getUserId()),
		keyName: 'code',
		valueName: 'name'
	}, {
		field : 'status',
		title : '状态',
		formatter: Dict.getNameForList('post_status'),
		search: true,
		key: 'post_status'
    }, {
    	field: 'location',
    	title : '位置',
		formatter: Dict.getNameForList('post_location'),
		search: true,
		key: 'post_location'
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
			siteCode: getCityId(getUserId())
		},
		singleSelect: false
	});
	
	$('#topBtn').click(function() {
		var selRecords = $('#tableList').bootstrapTable('getSelections');
		if(selRecords.length <= 0){
			alert("请选择记录");
			return;
		}
		if(selRecords.length >= 2){
			alert("请选择一条记录");
			return;
		}
		window.location.href = $("#basePath").val()+ "/forum/post_addedit.htm?type=1&code="+(selRecords[0].code || selRecords[0].id);
	});
	
	$('#digestBtn').click(function() {
		var selRecords = $('#tableList').bootstrapTable('getSelections');
		if(selRecords.length <= 0){
			alert("请选择记录");
			return;
		}
		if(selRecords.length >= 2){
			alert("请选择一条记录");
			return;
		}
		window.location.href = $("#basePath").val()+ "/forum/post_addedit.htm?type=2&code="+(selRecords[0].code || selRecords[0].id);
	});
	
	$('#headlineBtn').click(function() {
		var selRecords = $('#tableList').bootstrapTable('getSelections');
		if(selRecords.length <= 0){
			alert("请选择记录");
			return;
		}
		if(selRecords.length >= 2){
			alert("请选择一条记录");
			return;
		}
		window.location.href = $("#basePath").val()+ "/forum/post_addedit.htm?type=5&code="+(selRecords[0].code || selRecords[0].id);
	});
	
	$('#changeBtn').click(function() {
		var selRecords = $('#tableList').bootstrapTable('getSelections');
		if(selRecords.length <= 0){
			alert("请选择记录");
			return;
		}
		if(selRecords.length >= 2){
			alert("请选择一条记录");
			return;
		}
		window.location.href = $("#basePath").val()+ "/forum/post_addedit.htm?type=3&code="+(selRecords[0].code || selRecords[0].id);
	});
	
	$('#lockBtn').click(function() {
		var selRecords = $('#tableList').bootstrapTable('getSelections');
		if(selRecords.length <= 0){
			alert("请选择记录");
			return;
		}
		if(selRecords.length >= 2){
			alert("请选择一条记录");
			return;
		}
		window.location.href = $("#basePath").val()+ "/forum/post_addedit.htm?type=4&code="+(selRecords[0].code || selRecords[0].id);
	});
	
	$('#multideleteBtn').click(function() {
		var selRecords = $('#tableList').bootstrapTable('getSelections');
		if(selRecords.length <= 0){
			alert("请选择记录");
			return;
		}
		
		if(!confirm("确认是否删除该记录？")){
    		return false;
    	}
    	var url = $("#basePath").val()+ router + '/multi/check';
    	var codeList = [];
    	selRecords.forEach(function(item) {
    		codeList.push(item.code);
    	});
    	var data = {codeList: codeList, type: '1', approveResult: '0', approveNote: '删除'};
		ajaxPost(url, data).then(function(res) {
			if (res.success) {
				alert('操作成功');
				$('#tableList').bootstrapTable('refresh',{url: $('#tableList').bootstrapTable('getOptions').url});
			}
		});
	});
})

