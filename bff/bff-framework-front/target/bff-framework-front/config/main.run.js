/**
 \* Created by Wanggb with IntelliJ IDEA.
 \*Orgs:DIST
 \*Date:12/8/2016
 \*Time:12:25 PM
 \*Description:程序入口,依赖声明
 */

define([
    'angular'
], function (angular) {
    'use strict';
    //待返回的执行函数对象
    var appRun={
        "frameworkLayoutInit":frameworkLayoutInit,
        "frameworkDeviceTypeInit":frameworkDeviceTypeInit
    };

    /**
     * @description 初始化页面布局，并将页面布局的参数添加到$rootScope中
     * @name frameworkLayoutInit
     * @params {Object} $rootScope，根作用域
     * @params {Object} $localStorage，本地存储作用域
     * @return {null} 无
     * */
    function frameworkLayoutInit($rootScope,   $localStorage) {
        // 页面布局设置初始化
        $rootScope.app = {
            name: '平台产品',
            version: '2.0.1',
            // for chart colors
            color: {
                primary: '#7266ba',
                info:    '#23b7e5',
                success: '#27c24c',
                warning: '#fad733',
                danger:  '#f05050',
                light:   '#e8eff0',
                dark:    '#3a3f51',
                black:   '#1c2b36'
            },
            settings: {
                themeID: 1,
                navbarHeaderColor: 'bg-info dker',
                navbarCollapseColor: 'bg-info dker',
                asideColor: 'bg-light dker b-r',
                headerFixed: true,
                asideFixed: true,
                asideFolded: false,
                asideDock: false,
                container: false
            }
        };
        //设置本地存储
        // save settings to local storage
        if ( angular.isDefined($localStorage.settings) ) {
            $rootScope.app.settings = $localStorage.settings;
        } else {
            $localStorage.settings = $rootScope.app.settings;
        }
        //监测变量
        $rootScope.$watch('app.settings', function(){
            if( $rootScope.app.settings.asideDock  &&  $rootScope.app.settings.asideFixed ){
                // aside dock and fixed must set the header fixed.
                $rootScope.app.settings.headerFixed = true;
            }
            // save to local storage
            $localStorage.settings = $rootScope.app.settings;
        }, true);
    }


    /**
     * @description 判断使用设备类型<根据设备类型初始化页面布局
     * @name frameworkDeviceTypeInit
     * @params {Object} $window，window对象
     * @return {null} 无
     * */
    function frameworkDeviceTypeInit($window) {

        // add 'ie' classes to html
        var isIE = !!navigator.userAgent.match(/MSIE/i);
        isIE && angular.element($window.document.body).addClass('ie');
        isSmartDevice( $window ) && angular.element($window.document.body).addClass('smart');

        //判断是否为smart设备
        function isSmartDevice( $window ){
            // Adapted from http://www.detectmobilebrowsers.com
            var ua = $window['navigator']['userAgent'] || $window['navigator']['vendor'] || $window['opera'];
            // Checks for iOs, Android, Blackberry, Opera Mini, and Windows mobile devices
            return (/iPhone|iPod|iPad|Silk|Android|BlackBerry|Opera Mini|IEMobile/).test(ua);
        }
    }


    frameworkLayoutInit.$inject=['$rootScope', '$localStorage'];
    frameworkDeviceTypeInit.$inject=['$window'];
    return appRun;
});   