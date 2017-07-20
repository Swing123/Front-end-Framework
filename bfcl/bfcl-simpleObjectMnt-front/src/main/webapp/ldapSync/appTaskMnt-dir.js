//无法使用controller,因为controller无法获取attr
var app = angular.module('AceApp');
app.directive("appTaskMnt", function ($q, $state, HttpService, BroadcastService, SidebarList) {
        return {
            restrict: 'AE'
            //注意,不能使用独立作用域（scope={}）,否则必须再包装一层directive,让parent-child-mnt-buz成为appTaskMnt的template中的指令（也就是让parent-child-mnt-buz的作用域成为appTaskMnt的子作用域）
            , replace: true
            , link: function (scope, iElements, iAttrs) {
                console.log("appTaskMnt.link() scope:", scope);
                var vm = scope;

                vm._handleMessage_executeTask = function (event, task) {
                    console.log(">>>appTaskMnt._handleMessage_executeTask() enter task=", task);
                    vm._executeTask(task);
                    console.log("<<<appTaskMnt._handleMessage_executeTask() return");
                }
                // vm.confirm = { "message": "确认执行?" };
                vm._executeTask = function (task) {
                    var defer = $q.defer();
                    console.log(">>>appTaskMnt._executeTask() enter");
                    if (task.id) {
                        HttpService.get({
                                url: vm.param.executeTask.serviceUrls.start.replace(":taskId", task.id)
                            }
                            // , {"message": "确认执行?"}
                            // , vm.confirm //必须使用变量进行传递,否则提示框点击确定时无法关闭
                            , vm.param.executeTask.confirm
                        ).then(function (result) {
                            // return data;
                            // vm.newData = result;

                            //layer dailog begining
                            enhanceListMessagePrompt(result);
                            //layer dailog end

                            console.log("appTaskMnt._executeTask() success, data=", result);
                            defer.resolve(result)
                        });
                    }
                    console.log("<<<appTaskMnt._executeTask() return");
                    return defer.promise;
                };
                vm._handleMessage_duplicateTask = function (event, task) {
                    console.log(">>>appTaskMnt._handleMessage_duplicateTask() enter task=", task);
                    vm._duplicateTask(task);
                    console.log("<<<appTaskMnt._handleMessage_duplicateTask() return");
                }
                // vm.confirm = { "message": "确认执行?" };
                vm._duplicateTask = function (task) {
                    var defer = $q.defer();
                    console.log(">>>appTaskMnt._duplicateTask() enter");
                    if (task.id) {
                        HttpService.add({
                                url: vm.param.duplicateTask.serviceUrls.start.replace(":taskId", task.id)
                            }
                            // , {"message": "确认执行?"}
                            // , vm.confirm //必须使用变量进行传递,否则提示框点击确定时无法关闭
                            // , vm.param.executeTask.confirm
                            , vm.param.duplicateTask.confirm
                            , vm.param.duplicateTask.success
                        ).then(function (result) {
                            console.log("appTaskMnt._duplicateTask() success, data=", result);
                            defer.resolve(result)
                        });
                    }
                    console.log("<<<appTaskMnt._duplicateTask() return");
                    return defer.promise;
                };
                vm._handleMessage_openLogMnt = function (event, task) {
                    console.log(">>>appTaskMnt._handleMessage_openLogMnt() enter task=", task);
                    console.log("sidebar lsit =", SidebarList);
                    if (vm.param && vm.param.openLogMnt && vm.param.openLogMnt.type == "page")
                        var p = angular.toJson({
                            name: "ldapSync.syncLogMnt",
                            title: vm.param.openLogMnt.title,
                            "closeTab": false,
                            "taskId": task.id
                        });
                    console.log("params=", p);
                    $state.go("template", {
                        templateUrl: vm.param.openLogMnt.templateUrl,
                        params: angular.toJson({
                            name: "ldapSync.syncLogMnt",
                            title: vm.param.openLogMnt.title,
                            "closeTab": false,
                            "taskId": task.id
                        })
                        // params: '{"name":"ldapSync.logMnt","parentId":"db415a29-ba0c-482f-9510-52e480d43566"}'
                    });
                    // vm._executeTask(task);
                    console.log("<<<appTaskMnt._handleMessage_openLogMnt() return");
                }

                /**
                 * @description  消息弹框函数，调用后弹出提示框，显示制定message
                 * @name layerClick
                 * @params {jsonObject} data {data.elapsedTime data.ldapInsertCount data.ldapModifyCount等
                 * @params {function} fn 点击确定后的回调函数；
                 * @return null
                 */
                function enhanceListMessagePrompt(data, callback) {
                    //询问框
                    data = data || '';
                    var content =
                        '<div class="row" style="padding:0; overflow-x:hidden;margin:0;">' +
                        '<div class="col-md-12 col-sm-12 col-xs-12"  style="padding:0">\n' +
                        '<div class="col-md-5 col-sm-5 col-xs-5" style="padding-right:0;text-align:right;">执行时间：</div>\n' +
                        '<div class="col-md-7 col-sm-7 col-xs-7" style="padding-left:0;text-align:left;">{{elapsedTime}}</div>\n' +
                        '</div>\n' +
                        '<div class="col-md-12 col-sm-12 col-xs-12"  style="padding:0">\n' +
                        '<div class="col-md-5 col-sm-5 col-xs-5" style="padding-right:0;text-align:right;">Idap插入数量：</div>\n' +
                        '<div class="col-md-7 col-sm-7 col-xs-7" style="padding-left:0;text-align:left;">{{ldapInsertCount}}</div>\n' +
                        '</div>\n' +
                        '<div class="col-md-12 col-sm-12 col-xs-12"  style="padding:0">\n' +
                        '<div class="col-md-5 col-sm-5 col-xs-5" style="padding-right:0;text-align:right;">Idap删除数量：</div>\n' +
                        '<div class="col-md-7 col-sm-7 col-xs-7" style="padding-left:0;text-align:left;">{{ldapDeleteCount}}</div>\n' +
                        '</div>\n' +
                        '<div class="col-md-12 col-sm-12 col-xs-12"  style="padding:0">\n' +
                        '<div class="col-md-5 col-sm-5 col-xs-5" style="padding-right:0;text-align:right;">Idap修改数量：</div>\n' +
                        '<div class="col-md-7 col-sm-7 col-xs-7" style="padding-left:0;text-align:left;">{{ldapModifyCount}}</div>\n' +
                        '</div>\n' +
                        '<div class="col-md-12 col-sm-12 col-xs-12"  style="padding:0">\n' +
                        '<div class="col-md-5 col-sm-5 col-xs-5" style="padding-right:0;text-align:right;">数据库插入数量：</div>\n' +
                        '<div class="col-md-7 col-sm-7 col-xs-7" style="padding-left:0;text-align:left;">{{dbInsertCount}}</div>\n' +
                        '</div>\n' +
                        '<div class="col-md-12 col-sm-12 col-xs-12"  style="padding:0">\n' +
                        '<div class="col-md-5 col-sm-5 col-xs-5" style="padding-right:0;text-align:right;">数据库删除数量：</div>\n' +
                        '<div class="col-md-7 col-sm-7 col-xs-7" style="padding-left:0;text-align:left;">{{dbDeleteCount}}</div>\n' +
                        '</div>\n' +
                        '<div class="col-md-12 col-sm-12 col-xs-12"  style="padding:0">\n' +
                        '<div class="col-md-5 col-sm-5 col-xs-5" style="padding-right:0;text-align:right;">数据库修改数量：</div>\n' +
                        '<div class="col-md-7 col-sm-7 col-xs-7" style="padding-left:0;text-align:left;">{{dbModifyCount}}</div>\n' +
                        '</div>\n' +
                        '</div>\n';
                    var modifyData = [
                        {'target': '{{elapsedTime}}', 'data': data.elapsedTime},
                        {'target': '{{ldapInsertCount}}', 'data': data.ldapAddSuccessCount},
                        {'target': '{{ldapDeleteCount}}', 'data': data.ldapDeleteSuccessCount},
                        {'target': '{{ldapModifyCount}}', 'data': data.ldapModifySuccessCount},
                        {'target': '{{dbInsertCount}}', 'data': data.dbAddSuccessCount},
                        {'target': '{{dbDeleteCount}}', 'data': data.dbDeleteSuccessCount},
                        {'target': '{{dbModifyCount}}', 'data': data.dbModifySuccessCount}];

                    $.each(modifyData, function (i, item) {
                        var reg = new RegExp(item.target, 'g');
                        content = content.replace(reg, item.data);
                    });
                    layer.open({
                        title: '信息提示',
                        shade: 0.8,
                        type: 1,
                        timeout: 5000,
                        area: ['340px', '235px'],
                        content: content,
                        btn: ['确定'],
                        yes: function (index) {
                            if (callback)
                                callback();
                            layer.close(index);
                        }
                        , offset: '200px' //如果不设置offset，在Mac中offsetTop被自动计算为了1145，超出了屏幕，无法显示promt，不清楚是layer的问题还是mac的问题，暂时设置为绝对数值
                    });

                };

                if (iAttrs.config) {
                    vm.config = angular.fromJson(iAttrs.config);
                    BroadcastService.initMessages(vm);
                }
                if (iAttrs.param) {
                    vm.param = angular.fromJson(iAttrs.param);
                }
            }
        }
    }
);