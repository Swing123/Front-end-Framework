/**
 * Created by Swing on 2016/11/29 .
 */
define([

],function(){
    'use strict';
    function distBoardDir(){
        return{
            restrict:'EA',
            replace:false,
            templateUrl:'business/board/tpl/board.html',
            scope:{
                "boardConfig":"=",
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
    return distBoardDir;
});