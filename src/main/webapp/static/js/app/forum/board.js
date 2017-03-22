$(function() {

    var branch = getQueryString('b') || "";
    //var cityId = branch ? 0 : getCityId(getUserId());

    var columns = [{
        field: '',
        title: '',
        checkbox: true
    }, {
        field: 'name',
        title: '名称',
        search: true
    }, {
        field: 'kind',
        title: '大类',
        listCode: '',
        // url: $('#basePath').val() + '/forum/board/kind/list?companyCode=' + cityId,
        search: true,
        type: 'select',
        keyName: 'code',
        valueName: 'name'
    }, {
        field: 'status',
        title: '状态',
        formatter: Dict.getNameForList('active_status'),
        search: true,
        key: 'active_status'
    }, {
        field: 'yyy',
        title: '位置',
        formatter: Dict.getNameForList(' '),
        search: true,
        key: ' '
    }, {
        field: 'loginName',
        title: '版主'
    }, {
        field: 'remark',
        title: '备注'
    }];
    //  branch && columns.splice(4, 1);
    buildList({
        router: 'board',
        columns: columns,
        pageCode: '',
        // searchParams: {
        //     'siteCode': cityId
        // },
        // urlParams: {
        //     b: branch
        // }
    });
});