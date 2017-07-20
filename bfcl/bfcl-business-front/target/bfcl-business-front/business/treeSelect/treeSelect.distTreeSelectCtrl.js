/**
 * Created by wanghy on 2016/11/24.
 */
define([], function () {
    'use strict';
    function distSelectTreeCtrl($scope, $window, $timeout) {
        $scope.selectFocus = false;
        $scope.selectItems = [];
        $scope.selectItem = null;
        $scope.selectItemNames = '';
        $scope.treeConfirmClick = $scope.treeConfirmClick();

        //阻止点击列表触发window上点击事件
        $scope.treeSelectClick = function ($event) {
            $event.stopPropagation();
        };

        //点击页面其它地方收缩列表
        $window.addEventListener('click', function ($event) {
            $timeout(function () {
                $scope.selectFocus = false;
            });
            $event.stopPropagation();
        });

        //判断是否有子节点
        $scope.isLeaf = function (item) {
            var ret = true;
            if (item.children && item.children.length > 0) {
                ret = false;
            }
            return ret;
        };

        //收缩展开列表
        $scope.expendItem = function (item, $event) {
            item.$$isExpend = !item.$$isExpend;
            $event.stopPropagation();
        };

        //递归修改子节点选中状态
        function syncChecked(item, status) {
            item.$$isChecked = status;
            if (item.children && item.children.length > 0) {
                for (var i = item.children.length-1; i >= 0; i--) {
                    item.children[i].$$isChecked = status;
                    syncChecked(item.children[i], status);
                }
            }
        }

        //勾选项目按钮事件
        $scope.checkboxClick = function (item, $event) {
            $timeout(function () {
                var checked = item.$$isChecked;
                syncChecked(item, checked);
            });
            $event.stopPropagation();
        };

        //每一项点击事件
        $scope.itemClick = function (item, $event) {
            $timeout(function () {
                if ($scope.selectItem) {
                    $scope.selectItem.$$isSelected= false;
                }
                $scope.selectItem = item;
                $scope.selectItem.$$isSelected = true;

                $scope.selectItem.$$isExpend = !$scope.selectItem.$$isExpend;
            });

            $event.stopPropagation();
        };

        //取消按钮点击，清除所有选项，并收起列表
        $scope.cancelClick = function ($event) {
            $timeout(function () {
                for (var i = $scope.treeData.length -1; i >=0 ; i--) {
                    syncChecked($scope.treeData[i],false);
                }
                $scope.selectItems = [];
                $scope.selectItemNames = '';
                $scope.selectFocus = false;
            });

            $event.stopPropagation();
        };

        function treeTraversal(item) {
            if ($scope.isLeaf(item)) {
                if (item.$$isChecked) {
                    $scope.selectItems.push(item);
                }
            } else {
                for (var i = item.children.length-1; i >= 0; i--) {
                    treeTraversal(item.children[i]);
                }
            }
        }

        //确定按钮点击事件，综合所有选择项返回给上层controller
        $scope.confirmClick = function ($event) {
            $timeout(function () {
                for (var i = $scope.treeData.length -1; i>=0; i--) {
                    treeTraversal($scope.treeData[i]);
                }

                var dot = '';
                for (var j = $scope.selectItems.length - 1; j >= 0; j--) {
                    $scope.selectItemNames += dot + $scope.selectItems[j].name;
                    dot = '、';
                }

                $scope.selectFocus = false;
                $scope.treeConfirmClick($scope.selectItems);
            });
        };

    }

    distSelectTreeCtrl.$inject=['$scope','$window', '$timeout'];
    return distSelectTreeCtrl;
});