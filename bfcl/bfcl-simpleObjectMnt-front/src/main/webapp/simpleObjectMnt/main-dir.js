var app = angular.module('AceApp');
app.directive("simpleObjectMnt", function ($q, $uibModal, $stateParams, HttpService, BroadcastService) {
    return {
        restrict: 'AE'
        , replace: false
        // , scope: true
        , scope: {
            config: '='
            , param: '='
        }
        , templateUrl: 'simpleObjectMnt/main-tpl.html'
        , link: function (scope, iElements, iAttrs) {
            console.log("simpleObjectMnt.link() iAttrs:", iAttrs);
            var vm = scope;
            if ($stateParams && $stateParams.params)
            //由于params是通过url传递进来的,只能是字符串,因此必须要转换为对象
            //TODO 为什么params传过来的是单引号?
                vm.stateParams = angular.fromJson($stateParams.params.replace(/\'/g, "\""));
            // if (iAttrs.param)
            //     vm.param = angular.fromJson(iAttrs.param);
            // console.log("link().scope.config:", vm.config);
            vm.parentId = vm.stateParams.parentId || "";
            vm.listdata = {};
            vm.notifyParentChanged = null;
            //以下代码能够向外界暴露发送事件,但是需要手动增加发送代码
            //定义所有的消息发送事件,当事件被调用时,由上级scope向其所有下级scope发送广播通知消息
            // vm.notifyAppChanged = function (app) {
            //     vm.config.messages.out.forEach(function (message) {
            //         if (message.sender == "notifyAppChanged") {
            //             console.log("out message:", message);
            //             BroadcastService.broadcastData(message.id, app, vm.parent);
            //         }
            //     })
            // }
            //以下代码可根据config全自动注册所有的通知发送事件,但是无法直接看到,因此后续对其的调用会比较怪异,也无法实现向外界暴露发送事件的目的
            // if (vm.config && vm.config.messages && vm.config.messages.out) {
            //     vm.config.messages.out.forEach(function (message) {
            //         vm[message.sender] = function (data) {
            //             BroadcastService.broadcastData(message.id, data, vm.parent);
            //         }
            //     })
            // }
            vm._sendMessage = function (name, row) {
                console.log(">>>simpleObjectMnt._sendMessage() scope=", vm);
                BroadcastService.emitMessage(name, row, vm);
                console.log("<<<simpleObjectMnt._sendMessage()");
            }
            vm.onSelected = function (row) {
                // if (vm.notifyParentChanged)
                //     vm.notifyParentChanged(row);
                console.log(">>>simpleObjectMnt.onSelected()");
                BroadcastService.emitMessage("nodeChanged", row, vm);
                console.log("<<<simpleObjectMnt.onSelected()");
            };
            vm.toModify = function (config, id) {
                console.log(">>>simpleObjectMnt.toModify enter");
                vm.load(id).then(function (loaddata) {
                    vm.prepare().then(function (preparedata) {
                        var modalInstance = $uibModal.open({
                            backdrop: "static"
                            , templateUrl: config.templateUrl
                            , controller: function ($scope, $uibModalInstance) {
                                $scope.preparedata = preparedata;
                                $scope.newdata = loaddata;
                                $scope.ok = function () {
                                    vm.modify($scope.newdata).then(function (result) {
                                        $uibModalInstance.close();
                                        vm.list();
                                    })
                                };
                                $scope.cancel = function () {
                                    $uibModalInstance.dismiss();
                                }
                            }
                        })
                    })
                })
                // modalInstance.opened.then(function () {//模态窗口打开之后执行的函数
                //     console.log('modal is opened');
                // });
                // modalInstance.result.then(function (result) {
                //     console.log(result);
                // }, function (reason) {
                //     console.log(reason);//点击空白区域，总会输出backdrop click，点击取消，则会输出cancel
                // });
                console.log(">>>simpleObjectMnt.toModify return");
            }
            vm.toAdd = function (config) {
                console.log(">>>simpleObjectMnt.toAdd enter");
                vm.prepare().then(function (data) {
                    // $scope.delete(config, id);
                    var modalInstance = $uibModal.open({
                        backdrop: "static"
                        , templateUrl: config.templateUrl
                        , controller: function ($scope, $uibModalInstance) {
                            $scope.preparedata = data;
                            $scope.newdata = {};
                            $scope.ok = function () {
                                vm.add($scope.newdata).then(function (result) {
                                    $uibModalInstance.close();
                                    vm.list();
                                })
                            };
                            $scope.cancel = function () {
                                $uibModalInstance.dismiss();
                            }
                        }
                    })
                })
                // modalInstance.opened.then(function () {//模态窗口打开之后执行的函数
                //     console.log('modal is opened');
                // });
                // modalInstance.result.then(function (result) {
                //     console.log(result);
                // }, function (reason) {
                //     console.log(reason);//点击空白区域，总会输出backdrop click，点击取消，则会输出cancel
                // });
                console.log(">>>simpleObjectMnt.toAdd return");
            }
            vm.list = function () {
                console.log(">>>simpleObjectMnt.list() enter");
                var url = vm.param.serviceUrls.list;
                //替换通过stateParams传递过来的参数
                if (vm.param.stateParamNames)
                    vm.param.stateParamNames.forEach(function (name) {
                        url = url.replace(":" + name, vm.stateParams[name] || "");
                    });
                HttpService.get({
                        url: url.replace(":parentId", vm.parentId)
                    }
                ).then(function (data) {
                    vm.listdata = data;
                    console.log("<<<simpleObjectMnt.list() success: ", data);
                });
                console.log("<<<simpleObjectMnt.list() return");
            };
            vm.del = function (id) {
                console.log(">>>simpleObjectMnt.del() enter");
                HttpService.del({
                        url: vm.param.serviceUrls.del + "/" + id
                    }
                    , vm.param.buttons.del.confirm
                    , vm.param.buttons.del.success
                ).then(function (data) {
                    console.log("simpleObjectMnt.del() success");
                    //重新获取数据,刷新列表。存在问题:list()会在success关闭之前执行,除非使用设置config.success.callback的方式
                    vm.list();
                });
                console.log("<<<simpleObjectMnt.delete() return");
            };
            vm.prepare = function () {
                var defer = $q.defer();
                console.log(">>>simpleObjectMnt.prepare() enter");
                if (vm.param.serviceUrls.prepare) {
                    HttpService.get({
                            url: vm.param.serviceUrls.prepare.replace(":parentId", vm.parentId)
                        }
                    ).then(function (result) {
                        console.log("simpleObjectMnt.prepare() success, data=", result);
                        // vm.prepareData = data;
                        defer.resolve(result)
                    });
                }
                else {
                    console.log("param.serviceUrls.prepare 未定义");
                    defer.resolve(null);
                }
                console.log("<<<simpleObjectAdd.prepare() return");
                return defer.promise;
            };
            vm.load = function (id) {
                var defer = $q.defer();
                console.log(">>>simpleObjectMnt.load() enter");
                if (id) {
                    HttpService.get({
                            url: vm.param.serviceUrls.load.replace(":parentId", vm.parentId) + "/" + id
                        }
                    ).then(function (result) {
                        // return data;
                        vm.newData = result;
                        console.log("simpleObjectMnt.load() success, data=", result);
                        defer.resolve(result)
                    });
                }
                console.log("<<<simpleObjectMnt.load() return");
                return defer.promise;
            };
            vm.add = function (data) {
                var defer = $q.defer();
                console.log(">>>simpleObjectMnt.add() enter");
                HttpService.add({
                        url: vm.param.serviceUrls.add.replace(":parentId", vm.parentId)
                        , data: data
                    }
                    , vm.param.buttons.add.confirm
                    , vm.param.buttons.add.success
                ).then(function (result) {
                    console.log("simpleObjectAdd.add() success, data=", result);
                    defer.resolve(result)
                });
                console.log("<<<simpleObjectMnt.add() return");
                return defer.promise;
            };
            vm.modify = function (data) {
                var defer = $q.defer();
                console.log(">>>simpleObjectMnt.modify() enter:", data);
                HttpService.modify({
                        url: vm.param.serviceUrls.modify.replace(":parentId", vm.parentId) + "/" + data[vm.param.grid.idfield]
                        , data: data
                    }
                    , vm.param.buttons.modify.confirm
                    , vm.param.buttons.modify.success
                ).then(function (result) {
                    console.log("simpleObjectAdd.modify() success, data=", result);
                    defer.resolve(result)
                });
                console.log("<<<simpleObjectMnt.add() return");
                return defer.promise;
            };

            //定义所有的消息接收事件
            vm._handleMessage_parentChanged = function (event, parent) {
                console.log("onAppChanged:", event, parent);
                //TODO 直接使用parent.id存在问题,需要在child的config中增加parentIdField定义
                vm.parentId = parent.id;
                vm.list();
            }
            //绑定消息与消息接收事件,接收消息在config.messages.in中定义。
            //message的id由配置工具自动生成,然后由配对的sender和receiver使用,最好使用uuid,以防止被其他控件误用
            // if (vm.config && vm.config.messages && vm.config.messages.in) {
            //     vm.config.messages.in.forEach(function (message) {
            //         console.log("in message:", message);
            //         BroadcastService.onBroadcastData(message.id, vm, vm[message.receiver]);
            //     })
            // }

            BroadcastService.initMessages(vm);
            vm.list();
            console.log("<<<simpleObjectMntController return");
        }
        , controller: function ($scope, $q, $uibModal, HttpService, BroadcastService) {
            console.log(">>>simpleObjectMntController enter");
            console.log("scope=", $scope);
            console.log("config=", $scope.config);
        }
    }
});