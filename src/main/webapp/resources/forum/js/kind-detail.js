$(function() {
	
	var code = getQueryString('code');
	var router = '/forum/board/kind';
	
	var fields = [{
		title: '名称',
		field: 'name',
		readonly: true
	}, {
		title: '顺序',
		field: 'orderNo',
		readonly: true
	}];
	
	buildDetail(router, fields, code, {
		buttons: [{
			'title': '返回',
			handler: function() {
				goBack();
			}
		}]
	});
	
});