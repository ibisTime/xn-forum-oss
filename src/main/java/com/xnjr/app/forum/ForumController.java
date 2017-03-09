package com.xnjr.app.forum;

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
@RequestMapping(value = "/forum")
public class ForumController extends BaseController {

	// 版块新增
	@RequestMapping(value = "/board/add", method = RequestMethod.POST)
	@ResponseBody
	public Object boardAdd(@RequestBody Map map) {
		map.put("updater", this.getSessionUser().getUserName());
		map.put("pic", UploadUtil.uploadPicture((String) map.get("pic")));
		return BizConnecter.getBizData("610020", JsonUtils.mapToJson(map),
				Object.class);
	}

	// 版块修改
	@RequestMapping(value = "/board/edit", method = RequestMethod.POST)
	@ResponseBody
	public Object boardEdit(@RequestBody Map map) {
		map.put("updater", this.getSessionUser().getUserName());
		map.put("pic", UploadUtil.uploadPicture((String) map.get("pic")));
		return BizConnecter.getBizData("610021", JsonUtils.mapToJson(map),
				Object.class);
	}

	// 分页查询版块
	@RequestMapping(value = "/board/page", method = RequestMethod.GET)
	@ResponseBody
	public Object boardPage(@RequestParam Map<String, String> allRequestParams) {
		// allRequestParams.put("userId", this.getSessionUser().getUserId());
		return BizConnecter.getBizData("610030",
				JsonUtils.mapToJson(allRequestParams), Object.class);
	}

	// 列表查询版块
	@RequestMapping(value = "/board/list", method = RequestMethod.GET)
	@ResponseBody
	public Object boardList(@RequestParam Map<String, String> allRequestParams) {
		// allRequestParams.put("userId", this.getSessionUser().getUserId());
		return BizConnecter.getBizData("610031",
				JsonUtils.mapToJson(allRequestParams), Object.class);
	}

	// 版块详情
	@RequestMapping(value = "/board/detail", method = RequestMethod.GET)
	@ResponseBody
	public Object boardDetail(@RequestParam Map<String, String> allRequestParams) {
		// allRequestParams.put("userId", this.getSessionUser().getUserId());
		return BizConnecter.getBizData("610032",
				JsonUtils.mapToJson(allRequestParams), Object.class);
	}

	// 分页查询版块类别
	@RequestMapping(value = "/board/kind/page", method = RequestMethod.GET)
	@ResponseBody
	public Object boardKindPage(
			@RequestParam Map<String, String> allRequestParams) {
		allRequestParams.put("type", "1");
		return BizConnecter.getBizData("610805",
				JsonUtils.mapToJson(allRequestParams), Object.class);
	}

	// 版块类别详情
	@RequestMapping(value = "/board/kind/detail", method = RequestMethod.GET)
	@ResponseBody
	public Object boardKindDetail(
			@RequestParam Map<String, String> allRequestParams) {
		// allRequestParams.put("userId", this.getSessionUser().getUserId());
		return BizConnecter.getBizData("610807",
				JsonUtils.mapToJson(allRequestParams), Object.class);
	}

	// 分页查询版块类别
	@RequestMapping(value = "/board/kind/list", method = RequestMethod.GET)
	@ResponseBody
	public Object boardKindList(
			@RequestParam Map<String, String> allRequestParams) {
		allRequestParams.put("type", "1");
		return BizConnecter.getBizData("610806",
				JsonUtils.mapToJson(allRequestParams), Object.class);
	}

	// 版块类别新增
	@RequestMapping(value = "/board/kind/add", method = RequestMethod.POST)
	@ResponseBody
	public Object boardKindAdd(@RequestBody Map map) {
		map.put("updater", this.getSessionUser().getUserName());
		return BizConnecter.getBizData("610800", JsonUtils.mapToJson(map),
				Object.class);
	}

	// 版块类别修改
	@RequestMapping(value = "/board/kind/edit", method = RequestMethod.POST)
	@ResponseBody
	public Object boardKindEdit(@RequestBody Map map) {
		map.put("updater", this.getSessionUser().getUserName());
		return BizConnecter.getBizData("610802", JsonUtils.mapToJson(map),
				Object.class);
	}

	// 帖子删除
	@RequestMapping(value = "/board/kind/delete", method = RequestMethod.POST)
	@ResponseBody
	public Object boardKindDelete(@RequestBody Map map) {
		map.put("userId", this.getSessionUser().getUserId());
		return BizConnecter.getBizData("610801", JsonUtils.mapToJson(map),
				Object.class);
	}

	// 分页查询帖子
	@RequestMapping(value = "/post/page", method = RequestMethod.GET)
	@ResponseBody
	public Object postPage(@RequestParam Map<String, String> allRequestParams) {
		// allRequestParams.put("userId", this.getSessionUser().getUserId());
		return BizConnecter.getBizData("610070",
				JsonUtils.mapToJson(allRequestParams), Object.class);
	}

