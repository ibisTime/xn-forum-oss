$(function() {
    var view = getQueryString('v');

    var code = getQueryString('code');
    var isGlobal = !getQueryString('b');


    var fields = [{
            title: '标题',
            field: 'title',
            required: true,
            maxlength: 30,
            readonly: view
        }, {
            title: '内容',
            field: 'content',
            required: true,
            type: 'textarea',
            readonly: view
        },
        // {
        //     title: '类型',
        //     field: 'type',
        //     required: true,
        //     type: 'select',
        //     key: 'msg_type',
        //     value: '2',
        //     hidden: true
        // },
        {
            field: ' ',
            title: '作用地区',
            type: 'select',
            listCode: '',
            //url: $('#basePath').val() + '/user/level/page?start=1&limit=100000',
            keyName: 'code',
            valueName: 'name',
            defaultOption: 'All',
            defaultValue: '0',
            required: true,
            readonly: view,
            hidden: !isGlobal
        },
        {
            field: 'toLevel',
            title: '作用等级',
            type: 'select',
            listCode: '',
            //url: $('#basePath').val() + '/user/level/page?start=1&limit=100000',
            keyName: 'code',
            valueName: 'name',
            defaultOption: 'All',
            defaultValue: '0',
            required: true,
            readonly: view
        }, {
            title: '作用人',
            field: ' ',
            listCode: "",
            keyName: "",
            valueName: '',
            readonly: view
        }
    ];

    if (!isGlobal) {
        fields.push({
            field: 'companyCode',
            type: 'hidden',
            value: getCityId(getUserId())
        });
    }

    buildDetail({
        fields: fields,
        code: code,
        addCode: '  ',
        editCode: ' ',
        detailCode: ' ',
        view: view
    });
});