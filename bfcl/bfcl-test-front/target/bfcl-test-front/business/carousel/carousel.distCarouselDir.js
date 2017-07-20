/**
 * Created by Swing on 2016/12/2 .
 */
define([

],function(){
    'use strict';
    function distCarouselDir(){
        return{
            restrict:'EA',
            replace:false,
            templateUrl:'business/carousel/tpl/carousel.html',
            scope:{
                "carouselConfig":"=",
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
    return distCarouselDir;
});