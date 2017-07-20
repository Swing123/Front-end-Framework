/**
 \* Created by Wanggb with IntelliJ IDEA.
 \*Orgs:DIST
 \*Date:11/3/2016
 \*Time:10:50 AM
 \*Description:程序入口,依赖声明
 */

define([], function () {
    'use strict';
    function distComHeaderDir($http,$translate){
        return {
            restrict:'EA',
            replace:false,
            scope:{
                "appSettings":"=",
                "appColor":"=",
                "appData":"=",
            },
            controller:['$scope',function($scope){}],
            templateUrl:'business/header/tpl/header.html',
            compile: function compile(tElement, tAttrs, transclude) {
                return {
                    pre: function preLink(scope, iElement, iAttrs, controller) { },
                    post: function postLink(scope, iElement, iAttrs, controller) {
                        // 翻译模块暂时不使用，注释
/*                        scope.lang = scope.appData.translate.lang;
                        scope.langs = scope.appData.translate.langs;
                        scope.selectLang = scope.langs[$translate.proposedLanguage()] || "English";
                        scope.setLang = function(langKey, $event) {
                            // set the current lang
                            scope.selectLang = scope.langs[langKey];
                            // You can change the language during runtime
                            $translate.use(langKey);
                            scope.lang.isopen = !scope.lang.isopen;
                        };*/
                    }
                };
            },
        };
    }
    distComHeaderDir.$inject=['$http','$translate'];
    return distComHeaderDir;
});   