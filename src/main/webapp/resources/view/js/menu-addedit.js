$(function() {
	
	var code = getQueryString('code');
	var isBranch = !!getQueryString('b');
	var router = '/view';
	
	var innerSelect = {'page:headline': '头条页', 
			'page:forum': '有料页',
			'page:xiaomi': '客服页',
			'page:custom': '自定义页',
			'page:mine': '个人中心页',
			'page:mall': '商城页',
			'page:board': '版块页'};
	
	if (!code && isBranch) {
		$('.form-title').after('<div class="alert-warning">请先修改类型为菜单的记录，方可新增该菜单的引流</div>');
	} else {
		innerSelect['page:signin'] = '签到';
	}
	
	var fields = [{
		field: 'status',
		type: 'hidden',
		value: '1'
	}, {
		field: 'location',
		type: 'hidden',
		value: '0'
	}, {
		field: 'companyCode',
		type: 'hidden',
		value: isBranch ? getCityId(getUserId) : '0'
	}, {
		field: 'isCompanyEdit',
		type: 'hidden',
		value: isBranch ? '1' : '0'
	}, {
		field: 'type',
		title: '类型',
		type: 'select',
		hidden: true,
		key: 'view_type',
		defaultValue: isBranch ? '4': '',
		afterSet: function(v) {
			if (v == 1 && isBranch) {
				$('#orderNo').parent().hide();
			}
		}
	}, {
		title: '名字',
		field: 'name',
		required: true,
		maxlength: 30
	}, {
		field: 'parentCode',
		title: '父菜单',
		type: 'select',
		url: code ? $('#basePath').val() + '/view/list/company?type=1&companyCode=' + (getCityId(getUserId) || 0) :
			$('#basePath').val() + '/view/list?type=1&companyCode=' + (getCityId(getUserId) || 0),
		keyName: 'code',
		valueName: 'name',
		hidden: code || !isBranch,
		required: true
	}, {
		title: '顺序',
		field: 'orderNo',
		required: true,
		number: true,
		maxlength: 10
	}, {
		title: 'url类型',
		field: 'urlKind',
		required: true,
		type: 'select',
		data: {'1': '内部', '2': '外部'},
		onChange: function(r) {
			if (r == 1) {
				$('#url1').parent().show();
				$('#url').parent().hide();
				$('#plateCode').parent().hide();
			} else if (r == 2) {
				$('#url1').parent().hide();
				$('#url').parent().show();
				$('#plateCode').parent().hide();
			} else {
				$('#url1').parent().hide();
				$('#url').parent().hide();
				$('#plateCode').parent().hide();
			}
			$('#url1').val('');
			$('#plateCode').val('');
			$('#url').val('');
		},
		value: function(r) {
			if (r.url.indexOf('page:') == -1) {
				return '2';
			} else {
				return '1';
			}
		}
	}, {
		title: '内部页',
		field: 'url1',
		required: true,
		type: 'select',
		data: innerSelect,
		onChange: function(r) {
			$('#url').val(r);
			if (r == 'page:board') {
				$('#plateCode').parent().show();
			} else {
				$('#plateCode').parent().hide();
			}
		},
		value: function(r) {
			if (r.url.indexOf('page:') == -1) {
				return '';
			} else {
				return r.url.split(',')[0];
			}
		}
	}, {
		title: '版块',
		field: 'plateCode',
		url: $('#basePath').val() + '/forum/board/list?siteCode=' + (getCityId(getUserId) || '0'),
		keyName: 'code',
		valueName: 'name',
		type: 'select',
		required: true,
		hidden: true,
		onChange: function(r) {
			$('#url').val('page:board,code:'+r);
		},
		value: function(r) {
			if (r.url.indexOf('page:') == -1) {
				return '';
			} else {
				return r.url.split(',').length > 1 && r.url.split(',')[1].replace('code:', '') || '';
			}
		}
	}, {
		title: 'url',
		field: 'url',
		required: true,
		maxlength: 200
	}, {
		title: '图片',
		field: 'pic',
		type: 'img',
		required: true
	}, {
		title: '属于',
		field: 'belong',
		required: true,
		type: 'select',
		key: 'view_belong',
		data: {'1': '全局', '2': '地方默认'},
		emptyValue: '0',
		hidden: isBranch
	}];
	var holder = $('<div class="float-img"><img style="width: 250px;" src="'+$('#resourceUrl').val()+'/resources/view/img/headline.png"/></div>').appendTo('body');
	
	buildDetail(router, fields, code);
	$(document).on('mouseover', '#url1_chosen .active-result', function(e) {
		var value = $('#url1').find('option').eq($(this).data('optionArrayIndex')).val().replace('page:', '');
		if (value) {
			var src = $('#resourceUrl').val()+'/resources/view/img/'+value+'.png';
			holder.find('img')[0].src = src;
			holder.show();
			holder[0].style.top = (e.pageY - 200) + 'px';
			holder[0].style.left = (e.pageX + 250) + 'px';
		} else {
			holder.hide();
		}
		
	});
	
	$(document).on('mouseleave', '#url1_chosen .chosen-drop', function(e) {
		holder.hide();
	});
	
	$("#url1").chosen().change(function() {
		holder.hide();
	});
});