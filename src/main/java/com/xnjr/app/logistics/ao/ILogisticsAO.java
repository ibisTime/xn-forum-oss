package com.xnjr.app.logistics.ao;

import java.util.List;

import com.xnjr.app.logistics.req.GoodsReq;

public interface ILogisticsAO {

    // 物流信息录入
    Object addLogistics(String code, String invoiceCode, String company,
            String deliveryDatetime, String deliverer, String updater,
            String remark, String pdf);

    // 物流单分页查询
    Object queryLogisticsPage(String code, String company, String invoiceCode,
            String deliveryDatetimeStart, String deliveryDatetimeEnd,
            String deliverer, String userId, String status, String start,
            String limit, String orderColumn, String orderDir);

    // 物流单详情查询
    Object queryLogisticsDetail(String code);

    // 根据型号获取货起始编号
    Object queryStartCodeByModelCode(String modelCode);

    Object suregoods(String code, String updater, String remark);
    
    Object xianChang(String code);

}
