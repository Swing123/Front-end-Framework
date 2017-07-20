
(function(window,angular,undefined){
	'use strict';
	angular.module('dist.ui.wiTab',[])
		.directive("wiPageTab",['$rootScope',function($rootScope){
			return {
				restrict:"EA",
				replace:true,
				scope:{
					tabConfig:"=?",
					itemclick:"&"
				},
				templateUrl:"template/wiTab/wiPageTab-template-tab.html",
				compile:function compile(tElement, tAttrs, transclude) {
				return {
					pre: function preLink(scope, iElement, iAttrs, controller) { },
					post: function postLink(scope, iElement, iAttrs, controller) {
						scope.itemclick=scope.itemclick()||angular.noop;
						scope.currentTab=0;
						scope.tabConfig.lists=scope.tabConfig.lists||[];
						angular.forEach(scope.tabConfig.lists,function(data,index,array){
							if(data.active){
								scope.currentTab=index;
							}
						});
						scope.tabs = function(index){
							return index===scope.currentTab;
						};
					
						scope.tab = function(list,index){
							scope.itemclick(index,list);
							scope.currentTab=index;
						};
					}
				};
				}
			};
		}]);
}(window,window.angular));
	
	