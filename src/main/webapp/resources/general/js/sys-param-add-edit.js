//页面初始化
$(function(){
	var id = getQueryString('id');
	var note = UE.getEditor('note');
	//新增修改判断
	if(isBlank(id)){
		$("#operate").val("add");
	}else{
		$("#operate").val("edit");
		$("#operContent").text("修改系统参数");
		var data = {"id":id};
		var url = $("#basePath").val()+"/general/system/param/detail";
		doGetAjax(url, data, function(res) {
			if (res.success) {
				var result = res.data;
				$("#id").val(result.id);
				$('#key').replaceWith($('<span>'+result.ckey+'</span>'));
				$("#value").val(result.cvalue);
				note.ready(function() {
					note.setContent(result.note);
				});
				$("#remark").val(result.remark);
			}
		});
	}
	
	//提交
	$('#subBtn').click(function() {
	    if(!$("#jsForm").valid()){
			return false;
		}
		var data = $('#jsForm').serializeObject();
		var url = $("#basePath").val()+"/general/system/param/" + $("#operate").val();
		ajaxPost(url, data).then(function(res) {
			if (res.success) {
				alert("操作成功");
				window.location.href = $("#basePath").val()+"/general/sys_param.htm";
			}
		});
	});
	
	//返回
	$('#backBtn').click(function() {
		location.href = $("#basePath").val()+"/general/sys_param.htm";
	});
	
	//入参合法性校验
	$("#jsForm").validate({
		rules: {
			key: {
				required: true,
				maxlength: 20
			},
			value: {
				required: true,
				maxlength: 255
			},
			note: {
				required: true
			},
			remark: {
				required: false,
				maxlength: 200
			}
		}
	});
});


function doSuccessBack(res) {
	if (res.success == true) {
		alert("操作成功");
		window.location.href = $("#basePath").val()+"/general/sys_param.htm";
	}
}