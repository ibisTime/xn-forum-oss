package com.xnjr.app.general.controller;

import java.util.HashMap;
import java.util.Map;
import java.util.Properties;

import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;
import com.xnjr.app.controller.BaseController;
import com.xnjr.app.http.BizConnecter;
import com.xnjr.app.http.JsonUtils;
import com.xnjr.app.http.PostSimulater;
import com.xnjr.app.security.ao.IUserAO;
import com.xnjr.app.security.res.XN805056Res;
import com.xnjr.app.session.SessionUser;
import com.xnjr.app.util.HttpKit;

@Controller
@RequestMapping(value = "/auth2/login")
public class OAuth2LoginController extends BaseController {
	@Autowired
    protected IUserAO userAO;
    
    // 登录过程涉及的请求URL
 	public static final String GET_TOKEN_URL = "https://api.weibo.com/oauth2/access_token";
 	public static final String GET_OPENID_URL = "https://graph.qq.com/oauth2.0/me";
 	public static final String GET_USER_INFO_URL = "https://api.weibo.com/2/users/show.json";
    
 	// 一些公用的请求参数
    public static final String APP_ID = "2789943235";
	public static final String APP_KEY = "518eb762076e998369bbce098c0415b3";
	public static final String REDIRECT_URL = "http://127.0.0.1:8080/xn-forum-oss/auth2/login/wx";
	public static final String STATE = "register";

    @RequestMapping(value = "/wx", method = RequestMethod.GET)
    public Object wxLogin(@RequestParam Map<String,String> map) throws Exception {
    	// Step1：从回调URL中获取Authorization Code
    	String authCode = (String)map.get("code");
    	if (StringUtils.isBlank(authCode)) {
    		return "redirect:/";
    	}
    	// Step2：通过Authorization Code获取Access Token
    	String accessToken = "";
		Map<String, String> queryParas = new HashMap<>();
		Map<String, String> res;
		
		Properties formProperties = new Properties();
		formProperties.put("grant_type", "authorization_code");
		formProperties.put("client_id", APP_ID);
		formProperties.put("client_secret", APP_KEY);
		formProperties.put("code", authCode);
		formProperties.put("redirect_uri", REDIRECT_URL);
		String response = PostSimulater.requestPostForm(GET_TOKEN_URL,
            formProperties);
		res = getMapFromResponse(response);
		accessToken = res.get("access_token");
		if (res.get("error") != null || StringUtils.isBlank(accessToken)) {
			return "redirect:/";
		}
		// Step3：使用Access Token来获取用户的OpenID
		String openId = "";
		openId = res.get("uid");
//		queryParas = new HashMap<>(1);
//		queryParas.put("access_token", accessToken);
//		res = getMapFromResponse(HttpKit.get(GET_OPENID_URL, queryParas));
//		openId = res.get("openid");
//		if (res.get("error") != null || StringUtils.isBlank(openId)) {
//			return "redirect:/";
//		}
		// Step4：根据openId从数据库中查询用户信息（user）
		res = new HashMap<>();
		res.put("userReferee", openId);
		Map users = BizConnecter.getBizData("805055", JsonUtils.mapToJson(res),
	              Map.class);
		if (!users.isEmpty()) {
			// Step4-1：如果user存在，说明用户授权登录过，直接登录
			sessionProvider
            	.setUserDetail(new SessionUser("", ""));
			return true;
		} else {
			// Step4-2：如果user不存在，说明用户未授权登录过，需从openAPI获取用户信息
			queryParas = new HashMap<>();
			queryParas.put("access_token", accessToken);
			queryParas.put("uid", openId);
//			queryParas.put("oauth_consumer_key", APP_ID);
//			queryParas.put("openid", openId);
			res = getMapFromResponse(HttpKit.get(GET_USER_INFO_URL, queryParas));
			// 获取用户信息
			String avatar = res.get("avatar");
			String nickname = res.get("nickname");
			String gender = (res.get("gender") == "男") ? "0" : "1";
			String uuid = avatar.split("/")[5];
			Map isSuccess = userAO.addUser(nickname, null, null, null, null, null, null, null, null, null);
			if (isSuccess != null) {
				sessionProvider
            	.setUserDetail(new SessionUser("", ""));
				return true;
			}
		}
		return false;
	}
    
    

    /**
	 * @param response  可能是Json & Jsonp字符串 & urlParas
	 * 			eg：urlParas：access_token=xxx&expires_in=7776000&refresh_token=xxx
	 * @return
	 */
	public static Map<String, String> getMapFromResponse(String response) {
		if (StringUtils.isBlank(response)) {
			return new HashMap<>();
		}
		
		Map<String, String> result = new HashMap<>();
		int begin = response.indexOf("{");
		int end = response.lastIndexOf("}") + 1;
		
		if (begin >= 0 && end > 0) {
			result = new Gson().fromJson(response.substring(begin, end),
					new TypeToken<Map<String, Object>>() {
					}.getType());
		} else {
			String[] paras = response.split("&");
			for (String para : paras) {
				result.put(para.split("=")[0], para.split("=")[1]);
			}
		}

		return result;
	}

}
