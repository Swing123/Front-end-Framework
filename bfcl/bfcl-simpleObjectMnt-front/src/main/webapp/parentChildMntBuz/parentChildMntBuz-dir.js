var app = angular.module('AceApp');
app.directive("parentChildMntBuz", function (BroadcastService) {
    return {
        restrict: 'AE'
        , replace: true
        , scope: {
            config: '='
            , parentparam: '='
            , childparam: '='
        }
        , templateUrl: 'parentChildMntBuz/parentChildMntBuz-tpl.html'
        , link: function(scope){
            var vm = scope;

            vm.hehe = function(){
                console.log("hehe");
            }
            vm._init = function () {
                if (!vm.config) {
                    console.log("配置参数config未定义");
                    return;
                }
                if (!vm.parentparam) {
                    console.log("实例参数parentParam未定义");
                    return;
                }
                if (!vm.childparam) {
                    console.log("实例参数memberParam未定义");
                    return;
                }
                //控件必须在初始化时调用BroadcastService.initMessages()以进行消息映射
                BroadcastService.initMessages(vm);
            }
            vm._init();
        }
        , controller: function ($scope, BroadcastService) {
            console.log(">>>parentChildMntBuz");
            console.log("scope=", $scope);
            var vm = $scope;

                if (!vm.config) {
                    console.log("配置参数config未定义");
                    return;
                }
                if (!vm.parentparam) {
                    console.log("实例参数parentParam未定义");
                    return;
                }
                if (!vm.childparam) {
                    console.log("实例参数memberParam未定义");
                    return;
                }
                //控件必须在初始化时调用BroadcastService.initMessages()以进行消息映射
                // BroadcastService.initMessages(vm);
            // vm._init()
            console.log("<<<parentChildMntBuz");
        }
    }
})
;