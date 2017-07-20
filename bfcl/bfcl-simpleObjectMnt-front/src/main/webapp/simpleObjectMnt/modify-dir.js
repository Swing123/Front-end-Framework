var app = angular.module('AceApp');
app.directive("simpleObjectModify", function () {
    return {
        restrict: 'AE'
        , replace: true
        , scope: {
            config: '='
            , preparedata: '='
            , newdata: '='
            , ok: '&'
            , cancel: "&"
            , id: '='
        }
        , templateUrl: 'simpleObjectMnt/modify-tpl.html'
        , controller: function ($scope) {
            console.log(">>>simpleObjectAddController enter", $scope);
            $scope.visible = true;

            $scope.onSelect = function (node, idfield) {
                console.log("newData=", $scope.newData);
            };

            console.log("<<<simpleObjectAddController return");
        }
    }
});