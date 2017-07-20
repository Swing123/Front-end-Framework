/**
 \* Created by Wanggb with IntelliJ IDEA.
 \*Orgs:DIST
 \*Date:11/3/2016
 \*Time:9:53 AM
 \*Description:程序入口,依赖声明
 */

define([

], function () {
    'use strict';
    function authPermissionDir($rootScope,$log,AuthService,AUTH_EVENTS,USER_ROLES,AUTH_ACTION){
        return{
            compile:function(ele,iAttrs){
                return {
                    pre:function(scope,ele,iAttrs){

                    },
                    post:function(scope,ele,iAttrs){
                        iAttrs.authPermission=iAttrs.authPermission||'{}';
                        if(!typeof (iAttrs.authPermission)==='String'){
                            throw 'authPermisson value must be a json string';
                        }
                        var value=iAttrs.authPermission.trim();
                        value=value.replace(/\'/g,'\"');

                        try{
                            value=JSON.parse(value);
                        }catch(e){
                            throw 'authPermisson value must be a json string';
                        }
                        /**
                         * @description:开启权限认证函数
                         * @params null
                         * @return null
                         * */
                        function toggleAuthenticationBasedOnPermission(){
                            var hasPermission=AuthService.isAuthenticated();
                            var userAction={
                                'default':function(scope,ele,iAttrs){},//默认操作
                                'show': function(scope,ele,iAttrs){ ele.show();/*$log.info('show action',ele);*/},//显示
                                'hide': function(scope,ele,iAttrs){ ele.hide();/*$log.info('hide action',ele);*/},//隐藏
                                'enable': function(scope,ele,iAttrs){ ele.removeAttr('disabled');ele.removeClass('auth-linkDisabled');/*$log.info('enable action',ele);*/},//使能
                                'disable': function(scope,ele,iAttrs){iAttrs.$set('disabled', 'disabled');ele.addClass('auth-linkDisabled');/*$log.info('disable action',ele);*/},//禁用
                            };
                            var actionPair={
                                'default':['default','default'],//默认操作
                                'show': ['hide','show'],//默认隐藏，有权限时显示
                                'hide': ['show','hide'],//默认显示，有权限时隐藏
                                'enable': ['disable','enable'],//默认禁止，有权限时使能
                                'disable': ['enable','disable'],//默认使能，有权限时禁用
                            };
                            try{
                                value=value||{};
                                value.id=value.id||'';//取user权限列表
                                value.groupLabel=value.groupLabel||null;//所属分组
                                value.action=value.action||null;//取user action
                                // value.action=
                                // userAction[actionPair[value.action][0]](scope,ele,iAttrs);//执行默认操作;
                                if(hasPermission&& value.id!==''){//判断是否认证
                                    var authentication=AuthService.isAuthorized(value.id,value.groupLabel);
                                    var finallyAction= value.action||authentication.data.actionType||'show';
                                        if(authentication.status){
                                            finallyAction= value.action||authentication.data.actionType||'show';
                                            userAction[finallyAction](scope,ele,iAttrs);
                                        }else{
                                            finallyAction= value.action||'hide';
                                            userAction[finallyAction](scope,ele,iAttrs);
                                        }
                                }
                            }catch(e){
                                throw {'status':'authenticate failed!','errorMsg':e};
                            }

                        }
                        toggleAuthenticationBasedOnPermission();
                        scope.$on(AUTH_EVENTS.permissionChanged,toggleAuthenticationBasedOnPermission);

                    }
                };
            },
            controller:['$scope',function($scope){
            }]
        };
    }
    authPermissionDir.$inject=['$rootScope','$log','AuthService','AUTH_EVENTS','USER_ROLES','AUTH_ACTION'];
    return authPermissionDir;
});   