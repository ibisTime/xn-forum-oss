package com.xnjr.app.store;

import java.util.Map;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.xnjr.app.controller.BaseController;
import com.xnjr.app.http.BizConnecter;
import com.xnjr.app.http.JsonUtils;
import com.xnjr.app.util.UploadUtil;

@Controller
@RequestMapping(value = "/store")
public class StoreController extends BaseController {

	// 商品新增
	@RequestMapping(value = "/product/add", method = RequestMethod.POST)
	@ResponseBody
	public Object productAdd(@RequestBody Map map) {
		map.put("pic", UploadUtil.uploadPicture((String) map.get("pic")));
		return BizConnecter.getBizData("610300", JsonUtils.mapToJson(map),
				Object.class);
	}

	// 商品删除
	@RequestMapping(value = "/product/delete", method = RequestMethod.POST)
	@ResponseBody
	public Object productDelete(@RequestBody Map map) {
		return BizConnecter.getBizData("610301", JsonUtils.mapToJson(map),
				Object.class);
	}

	// 商品修改
	@RequestMapping(value = "/product/edit", method = RequestMethod.POST)
	@ResponseBody
	public Object productEdit(@RequestBody Map map) {
		map.put("pic", UploadUtil.uploadPicture((String) map.get("pic")));
		return BizConnecter.getBizData("610302", JsonUtils.mapToJson(map),
				Object.class);
	}

	// 商品上下架
	@RequestMapping(value = "/product/updown", method = RequestMethod.POST)
	@ResponseBody
	public Object productUpdown(@RequestBody Map map) {
		return BizConnecter.getBizData("610303", JsonUtils.mapToJson(map),
				Object.class);
	}

	// 商品分页
	@RequestMapping(value = "/product/page", method = RequestMethod.GET)
	@ResponseBody
	public Object productPage(@RequestParam Map<String, String> allRequestParams) {
		// allRequestParams.put("userId", this.getSessionUser().getUserId());
		return BizConnecter.getBizData("610310",
				JsonUtils.mapToJson(allRequestParams), Object.class);
	}

	// 商品详情
	@RequestMapping(value = "/product/detail", method = RequestMethod.GET)
	@ResponseBody
	public Object productDetail(
			@RequestParam Map<String, String> allRequestParams) {
		// allRequestParams.put("userId", this.getSessionUser().getUserId());
		return BizConnecter.getBizData("610311",
				JsonUtils.mapToJson(allRequestParams), Object.class);
	}

	// 商品类别分页
	@RequestMapping(value = "/product/kind/page", method = RequestMethod.GET)
	@ResponseBody
	public Object productKindPage(
			@RequestParam Map<String, String> allRequestParams) {
		allRequestParams.put("type", "2");
		return BizConnecter.getBizData("610805",
				JsonUtils.mapToJson(allRequestParams), Object.class);
	}

	// 商品类别列表
	@RequestMapping(value = "/product/kind/list", method = RequestMethod.GET)
	@ResponseBody
	public Object productKindList(
			@RequestParam Map<String, String> allRequestParams) {
		allRequestParams.put("type", "2");
		return BizConnecter.getBizData("610806",
				JsonUtils.mapToJson(allRequestParams), Object.class);
	}

	// 商品类别详情
	@RequestMapping(value = "/product/kind/detail", method = RequestMethod.GET)
	@ResponseBody
	public Object productKindDetail(
			@RequestParam Map<String, String> allRequestParams) {
		// allRequestParams.put("userId", this.getSessionUser().getUserId());
		return BizConnecter.getBizData("610807",
				JsonUtils.mapToJson(allRequestParams), Object.class);
	}

	// 商品类别新增
	@RequestMapping(value = "/product/kind/add", method = RequestMethod.POST)
	@ResponseBody
	public Object productKindAdd(@RequestBody Map map) {
		map.put("pic", UploadUtil.uploadPicture((String) map.get("pic")));
		map.put("updater", this.getSessionUser().getUserName());
		return BizConnecter.getBizData("610800", JsonUtils.mapToJson(map),
				Object.class);
	}

	// 商品类别修改
	@RequestMapping(value = "/product/kind/edit", method = RequestMethod.POST)
	@ResponseBody
	public Object productKindEdit(@RequestBody Map map) {
		map.put("pic", UploadUtil.uploadPicture((String) map.get("pic")));
		map.put("updater", this.getSessionUser().getUserName());
		return BizConnecter.getBizData("610802", JsonUtils.mapToJson(map),
				Object.class);
	}

	// 商品类别删除
	@RequestMapping(value = "/product/kind/delete", method = RequestMethod.POST)
	@ResponseBody
	public Object productKindDelete(@RequestBody Map map) {
		map.put("userId", this.getSessionUser().getUserId());
		return BizConnecter.getBizData("610801", JsonUtils.mapToJson(map),
				Object.class);
	}

	// 提货确认
	@RequestMapping(value = "/order/confirm", method = RequestMethod.POST)
	@ResponseBody
	public Object productConfirm(@RequestBody Map map) {
		map.put("orderCode", (String) map.get("code"));
		return BizConnecter.getBizData("610321", JsonUtils.mapToJson(map),
				Object.class);
	}

	// 订单作废
	@RequestMapping(value = "/order/end", method = RequestMethod.POST)
	@ResponseBody
	public Object productEnd(@RequestBody Map map) {
		map.put("orderCode", (String) map.get("code"));
		return BizConnecter.getBizData("610322", JsonUtils.mapToJson(map),
				Object.class);
	}

	// 订单分页
	@RequestMapping(value = "/order/page", method = RequestMethod.GET)
	@ResponseBody
	public Object orderPage(@RequestParam Map<String, String> allRequestParams) {
		// allRequestParams.put("userId", this.getSessionUser().getUserId());
		return BizConnecter.getBizData("610332",
				JsonUtils.mapToJson(allRequestParams), Object.class);
	}

	// 订单详情
	@RequestMapping(value = "/order/detail", method = RequestMethod.GET)
	@ResponseBody
	public Object orderDetail(@RequestParam Map<String, String> allRequestParams) {
		allRequestParams
				.put("orderCode", (String) allRequestParams.get("code"));
		return BizConnecter.getBizData("610331",
				JsonUtils.mapToJson(allRequestParams), Object.class);
	}
}
