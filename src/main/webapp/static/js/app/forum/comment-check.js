$(function() {

    var code = getQueryString('code');


    var fields = [{
        title: '针对',
        field: 'parentCode',
        readonly: true,
        formatter: function(v, r) {
            if (r.post) {
                return '帖子：' + text3dot(r.post.title || r.post.content, 10);
            } else if (r.parentComment) {
                return '评论：' + text3dot(r.post.content, 10);
            }
        }
    }, {
        title: '内容',
        field: 'content',
        readonly: true
    }, {
        title: '评论人',
        field: 'loginName',
        readonly: true
    }, {
        title: '评论时间',
        field: 'commDatetime',
        readonly: true,
        formatter: dateTimeFormat
    }, {
        title: '备注',
        field: 'remark',
        readonly: true
    }, {
        title: '状态',
        field: 'status',
        readonly: true,
        type: 'select',
        key: 'comment_status'
    }, {
        title: '意见说明',
        field: 'approveNote',
        //value: '',
        required: true,
        maxlength: 250
    }];

    var options = {
        fields: fields,
        code: code,
        detailCode: ' '
    };

    options.buttons = [{
        title: '通过',
        handler: function() {
            if ($('#jsForm').valid()) {
                var data = {};
                data['code'] = code;
                data['approver'] = sessionStorage.getItem('userName');
                data["approveResult"] = "1";
                data["type"] = "2";
                data["approveNote"] = $("#approveNote").val();
                reqApi({
                    code: " ",
                    json: data
                }).done(function() {
                    sucDetail();
                });
            }
        }
    }, {
        title: '不通过',
        handler: function() {
            if ($('#jsForm').valid()) {
                var data = {};
                data['code'] = code;
                data['approver'] = sessionStorage.getItem('userName');
                data["approveResult"] = "0";
                data["type"] = "2";
                data["remark"] = $("#remark").val();
                reqApi({
                    code: " ",
                    json: data
                }).done(function() {
                    sucDetail();
                });
            }
        }
    }, {
        title: '返回',
        handler: function() {
            goBack();
        }
    }];

    buildDetail(options);

});