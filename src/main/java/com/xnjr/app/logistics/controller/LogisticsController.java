package com.xnjr.app.logistics.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;
import com.xnjr.app.controller.BaseController;
import com.xnjr.app.logistics.ao.ILogisticsAO;
import com.xnjr.app.logistics.req.GoodsReq;

@Controller
@RequestMapping(value = "/logistics")
public class LogisticsController extends BaseController {

    @Autowired
    protected ILogisticsAO logisticsAO;

    // 物流信息录入
    // 支付成功的发货单可以录入物流信息，录入物流信息后，发货单状态变为已发货
    @RequestMapping(value = "/add", method = RequestMethod.POST)
    @ResponseBody
    public Object addLogistics(@RequestParam(value = "code", required = false) String code,
            @RequestParam("invoiceCode") String invoiceCode,
            @RequestParam(value = "company", required = false) String company,
            @RequestParam(value = "deliveryDatetime", required = false) String deliveryDatetime,
            @RequestParam(value = "deliverer", required = false) String deliverer,
            @RequestParam(value = "remark", required = false) String remark,
            @RequestParam(value = "pdf", required = false) String pdf) {
        return logisticsAO.addLogistics(code, invoiceCode, company,
            deliveryDatetime, deliverer, this.getSessionUser().getUserName(),
            remark, pdf);
    }

    // 物流单分页查询
    @RequestMapping(value = "/page", method = RequestMethod.GET)
    @ResponseBody
    public Object queryLogisticsPage(
            @RequestParam(value = "code", required = false) String code,
            @RequestParam(value = "company", required = false) String company,
            @RequestParam(value = "invoiceCode", required = false) String invoiceCode,
            @RequestParam(value = "deliveryDatetimeStart", required = false) String deliveryDatetimeStart,
            @RequestParam(value = "deliveryDatetimeEnd", required = false) String deliveryDatetimeEnd,
            @RequestParam(value = "deliverer", required = false) String deliverer,
            @RequestParam(value = "userId", required = false) String userId,
            @RequestParam(value = "status", required = false) String status,
            @RequestParam(value = "start", required = true) String start,
            @RequestParam(value = "limit", required = true) String limit,
            @RequestParam(value = "orderColumn", required = false) String orderColumn,
            @RequestParam(value = "orderDir", required = false) String orderDir) {
        return logisticsAO.queryLogisticsPage(code, company, invoiceCode,
            deliveryDatetimeStart, deliveryDatetimeEnd, deliverer, userId,
            status, start, limit, orderColumn, orderDir);
    }

    // 物流单详情查询
    @RequestMapping(value = "/detail", method = RequestMethod.GET)
    @ResponseBody
    public Object queryLogisticsDetail(@RequestParam("code") String code) {
        return logisticsAO.queryLogisticsDetail(code);
    }

    // 根据型号获取货起始编号
    @RequestMapping(value = "/startcode", method = RequestMethod.GET)
    @ResponseBody
    public Object queryStartCodeByModelCode(
            @RequestParam("modelCode") String modelCode) {
        return logisticsAO.queryStartCodeByModelCode(modelCode);
    }
    
    // 收货确认
    @RequestMapping(value = "/goods/sure", method = RequestMethod.POST)
    @ResponseBody
    public Object suregoods(@RequestParam("code") String code,
            @RequestParam("remark") String remark) {
        return logisticsAO.suregoods(code, this.getSessionUser().getUserName(),
            remark);
    }
}
