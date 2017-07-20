/**
 \* Created by Wanggb with IntelliJ IDEA.
 \*Orgs:DIST
 \*Date:11/3/2016
 \*Time:9:44 AM
 \*Description:程序入口,依赖声明
 */

define([
    'angular'
], function (angular) {
    'use strict';
    function sessionServ($sessionStorage,$rootScope,AUTH_EVENTS){
        var $this=this;

        /**
         * @ngdoc public variables
         * @description
         * 服务暴露公共变量
         */
        $this.id=null;//会话id
        $this.userId=null;//用户id
        $this.userRole=null;//用户角色
        $this.userAuthLists=[];//用户权限列表

        /**
         * @ngdoc function
         * @description
         * 格式化权限列表，将id相同的权限项放到一起；
         * @param {object} userAuthLists 权限信息对象。
         * @return {object} 格式化之后的权限信息['idName':[{'idName':'','otherPropertyName',}]]
         */
        $this.authListFormat=function(userAuthLists){
            var authLists=[];
            if(!angular.isArray(userAuthLists)){
                userAuthLists=[];
            }
            angular.forEach(userAuthLists,function(data,index,Array){
                if(typeof data.id!=='undefined'){
                    if(!angular.isArray(authLists[data.id])){
                        authLists[data.id]=[];
                    }
                    authLists[data.id].push(data);
                }
            });
            // console.info(authLists);
            return authLists;
        };

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
        $this.create=function(sessionId,userId,userRole,userAuthLists){  //创建会话
            $sessionStorage.sessionId=$this.id=sessionId;
            $sessionStorage.userId=$this.userId=userId;
            $sessionStorage.userRole=$this.userRole=userRole;
            $sessionStorage.userAuthLists=userAuthLists;
            $this.userAuthLists=$this.authListFormat(userAuthLists);
            $rootScope.$broadcast(AUTH_EVENTS.permissionChanged);//权限改变
        };
        /**
         * @ngdoc function
         * @description destroy
         * 销毁会话，销毁权限信息
         * @return {null}
         */
        $this.destroy=function(){  //销毁会话
            $sessionStorage.sessionId=$this.id=null;
            $sessionStorage.userId=$this.userId=null;
            $sessionStorage.userRole=$this.userRole=null;
            $sessionStorage.userAuthLists=$this.userAuthLists=[];
            $rootScope.$broadcast(AUTH_EVENTS.permissionChanged);//权限改变
        };
        $this.create($sessionStorage.sessionId,$sessionStorage.userId,$sessionStorage.userRole,$sessionStorage.userAuthLists);

        return $this;
    }
    sessionServ.$inject=['$sessionStorage','$rootScope','AUTH_EVENTS'];
    return sessionServ;
});   