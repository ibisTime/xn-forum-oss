package com.xnjr.app.product.req;

import com.xnjr.app.req.APageReq;

/**
 * @author: xieyj 
 * @since: 2016年5月23日 上午8:53:02 
 * @history:
 */
public class XN601024Req extends APageReq {

    /** 
     * @Fields serialVersionUID : TODO(用一句话描述这个变量表示什么) 
     */
    private static final long serialVersionUID = 7405232977567267123L;

    // 编号（选填）
    private String code;

    // 名称（选填）
    private String name;

    // 状态（选填）
    private String status;

    // 产品编号（选填）
    private String productName;

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

	public String getProductName() {
		return productName;
	}

	public void setProductName(String productName) {
		this.productName = productName;
	}

}
