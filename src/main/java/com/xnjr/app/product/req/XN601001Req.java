/**
 * @Title XN601001Req.java 
 * @Package com.xnjr.mall.dto.req 
 * @Description 
 * @author haiqingzheng  
 * @date 2016年5月17日 上午9:08:54 
 * @version V1.0   
 */
package com.xnjr.app.product.req;

/**
 * @author: haiqingzheng
 * @since: 2016年5月17日 上午9:08:54
 * @history:
 */
public class XN601001Req {
	
	// ID
	private String code;
	
	// 产品大类
	private String category;

	// 产品小类
	private String type;

	// 小类图片
	private String typePic;

	// 产品名称
	private String name;

	// 次序
	private String orderNo;

	// 状态
	private String status;

	// 广告语
	private String advTitle;

	// 广告图片
	private String advPic;

	// 主推图
	private String majorPic;

	// 主推文本
	private String majorText;

	// 全家福图
	private String familyPic;

	// 全家福文本
	private String familyText;

	// 亮点图
	private String highlightPic;

	// 亮点文本
	private String highlightText;

	// 更新人
	private String updater;

	private String remark;

	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getTypePic() {
		return typePic;
	}

	public void setTypePic(String typePic) {
		this.typePic = typePic;
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

	public String getAdvTitle() {
		return advTitle;
	}

	public void setAdvTitle(String advTitle) {
		this.advTitle = advTitle;
	}

	public String getAdvPic() {
		return advPic;
	}

	public void setAdvPic(String advPic) {
		this.advPic = advPic;
	}

	public String getMajorPic() {
		return majorPic;
	}

	public void setMajorPic(String majorPic) {
		this.majorPic = majorPic;
	}

	public String getMajorText() {
		return majorText;
	}

	public void setMajorText(String majorText) {
		this.majorText = majorText;
	}

	public String getFamilyPic() {
		return familyPic;
	}

	public void setFamilyPic(String familyPic) {
		this.familyPic = familyPic;
	}

	public String getFamilyText() {
		return familyText;
	}

	public void setFamilyText(String familyText) {
		this.familyText = familyText;
	}

	public String getHighlightPic() {
		return highlightPic;
	}

	public void setHighlightPic(String highlightPic) {
		this.highlightPic = highlightPic;
	}

	public String getHighlightText() {
		return highlightText;
	}

	public void setHighlightText(String highlightText) {
		this.highlightText = highlightText;
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

	public String getOrderNo() {
		return orderNo;
	}

	public void setOrderNo(String orderNo) {
		this.orderNo = orderNo;
	}

}
