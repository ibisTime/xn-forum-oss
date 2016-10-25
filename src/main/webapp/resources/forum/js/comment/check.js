$(function(){
	showPermissionControl();
	
	var router = '/forum/comment';
	var columns = [{
		field : '',
		title : '',
		checkbox : true
	}, {
		field : '',
		title : '针对',
		formatter: function(v, r) {
			if (r.post) {
				return '帖子：' + text3dot(r.post.title || r.post.content, 10);
			} else if (r.parentComment) {
				return '评论：' + text3dot(r.post.content, 10);
			}
		}
	}, {
		field : 'content',
		title : '内容',
		search: true
	}, {
		field : 'status',
		title : '状态',
		formatter: Dict.getNameForList('comment_status'),
		key: 'comment_status'
    }, {
    	field : 'commer',
		title : '评论人'
	}, {
		field: 'commDatetime',
		title: '评论时间',
		formatter: dateTimeFormat
	}];
	buildList(router, columns, {
		searchParams: {
			siteCode: getCityId(getUserId())
		},
		singleSelect: false
	});
})

