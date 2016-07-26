$(function() {
	//获取菜单URL入参
	var code = getQueryString("code");
	//新增修改判断
	var data = {"code":code};
	var url = $("#basePath").val()+"/product/detail";
	doGetAjax(url, data, doSucBackGetDetail);

	
	//返回
	$('#backBtn').click(function() {
		location.href = $("#basePath").val()+"/product/product.htm";
	});
});


//获取详情回调方法
function doSucBackGetDetail(res){
	if (res.success) {
		$("#category").html(Dict.getName('pro_category', res.data.category));
		$("#type").html(Dict.getName('product_type', res.data.type));
		$("#name").html(res.data.name);
		$("#advTitle").html(res.data.advTitle);
		$("#remark").html(res.data.remark);
		$("#order").html(res.data.orderNo);
		$("#status").html(Dict.getName('product_status', res.data.status));
		$("#updater").html(res.data.updater);
		$("#updateDatetime").html(dateFormat(res.data.updateDatetime));
		$("#img1").attr('src',res.data.advPic);
		$("#img2").attr('src',res.data.typePic);
	}else{
		alert(res.msg);
	}
}




