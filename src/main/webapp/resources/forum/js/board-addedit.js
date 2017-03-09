$(function() {

	var code = getQueryString('code');
	var router = '/forum/board';
	var branch = !!getQueryString('b');
	var cityId = branch ? 0 : getCityId(getUserId());

	var fields = [{
		field: 'siteCode',
		type: 'hidden',
		value: cityId
	}, {
		hidden: true,
		field: 'location',
		value: '1'
	}, {
		field : 'kind',
		title : '大类',
		url: $('#basePath').val() + '/forum/board/kind/list?companyCode=' + cityId,
		search: true,
		required: true,
		type: 'select',
		keyName: 'code',
		valueName: 'name',
    }, {
		title: '名称',
		field: 'name',
		required: true,
		maxlength: 32
	}, {
		title: '状态',
		field: 'status',
		required: true,
		type: 'select',
		key: 'active_status'
	}, {
		title: '顺序',
		field: 'orderNo',
		required: true,
		maxlength: 10,
		number: true
	},
//	{
//		title: '版主',
//		field: 'userId',
//		required: true,
//		type: 'select',
//		url: $("#basePath").val() + '/customer/list?companyCode=' + cityId,
//		keyName: 'userId',
//		valueName: 'loginName',
//		hidden: branch
//	},
	{
		title: '版主手机号',
		field: 'mobile',
		required: true,
		mobile: true,
		afterSet: function(v, data){
			var res = v;
			if(code && !branch && data.userId){
				$.ajax({
			        type: 'get',
			        async: false,
			        url: $("#basePath").val() + '/customer/list?userId=' + data.userId + "&companyCode="+cityId,
			        dataType: 'json',
			        success: function (d) {
			            res = d.data[0].mobile;
			        }
			    });
				$("#mobile").val(res);
			}
		},
		hidden: branch
	},
	{
		title: '图片',
		field: 'pic',
		required: true,
		type: 'img'
	}, {
		title: '备注',
		field: 'remark',
		maxlength: 200
	}];

	buildDetail(router, fields, code, {
		beforeSubmit: function(data){
			if(!branch){
				$.ajax({
			        type: 'get',
			        async: false,
			        url: $("#basePath").val() + '/customer/list?companyCode='+cityId+'&mobile=' + data.mobile,
			        dataType: 'json',
			        success: function (d) {
			        	if(!d.data.length){
			        		data = false;
			        		alert("版主手机号不存在");
			        	}else {
			        		data.userId = d.data[0].userId;
			        	}
			        }
			    });
				return data;
			}else{
				return true;
			}
		}
	});
});
