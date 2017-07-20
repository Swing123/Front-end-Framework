/**
 \* Created by Wanggb with IntelliJ IDEA.
 \*Orgs:DIST
 \*Date:11/3/2016
 \*Time:9:40 AM
 \*Description:程序入口,依赖声明
 */

define([
    "Layer"
], function (layer) {
    'use strict';
    function  routerConfigRun($rootScope,$state,$log,AUTH_EVENTS,AuthService,AUTH_URL,Session){
        $rootScope.$on('$stateChangeStart', function (event, next) {
            next.data=next.data||{};
            var authorizedRoles = next.data.authorizedRoles;
            if(typeof authorizedRoles==='undefined'|| authorizedRoles==null){
                $log.info('无需验证页面',event);
            }else{
                if (!AuthService.isAuthorized(authorizedRoles)) {
                    event.preventDefault();
                    $state.go(AUTH_URL.loginRouter||'access.login');
                    if (AuthService.isAuthenticated()) {
                        // 用户没有访问这个页面的权限
                        $rootScope.$broadcast(AUTH_EVENTS.notAuthorized);
                        layer.msg('用户没有访问权限', {icon: 0});
                        $log.info('用户没有访问这个页面的权限,权限所有者：',authorizedRoles);
                    } else {
                        // 用户没有登录
                        $rootScope.$broadcast(AUTH_EVENTS.notAuthenticated);
                        layer.msg('用户没有登陆', {icon: 0});
                        $log.info('用户没有登陆');
                    }
                }else{
                    layer.msg('权限认证成功', {icon: 1});
                    $log.info('权限认证成功,当前用户session：',Session);
                }

            }
        });
    }
    routerConfigRun.$inject=['$rootScope','$state','$log','AUTH_EVENTS','AuthService','AUTH_URL','Session'];
    return routerConfigRun;
});   