$(function(){
	showPermissionControl();
	
	var router = '/forum/comment';
	var columns = [{
		field : '',
		title : '',
		checkbox : true
	}, {
		field : '',
		title : '针对',
		formatter: function(v, r) {
			if (r.post) {
				return '帖子：' + text3dot(r.post.title || r.post.content, 10);
			} else if (r.parentComment) {
				return '评论：' + text3dot(r.post.content, 10);
			}
		}
	}, {
		field : 'content',
		title : '内容',
		search: true
	}, {
		field : 'status',
		title : '状态',
		formatter: Dict.getNameForList('comment_status'),
		type: 'select',
		key: 'comment_status'
    }, {
    	field : 'commer',
		title : '评论人'
	}, {
		field: 'commDatetime',
		title: '评论时间',
		formatter: dateTimeFormat
	}];
	buildList(router, columns, {
		searchParams: {
			siteCode: getCityId(getUserId()),
			status: 'C2'
		},
		singleSelect: false
	});
	
	var d = dialog({
	    content: '<form class="pop-form" id="popForm" novalidate="novalidate">' +
		    '<div class="form-body">' +
	    	'<ul class="form-info">' +
            '<li type="" style=""><label><b>*</b>意见说明:</label><input id="approveNote" name="approveNote" class="control-def"></li>' +
	    	'<li><input id="popBtn1" type="button" class="btn" value="通过"><input id="popBtn2" type="button" class="btn margin-left-10" value="删除"><input id="popBtn3" type="button" class="btn margin-left-10" value="返回"></li></ul>' +
            '</div></form>'
	});
	
	$(document).on('click', '#popBtn3', function() {
		d.close();
	});
	
	$(document).on('click', '#popBtn1', function() {
		$('#popForm').validate({'rules': {
			approveNote: {
				required: true,
				maxlength: 200
			}
		}});
		if ($('#popForm').valid()) {
			var selRecords = $('#tableList').bootstrapTable('getSelections');
			var data = $('#popForm').serializeObject();
			data.approveResult = '1';
			data.type = '2';
			data.codeList = [];
			selRecords.forEach(function(item) {
				data.codeList.push(item.code);
			});
			var url = $("#basePath").val()+ '/forum/comment/multi/check';
			ajaxPost(url, data).then(function(res) {
				if (res.success) {
					alert("操作成功");
					$('#tableList').bootstrapTable('refresh',{url: $('#tableList').bootstrapTable('getOptions').url});
					d.close();
				}
			});
		}
	});
	
	$(document).on('click', '#popBtn2', function() {
		$('#popForm').validate({'rules': {
			approveNote: {
				required: true,
				maxlength: 200
			}
		}});
		if ($('#popForm').valid()) {
			var selRecords = $('#tableList').bootstrapTable('getSelections');
			var data = $('#popForm').serializeObject();
			data.approveResult = '0';
			data.type = '2';
			data.codeList = [];
			selRecords.forEach(function(item) {
				data.codeList.push(item.code);
			});
			var url = $("#basePath").val()+ '/forum/comment/multi/check';
			ajaxPost(url, data).then(function(res) {
				if (res.success) {
					alert("操作成功");
					$('#tableList').bootstrapTable('refresh',{url: $('#tableList').bootstrapTable('getOptions').url});
					d.close();
				}
			});
		}
	});
	
	$('#multicheckBtn').click(function() {
		var selRecords = $('#tableList').bootstrapTable('getSelections');
		if(selRecords.length <= 0){
			alert("请选择记录");
			return;
		}
		
		d.showModal();
	});
})

