/**
 \* Created by Wanggb with IntelliJ IDEA.
 \*Orgs:DIST
 \*Date:11/3/2016
 \*Time:9:47 AM
 \*Description:程序入口,依赖声明
 */

define([
'angular'
], function (angular) {
    'use strict';
    function AuthServiceServ($http,$rootScope,Session,AUTH_URL,AUTH_EVENTS){
        var authService={};
        /**
         * @ngdoc function
         * @description
         * 创建会话，保存权限信息
         * @param {object} sessionId 会话id。
         * @param {object} userId User id。
         * @param {String} userRole 用户角色。
         * @param {object} userAuthLists 权限信息对象。
         * @return {null}
         */
        authService.login=function(requestAuthDataUrl,credentials){//登陆服务
            return $http({
                'url':requestAuthDataUrl||AUTH_URL.loginUrl,
                'data':credentials,
                'method':'post'
            }).then(function(response){
                Session.create(response.data.session.id,response.data.user.id,response.data.user.role,response.data.authLists);//创建会话
                $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);//登录成功
                // console.info(response);

            },function(response){
                Session.destroy();//注销当前会话
                $rootScope.$broadcast(AUTH_EVENTS.loginFailed);//登录失败
            });
        };

        /**
         * @ngdoc function
         * @description
         * 会话认证
         * @return {Boolean} 是否进行了会话认证
         */
        authService.isAuthenticated=function(){//判断是否验证
            return !!Session.userId;
        };


        /**
         * @ngdoc function
         * @description
         * 验证目标是否授权
         * @params {String} targetId 待验证的目标的ID信息
         * @params {String} groupLabel 待验证的目标的组标签/路径标签
         * @return {object} {"status":Boolean,"data":object};
         */
        authService.isAuthorized=function(targetId,groupLabel){//判断目标是否授权
            groupLabel=groupLabel||null;
            var searchStatus={"status":false,"data":{}};
            try{
                if((typeof targetId!=='undefined')&&(typeof targetId ==='string')){
                    if(groupLabel===null){
                        searchStatus.status=(typeof (Session.userAuthLists[targetId])!=='undefined');
                        switch(searchStatus.status){
                            case true:
                                searchStatus.data=Session.userAuthLists[targetId][0];
                                break;
                            default:
                                searchStatus.data='';
                        }
                    }else{
                        if(typeof (Session.userAuthLists[targetId])!=='undefined'){
                            var  sessionUserAuthLists=Session.userAuthLists[targetId];
                            for(var i=0;i<sessionUserAuthLists.length;i++){
                                if(sessionUserAuthLists[i].groupLabel==groupLabel){
                                    searchStatus.status=true;
                                    searchStatus.data=sessionUserAuthLists[i];
                                    break;
                                }
                            }
                        }
                    }
                }
            }catch(e){
                throw {'status':'isAuthorized failed!','errorMsg':e};
            }

            return searchStatus;
         };

        /**
         * @ngdoc function getCurrentSessionInfo
         * @description
         * 返回当前会话所有信息
         * @return {Object} 当前所有会话信息
         */
        authService.getCurrentSessionInfo=function(){//返回当前会话所有信息
            return Session;
        };

        /**
         * @ngdoc function getCurrentSessionInfo
         * @description
         * 销毁当前会话
         * @return {Object} 当前所有会话信息
         */
        authService.destroyCurrentSession=function(){//销毁当前会话
            Session.destroy();
            return Session;
        };
        /**
         * @ngdoc function getCurrentSessionInfo
         * @description
         * 销毁当前会话
         * @return {Object} 当前所有会话信息
         */
        authService.createCurrentSession=function(sessionId,userId,userRole,userAuthLists){//创建会话
            Session.create(sessionId,userId,userRole,userAuthLists);
            return Session;
        };

        return authService;//返回权限判断服务

    }
    AuthServiceServ.$inject=['$http','$rootScope','Session','AUTH_URL','AUTH_EVENTS'];
    return AuthServiceServ;
});   