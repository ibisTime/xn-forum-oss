$(function() {
	var code = getQueryString('code');
	var router = '/general/city';
	
	var fields = [{
		title: '名称',
		field: 'name',
		readonly: true
	}, {
		title: '负责人',
		field: 'userId',
		type: 'select',
		url: $("#basePath").val() + '/user/detail',
		keyName: 'userId',
		valueName: 'loginName',
		readonly: true
	}, {
		title: '优先级',
		field: 'location',
		type: 'select',
		key: 'city_location',
		readonly: true,
	}, {
		title: '电话',
		field: 'mobile',
		readonly: true
	}, {
		title: '邮箱',
		field: 'email',
		readonly: true
	}, {
		title: '地址',
		field: 'province',
		readonly: true,
		formatter: function(v, r) {
			var res = $.unique([r.province, r.city, r.area]).reverse();
			return res.join(' ') + ' ' + r.address;
		}
	}, {
		title: '域名',
		field: 'domain',
		readonly: true
	}, {
		title: 'logo',
		field: 'logo',
		type: 'img',
		readonly: true
	}, {
		title: '二维码',
		field: 'qrCode',
		type: 'img',
		readonly: true
	}, {
		title: '公司简介',
		field: 'description',
		readonly: true
	}, {
		title: '备注',
		field: 'remark',
		readonly: true
	}];
	
	buildDetail(router, fields, code, {
		buttons: [{
			title: '返回',
			handler: function() {
				goBack();
			}
		}]
	});
});