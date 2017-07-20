/**
 \* Created by Wanggb with IntelliJ IDEA.
 \*Orgs:DIST
 \*Date:11/3/2016
 \*Time:9:31 AM
 \*Description:程序入口,依赖声明
 */

define([

], function () {
    'use strict';
    function authInterceptorServ($rootScope,$q,AUTH_EVENTS){
        return {
            responseError:function(response){
                $rootScope.$broadcast({
                    401:AUTH_EVENTS.notAuthenticated,
                    403:AUTH_EVENTS.notAuthorized,
                    419:AUTH_EVENTS.sessionTimeout,
                    440:AUTH_EVENTS.sessionTimeout
                }[response.status],response);
                return $q.reject(response);
            }
        };
    }
    authInterceptorServ.$inject=['$rootScope','$q','AUTH_EVENTS'];
    return authInterceptorServ;
});   