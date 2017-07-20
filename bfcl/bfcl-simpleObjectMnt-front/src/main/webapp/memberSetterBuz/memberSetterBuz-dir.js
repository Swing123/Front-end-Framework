var app = angular.module('AceApp');
app.directive("memberSetterBuz", function () {
    return {
        restrict: 'AE'
        , replace: true
        , scope: {
            config: '='
            , param: '='
        }
        , templateUrl: 'memberSetterBuz/memberSetterBuz-tpl.html'
        , controller: function ($scope, $q, $uibModal, HttpService, BroadcastService) {
            console.log(">>>memberSetterBuz Controller");
            console.log("scope=", $scope);
            var vm = $scope;
            vm._parentId;
            vm._listdata = [];

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

            }
            vm.onSelected = function (row) {
                if (vm.notifyParentChanged)
                    vm.notifyParentChanged(row);
            };
            vm.prepare = function () {
                var defer = $q.defer();
                console.log(">>>memberSetterBuz.prepare() enter");
                HttpService.get({
                        url: vm.param.serviceUrls.prepare
                    }
                ).then(function (result) {
                    console.log("memberSetterBuz.prepare() success, data=", result);
                    // vm.prepareData = data;
                    defer.resolve(result)
                });
                console.log("<<<memberSetterBuz.prepare() return");
                return defer.promise;
            };
            vm.toAdd = function (config) {
                console.log(">>>memberSetterBuz.toAdd()");
                vm.prepare().then(function (data) {
                    console.log(">>>memberSetterBuz.toAdd() to open modal");
                    var modalInstance = $uibModal.open({
                        backdrop: "static"
                        , templateUrl: config.templateUrl
                        , controller: function ($scope, $uibModalInstance) {
                            $scope.data = data;
                            $scope.ok = function (selected) {
                                var ids = [];
                                //从选中数据中取出id组成数组
                                selected.forEach(function (item) {
                                    ids.push(item[vm.param.grid.idfield]);
                                })
                                console.log("ids=", ids);
                                vm.add(ids).then(function (result) {
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
                console.log(">>>memberSetterBuz.toAdd()");
            }
            vm.list = function () {
                console.log(">>>memberSetterBuz.list()");
                if (vm._parentId) {
                    HttpService.get({
                            url: vm.param.serviceUrls.list.replace(":parentId", vm._parentId)
                        }
                    ).then(function (data) {
                        vm._listdata = data;
                        console.log("<<<memberSetterBuz.list() success: ", data);
                    });
                }
                console.log("<<<memberSetterBuz.list()");
            };
            vm.del = function (data) {
                console.log(">>>memberSetterBuz.del()");
                if (typeof data != 'object')
                    data = [data];
                HttpService.del({
                        url: vm.param.serviceUrls.del.replace(":parentId", vm._parentId)
                        , data: data
                    }
                    , vm.param.buttons.del.confirm
                    , vm.param.buttons.del.success
                ).then(function (data) {
                    console.log("memberSetterBuz.del() success");
                    //重新获取数据,刷新列表。存在问题:list()会在success关闭之前执行,除非使用设置config.success.callback的方式
                    vm.list();
                });
                console.log("<<<memberSetterBuz.delete()");
            };

            vm.add = function (data) {
                var defer = $q.defer();
                console.log(">>>memberSetterBuz.add()");
                HttpService.add({
                        url: vm.param.serviceUrls.add.replace(":parentId", vm._parentId)
                        , data: data
                    }
                    , vm.param.buttons.add.success
                ).then(function (result) {
                    console.log("simpleObjectAdd.add() success, data=", result);
                    defer.resolve(result)
                });
                console.log("<<<memberSetterBuz.add()");
                return defer.promise;
            };

            //定义所有的消息接收事件
            vm._handleMessage_parentChanged = function (event, parent) {
                console.log(">>>memberSetterBuz._handleMessage_parentChanged:", event, parent);
                //TODO 直接使用parent.id存在问题,需要在child的config中增加parentIdField定义
                vm._parentId = parent.id;
                vm.list();
                console.log("<<<memberSetterBuz._handleMessage_parentChanged");
            }

            vm._init()
            console.log("<<<memberSetterBuz Controller");
        }
    }
});