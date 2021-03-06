package com.xnjr.app.security.req;

public class XN805003Req {
    // 菜单名称(必填)
    private String name;

    // 类型(必填)
    private String type;

    // 请求url(必填)
    private String url;

    // 父菜单编号(必填)
    private String parentCode;

    // 菜单顺序号（必填）
    private String orderNo;

    // 更新人(必填)
    private String updater;

    // 备注(选填)
    private String remark;

    // 六方(必填)
    private String kind;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public String getParentCode() {
        return parentCode;
    }

    public void setParentCode(String parentCode) {
        this.parentCode = parentCode;
    }

    public String getOrderNo() {
        return orderNo;
    }

    public void setOrderNo(String orderNo) {
        this.orderNo = orderNo;
    }

    public String getUpdater() {
        return updater;
    }

    public void setUpdater(String updater) {
        this.updater = updater;
    }

    public String getRemark() {
        return remark;
    }

    public void setRemark(String remark) {
        this.remark = remark;
    }

    public String getKind() {
        return kind;
    }

    public void setKind(String kind) {
        this.kind = kind;
    }

}
