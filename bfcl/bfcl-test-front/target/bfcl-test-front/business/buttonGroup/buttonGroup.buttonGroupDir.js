/**
 \* Created by Wanggb with IntelliJ IDEA.
 \*Orgs:DIST
 \*Date:2016/10/9
 \*Time:15:51
 \*Description:
 */
define([
    'angular'
], function (angular) {
    'use strict';
    function distSidebarDir($http,$interval){
        return {
            restrict:'EA',
            replace:true,
            scope:{
                "conf":"=",
                "singleclick":"&",
                "doubleclick":"&"
            },
            controller:['$scope',function($scope){
            }],
            templateUrl:'business/buttonGroup/tpl/buttonGroup.html',
            compile: function compile(tElement, tAttrs, transclude) {
                return {
                    pre: function preLink(scope, iElement, iAttrs, controller) { },
                    post: function postLink(scope, iElement, iAttrs, controller) {
                        var vmEvents=scope.vmEvents={};
                        angular.extend(vmEvents,{
                            singleClick:scope.singleclick()||angular.noop,//单击事件
                            doubleClick:scope.doubleclick()||angular.noop,//双击事件
                        });

                        var element=iElement[0];
                        initElementSize(scope,element);
                        function initElementSize(scope,element){
                            scope.initElementWidth=element.offsetWidth;
                            scope.initElementHeight=element.offsetHeight;
                        }
                        function onWindowResize(){
                            var isSizeChanged=scope.initElementWidth!=element.offsetWidth||scope.initElementHeight!=element.offsetHeight;
                            // console.log(element.offsetWidth);
                            // console.log(element);
                            if(isSizeChanged){
                                // console.info("onSized");
                                // console.log('it works')
                            }
                        }


                        var timer=$interval(function(){
                            onWindowResize();
                        },2000);
                        scope.$on("$destroy",function(){
                            $interval.cancel(timer);
                        })
                        // console.info(scope);
                        // scope.moreListsClick=function(){};
                    }
                };
            },
        };
    }
    distSidebarDir.$inject=['$http','$interval'];
    return distSidebarDir;
});

