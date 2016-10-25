$(function() {
	
	var code = getQueryString('code');
	var router = '/forum/comment';
	
	var fields = [{
		title: '针对',
		field: '',
		readonly: true,
		value: '1'
	}, {
		title: '内容',
		field: 'content',
		readonly: true
	}, {
		title: '评论人',
		field: 'commer',
		readonly: true
	}, {
		title: '评论时间',
		field: 'commDatetime',
		readonly: true,
		formatter: dateTimeFormat
	}, {
		title: '状态',
		field: 'status',
		readonly: true,
		type: 'select',
		key: 'comment_status'
	}, {
		title: '意见说明',
		field: 'approveNote',
		value: '',
		required: true,
		maxlength: 250
	}];
	
	buildDetail(router, fields, code, {
		buttons: [{
			title: '通过',
			handler: function() {
				if ($('#jsForm').valid()) {
					var data = $('#jsForm').serializeObject();
					data.status = 1;
					var url = $("#basePath").val()+ router + "/check";
					ajaxPost(url, data).then(function(res) {
						if (res.success) {
							alert("操作成功");
							goBack();
						}
					});
				}
			}
		}, {
			title: '删除',
			handler: function() {
				 $("#approveNote").rules("add",{required:false}); 
				if ($('#jsForm').valid()) {
					var data = $('#jsForm').serializeObject();
					var url = $("#basePath").val()+ router + "/delete";
					ajaxPost(url, data).then(function(res) {
						if (res.success) {
							alert("操作成功");
							goBack();
						}
					});
				}
			}
		}, {
			title: '忽略',
			handler: function() {
				if ($('#jsForm').valid()) {
					var data = $('#jsForm').serializeObject();
					data.status = 0;
					var url = $("#basePath").val()+ router + "/check";
					ajaxPost(url, data).then(function(res) {
						if (res.success) {
							alert("操作成功");
							goBack();
						}
					});
				}
			}
		}, {
			title: '返回',
			handler: function() {
				goBack();
			}
		}]
	});
	
});