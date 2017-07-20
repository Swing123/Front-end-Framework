/**
 \* Created by Wanggb with IntelliJ IDEA.
 \*Orgs:DIST
 \*Date:11/3/2016
 \*Time:9:22 AM
 \*Description:程序入口,依赖声明
 */

define([

], function () {
    'use strict';
   function httpProviderConfig($httpProvider){
       $httpProvider.interceptors.push(['$injector',function($injector){
           return $injector.get('AuthInterceptor');
       }]);
   }
   httpProviderConfig.$inject=['$httpProvider'];
    return httpProviderConfig;
});   