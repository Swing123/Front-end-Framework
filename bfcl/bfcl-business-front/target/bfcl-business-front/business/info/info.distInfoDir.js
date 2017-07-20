/**
 * Created by Swing on 2016/11/24 .
 */
define([

],function(){
    'use strict';
    function distInfoDir(){
        return{
            restrict:'EA',
            replace:false,
            templateUrl:'business/info/tpl/info.html',
            scope:{
                "infoConfig":"=",
                "singleClick":"&"
            },
            controller:['$scope',function($scope){

            }],
            compile:function compile(tElement,tAttrs,transclude){
                return{
                    pre:function preLink(scope,iElement,iAttrs,controller){},
                    post:function postLink(scope,iElement,iAttrs,controller){
                        var vmEvents=scope.vmEvents={};
                        angular.extend(vmEvents,{
                            singleClick:scope.singleClick()||angular.noop,//单击事件
                            //doubleClick:scope.doubleclick()||angular.noop,//双击事件
                        })
                    }
                }
            }
        }
    }
    return distInfoDir;
});