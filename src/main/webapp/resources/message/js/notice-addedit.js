$(function() {
	
	var code = getQueryString('code');
	var isGlobal = !getQueryString('b');
	var router = '/message';
	var cityId = isGlobal ? '0' : getCityId(getUserId());
	
	var fields = [{
		field: 'companyCode',
		type: 'hidden',
		value: cityId
	},{
		title: '标题',
		field: 'title',
		required: true,
		maxlength: 30
	}, {
		title: '内容',
		field: 'content',
		required: true,
		type: 'textarea'
	}, {
		title: '类型',
		field: 'type',
		required: true,
		type: 'select',
		key: 'msg_type',
		value: '1',
		hidden: true
	}, {
		field : 'toCompany',
		title : '作用地区',
		type: 'select',
		url: $('#basePath').val() + '/general/city/page?start=1&limit=100000',
		keyName: 'code',
		valueName: 'name',
		defaultOption: 'All',
		defaultValue: cityId,
		hidden: !isGlobal,
		required: true,
		onChange: function(v, r) {
			var mobile = $("#mobile");
			if(mobile.val() && mobile.valid()){
				v = (v == '0' ? '' : v);
				$('#toUser').renderDropdown({
					url: $('#basePath').val() + '/customer/page?mobile='+mobile.val()+'&level='+(($('#toLevel').val() == '0') ? '' : $('#toLevel').val())+'&companyCode='+v+'&start=1&limit=100000',
					keyName: 'userId',
					valueName: 'loginName',
					defaultOption: '<option value="0">All</option>'
				});
			}else{
				$('#toUser').renderDropdown2({}, '<option value="0">All</option>');
			}
		}
	}, {
		field : 'toLevel',
		title : '作用等级',
		type: 'select',
		url: $('#basePath').val() + '/user/level/page?start=1&limit=100000',
		keyName: 'code',
		valueName: 'name',
		defaultOption: 'All',
		required: true,
		onChange: function(v, r) {
			var mobile = $("#mobile");
			if(mobile.val() && mobile.valid()){
				v = (v == '0' ? '' : v);
				$('#toUser').renderDropdown({
					url: $('#basePath').val() + '/customer/page?mobile='+mobile.val()+'&level='+v+'&companyCode='+($('#toCompany').val() == 0 ? '' : $('#toCompany').val())+'&start=1&limit=100000',
					keyName: 'userId',
					valueName: 'loginName',
					defaultOption: '<option value="0">All</option>'
				});
			}else{
				$('#toUser').renderDropdown2({}, '<option value="0">All</option>');
			}
		}
	}, {
		field: 'mobile',
		title: '接受人手机号',
		mobile: true,
		required: false,
		afterSet: function(v, data){
			if(code && data.toUser != "0"){
				var res = v;
				if(!v){
					$.ajax({
				        type: 'get',
				        async: false,
				        url: $("#basePath").val() + '/customer/list?userId=' + data.toUser,
				        dataType: 'json',
				        success: function (d) {
				            res = d.data[0].mobile;
				        }
				    });
				}
				$("#mobile").val(res); 
				var val = $("#toLevel").val();
				val = (val == '0' ? '' : val);
				$('#toUser').renderDropdown({
					url: $('#basePath').val() + '/customer/page?mobile='+res+'&level='+val+'&companyCode='+($('#toCompany').val() == 0 ? '' : $('#toCompany').val())+'&start=1&limit=100000',
					keyName: 'userId',
					valueName: 'loginName',
					defaultOption: '<option value="0">All</option>'
				});
			}else{
				$('#toUser').renderDropdown2({}, '<option value="0">All</option>');
			}
		}
	}, {
		field : 'toUser',
		title : '作用人',
		type: 'select',
		defaultOption: 'All',
		defaultValue: '0',
		required: true
	}, {
		title: '备注',
		field: 'remark',
		maxlength: 250
	}];
	
	if (!isGlobal) {
		fields.push();
	}
	
	buildDetail(router, fields, code);
	$("#mobile").on("keyup", function(){
		var _self = $("#mobile");
		if($("#toLevel").valid() && _self.val() && _self.valid()){
			var v = $("#toLevel").val();
			v = (v == '0' ? '' : v);
			$('#toUser').renderDropdown({
				url: $('#basePath').val() + '/customer/page?mobile='+_self.val()+'&level='+v+'&companyCode='+($('#toCompany').val() == 0 ? '' : $('#toCompany').val())+'&start=1&limit=100000',
				keyName: 'userId',
				valueName: 'loginName',
				defaultOption: '<option value="0">All</option>'
			});
		}else{
			$('#toUser').renderDropdown2({}, '<option value="0">All</option>');
		}
	});
});