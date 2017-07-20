/**
 \* Created by Wanggb with IntelliJ IDEA.
 \*Orgs:DIST
 \*Date:11/17/2016
 \*Time:2:12 PM
 \*Description:程序入口,依赖声明
 */

define([],
    function(){
        'use strict';
        function tabController($scope,$state,$rootScope){
            var vm = $scope;
            console.info('tabController in >>');
            $scope.tabClickTest=function(){
                $state.go("sidebar.content",{url:'AppCenter-appApprove-tpl-approveOnHandling',tabName:'新增1',tabGroup:'itemList',params:''});
                console.log("it works!");
            };

            $scope.clickClose=function () {
                var targetTab={ui_sref:'sidebar.content',url:'AppCenter-appApprove-tpl-approveOnHandling',tabName:'新增1',tabGroup:'itemList',params:''};
                $rootScope.$broadcast("header-tab-close",targetTab);
            };
            $scope.filterTest="string";
            $scope.tabConfig={
                "lists":[
                    {"name":"项目1","param":"","active":false},
                    {"name":"项目2","param":"","active":true},
                    {"name":"项目3","param":"","active":false}
                ]
            };
            $scope.tabClick=function(index,list){
                console.info(index,list);
            };


            vm.mydata = [];
            var seed = new Array('A','B','C','D','E','F','G','H','I','J','K','L','M','N','P','Q','R','S','T','U','V','W','X','Y','Z',
                'a','b','c','d','e','f','g','h','i','j','k','m','n','p','q','r','s','t','u','v','w','x','y','z',
                '1','2','3','4','5','6','7','8','9','0',
                '一','二','三','四','五','六','七','八','九','十'
            );
            function randomWord() {
                var createPassword = '', m,n;
                for(m=0;m<10;m++) {
                    n = Math.floor(Math.random()*seed.length);
                    createPassword += seed[n];
                }
                return createPassword;
            }
            for(var i=0;i<100;i++) {
                var obj = {};
                obj.id = i;
                obj.name = randomWord();
                vm.mydata.push(obj);
            }

        }
        tabController.$inject=["$scope","$state","$rootScope"];
        return tabController;
    }
);