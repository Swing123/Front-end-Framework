var app = angular.module('AceApp');
app.directive("simpleObjectView", function () {
    return {
        restrict: 'AE'
        , replace: true
        , scope: {
            config: '='
            , preparedata: '='
            , newdata: '='
            , cancel: "&"
            , id: '='
        }
        , templateUrl: 'simpleObjectMnt/view-tpl.html'
        , controller: function ($scope) {
            console.log(">>>simpleObjectViewController enter", $scope);
            $scope.visible = true;

            $scope.onSelect = function (node, idfield) {
                console.log("newData=", $scope.newData);
            };

            console.log("<<<simpleObjectViewController return");
        }
    }
});