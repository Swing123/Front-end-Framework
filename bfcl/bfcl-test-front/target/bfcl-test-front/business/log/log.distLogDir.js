/**
 * Created by Swing on 2016/11/15 .
 */
define([

],function(){
    'use strict';
    function distLogDir(){
        return{
            restrict:'EA',
            replace:false,
            templateUrl:'business/log/tpl/log.html',
            scope:{
                "logConfig":"="
            },
            controller:['$scope',function($scope){

            }],
            compile:function compile(tElement,tAttrs,transclude){
                return{
                    pre:function preLink(scope,iElement,iAttrs,controller){},
                    post:function postLink(scope,iElement,iAttrs,controller){
                            scope.lastPrefixDate=null;
                            scope.judgeDate=function(items){
                                var prefixDate=items[0].split("月")[0];
                                var result=prefixDate!=scope.lastPrefixDate;
                                scope.lastPrefixDate=prefixDate;
                                return result;
                            }
                    }
                }
            }
        }
    }
    return distLogDir;
});