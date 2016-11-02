$(function() {
	
	var code = getQueryString('code');
	var router = '/forum/post';
	
	var fields = [{
		field: 'plateCode',
		title: '版块',
		type: 'select',
		url: $('#basePath').val() + '/forum/board/list?siteCode=' + getCityId(getUserId()),
		keyName: 'code',
		valueName: 'name',
		readonly: true
	}, {
		title: '标题',
		field: 'title',
		readonly: true
	}, {
		title: '内容',
		field: 'content',
		readonly: true
	}, {
		title: '图片',
		field: 'picArr',
		readonly: true,
		type: 'img'
	}, {
		title: '发帖人',
		field: 'loginName',
		readonly: true
	}, {
		title: '发帖时间',
		field: 'publishDatetime',
		readonly: true,
		formatter: dateTimeFormat
	}, {
		title: '状态',
		field: 'status',
		readonly: true,
		type: 'select',
		key: 'post_status'
	}, {
		field: 'remark',
		title: '备注',
		readonly: true
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
					data.type = 1;
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
					data.type = 1;
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