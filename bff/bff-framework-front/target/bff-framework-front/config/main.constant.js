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
            sidebar:'../angulr/text/sidebar.do',//左侧导航栏列表请求地址
            header:'../angulr/text/header.do',//header数据请求地址
            login:'../angulr/text/login.do',//左侧导航栏列表请求地址
            sysConfig:'../angulr/sys/config.do',//系统配置文件请求地址
        }
    };
    return appConstant;
});   