//无法使用controller,因为controller无法获取attr
var app = angular.module('AceApp');
app.directive("syncLogMnt", function ($q, $state, HttpService, BroadcastService) {
    return {
        restrict: 'AE'
        //注意,不能使用独立作用域（scope={}）,否则必须再包装一层directive,让parent-child-mnt-buz成为syncLogMnt的template中的指令（也就是让parent-child-mnt-buz的作用域成为syncLogMnt的子作用域）
        , replace: true
        , link: function (scope, iElements, iAttrs) {
            console.log("syncLogMnt.link() scope:", scope);
            var vm = scope;

            vm._handleMessage_openLogDetailMnt = function (event, log) {
                console.log(">>>syncLogMnt._handleMessage_openLogDetailMnt() enter log=", log);
                console.log("sidebar lsit =", SidebarList);
                if (vm.param && vm.param.openLogDetailMnt && vm.param.openLogDetailMnt.type == "page")
                    var p = angular.toJson({
                        name: "ldapSync.syncLogDetailMnt",
                        title: vm.param.openLogDetailMnt.title,
                        "closeTab": false,
                        "logId": log.id
                    });
                console.log("params=", p);
                $state.go("template", {
                    templateUrl: vm.param.openLogDetailMnt.templateUrl,
                    params: angular.toJson({
                        name: "ldapSync.syncLogDetailMnt",
                        title: vm.param.openLogDetailMnt.title,
                        "closeTab": false,
                        "logId": log.id
                    })
                    // params: '{"name":"ldapSync.syncLogMnt","parentId":"db415a29-ba0c-482f-9510-52e480d43566"}'
                });
                // vm._executeTask(task);
                console.log("<<<syncLogMnt._handleMessage_openLogDetailMnt() return");
            }

            if (iAttrs.config) {
                vm.config = angular.fromJson(iAttrs.config);
                BroadcastService.initMessages(vm);
            }
            if (iAttrs.param) {
                vm.param = angular.fromJson(iAttrs.param);
            }
        }
    }
});