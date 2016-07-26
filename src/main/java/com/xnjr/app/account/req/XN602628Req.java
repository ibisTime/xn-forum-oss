package com.xnjr.app.account.req;

/**
 * 积分块列表查询
 * @author: xieyj 
 * @since: 2016年7月20日 下午5:38:20 
 * @history:
 */
public class XN602628Req {
    // 用户编号(必填)
    private String userId;

    // 是否需要审核(选填) 0 否 1是
    private String isApprove;

    // 状态(选填) 0 待发布 1 已发布 2 已过期
    private String status;

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getIsApprove() {
        return isApprove;
    }

    public void setIsApprove(String isApprove) {
        this.isApprove = isApprove;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}
