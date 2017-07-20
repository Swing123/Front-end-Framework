/**
 * Created by wanghy on 2016/11/18.
 */
define([], function () {
    'use strict';
    function distTreeController($scope, $timeout) {

        //选中的项目
        $scope.selectedItem = null;
        $scope.selectedNode = null;
        //为了方便传递子域的值到父作用域
        $scope.doubleClick = $scope.doubleClick();
        $scope.click = $scope.click();

        $scope.toggleFolder = function(item) {
            $timeout(function () {
                item.show = !item.show;

                if ($scope.selectedNode) {
                    $scope.selectedNode.selected = false;
                }
                $scope.selectedNode = item;
                $scope.selectedNode.selected = true;

                //清除选中子项
                if ($scope.selectedItem) {
                    $scope.selectedItem.selected = false;
                    $scope.selectedItem = null;
                }
                $scope.$apply();
            });
        };

        /*
         * 避免双击事件执行两次单击事件
         * （现在是执行一次双击事件会同时触发一次单击事件，如果完全避免事件重复，会导致单击事件响应过于延迟）
         * 给选中子项添加选中样式，并清除之前选中项的样式
         */
        $scope.onClickItem = function (subItem) {
            if ($scope.clicked) {
                $scope.cancelClick = true;
                return;
            }

            $scope.clicked = true;

            $timeout(function () {
                if ($scope.cancelClick) {
                    $scope.cancelClick = false;
                    $scope.clicked = false;
                    return;
                }

                //clean up
                $scope.cancelClick = false;
                $scope.clicked = false;

                $scope.$apply();
            }, 300);

            $timeout(function () {
                if ($scope.selectedItem) {
                    $scope.selectedItem.selected = false;
                }
                $scope.selectedItem = subItem;
                $scope.selectedItem.selected = true;

                //清除选中父项
                if ($scope.selectedNode) {
                    $scope.selectedNode.selected = false;
                    $scope.selectedNode = null;
                }

                $scope.$apply();

                //父controller点击事件
                if (typeof($scope.click) == 'function') {
                    $scope.click(subItem);
                }
            });

        };

        $scope.onDblClickItem = function (subItem) {
            $timeout(function () {
                //父controller双击事件
                if (typeof($scope.doubleClick) == 'function') {
                    $scope.doubleClick(subItem);
                }
            });
        };
    }

    distTreeController.$inject=['$scope','$timeout'];
    return distTreeController;
});