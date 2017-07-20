/**
 \* Created by Wanggb with IntelliJ IDEA.
 \*Orgs:DIST
 \*Date:11/1/2016
 \*Time:2:25 PM
 \*Description:程序入口,依赖声明
 */
define([
    'angular'
], function (angular) {
    'use strict';
    /**
     * Config for the router
     */
    function stateProvider($stateProvider,$urlRouterProvider) {
        $urlRouterProvider
            .otherwise('sidebar/content/AppCenter-appHome-tpl-home/主页//');//默认加载的页面
        $stateProvider
            .state('sidebar', {
                abstract: true,
                url: '/sidebar',
                templateUrl: 'config/router.index.html',
                // controller:''//为了实现页面tab缓存，避免tab切换重新加载数据，并根据路由变化切换tab，
                //此级controller不启用,改用将tab切换时页面数据存放于$rootScope上，具体设置置于business/headerTab的目录下
            })
            .state('sidebar.content', {//此级路由功能：通过获取界面跳转参数，不参与界面渲染
                url: '/content/:url/:tabName/:tabGroup/:params',
                //templateProvider 此级动态template url加载取消
                //controllerProvider 此级动态controller设置取消
                template:'<div></div>',//模板为空，此级路由不参与界面渲染
                params: { tabName: { value: null },tabGroup:{value:null},params:{value:null}},
                // reload:true,//跳转时更新参数
                inherit:false,//不继承参数
                resolve: {} //resolve动态获取templateUrl,controller的相关操作取消
            })
            //登录模块路由，测试权限用，实际项目可以取消
            .state('access', {
                url: '/access',
                template: '<div ui-view class="fade-in-right-big smooth"></div>'
            })
            .state('access.login', {
                url: '/login',
                templateUrl: 'AppCenter/appLogin/tpl/page_login.html',
                resolve: {},
                controller: ['AuthService',function(AuthService){
                    AuthService.destroyCurrentSession();
                }]
            });
    }
    stateProvider.$inject=['$stateProvider', '$urlRouterProvider'];
    return stateProvider;

});
/*以下注释皆可以当做模板使用，可以解决大多数路由配置问题*/
// .state('app.onHandling', {
//     url: '/onHandling',
//     templateUrl: 'AppCenter/appApprove/tpl/approveOnHandling.html',
//     data: {
//
//     },
//     resolve: {
//     }
// })
// .state('app', {
//     abstract: true,
//     url: '/app',
//     templateUrl: 'config/router.index.html'
// })
/*controller:['$stateParams','$scope','stateReloadService',function($stateParams,$scope,stateReloadService){
 $scope.templateUrl = ''
 $scope.$on('$stateChangeSuccess',function(event,toState,toParams,fromState,fromParams){
 // $scope.templateUrl = $route.current.templateUrl;
 var vm=$scope.vm={};
 var stateParams=angular.copy(toParams);
 var stateLabel=stateParams.url+stateParams.tabName+stateParams.tabGroup+stateParams.params+'';

 var templateUrl=$stateParams.url||'AppCenter/appApprove/tpl/app_approve_onHandling.html';
 templateUrl=templateUrl.replace(/\.html/g,'' );
 templateUrl=templateUrl+'.html';
 templateUrl=templateUrl.replace(/\-/g,'/' );

 var stateUrl=templateUrl;
 vm.stateIndex=stateReloadService.searchState(stateLabel,stateUrl);
 vm.stateItems=stateReloadService.getState()._stateUrl;
 console.log(vm.stateIndex,stateReloadService.getState());
 });

 }]*/

// templateProvider: ['customUrl', '$templateRequest',
//     function(customUrl, templateRequest) {
//         return templateRequest(customUrl);
//     }
// ],
// controller:['$scope','$stateParams','customCtrl','customUrl','stateReloadService',function($scope,$stateParams,customCtrl,customUrl,stateReloadService){
//             var vm=$scope.vm={};
//             var stateLabel=$stateParams.url+$stateParams.tabName+$stateParams.tabGroup+$stateParams.params+'';
//             var stateUrl=customUrl;
//              vm.stateIndex=stateReloadService.searchState(stateLabel,stateUrl);
//              vm.stateItems=stateReloadService.getState()._stateUrl;
//             console.log(vm.stateIndex,stateReloadService.getState());
// }],
// reloadOnSearch:false,
// location:'false',
// inherit:true,
// reload:false
// controllerProvider: ['customCtrl',
//      function(customCtrl){
//          return customCtrl;
//      }
//  ],
// sticky:true,
// noReload: true
/*   customCtrl:['$http','$stateParams',
 function($http,$stateParams){
 var customCtrl=$stateParams.ctrlName||'';
 return customCtrl;
 }]*/

// customUrl: ['$http', '$stateParams',
//     function($http, $stateParams) {
//         var templateUrl=$stateParams.url||'AppCenter/appApprove/tpl/app_approve_onHandling.html';
//         templateUrl=templateUrl.replace(/\.html/g,'' );
//         templateUrl=templateUrl+'.html';
//         templateUrl=templateUrl.replace(/\-/g,'/' );
//         var customUrl={url:templateUrl};
//         // console.info($stateParams);
//         /*$http.get({
//          method: "GET",
//          url: "http://localhost/api/" + $stateParams.slug
//          }).success(function(response, status, headers, config){
//          //response = {slug: "john-smith",type: "user"}
//          return response.type
//          })*/
//         return customUrl.url;
//     }
// ],
/* .state('access.signup', {
 url: '/signup',
 templateUrl: 'AppCenter/appCommon/tpl/page_signup.html',
 resolve: {}
 })
 .state('access.forgotpwd', {
 url: '/forgotpwd',
 templateUrl: 'AppCenter/appCommon/tpl/page_forgotpwd.html'
 })
 .state('access.404', {
 url: '/404',
 templateUrl: 'AppCenter/appCommon/tpl/page_404.html'
 })
 .state('access.lockme', {
 url: '/lockme',
 templateUrl: 'AppCenter/appCommon/tpl/page_lockme.html'
 });*/