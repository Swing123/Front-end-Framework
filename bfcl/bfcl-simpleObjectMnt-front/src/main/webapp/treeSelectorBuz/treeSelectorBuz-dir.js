var app = angular.module('AceApp');
app.directive("treeSelectorBuz", function () {
    return {
        restrict: 'AE'
        , replace: true
        , scope: {
            config: '='
            , param: '='
        }
        , templateUrl: 'treeSelectorBuz/treeSelectorBuz-tpl.html'
        , controller: function ($scope, HttpService, BroadcastService) {
            console.log(">>>treeSelectorBuz", $scope);

            var vm = $scope;
            vm._init = function () {
                if (!vm.config) {
                    console.log("配置参数config未定义");
                    return;
                }
                if (!vm.param) {
                    console.log("实例参数param未定义");
                    return;
                }
                //控件必须在初始化时调用BroadcastService.initMessages()以进行消息映射
                BroadcastService.initMessages(vm);

                vm._treedata = {};

                vm.list();
            }

            //以下代码可根据config全自动注册所有的通知发送事件,但是无法直接看到,因此后续对其的调用会比较怪异,也无法实现向外界暴露发送事件的目的
            // vm.notifyParentChanged = null;
            // if (vm.config && vm.config.messages) {
            //     vm.config.messages.forEach(function (message) {
            //         vm[message.sender] = function (data) {
            //             BroadcastService.broadcastData(message.id, data, vm.parent);
            //         }
            //     })
            // }
            vm.list = function () {
                console.log(">>>treeSelectorBuz.list()");
                HttpService.get({
                        url: vm.param.data.url
                    }
                ).then(function (data) {
                    vm._treedata = data;
                    console.log("<<<treeSelectorBuz.list() success: ", data);
                });
                console.log("<<<treeSelectorBuz.list()");
            }
            vm._onRefresh = function () {
                console.log(">>>treeSelectorBuz._onrefresh()");
                vm.list();
                //TODO 是否需要考虑设置为原selectedItem（如果原selectedItem已经不在data中,则设置为null）
                vm._onNodeSelected(null);
                console.log("<<<treeSelectorBuz._onrefresh()");
            }
            // vm.emitMessage=function(name, data, scope) {
            //     console.log(">>>treeSelectorBuz.emitMessage():name=", name, ", data=", data, ", scope=", scope);
            //     scope = scope || $rootScope;
            //     if (scope.config && scope.config.messages) {
            //         var messages = scope.config.messages.filter(function (message) {
            //             if (message && message.type == "out" && message.name == name)
            //                 return true;
            //         });
            //         if (messages.length > 0) {
            //             if (messages.length > 1)
            //                 console.error("消息名[" + name + "]被重复配置,请检查scope.messages");
            //             else
            //                 scope.$emit(messages[0].id, data);
            //         }
            //         //如果未找到匹配的配置,则直接以name发送消息
            //         else
            //             scope.$emit(name, data);
            //     }
            //     //如果没有消息配置,则直接以name发送消息
            //     else
            //         scope.$emit(name, data);
            //     console.log("<<<treeSelectorBuz.emitMessage()");
            // }


            vm._onSelectChanged = function (node) {
                console.log(">>>treeSelectorBuz._onSelectChanged()");
                BroadcastService.emitMessage("nodeChanged", node, vm);
                console.log("<<<treeSelectorBuz._onSelectChanged()");
            }
            vm._onNodeSelected = function (node) {
                console.log(">>>treeSelectorBuz._onNodeSelected()");
                console.log("item=", node);
                console.log("<<<treeSelectorBuz._onNodeSelected()");
            }

            vm._init();
            console.log("<<<treeSelectorBuz");
        }
    }
});