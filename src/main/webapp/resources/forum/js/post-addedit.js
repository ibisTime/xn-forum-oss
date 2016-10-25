$(function() {
	
	var code = getQueryString('code');
	var type = getQueryString('type'); // 1置顶、2精华、3转版、4锁帖、5头条
	var router = '/forum/post';
	
	var fields = [{
		field: 'plateCode1',
		title: '版块',
		type: 'select',
		'[value]': 'plateCode',
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
		field: 'publisher',
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
		title: '有效期',
		field: 'endDatetime',
		type: 'datetime',
		required: true,
		minDate: dateFormat(Date.now()),
		hidden: type != 1 && type !=2 && type !=5
	}, {
		title: '转版到',
		field: 'plateCode',
		type: 'select',
		url: $('#basePath').val() + '/forum/board/list?siteCode=' + getCityId(getUserId()),
		keyName: 'code',
		valueName: 'name',
		value: '',
		required: true,
		hidden: type != 3
	}];
	
	var buttons = [];
	if (type == 1) {
		buttons.push({
			title: '保存',
			handler: function() {
				if ($('#jsForm').valid()) {
					var data = $('#jsForm').serializeObject();
					data.location = 'A';
					var url = $("#basePath").val()+ router + "/location";
					ajaxPost(url, data).then(function(res) {
						if (res.success) {
							alert("操作成功");
							goBack();
						}
					});
				}
			}
		});
	} else if (type == 2) {
		buttons.push({
			title: '保存',
			handler: function() {
				if ($('#jsForm').valid()) {
					var data = $('#jsForm').serializeObject();
					data.location = 'B';
					var url = $("#basePath").val()+ router + "/location";
					ajaxPost(url, data).then(function(res) {
						if (res.success) {
							alert("操作成功");
							goBack();
						}
					});
				}
			}
		});
	} else if (type == 5) {
		buttons.push({
			title: '保存',
			handler: function() {
				if ($('#jsForm').valid()) {
					var data = $('#jsForm').serializeObject();
					data.location = 'C';
					var url = $("#basePath").val()+ router + "/location";
					ajaxPost(url, data).then(function(res) {
						if (res.success) {
							alert("操作成功");
							goBack();
						}
					});
				}
			}
		});
	} else if (type == 3) {
		buttons.push({
			title: '保存',
			handler: function() {
				if ($('#jsForm').valid()) {
					var data = $('#jsForm').serializeObject();
					var url = $("#basePath").val()+ router + "/change";
					ajaxPost(url, data).then(function(res) {
						if (res.success) {
							alert("操作成功");
							goBack();
						}
					});
				}
			}
		});
	} else if (type == 4) {
		buttons.push({
			title: '保存',
			handler: function() {
				if ($('#jsForm').valid()) {
					var data = $('#jsForm').serializeObject();
					var url = $("#basePath").val()+ router + "/lock";
					ajaxPost(url, data).then(function(res) {
						if (res.success) {
							alert("操作成功");
							goBack();
						}
					});
				}
			}
		});
	}
	
	buttons.push({
		title: '返回',
		handler: function() {
			goBack();
		}
	});
	
	buildDetail(router, fields, code, {
		buttons: buttons
	});
	
});