var app = angular.module('AceApp');
app.directive("parentChildrenSetterBuz", function () {
    return {
        restrict: 'AE'
        , replace: true
        , scope: {
            config: '='
            , parentparam: '='
            , memberparam: '='
        }
        , templateUrl: 'parentChildrenSetterBuz/parentChildrenSetterBuz-tpl.html'
        , link: function(scope){
            scope._init();
        }
        , controller: function ($scope, BroadcastService) {
            console.log(">>>parentChildrenSetterBuz");
            console.log("scope=", $scope);
            var vm = $scope;

            vm._init = function () {
                if (!vm.config) {
                    console.log("配置参数config未定义");
                    return;
                }
                if (!vm.parentparam) {
                    console.log("实例参数parentParam未定义");
                    return;
                }
                if (!vm.memberparam) {
                    console.log("实例参数memberParam未定义");
                    return;
                }
                //控件必须在初始化时调用BroadcastService.initMessages()以进行消息映射
                BroadcastService.initMessages(vm);
            }

            // vm._init()
            console.log("<<<parentChildrenSetterBuz");
        }
    }
})
;