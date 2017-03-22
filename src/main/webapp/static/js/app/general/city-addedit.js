$(function() {
    var code = getQueryString('code');
    //var router = '/general/city';
    var view = getQueryString('v');

    var fields = [{
        field: 'isDefault',
        type: 'hidden',
        defaultValue: '0',
        readonly: view,
    }, {
        title: '名称',
        field: 'name',
        required: true,
        maxlength: 32,
        readonly: view,
    }, {
        title: '负责人',
        field: 'userId',
        required: true,
        type: 'select',
        pageCode: '',
        //url: $("#basePath").val() + '/user/list?roleCode=SR201600000000000002',
        keyName: 'userId',
        valueName: 'loginName',
        readonly: view,
    }, {
        title: '优先级',
        field: 'location',
        required: true,
        type: 'select',
        key: 'city_location',
        readonly: view,
    }, {
        title: '电话',
        field: 'mobile',
        required: true,
        phone: true,
        readonly: view,
    }, {
        title: '邮箱',
        field: 'email',
        required: true,
        email: true,
        maxlength: 30,
        readonly: view,
    }, {
        title: '地址',
        required: true,
        type: 'citySelect',
        readonly: view,
    }, {
        placeholder: '详细地址（如街道、门牌号等）',
        field: 'address',
        required: true,
        maxlength: 100,
        readonly: view,
    }, {
        title: '域名',
        field: 'domain',
        maxlength: 100,
        readonly: view,
    }, {
        title: 'logo',
        field: 'logo',
        type: 'img',
        readonly: view,
    }, {
        title: '二维码',
        field: 'qrCode',
        type: 'img',
        readonly: view,
    }, {
        title: '公司简介',
        field: 'description',
        type: 'textarea',
        required: true,
        readonly: view,
    }, {
        title: '备注',
        field: 'remark',
        maxlength: 250,
        readonly: view,
    }];

    //buildDetail(router, fields, code);
    buildDetail({
        fields: fields,
        code: code,
        view: view,
        addCode: ' ',
        editCode: ' ',
        detailCode: '',

    });




    //	if(!code){
    //		$('#subBtn').off("click").click(function() {
    //			if ($('#jsForm').valid()) {
    //				var data = $('#jsForm').serializeObject();
    //				$('#jsForm').find('input[type=file]').parent().next().each(function(i, el) {
    //					data[el.id] = $(el).attr('src');
    //				});
    //				if ($('#jsForm').find('#province')[0]) {
    //					var province = $('#province').val();
    //					var city = $('#city').val();
    //					var area = $('#area').val();
    //					if (!city) {
    //						data['city'] = province;
    //						data['area'] = province;
    //					} else if (!area) {
    //						data['city'] = province;
    //						data['area'] = city;
    //					} 
    //				}
    //				for (var i = 0, len = fields.length; i < len; i++) {
    //					var item = fields[i];
    //					if (item.equal && (!$('#' + item.field).is(':hidden') || !$('#' + item.field + 'Img').is(':hidden'))) {
    //						data[item.equal] = $('#' + item.field).val() || $('#' + item.field).attr('src');
    //					} else if (item.emptyValue && !data[item.field]) {
    //						data[item.field] = item.emptyValue;
    //					} else if (item.pass) {
    //						data[item.field] = $('#' + item.field).attr('data-value') || $('#' + item.field).html();
    //					}
    //				}
    //				data["isNeedInitPwd"] = "1";
    //				var url = $("#basePath").val()+ router + "/" + (code ? 'edit' : 'add');
    //				var url1 = $("#basePath").val()+ router + "/initblock";
    //				ajaxPost(url, data).then(function(res) {
    //					if (res.success) {
    //						ajaxPost(url1, {companyCode: res.data.code})
    //							.then(function(res){
    //								if(res.success){
    //									alert("操作成功");
    //									goBack();
    //								}
    //							});
    //					}
    //				});
    //			}
    //		});
    //	}
    //	
});