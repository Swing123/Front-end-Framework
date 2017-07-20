var app = angular.module('AceApp');
//TODO 后续可增加搜索框,对树节点进行过滤
app.directive("treeSelector", function () {
    return {
        restrict: 'AE'
        , replace: true
        , scope: {
            idfield: '@'
            , pidfield: '@'
            , labelfield: '@'
            , data: '='
            , onrefresh: '&'
            , onselectchanged: '&'
        }
        , templateUrl: 'treeSelector/treeSelector-tpl.html'
        , controller: function ($scope) {
            console.log(">>>treeSelector", $scope);

            var vm = $scope;
            vm._selectedItem = null;

            vm._init = function () {
            }
            vm._refresh = function () {
                console.log(">>>treeSelector._refresh():", vm.onrefresh);
                if (vm.onrefresh)
                    vm.onrefresh()();
                console.log("<<<treeSelector._refresh()");
            }
            $scope._onItemClick = function (item) {
                console.log(">>>treeSelector._onItemClick()");
                if (vm._selectedItem != item) {
                    vm._selecteditem = item;
                    if (vm.onselectchanged)
                    //必须使用这种方式才能向&方法传递参数,如果使用vm.onselectchanged(item),那么在parent中无法获得传递过去的item
                        vm.onselectchanged()(item);
                }
                console.log("<<<treeSelector._onItemClick()");
            }

            vm._init();
            console.log("<<<treeSelector");
        }
    }
});