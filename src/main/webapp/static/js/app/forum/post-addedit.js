$(function() {

            var code = getQueryString('code');
            var type = getQueryString('type'); // 1置顶、2精华、3转版、4锁帖、5头条
            //	var router = '/forum/post';

            var fields = [{
                field: 'plateCode1',
                title: '版块',
                type: 'select',
                '[value]': 'plateCode',
                url: $('#basePath').val() + '/forum/board/detail',
                keyName: 'code',
                valueName: 'name',
                readonly: true
            }, {
                title: '标题',
                field: 'title',
                readonly: true
            }, {
                title: '内容',
                field: 'content',
                readonly: true
            }, {
                title: '图片',
                field: 'picArr',
                readonly: true,
                type: 'img'
            }, {
                field: 'location',
                title: '位置',
                key: 'post_location',
                type: 'select',
                readonly: true
            }, {
                field: 'validDatetimeEnd',
                title: '位置失效时间',
                formatter: dateTimeFormat,
                readonly: true
            }, {
                title: '发帖人',
                field: 'loginName',
                readonly: true
            }, {
                title: '发帖时间',
                field: 'publishDatetime',
                readonly: true,
                formatter: dateTimeFormat
            }, {
                title: '复核人',
                field: 'approver',
                readonly: true
            }, {
                title: '复核时间',
                field: 'approveDatetime',
                readonly: true,
                formatter: dateTimeFormat
            }, {
                title: '意见说明',
                field: 'approveNote1',
                '[value]': 'approveNote',
                readonly: true
            }, {
                title: '状态',
                field: 'status',
                readonly: true,
                type: 'select',
                key: 'post_status'
            }, {
                title: '有效期',
                field: 'endDatetime',
                type: 'datetime',
                required: true,
                minDate: dateFormat(Date.now()),
                hidden: type != 1 && type != 2 && type != 5
            }, {
                title: '转版到',
                field: 'plateCode',
                type: 'select',
                url: $('#basePath').val() + '/forum/board/list?siteCode=' + getCityId(getUserId()),
                keyName: 'code',
                valueName: 'name',
                value: '',
                required: true,
                hidden: type != 3
            }];
            var options = {
                fields: fields,
                code: code,
                detailCode: "",
            };
            options.buttons = [{
                    title: '保存',
                    handler: function() {
                        if ($('#jsForm').valid()) {
                            var data = $('#jsForm').serializeObject();
                            if (type == 1) {
                                data.location = 'A';
                                data.isAdd = '1';
                                reqApi({
                                    code: "",
                                    json: data
                                }).done(function() {
                                    sucDetail()
                                });
                            } else if (type == 2) {
                                data.location = 'B';
                                data.isAdd = '1';
                                reqApi({
                                    code: "",
                                    json: data
                                }).done(function() {
                                    sucDetail()
                                });
                            } else if (type == 5) {
                                data.location = 'C';
                                data.isAdd = '1';
                                reqApi({
                                    code: "",
                                    json: data
                                }).done(function() {
                                    sucDetail()
                                });
                            } else if (type == 3) {
                                confirm("帖子已经在该版块了").then(function() {
                                    reqApi({
                                        code: ' ',
                                        json: { "code": selRecords[0].code, data }
                                    }).then(function() {
                                        sucDetail()
                                    });
                                });
                            } else if (type == 4) {
                                reqApi({
                                    code: ' ',
                                    json: { "code": selRecords[0].code, data }
                                }).then(function() {
                                    sucDetail()
                                });
                            }
                        },
                    },
                    {
                        title: "返回",
                        handler: function() {
                            goBack();
                        }
                    }];


                // var buttons = [];
                // if (type == 1) {
                //     buttons.push({
                //         title: '保存',
                // handler: function() {
                //     if ($('#jsForm').valid()) {
                //         var data = $('#jsForm').serializeObject();
                //         data.location = 'A';
                //         data.isAdd = '1';
                //         var url = $("#basePath").val() + router + "/location";
                //         ajaxPost(url, data).then(function(res) {
                //             if (res.success) {
                //                 alert("操作成功");
                //                 goBack();
                //             }
                //         });
                //     }
                // }
                //     });
                // } else if (type == 2) {
                //     buttons.push({
                //         title: '保存',
                //         handler: function() {
                //             if ($('#jsForm').valid()) {
                //                 var data = $('#jsForm').serializeObject();
                //                 data.location = 'B';
                //                 data.isAdd = '1';
                //                 var url = $("#basePath").val() + router + "/location";
                //                 ajaxPost(url, data).then(function(res) {
                //                     if (res.success) {
                //                         alert("操作成功");
                //                         goBack();
                //                     }
                //                 });
                //             }
                //         }
                //     });
                // } else if (type == 5) {
                //     buttons.push({
                //         title: '保存',
                //         handler: function() {
                //             if ($('#jsForm').valid()) {
                //                 var data = $('#jsForm').serializeObject();
                //                 data.location = 'C';
                //                 data.isAdd = '1';
                //                 var url = $("#basePath").val() + router + "/location";
                //                 ajaxPost(url, data).then(function(res) {
                //                     if (res.success) {
                //                         alert("操作成功");
                //                         goBack();
                //                     }
                //                 });
                //             }
                //         }
                //     });
                // } else if (type == 3) {
                //     buttons.push({
                //         title: '保存',
                //         handler: function() {
                //             if ($('#jsForm').valid()) {
                //                 if ($('#plateCode').val() == $('#plateCode1').data('value')) {
                //                     alert('帖子已经在该版块了');
                //                     return;
                //                 }
                //                 var data = $('#jsForm').serializeObject();
                //                 var url = $("#basePath").val() + router + "/change";
                //                 ajaxPost(url, data).then(function(res) {
                //                     if (res.success) {
                //                         alert("操作成功");
                //                         goBack();
                //                     }
                //                 });
                //             }
                //         }
                //     });
                // } else if (type == 4) {
                //     buttons.push({
                //         title: '保存',
                //         handler: function() {
                //             if ($('#jsForm').valid()) {
                //                 var data = $('#jsForm').serializeObject();
                //                 var url = $("#basePath").val() + router + "/lock";
                //                 ajaxPost(url, data).then(function(res) {
                //                     if (res.success) {
                //                         alert("操作成功");
                //                         goBack();
                //                     }
                //                 });
                //             }
                //         }
                //     });
                // }

                // buttons.push({
                //     title: '返回',
                //     handler: function() {
                //         goBack();
                //     }
                // });

                // var options = {};
                // options.buttons = buttons;
                options.afterData = function(data) {
                    if (type == 1 && data.location == 'A') {
                        $('#endDatetime').parent().hide();
                        $('#btn-0').val('取消置顶');
                        $('#btn-0').off('click');
                        $('#btn-0').on('click', function() {
                            if ($('#jsForm').valid()) {
                                var data1 = $('#jsForm').serializeObject();
                                data1.location = 'A';
                                data1.isAdd = '0';
                                var url = $("#basePath").val() + router + "/location";
                                ajaxPost(url, data1).then(function(res) {
                                    if (res.success) {
                                        alert("操作成功");
                                        goBack();
                                    }
                                });
                            }
                        });

                    } else if (type == 2 && data.location == 'B') {
                        $('#endDatetime').parent().hide();
                        $('#btn-0').val('取消精华');
                        $('#btn-0').off('click');
                        $('#btn-0').on('click', function() {
                            if ($('#jsForm').valid()) {
                                var data1 = $('#jsForm').serializeObject();
                                data1.location = 'B';
                                data1.isAdd = '0';
                                var url = $("#basePath").val() + router + "/location";
                                ajaxPost(url, data1).then(function(res) {
                                    if (res.success) {
                                        alert("操作成功");
                                        goBack();
                                    }
                                });
                            }
                        });

                    } else if (type == 5 && data.location == 'C') {
                        $('#endDatetime').parent().hide();
                        $('#btn-0').val('取消头条');
                        $('#btn-0').off('click');
                        $('#btn-0').on('click', function() {
                            if ($('#jsForm').valid()) {
                                var data1 = $('#jsForm').serializeObject();
                                data1.location = 'C';
                                data1.isAdd = '0';
                                var url = $("#basePath").val() + router + "/location";
                                ajaxPost(url, data1).then(function(res) {
                                    if (res.success) {
                                        alert("操作成功");
                                        goBack();
                                    }
                                });
                            }
                        });

                    }
                }


                buildDetail(options);
            });