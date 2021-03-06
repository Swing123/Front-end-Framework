var app = angular.module('AceApp');
app.directive("treeInput", function () {
    return {
        restrict: 'AE'
        , replace: true
        , scope: {
            label: '@'
            , placeholder: '@'
            , treedata: '='
            , treeidfield: '@'
            , treepidfield: '@'
            , treelabelfield: '@'
            , returnfield: '@'
            , returnvalue: '='
        }
        , templateUrl: 'treeInput/treeInput.html'
        , controller: function ($scope, $timeout) {
            console.log(">>>treeInput.controller() enter");
            var clickTime = (new Date()).getTime();//当前时间
            $scope.mytree = {};
            $scope.visible = false;
            //获取数据
            $scope.init = function () {
                console.log(">>>treeInput.controller().init() enter");
                // if (returnvalue)
                console.log("<<<treeInput.controller().init() return");
            };
            $scope.onSelect = function (node) {
                console.log(">>>treeInput.controller().onSelect() enter");
                $scope.displayvalue = node[$scope.treelabelfield];
                $scope.returnvalue = node[$scope.returnfield];
                console.log("<<<treeInput.controller().onSelect() return");
            };

            $scope.onClick = function (node) {
                console.log(">>>treeInput.controller().onclick() enter");
                var currentTime = (new Date()).getTime();//获取当前时间
                if ((currentTime - clickTime) > 300) {
                    clickTime = currentTime;//保存当前时间
                } else {//如果<=300毫秒,则为双击,隐藏树
                    $scope.onSelect(node);
                    $scope.visible = false;
                }
                console.log("<<<treeInput.controller().onclick() return");
            };

            $scope.init();

            //使用%timeout(fn,0)让js在页面加载完成之后再执行,副作用就是可以访问mytree
            console.log("returnfield=",$scope.returnfield);
            console.log("returnvalue=",$scope.returnvalue);
            if ($scope.returnfield && $scope.returnvalue) {
                $timeout(function () {
                    console.log("select node=", $scope.returnfield, $scope.returnvalue);
                    $scope.mytree.select($scope.mytree.getNode($scope.returnfield, $scope.returnvalue));
                }, 0);
            }
            console.log("<<<treeInput.controller() return");
        }
    }
});