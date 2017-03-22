$(function() {

    // var branch = getQueryString('b') || "";


    var columns = [{
        field: '',
        title: '',
        checkbox: true
    }, {
        field: 'name',
        title: '名称',
        search: true
    }, {
        field: 'orderNo',
        title: '次序'
    }];
    buildList({
        router: 'kind',
        columns: columns,
        pageCode: "610015",
        deleteCode: "610011",
        // searchParams: {
        //     'companyCode': branch ? 0 : getCityId(getUserId())
        // },
        // urlParams: {
        //     b: branch
        // },

    });
})