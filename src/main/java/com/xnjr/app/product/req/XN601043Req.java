package com.xnjr.app.product.req;

/** 
 * @author: xieyj 
 * @since: 2016年5月24日 上午9:13:00 
 * @history:
 */
public class XN601043Req {
    // 型号编号（选填）
    private String modelCode;

    // 受众（选填）
    private String toLevel;
    
    // 显示位置（选填）
    private String toSite;

    public String getModelCode() {
        return modelCode;
    }

    public void setModelCode(String modelCode) {
        this.modelCode = modelCode;
    }

    public String getToLevel() {
        return toLevel;
    }

    public void setToLevel(String toLevel) {
        this.toLevel = toLevel;
    }

	public String getToSite() {
		return toSite;
	}

	public void setToSite(String toSite) {
		this.toSite = toSite;
	}
}
