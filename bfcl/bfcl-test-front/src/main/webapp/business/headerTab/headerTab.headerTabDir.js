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
    function distSidebarDir($http,$state,$stateParams,$sessionStorage,$rootScope,HeaderTabEvent,stateReloadService){
        return {
            restrict:'EA',
            replace:false,
            scope:{
                "tabData":"=?",
                "homePage":"=?"
            },
            controller:['$scope',function($scope){}],
            templateUrl:'business/headerTab/tpl/headerTab.html',
            compile: function compile(tElement, tAttrs, transclude) {
                return {
                    pre: function preLink(scope, iElement, iAttrs, controller) { },
                    post: function postLink(scope, iElement, iAttrs, controller) {
                        // scope.currentTabData={
                        //     "tabs":[
                        //         // {ui_sref:'sidebar.content',url: "AppCenter-appApprove-tpl-approveHandled", tabName: "在办箱", tabGroup: "businessApprove", params: ""},
                        //         // {ui_sref:'sidebar.content',url: "AppCenter-authenticationTest-tpl-authTest", tabName: "权限", tabGroup: "businessApprove", params: ""}
                        //         ]
                        // };
                        //homePage,当前tab跳转失效时对应跳转的路由
                        scope.homePage=scope.homePage||{ui_sref:'sidebar.content',url: "AppCenter-appHome-tpl-home", tabName: "首页", tabGroup: "", params: ""};
                        scope.currentTabData=$sessionStorage.headerTabCurrentTabDadta||{};//当前tab组的默认值
                        scope.allTabsData=$sessionStorage.headerTabAllTabsData||{};//页面所有tab组的默认值
                        scope.currentActiveTab=$sessionStorage.headerTabCurrentActiveTab||0;//当前tab的默认值
                        scope.$watch('currentTabData',function(){//监测当前tab数组的变化并缓存
                            $sessionStorage.headerTabCurrentTabDadta=scope.currentTabData;
                        });

                        // $rootScope.headerTab初始化
                        $rootScope.headerTab={};

                        // scope.allTabsData=[];//保存所有tab
                        scope.$watch("allTabsData",function(){//监测页面所有tab数组的变化并缓存
                            $sessionStorage.headerTabAllTabsData=scope.allTabsData;
                        });
                        // scope.currentActiveTab=0;//保存当前激活tab
                        scope.$watch('currentActiveTab',function(){//监测当前tab的变化并缓存
                            $sessionStorage.headerTabCurrentActiveTab=scope.currentActiveTab;
                        });


                        /**
                         * @description 根据传入的tab的GroupName设置将哪个tab组设置为当前的tab组
                         * @name activeTab
                         * @params {number} index，当前激活项的tab的索引值
                         * @return {Boolean} 返回判断结果，true为处于激活状态
                         * */
                        scope.activeTab=function(index){//判断tab是否激活
                            return index===scope.currentActiveTab;
                        };

                        /**
                         * @description 根据传入的tab的GroupName设置将哪个tab组设置为当前的tab组
                         * @name setActiveTab
                         * @params {Object} tempTabs，当前的tab信息
                         * @return {null}
                         * */
                        scope.setActiveTab=function(tempTabs){
                            // scope.currentActiveTab=scope.currentTabData.tabs.indexOf(tab);
                            angular.forEach(scope.allTabsData[tempTabs.tabGroup],function(data,index,Array){
                                if(scope.isEqual(data,tempTabs)){
                                    scope.currentActiveTab=index;
                                }
                            });
                        };

                        /**
                         * @description 选择某个tab 选中tab操作后跳转到对应的路由
                         * @name selectTab
                         * @params {Object} tab，选中的tab的信息
                         * @return {null}
                         * */
                        scope.selectTab=function(tab){
                            if(typeof tab!=="object"){
                                tab=eval('('+tab+')');
                            }
                            var goTab={};
                            goTab=angular.copy(tab);
                            // console.log(JSON.stringify(tab));
                            $state.go(goTab.ui_sref,goTab,{inherit:false,location:true});
                        };

                        /**
                         * @description 判断两个对象是否相等
                         * @name isEqual
                         * @params {Object} object1，比较对象1
                         * @params {Object} object2，比较对象2
                         * @return {Boolean} 返回是否相等，true为相等
                         * */
                        scope.isEqual=function(object1,object2){
                            //判断两个tab是否相等的依据为url,tabName,tabGroup是否相等
                            return object1.url===object2.url&&object1.tabName===object2.tabName&&object1.tabGroup===object2.tabGroup;
                        };

                        /**
                         * @description 关闭tab栏，发送关闭消息
                         * @name clickClose
                         * @params {Object} tab，需要关闭的tab栏的信息
                         * @return {null}
                         * */
                        scope.clickClose=function(tab){
                            $rootScope.$broadcast(HeaderTabEvent.headerTabClose,tab);
                        };

                        /**
                         * @description 监听关闭tab栏的消息，关闭tab栏
                         * @name clickClose
                         * @params {Object} HeaderTabEvent.headerTabClose，监听的消息的名称
                         * @return {null}
                         * */
                        scope.$on(HeaderTabEvent.headerTabClose,function(event,tab){
                            var deleteTab=angular.copy(tab);
                            var currentTabs=angular.copy(scope.currentTabData.tabs);
                            try{
                                var searchTabIndex=-1;
                                if(deleteTab.tabGroup===currentTabs[0].tabGroup){
                                    angular.forEach(currentTabs,function(data,index,Array){
                                        if(scope.isEqual(data,deleteTab)){
                                            // console.log(data)
                                            searchTabIndex=index;
                                        }
                                    });
                                    if(scope.currentActiveTab===searchTabIndex){
                                        switch (searchTabIndex){
                                            case -1:
                                                // console.info(deleteTab);
                                                throw "找不到待删除项";
                                            case 0:
                                                scope.allTabsData[deleteTab.tabGroup].splice(0,1);
                                                if(currentTabs.length>1){
                                                    $state.go(currentTabs[1].ui_sref,currentTabs[1],{inherit:false,location:true});
                                                }else{
                                                    $state.go(scope.homePage.ui_sref,scope.homePage,{inherit:false,location:true});
                                                }
                                                break;
                                            default:
                                                scope.allTabsData[deleteTab.tabGroup].splice(searchTabIndex,1);
                                                $state.go(currentTabs[searchTabIndex-1].ui_sref,currentTabs[searchTabIndex-1],{inherit:false,location:true});
                                                break;
                                        }
                                    }else{
                                        switch (searchTabIndex){
                                            case -1:
                                                // console.info(deleteTab);
                                                throw "找不到待删除项";
                                            default:
                                                scope.allTabsData[deleteTab.tabGroup].splice(searchTabIndex,1);
                                                if(searchTabIndex<scope.currentActiveTab){scope.currentActiveTab-=1;}
                                                break;
                                        }
                                    }

                                }else{
                                     searchTabIndex=-1;
                                    angular.forEach(currentTabs,function(data,index,Array){
                                        if(scope.isEqual(data,deleteTab)){
                                            searchTabIndex=index;
                                        }
                                    });
                                    switch (searchTabIndex){
                                        case -1:
                                            throw "找不到待删除项";
                                        default:
                                            scope.allTabsData[deleteTab.tabGroup].splice(searchTabIndex,1);
                                            break;
                                    }
                                }
                                //清空页面tab缓存
                                stateReloadService.deleteStateByParams(deleteTab);

                            }catch(e){
                                console.log(e);

                            }
                        });

                        /**
                         * @description 更新tab页的相关信息
                         * @name freshTabs
                         * @params {Object} stateParams，当前路由的参数
                         * @params {Object} state，当期的路由信息
                         * @return {null}
                         * */
                        function freshTabs(state,stateParams){
                            var tempTabs=angular.copy(stateParams);
                            tempTabs.ui_sref=state.name;
                            tempTabs.tabGroup=tempTabs.tabGroup||'NONEHEADERTAB';
                            switch(tempTabs.tabGroup){
                                case 'NONEHEADERTAB'://路由参数中没有附带跳转tabGroup时，使用默认的标签名称
                                    scope.allTabsData[tempTabs.tabGroup]=[];
                                    scope.currentTabData.tabs=[];
                                    break;
                                default://当路由附带跳转tabGroup时，根据tabGroup寻找tab的归属
                                    if(!angular.isArray(scope.allTabsData[tempTabs.tabGroup])){
                                        scope.allTabsData[tempTabs.tabGroup]=[];
                                    }
                                    var searchTabIndex=-1;
                                    angular.forEach(scope.allTabsData[tempTabs.tabGroup],function(data,index,Array){
                                        if(scope.isEqual(data,tempTabs)){
                                            searchTabIndex=index;
                                        }
                                    });

                                    if(-1===searchTabIndex){
                                        scope.allTabsData[tempTabs.tabGroup].push(tempTabs);
                                    }
                                    scope.currentTabData.tabs=scope.allTabsData[tempTabs.tabGroup];//获取当期tab数组
                                    scope.setActiveTab(tempTabs);//设置当前激活的tab
                            }

                            var tabsCache=stateReloadService.getState(stateParams);
                            $rootScope.headerTab.stateIndex=tabsCache.stateIndex;
                            $rootScope.headerTab.stateItems=tabsCache.stateUrl;
                        }

                        freshTabs($state.current,$stateParams);//根据当期路由刷新tab栏的状态
                        scope.$on('$stateChangeSuccess',function(event,toState,toParams,fromState,fromParams){
                            freshTabs(toState,toParams);//当路由有跳转行为时刷新tab栏的状态
                            var tabsCache=stateReloadService.getState(toParams);
                            $rootScope.headerTab.stateIndex=tabsCache.stateIndex;
                            $rootScope.headerTab.stateItems=tabsCache.stateUrl;
                        });

                    }
                };
            },
        };
    }
    distSidebarDir.$inject=['$http','$state','$stateParams','$sessionStorage','$rootScope','HeaderTabEvent','stateReloadService'];
    return distSidebarDir;
});

