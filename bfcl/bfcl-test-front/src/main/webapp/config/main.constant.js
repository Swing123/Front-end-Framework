/**
 \* Created by Wanggb with IntelliJ IDEA.
 \*Orgs:DIST
 \*Date:11/1/2016
 \*Time:2:36 PM
 \*Description:程序入口,依赖声明
 */

define([

], function () {
    'use strict';
    var appConstant={
        "JQ_CONFIG":{
            screenfull:     [   'framework/library/screenfull/dist/screenfull.min.js'],
        },
        "HTTPURL":{
            sidebar:'../angulr/text/sidebar.do',//左侧导航栏列表请求地 址
            header:'../angulr/text/header.do',//header数据请求地址
            login:'../angulr/text/login.do',//左侧导航栏列表请求地址
            sysConfig:'../angulr/sys/config.do',//系统配置文件请求地址
            dynamicTable:'../angulr/text/dynamicTable.do',//多样式table表
            log:'../angulr/text/log.do',//流转日志
            info:'../angulr/text/info.do',//信息条
            authentication:'../angulr/text/authentication.do',//多样式table表
            project:'../angular/text/project.do',//列表配置
            projectList:'../angular/text/projectList.do',//列表数据
            board:'../angular/text/board.do',//公告面板
        }
    };
    return appConstant;
});   