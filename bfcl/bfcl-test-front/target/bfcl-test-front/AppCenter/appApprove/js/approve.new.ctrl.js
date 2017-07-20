/**
 \* Created by dist with IntelliJ IDEA.
 \*Orgs:DIST
 \*Date:12/12/2016
 \*Time:9:50 AM
 \*Description:程序入口,依赖声明
 */

define([
    'angular',
    'Layer'
], function (angular,layer) {
    'use strict';
    function newCtrl($scope,$http,$stateParams,$state){
        var vm=$scope.vm={};

        //材料数据beginning
        vm.projectNewTreeControl={};//新建树回调事件附属对象
        /**
         * @description 项目树单项点击回调事件
         * @params {Object} node 选中项对象信息
         * @return null
         * */
        vm.projectNewTreeControl.on_select=function(node){
            console.log(node);
        };
        vm.projectNewData={};//项目树展示列表数据初始化
        vm.projectNewExpandingProperty = {
            field: 'name',
            displayName: '新建类型'
        };//项目树自定义列配置
        vm.projectNewColDefs = [{
            cellTemplate: '<div class="tree-icon "><span class="display-none">' +
            '<button class="btn btn-info btn-xs" ng-click="vm.projectNewItem(node)" title="接件" ng-if="node.authentication.newItem">接件</button>' +
            '<button class="btn btn-info btn-xs" ng-click="vm.projectContinueItem(node)" title="续办" ng-if="node.authentication.continueItem">续办</button></span></div>'
        }];//项目树自定义列配置
        /**
         * @description 项目树点击新建按钮后的回调事件
         * @name vm.projectNewItem
         * @params {Object} node 选中项对象信息
         * @return null
         * */
        vm.projectNewItem=function(node){
            layer.confirm('确定要新建案卷？',{
                icon:3,
                btn:['确定','取消']
            },function(index, text){
                $state.go('sidebar.content',{url:'AppCenter-appApprove-tpl-approveItemForm',tabName:node.name,tabGroup:'businessApproveNew',params:'252525'});
                $scope.$apply();
                layer.close(index);
            },function(){

            });
        };
        /**
         * @description 项目树点击续办按钮后的回调事件
         * @name vm.projectNewItem
         * @params {Object} node 选中项对象信息
         * @return null
         * */
        vm.projectContinueItem=function(node){
            $state.go('sidebar.content',{url:'AppCenter-appApprove-tpl-approveContinue',tabName:'续办案卷',tabGroup:'businessApproveNew',params:'252525',refresh:true});
        };
        vm.projectNewData =[
            {
                demographicId: 1,
                name: "规划审批",
                authentication:{newItem:true,continueItem:false},
                __children__:[{
                    demographicId: 11,
                    name: "规划设计条件审批",
                    authentication:{newItem:true,continueItem:true},
                    __children__:[{
                        demographicId: 111,
                        name: "建设项目选址意见书核发",
                        authentication:{newItem:true,continueItem:true},
                    },{
                        demographicId: 112,
                        name: "建设用地（含临时用地）规划许可证核发",
                        authentication:{newItem:true,continueItem:true},
                    },{
                        demographicId: 113,
                        name: "变更建设用地规划条件核准",
                        authentication:{newItem:true,continueItem:true},
                    }]
                },{
                    demographicId: 12,
                    name: "建设项目选址意见书核发",
                    authentication:{newItem:true,continueItem:true},
                }]
            },{
                demographicId: 2,
                name: "其他业务",
                authentication:{newItem:true,continueItem:true},
                __children__:[{
                    demographicId: 21,
                    name: "规划设计条件审批",
                    authentication:{newItem:true,continueItem:true},
                    __children__:[{
                        demographicId: 211,
                        name: "建设项目选址意见书核发",
                        authentication:{newItem:true,continueItem:true},
                    },{
                        demographicId: 212,
                        name: "建设用地（含临时用地）规划许可证核发",
                        authentication:{newItem:true,continueItem:true},
                    },{
                        demographicId: 213,
                        name: "建设用地（含临时用地）规划许可证核发",
                        authentication:{newItem:true,continueItem:true},
                    }]
                }]
            }];
        //材料树end
    }

    newCtrl.$inject=["$scope","$http","$stateParams","$state"];
    return newCtrl;

});
/**
 *
 *         vm.newItemClick=function(item){
            layer.confirm('确定要新建案卷？',{
                icon:3,
                btn:['确定','取消']
            },function(index, text){
                $state.go('sidebar.content',{url:'AppCenter-appApprove-tpl-approveItemForm',tabName:item.name,tabGroup:'businessApproveNew',params:'252525'});
                $scope.$apply();
                layer.close(index);
                console.log(item);
            },function(){

            });
        };
 vm.continueItemClick=function(item){
            $state.go('sidebar.content',{url:'AppCenter-appApprove-tpl-approveContinue',tabName:'续办案卷',tabGroup:'businessApproveNew',params:'252525',refresh:true});
        };

 * */