	// 帖子详情
	@RequestMapping(value = "/post/detail", method = RequestMethod.GET)
	@ResponseBody
	public Object postDetail(@RequestParam Map<String, String> allRequestParams) {
		return BizConnecter.getBizData("610072",
				JsonUtils.mapToJson(allRequestParams), Object.class);
	}

	// 帖子审核
	@RequestMapping(value = "/post/check", method = RequestMethod.POST)
	@ResponseBody
	public Object postCheck(@RequestBody Map map) {
		map.put("approver", this.getSessionUser().getUserName());
		return BizConnecter.getBizData("610044", JsonUtils.mapToJson(map),
				Object.class);
	}

	// 评论审核
	@RequestMapping(value = "/comment/check", method = RequestMethod.POST)
	@ResponseBody
	public Object commentCheck(@RequestBody Map map) {
		map.put("approver", this.getSessionUser().getUserName());
		map.put("type", "2");
		return BizConnecter.getBizData("610044", JsonUtils.mapToJson(map),
				Object.class);
	}

	// 帖子删除
	@RequestMapping(value = "/post/delete", method = RequestMethod.POST)
	@ResponseBody
	public Object postDelete(@RequestBody Map map) {
		map.put("userId", this.getSessionUser().getUserId());
		return BizConnecter.getBizData("610047", JsonUtils.mapToJson(map),
				Object.class);
	}

	// 评论删除
	@RequestMapping(value = "/comment/delete", method = RequestMethod.POST)
	@ResponseBody
	public Object commentDelete(@RequestBody Map map) {
		map.put("userId", this.getSessionUser().getUserId());
		return BizConnecter.getBizData("610047", JsonUtils.mapToJson(map),
				Object.class);
	}

	// 帖子A置顶 B 精华 C 头条
	@RequestMapping(value = "/post/location", method = RequestMethod.POST)
	@ResponseBody
	public Object postLocation(@RequestBody Map map) {
		return BizConnecter.getBizData("610049", JsonUtils.mapToJson(map),
				Object.class);
	}

	// 帖子转版
	@RequestMapping(value = "/post/change", method = RequestMethod.POST)
	@ResponseBody
	public Object postChange(@RequestBody Map map) {
		return BizConnecter.getBizData("610050", JsonUtils.mapToJson(map),
				Object.class);
	}

	// 帖子锁帖/解锁
	@RequestMapping(value = "/post/lock", method = RequestMethod.POST)
	@ResponseBody
	public Object postLock(@RequestBody Map map) {
		return BizConnecter.getBizData("610051", JsonUtils.mapToJson(map),
				Object.class);
	}

	// 帖子批量删除
	@RequestMapping(value = "/post/multi/delete", method = RequestMethod.POST)
	@ResponseBody
	public Object postAllDelete(@RequestBody Map map) {
		map.put("type", "1");
		map.put("userId", this.getSessionUser().getUserId());
		return BizConnecter.getBizData("610048", JsonUtils.mapToJson(map),
				Object.class);
	}

	// 评论批量删除
	@RequestMapping(value = "/comment/multi/delete", method = RequestMethod.POST)
	@ResponseBody
	public Object commentAllDelete(@RequestBody Map map) {
		map.put("type", "2");
		map.put("userId", this.getSessionUser().getUserId());
		return BizConnecter.getBizData("610048", JsonUtils.mapToJson(map),
				Object.class);
	}

	// 帖子还原
	@RequestMapping(value = "/post/restore", method = RequestMethod.POST)
	@ResponseBody
	public Object postRestore(@RequestBody Map map) {
		map.put("type", "1");
		return BizConnecter.getBizData("610046", JsonUtils.mapToJson(map),
				Object.class);
	}

	// 帖子批量审核
	@RequestMapping(value = "/post/multi/check", method = RequestMethod.POST)
	@ResponseBody
	public Object postMultiCheck(@RequestBody Map map) {
		map.put("approver", this.getSessionUser().getUserName());
		map.put("type", "1");
		return BizConnecter.getBizData("610045", JsonUtils.mapToJson(map),
				Object.class);
	}

	// 评论批量审核
	@RequestMapping(value = "/comment/multi/check", method = RequestMethod.POST)
	@ResponseBody
	public Object commentMultiCheck(@RequestBody Map map) {
		map.put("approver", this.getSessionUser().getUserName());
		map.put("type", "2");
		return BizConnecter.getBizData("610045", JsonUtils.mapToJson(map),
				Object.class);
	}

	// 分页评论
	@RequestMapping(value = "/comment/page", method = RequestMethod.GET)
	@ResponseBody
	public Object commentPage(@RequestParam Map<String, String> map) {
		return BizConnecter.getBizData("610079", JsonUtils.mapToJson(map),
				Object.class);
	}

	// 评论详情
	@RequestMapping(value = "/comment/detail", method = RequestMethod.GET)
	@ResponseBody
	public Object commentDetail(@RequestParam Map<String, String> map) {
		return BizConnecter.getBizData("610080", JsonUtils.mapToJson(map),
				Object.class);
	}
}
