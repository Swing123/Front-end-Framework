/**
 * Created by Swing on 2016/10/31.
 */
define([

], function(){
        'use strict';
        function disDynamicTableDir(){
            return{
                restrict:'EA',
                replace:false,
                templateUrl:'business/dynamicTable/tpl/dynamicTable.html',
                scope:{
                    "tableConfig":"="
                },
                controller:['$scope',function($scope){

                }],
                compile: function compile(tElement, tAttrs, transclude) {
                    return {
                        pre: function preLink(scope, iElement, iAttrs, controller) { },
                        post: function postLink(scope, iElement, iAttrs, controller) {
                            /*分页*/
                            function pagination() {

                                scope.totalItem = scope.tableConfig.tbody_List.length; //总条数
                                scope.pageSize = 5; //每页展示条数
                                scope.totalPages = Math.ceil(scope.totalItem / scope.pageSize); //总页数

                                //数据分页
                                scope.selectedPage = 1;
                                scope.itemsShow = scope.tableConfig.tbody_List.slice(0, scope.pageSize);
                                scope.setData = function () {
                                    scope.itemsShow = scope.tableConfig.tbody_List.slice(scope.pageSize * (scope.selectedPage - 1), scope.pageSize * scope.selectedPage);
                                };

                                //初始索引
                                scope.newPages = scope.totalPages > 5 ? 5 : scope.totalPages;
                                scope.pageShowList = [];
                                for (var i = 0; i < scope.newPages; i++) {
                                    scope.pageShowList.push(i + 1);
                                }

                                //分页转换，打印当前索引
                                scope.selectPage = function (page) {
                                    if (page < 1 || page > scope.totalPages)
                                        return;
                                    if (page > 2) {
                                        var newPageList = [];
                                        for (var i = (page - 3); i < ((page + 2) > scope.totalPages ? scope.totalPages : (page + 2)); i++) {
                                            newPageList.push(i + 1);
                                        }
                                        scope.pageShowList = newPageList;
                                    }
                                    scope.selectedPage = page;
                                    scope.setData();
                                    scope.isActivePage(page);
                                };

                                //上下页切换
                                scope.Previous = function () {
                                    if (scope.pageShowList[0]==2)
                                        scope.pageShowList=[1,2,3,4,5];
                                    scope.selectPage(scope.selectedPage - 1);
                                };
                                scope.Next = function () {
                                    scope.selectPage(scope.selectedPage + 1);
                                };
                                scope.isFirstPage = function () {
                                    return scope.selectedPage == 1;
                                };
                                scope.isLastPage = function () {
                                    return scope.selectedPage == scope.totalPages;
                                };

                                //选中状态
                                scope.isActivePage = function (page) {
                                    return scope.selectedPage == page;
                                };
                            }

                            pagination();

                        }
                    };
                }
            };
        }
    return disDynamicTableDir;
});