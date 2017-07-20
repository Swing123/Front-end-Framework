var app = angular.module('AceApp');
//TODO 后续可增加搜索框,对列表进行过滤
app.directive("listSelector", function () {
    return {
        restrict: 'AE'
        , replace: true
        , scope: {
            param: '='
            , data: '='
            , ok: '&'
            , cancel: '&'
        }
        , templateUrl: 'listSelector/listSelector-tpl.html'
        , controller: function ($scope) {
            console.log(">>>listSelector", $scope);

            var vm = $scope;

            vm._init = function () {
                //注意不能直接在vm上定义checked,否则会导致全选框的ng-model重新定义一个checked属性,从而导致此处定义的checked并没有绑定到checkbox上
                vm._checked = {};
                vm._checked.all = false;
                vm._checked.rows = new Array(vm.data.length);
                //将所有checkbox与全选框的状态保持一致
                for (i = 0; i < vm.data.length; i++)
                    vm._checked.rows[i] = vm._checked.all;
            }
            vm._ok = function () {
                if (vm.ok) {
                    var selected = [];
                    vm._checked.rows.forEach(function(item, index){
                        if (item)
                            selected.push(vm.data[index]);
                    })
                    //必须使用这种方式才能向&方法传递参数,如果使用vm.onselectchanged(item),那么在parent中无法获得传递过去的item
                    vm.ok()(selected);
                }
            }
            //全选checkbox状态改变时调用
            vm._changeOnes = function () {
                for (i = 0; i < vm._checked.rows.length; i++)
                    vm._checked.rows[i] = vm._checked.all;
            }
            //全选chekbox所在的td点击后调用
            vm._allClick = function () {
                vm._checked.all = !vm._checked.all;
                vm._changeOnes();
            }
            //行checkbox状态改变时调用
            vm._changeAll = function () {
                var checked = true;
                vm._checked.rows.forEach(function (item) {
                    checked = checked && item;
                });
                vm._checked.all = checked;
            }
            //行checkbox所在tr或td被点击时调用
            vm._oneClick = function (index) {
                vm._checked.rows[index] = !vm._checked.rows[index];
                vm._changeAll();
            }
            //行被双击时调用
            vm._dblClick = function (item) {
                vm._ok(item);
            }

            vm._init();
            console.log("<<<listSelector");
        }
    }
});