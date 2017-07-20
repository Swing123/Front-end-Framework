/**
 \* Created by Wanggb with IntelliJ IDEA.
 \*Orgs:DIST
 \*Date:2016/10/19
 \*Time:9:08
 \*Description:
 */
define([
    'angular',
    'framework/authentication/js/auth.httpProviderConfig',
    'framework/authentication/js/auth.authInterceptorServ',
    // 'framework/authentication/js/auth.routerConfigRun',//暂时不启用页面无权限是路由跳转
    'framework/authentication/js/auth.sessionServ',
    'framework/authentication/js/auth.authServiceServ',
    'framework/authentication/js/auth.authPermissionDir',
    'framework/authentication/js/auth.constant',
    'ngStorage',
    'angular-cookies',
],function(angular,httpProviderConfig,authInterceptorServ/*,routerConfigRun*/,sessionServ,authServiceServ,authPermissionDir,authConstant){
    'use strict' ;

   var authApp=angular.module("auth.app",[
        'ngStorage',//本地和会话存储
        'ngCookies',//cookies存储主要在translate模块中使用
    ]);

    authApp.config(httpProviderConfig);
    authApp.factory('AuthInterceptor',authInterceptorServ);
    // authApp.run(routerConfigRun);
    authApp.factory('Session',sessionServ);
    authApp.factory('AuthService',authServiceServ);
    authApp.directive('authPermission',authPermissionDir);
    authApp.constant('AUTH_EVENTS',authConstant.AUTH_EVENTS);
    authApp.constant('USER_ROLES',authConstant.USER_ROLES);
    authApp.constant('AUTH_ACTION',authConstant.AUTH_ACTION);
    authApp.constant('AUTH_URL',authConstant.AUTH_URL);

    return authApp;
});
