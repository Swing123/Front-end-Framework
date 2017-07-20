/**
 \* Created by Wanggb with IntelliJ IDEA.
 \*Orgs:DIST
 \*Date:11/3/2016
 \*Time:9:56 AM
 \*Description:程序入口,依赖声明
 */

define([

], function () {
    'use strict';
    var authConstant={
        "AUTH_EVENTS":{//授权事件常数定义
            'loginSuccess':'auth-login-success',
            'loginFailed':'auth-login-failed',
            'logoutSuccess':'auth-logout-success',
            'sessionTimeout':'auth-session-timeout',
            'notAuthenticated':'auth-not-authenticated',
            'notAuthorized':'auth-not-authorized',
            'permissionChanged':'auth-permission-changed',
        },
        "USER_ROLES":{//用户列表及用户对应的权限
            'all':'*',
            'admin':'admin',
            'editor':'editor',
            'guest':'guest'
        },
        "AUTH_ACTION":{//认证动作
            'show':'show',//显示
            'hide':'hide',//隐藏
            'enable':'enable',//使能
            'disable':'disable',//静止
        },
        "AUTH_URL":{//授权时请求的列表信息
            "loginUrl":'../angulr/text/login.do',//登陆请求地址
            "loginRouter":"access.login",//登陆跳转路由
        }
    };
    return authConstant;
});   