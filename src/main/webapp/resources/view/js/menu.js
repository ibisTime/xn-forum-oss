$(function() {
	//按钮权限判断
	showPermissionControl();
	var isBranch = !!getQueryString('b');

	var router = '/view';
	var columns = [{
		field : '',
		title : '',
		checkbox : true
	}, {
		field: 'name',
		title: '名字',
		search: true
	}, {
		field: 'parentCode',
		title: '父菜单',
		type: 'select',
		url: $('#basePath').val() + '/view/list?companyCode=0',
		keyName: 'code',
		valueName: 'name'
	}, {
		field : 'type',
		title : '类型',
		formatter: Dict.getNameForList('view_type'),
		search: true,
		key: 'view_type'
    },{
    	field : 'orderNo',
    	title: '顺序'
    },{
    	field : 'belong',
		title : '属于',
		formatter: function(v) {
			if (v == 1) {
				return '全局';
			} else if (v == 2) {
				return '地方默认';
			} else {
				return '私有';
			}
		}
	}, {
		field: 'companyCode',
		title: '所属城市',
		type: 'select',
		url: $('#basePath').val() + '/general/city/list',
		keyName: 'code',
		valueName: 'name'
	}];

	var searchParams = {isDfNavigate: 0,companyCode: 0};
	if (isBranch) {
		searchParams.companyCode = getCityId(getUserId());
		searchParams.isDfNavigate = 1;
	}

	buildList(router, columns, {
		searchParams: searchParams,
		pageRouter: '/view/menu',
		urlParams: isBranch ? {b: 1} : {},
		beforeEdit: function(data) {
			if (data.companyCode != '0' && !isBranch) {
				alert('私有记录不能修改');
				return false;
			}
			return true;
		}
	});
	$('#editBtn').off("click").click(function() {
		var selRecords = $('#tableList').bootstrapTable('getSelections');
		if(selRecords.length <= 0){
			alert("请选择记录");
			return;
		}
		else if(selRecords.length >= 2){
			alert("请选择一条记录");
			return;
		}
		if (selRecords[0].companyCode != '0' && !isBranch) {
			alert('私有记录不能修改');
			return false;
		}
		var param = isBranch ? "&b=1" : "";
		param = param + (selRecords[0].parentCode ? "&p=" + selRecords[0].parentCode : "");
		window.location.href = $("#basePath").val() + "/view/menu_addedit.htm?code="+(selRecords[0].code || selRecords[0].id) + param;
	});
});
