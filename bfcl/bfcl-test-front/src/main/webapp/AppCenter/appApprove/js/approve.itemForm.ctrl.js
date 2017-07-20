/**
 \* Created by Wanggb with IntelliJ IDEA.
 \*Orgs:DIST
 \*Date:12/5/2016
 \*Time:12:34 PM
 \*Description:程序入口,依赖声明
 */

define([
    'angular',
    'Layer'
], function (angular,layer) {
    'use strict';
    function itemFormCtrl($scope,$http,$stateParams){
        var vm=$scope.vm={};
        vm.layout={//获取队列中初始页面布局信息
            mainForm:12,//主表单
            projectTree:0,//项目树
            projectLog:0,//项目日志
            projectMaterial:0,//项目材料
            projectReport:0,//项目报表
            projectImageView:0//图形浏览
        };
        //水平上收缩事件回调函数
        vm.horizontalShrink=function(type){
            vm.layout=showItemPanel(vm.layout,'mainForm',type);
        };
        //水平全屏事件回调函数
        vm.horizontalFull=function(type){
            vm.layout=horizontalFull(vm.layout,type);//点击水平展开时，获取当前页面布局信息
        };
        //点击button栏事件回调函数
        vm.showItemPanel=function(type){
            vm.layout=showItemPanel(vm.layout,'mainForm',type);
        };
        //关闭button栏事件回调函数
        vm.closeItemPanel=function(){
            vm.horizontalFull('mainForm');
        };

        //绘制红线弹出框
        vm.editRedLine=function(){
            layer.confirm('本框为红线绘制弹出框',{
                icon:1,
                btn:['关闭']
            },function(index,text){
                layer.close(index);
            });
        }
        /**
         * @description 水平收缩处理函数
         * @param null
         * @return null
         * */
        function horizontalShrink(){
                // return angular.copy(layoutQueue.getQueueByIndex(0));//此处需要使用深拷贝，不能直接返回！！！！！
        }
        /**
         * @description 重置对象
         * @param {object} 待重置的对象
         * @return {object} 重置之后的对象
         * */
        function resetObjectNumber(obj){
            for(var property in obj){
                obj[property]=0;
            }
            return obj;
        }
        /**
         * @description 水平全屏处理函数
         * @param {object} 布局对象
         * @param {string} 全屏的目标字符串名称
         * @return {object} 重置之后的对象
         * */
        function horizontalFull(obj,type){
            obj=resetObjectNumber(obj);
            obj[type]=12;
            // layoutQueue.updateQueue(angular.copy(obj));
            return obj;
        }
        /**
         * @description 点击按钮栏显示右侧信息栏处理函数
         * @param {object} 布局对象
         * @param {string} 左侧栏字符串名称
         * @param {string} 右侧栏字符串名称
         * @return {object} 重置之后的对象
         * */
        function showItemPanel(obj,leftPanel,rightPanel){
            var initLayout={
                mainForm:12,//主表单
                projectTree:5,//项目树
                projectLog:3,//项目日志
                projectMaterial:5,//项目材料
                projectReport:3,//项目报表
                projectImageView:5//图形浏览
            };
            obj=resetObjectNumber(obj);//初始化obj中所有对象值 ：0
            obj[rightPanel]=initLayout[rightPanel];//将右侧面板宽度值取出赋值到obj同名对象中
            obj[leftPanel]=(12-obj[rightPanel])||0;//计算左侧面板的宽度值
            // layoutQueue.updateQueue(angular.copy(obj));//更新数据队列中的数据
            return obj;//返回修改之后的对象
        }
        var simpleData = [
            {id:'2',cls:'fa fa-folder-open-o',text:'建设工程规划许可证审批',pid:'root'},
            {id:'1',cls:'fa fa-folder-open-o',text:'规划设计条件审批',pid:'root'},
            {id:'3',cls:'fa fa-folder-open-o',text:'规划许可证审批',pid:'root'},
            {id:'13',text:'民营科技产业基地A-19b地块海域使用权公开出让/2016年05月10日/TJ2016009在办',pid:'1'},
            {id:'12',text:'民营科技产业基地A-19b地块海域使用权公开出让/2016年05月10日/TJ2016009在办',pid:'1'},
            {id:'11',text:'民营科技产业基地A-19b地块海域使用权公开出让/2016年05月10日/TJ2016009在办',pid:'1'},
            {id:'21',text:' A-19b地块海域使用权公开出让/2016年05月10日/TJ2016009在办',pid:'2'},
            {id:'22',text:' A-19b地块海域使用权公开出让/2016年05月10日/TJ2016009在办',pid:'2'},
            {id:'23',text:' A-19b地块海域使用权公开出让/2016年05月10日/TJ2016009在办',pid:'2'},
            {id:'31',text:' A-19b地块海域使用权公开出让/2016年05月10日/TJ2016009在办',pid:'3'},
            {id:'32',text:' A-19b地块海域使用权公开出让/2016年05月10日/TJ2016009在办',pid:'3'}
        ];
        vm.projectTreeData=simpleData;
        vm.projectReportData=[
            {id:'1',cls:'fa fa-file',text:'建设项目报件回执单',pid:'root'},
            {id:'2',cls:'fa fa-file',text:'不予行政许可决定书',pid:'root'},
            {id:'3',cls:'fa fa-file',text:'便民服务卡',pid:'root'},
            {id:'4',cls:'fa fa-file',text:'建设项目选址意见书',pid:'root'}
        ];
        vm.projectLogData={
            "log_col":[
                "col-md-1",
                "col-md-3",
                "col-md-8"
            ],
            "log_List":[
                ["2016年7月28日12:30","开始"],
                ["2016年7月30日18:10","分拣"],
                ["2016年7月30日18:10","分拣"],
                ["2016年8月28日18:10","窗口收件窗口收"]
            ]
        };

        //项目树beginning
        vm.projectTreeControl={};//项目树回调事件附属对象
        /**
         * @description 项目树选择回调事件
         * @name vm.projectTreeControl.on_select
         * @param {object} node 选择的项目树项
         * @return {null} null
         * */
        vm.projectTreeControl.on_select=function(node){
            console.log(node);
        };
        vm.projectTreeData={};
        vm.projectTreeExpandingProperty = {
            field: 'name',
            displayName: '项目树列表'
        };
        vm.projectTreeColDefs = [{
            cellTemplate: '<div class="tree-icon "><span class="display-none">' +
            '<i class="fa fa-eye" ng-click="vm.projectTreeCellReview(node)" title="查看" ng-if="node.authentication.review"></i></span></div>'
        }];
        /**
         * @description 项目树查看回调事件
         * @name vm.projectTreeCellReview
         * @param {object} node 选择的项目树项
         * @return {null} null
         * */
        vm.projectTreeCellReview=function(node){
            layer.msg('功能待完善',{icon:2});
        }
        vm.projectTreeData =[
            {
                demographicId: 1,
                name: "建设工程规划许可证审批",
                authentication:{review:false},
                __children__:[{
                    demographicId: 11,
                    name: "A-19b地块海域使用权公开出让/2016年05月10日/TJ2016009在办",
                    authentication:{review:false}
                },{
                    demographicId: 12,
                    name: " A-19b地块海域使用权公开出让/2016年05月10日/TJ2016009在办",
                    authentication:{review:true},
                },{
                    demographicId: 13,
                    name: " A-19b地块海域使用权公开出让/2016年05月10日/TJ2016009在办",
                    authentication:{review:true},
                }]
            },{
                demographicId: 2,
                name: "规划设计条件审批",
                authentication:{review:false},
                __children__:[{
                    demographicId: 21,
                    name: "规划设计条件审批",
                    authentication:{review:false},
                    __children__:[{
                        demographicId: 211,
                        name: "A-19b地块海域使用权公开出让/2016年05月10日/TJ2016009在办",
                        authentication:{review:true},
                    },{
                        demographicId: 212,
                        name: "A-19b地块海域使用权公开出让/2016年05月10日/TJ2016009在办",
                        authentication:{review:true},
                    },{
                        demographicId: 213,
                        name: "A-19b地块海域使用权公开出让/2016年05月10日/TJ2016009在办",
                        authentication:{review:true},
                    }]
                }]
            }];
        //项目树end

        //材料数据beginning
        vm.projectTreeMaterialControl={};
        /**
         * @description 项目材料树选择回调事件
         * @name vm.projectTreeMaterialControl.on_select
         * @param {object} node 选择的项目树项
         * @return {null} null
         * */
        vm.projectTreeMaterialControl.on_select=function(node){
          console.log(node);
        };
        vm.projectMaterialData={};
        vm.projectMaterialExpandingProperty = {
            field: 'name',
            displayName: '附件材料'
        };
        vm.projectMaterialColDefs = [{
                cellTemplate: '<div class="tree-icon "><span class="display-none">' +
                '<i class="fa fa-upload" ng-click="vm.projectMaterialCellUpload(node)" title="上传材料" ng-if="node.authentication.upload"></i>' +
                '<i class="fa fa-download" ng-click="vm.projectMaterialCellDownload(node)" title="下载" ng-if="node.authentication.download"></i>' +
                '<i class="fa fa-eye" ng-click="vm.projectMaterialCellReview(node)" title="预览" ng-if="node.authentication.review"></i>' +
                '<i class="fa fa-close" ng-click="vm.projectMaterialCellClose(node)" title="删除" ng-if="node.authentication.close"></i></span></div>'
            }];
        /**
         * @description 项目材料树关闭回调事件
         * @name vm.projectMaterialCellClose
         * @param {object} node 选择的项目树项
         * @return {null} null
         * */
        vm.projectMaterialCellClose=function(node){
            layer.confirm('确认删除该材料？',{
                title:'系统提示',
                icon:3,
                btn:['删除','取消']
            },function(index,text){
                layer.msg('功能待完善',{icon:2});
                layer.close(index);
            });
        };
        /**
         * @description 项目材料树上传回调事件
         * @name vm.projectMaterialCellUpload
         * @param {object} node 选择的项目树项
         * @return {null} null
         * */
        vm.projectMaterialCellUpload=function(node){
            layer.msg('功能待完善',{icon:2});
        };
        /**
         * @description 项目材料树下载回调事件
         * @name vm.projectMaterialCellDownload
         * @param {object} node 选择的项目树项
         * @return {null} null
         * */
        vm.projectMaterialCellDownload=function(node){
            layer.msg('功能待完善',{icon:2});
        };
        /**
         * @description 项目材料树查看回调事件
         * @name vm.projectMaterialCellReview
         * @param {object} node 选择的项目树项
         * @return {null} null
         * */
        vm.projectMaterialCellReview=function(node){
            layer.msg('功能待完善',{icon:2});
        };
        vm.projectMaterialData =[
            {
            demographicId: 1,
            name: "规划设计条件审批",
            authentication:{upload:true,download:false,review:false,close:false},
            __children__:[{
                demographicId: 11,
                name: "规划设计条件审批",
                authentication:{upload:true,download:false,review:false,close:false},
                __children__:[{
                    demographicId: 111,
                    name: "审批规划书.jpg",
                    authentication:{upload:false,download:true,review:true,close:true},
                },{
                    demographicId: 112,
                    name: "审批规划书.jpg",
                    authentication:{upload:false,download:true,review:true,close:true},
                },{
                    demographicId: 113,
                    name: "审批规划书.jpg",
                    authentication:{upload:false,download:true,review:true,close:true},
                }]
            },{
                demographicId: 12,
                name: "审批规划书.jpg",
                authentication:{upload:false,download:true,review:true,close:true},
            }]
        },{
            demographicId: 2,
            name: "规划设计条件审批",
            authentication:{upload:true,download:false,review:false,close:false},
            __children__:[{
                demographicId: 21,
                name: "规划设计条件审批",
                authentication:{upload:true,download:false,review:false,close:false},
                __children__:[{
                    demographicId: 211,
                    name: "审批规划书.jpg",
                    authentication:{upload:false,download:true,review:true,close:true},
                },{
                    demographicId: 212,
                    name: "审批规划书.jpg",
                    authentication:{upload:false,download:true,review:true,close:true},
                },{
                    demographicId: 213,
                    name: "审批规划书.jpg",
                    authentication:{upload:false,download:true,review:true,close:true},
                }]
            }]
        }];
        //材料树end

        //报表树benginning
        vm.projectReportTreeControl={};
        /**
         * @description 项目报表树选择回调事件
         * @name vm.projectReportTreeControl.on_select
         * @param {object} node 选择的项目树项
         * @return {null} null
         * */
        vm.projectReportTreeControl.on_select=function(node){
            console.log(node);
        };
        vm.projectReportData={};
        vm.projectReportExpandingProperty = {
            field: 'name',
            displayName: '报表列表'
        };
        vm.projectReportColDefs = [{
            cellTemplate: '<div class="tree-icon "><span class="display-none">' +
            '<i class="fa fa-edit" ng-click="vm.projectReportCellEdit(node)" title="编辑" ng-if="node.authentication.edit"></i></span></div>'
        }];
        /**
         * @description 项目报表树编辑回调事件
         * @name vm.projectReportCellEdit
         * @param {object} node 选择的项目树项
         * @return {null} null
         * */
        vm.projectReportCellEdit=function(node){
            layer.msg('功能待完善',{icon:2});
        }
        vm.projectReportData =[
            {
                demographicId: 1,
                name: "建设项目报件回执单",
                authentication:{edit:true},
            },{
                demographicId: 2,
                name: "不予行政许可决定书",
                authentication:{edit:false},
            },{
                demographicId: 3,
                name: "便民服务卡",
                authentication:{edit:true},
            },{
                demographicId: 4,
                name: "建设项目选址意见书",
                authentication:{edit:true},
            }];
        //报表树end

    }
    itemFormCtrl.$inject=["$scope","$http","$stateParams"];
    return itemFormCtrl;

});

/*
*                 //实例化layout队列对象,队列用于保存点击收缩和展开时，前一次和当前页面的布局信息
 *         var layoutQueue=new layoutQueueConstructor({
 mainForm:12,//主表单
 projectTree:0,//项目树
 projectLog:0,//项目日志
 projectMaterial:0,//项目材料
 projectReport:0,//项目报表
 projectImageView:0,//图形浏览
 });
 console.log(layoutQueue);

 *
 * @description 常量构造函数，以队列的形式保存页面布局的数据
 * @name  layoutQueueConstructor
 * @params {obj} 构造函数初始参数
 * @constructor 构造函数
 * @return null
 *
function layoutQueueConstructor(obj){
    var $this=this;
    var getParamsObj=angular.extend({},obj);//获取参数对象
    $this._layoutQueue=[getParamsObj,angular.copy(getParamsObj)];
    $this.updateQueue=function(newObj){
        var getNewObj=angular.extend({},newObj);
        $this._layoutQueue.push(getNewObj)
        $this._layoutQueue.shift();
    }
    $this.getQueueByIndex=function(index){
        index=index||0;
        return $this._layoutQueue[index];
    }
}
 */