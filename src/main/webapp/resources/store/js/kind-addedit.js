$(function() {
	
	var code = getQueryString('code');
	var router = '/store/product/kind';
	var cityId = getCityId(getUserId());
	
	var fields = [{
		field: 'companyCode',
		type: 'hidden',
		value: cityId
	}, {
		hidden: true,
		field: 'type',
		value: '2'
	}, {
		hidden: true,
		field: 'parentCode',
		value: '0'
	}, {
		title: '名称',
		field: 'name',
		required: true,
		maxlength: 32
	}, {
		title: '顺序',
		field: 'orderNo',
		required: true,
		maxlength: 10,
		number: true
	}, {
		title: '图片',
		field: 'pic',
		type: 'img'
	}];
	
	buildDetail(router, fields, code);
});