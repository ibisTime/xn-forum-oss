$(function() {
	
	var code = getQueryString('code');
	var router = '/forum/comment';
	
	var fields = [{
		title: '针对',
		field: 'parentCode',
		readonly: true,
		formatter: function(v, r) {
			if (r.post) {
				return '帖子：' + text3dot(r.post.title || r.post.content, 10);
			} else if (r.parentComment) {
				return '评论：' + text3dot(r.post.content, 10);
			}
		}
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
					data.approveResult = 1;
					data.type = 2;
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
				if ($('#jsForm').valid()) {
					var data = $('#jsForm').serializeObject();
					data.approveResult = 0;
					data.type = 2;
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