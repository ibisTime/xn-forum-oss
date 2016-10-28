$(function() {
	
	var code = getQueryString('code');
	var isGlobal = !getQueryString('b');
	var router = '/message';
	
	var fields = [{
		field: 'companyCode',
		type: 'hidden',
		value: isGlobal ? '0' : getCityId(getUserId())
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
		defaultValue: isGlobal ? '0' : getCityId(getUserId()),
		hidden: !isGlobal,
		required: true,
		onChange: function(v, r) {
			v = (v == '0' ? '' : v);
			$('#toUser').renderDropdown({
				url: $('#basePath').val() + '/customer/page?level='+(($('#toLevel').val() == '0') ? '' : $('#toLevel').val())+'&companyCode='+v+'&start=1&limit=100000',
				keyName: 'userId',
				valueName: 'loginName',
				defaultOption: '<option value="0">All</option>'
			});
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
			v = (v == '0' ? '' : v);
			$('#toUser').renderDropdown({
				url: $('#basePath').val() + '/customer/page?level='+v+'&companyCode='+($('#toCompany').val() == 0 ? '' : $('#toCompany').val())+'&start=1&limit=100000',
				keyName: 'userId',
				valueName: 'loginName',
				defaultOption: '<option value="0">All</option>'
			});
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
	
});