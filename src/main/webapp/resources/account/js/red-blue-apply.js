$(function(){
	$('#direction').renderDropdown(Dict.getName('account_direction'));
	
	$('#accountNumber').renderDropdown({
		url: $("#basePath").val() + '/customer/rel/list',
		keyName: 'userId',
		valueName: 'mobile'
	});
	
	$('#saveBtn').click(function() {
		if(!$("#jsForm").valid()){
			return false;
		}
		var data = {"amount":moneyParse($("#amount").val()),"applyNote":$("#applyNote").val()};
		ajaxGet($("#basePath").val() + '/account/id', {
			userId: $('#accountNumber').val(),
			currency: 'CNY'
		}, false, true).then(function(res) {
			data.accountNumber = res.data.accountNumber;
		});
		data["direction"]=$("#direction").val();
		var url = $("#basePath").val()+"/account/artificialAccountApply";
		doPostAjax(url, data, doSuccessBack);
	});
	
	//返回
	$('#backBtn').click(function() {
		goBack();
	});
	
	//入参合法性校验
	$("#jsForm").validate({
		rules: {
			
			accountNumber: {
				required: true,
				maxlength: 32
			},
			direction: {
				required: true,
				maxlength: 1
			},
			amount: {
				required: true,
				number:true,
				maxlength: 19,
				min:0
			},
			applyUser: {
				required: true,
				maxlength: 255,
			},
			applyNote: {
				required: true,
				maxlength: 255
			}
		}
	});
});

function doSuccessBack(res) {
	if (res.success == true) {
		alert("操作成功");
		goBack();
	}else{
		alert(res.msg);
	}
}