package com.xnjr.app.customer;

import java.util.Map;

import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.xnjr.app.controller.BaseController;
import com.xnjr.app.enums.EUserKind;
import com.xnjr.app.http.BizConnecter;
import com.xnjr.app.http.JsonUtils;
import com.xnjr.app.util.UploadUtil;

@Controller
@RequestMapping(value = "/customer")
public class CustomerController extends BaseController {
    
    // 列表查询客户
    @RequestMapping(value = "/list", method = RequestMethod.GET)
    @ResponseBody
    public Object customerList(@RequestParam Map<String,String> allRequestParams) {
    	allRequestParams.put("kind", EUserKind.F1.getCode());
  	    return BizConnecter.getBizData("805055", JsonUtils.mapToJson(allRequestParams),
              Object.class);
    }
    
    // 分页查询客户
    @RequestMapping(value = "/page", method = RequestMethod.GET)
    @ResponseBody
    public Object customerPage(@RequestParam Map<String,String> allRequestParams) {
    	allRequestParams.put("kind", EUserKind.F1.getCode());
  	    return BizConnecter.getBizData("805054", JsonUtils.mapToJson(allRequestParams),
              Object.class);
    }
    
    // 详情查询客户
    @RequestMapping(value = "/detail", method = RequestMethod.GET)
    @ResponseBody
    public Object customerDetail(@RequestParam Map<String,String> allRequestParams) {
    	String code = allRequestParams.get("code");
    	if (code != null) {
    		allRequestParams.put("userId", allRequestParams.get("code"));
    	}
  	    return BizConnecter.getBizData("805056", JsonUtils.mapToJson(allRequestParams),
              Object.class);
    }
    
    // 分页查询客户(地区)
    @RequestMapping(value = "/branch/page", method = RequestMethod.GET)
    @ResponseBody
    public Object customerBranchPage(@RequestParam Map<String,String> allRequestParams) {
    	//allRequestParams.put("kind", EUserKind.F1.getCode());
  	    return BizConnecter.getBizData("805077", JsonUtils.mapToJson(allRequestParams),
              Object.class);
    }
    
    // 新增客户
    @RequestMapping(value = "/add", method = RequestMethod.POST)
    @ResponseBody
    public Object customerAdd(@RequestBody Map map) {
  		return BizConnecter.getBizData("805079", JsonUtils.mapToJson(map),
              Object.class);
	}
}
