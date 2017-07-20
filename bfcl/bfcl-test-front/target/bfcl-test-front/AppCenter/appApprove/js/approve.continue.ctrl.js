/**
 \* Created by dist with IntelliJ IDEA.
 \*Orgs:DIST
 \*Date:12/12/2016
 \*Time:2:56 PM
 \*Description:程序入口,依赖声明
 */

define([
    'angular',
    'Layer'
], function (angular,layer) {
    'use strict';
    function continueCtrl($scope,$http,$stateParams,$state){
        var vm=$scope.vm={};
        vm.hideAdvance=true;
        vm.gridOptionsRowSelectInfo={};
        /**
         * @description 接件按钮点击事件回调函数
         * @params {Object} item 选中项对象信息
         * @return {null}
         * */
        vm.showAdvanceQuery=function(){
            vm.hideAdvance=!vm.hideAdvance;
        };
        //ui-grid表格的基础参数配置
        vm.gridOptions = {
            enableRowSelection: true,
            enableSelectAll: true,
            selectionRowHeaderWidth: 35,
            rowHeight: 35,
            showGridFooter:false,
            multiSelect:false,
            enableGridMenu:false,
            enableHorizontalScrollbar:0,
            enableVerticalScrollbar:1,
            paginationPageSizes:[10,25,50],
            paginationPageSize:10,
            columnDefs:[
                {field:'projectCode', name: '项目编号',cellTooltip:true ,enableColumnMenu: false,enableSorting:true,headerCellClass: 'text-align-center' },
                {field:'projectName' ,name: '项目名称',cellTooltip:true,enableColumnMenu: false,enableSorting:false ,headerCellClass: 'text-align-center'},
                {field:'caseCode',name: '案卷编号',cellTooltip:true,enableColumnMenu: false,enableSorting:true,headerCellClass: 'text-align-center' },
                {field:'businessType',name: '业务类型',cellTooltip:true ,enableColumnMenu: false ,enableSorting:false,headerCellClass: 'text-align-center'},
                {field:'constructionUnit', name: '建设单位',cellTooltip:true ,enableColumnMenu: false,enableSorting:false,headerCellClass: 'text-align-center' },
                {field:'constructionAddress' ,name: '建设地址',cellTooltip:true,enableColumnMenu: false ,enableSorting:false,headerCellClass: 'text-align-center'},
                {field:'landCharacter',name: '用地性质',cellTooltip:true,enableColumnMenu: false ,enableSorting:false,headerCellClass: 'text-align-center'},
                {field:'netSerialNumber',name: '网办流水号',cellTooltip:true ,enableColumnMenu: false,enableSorting:false,headerCellClass: 'text-align-center'},
                {field:'state',name: '状态' ,cellTooltip:true ,enableColumnMenu: false,enableSorting:false,headerCellClass: 'text-align-center'}
            ]
        };
        vm.gridOptions.data=[
                {
                    "projectCode": '20160406BXL',
                    "projectName": "高科西路地块xx办理",
                    "caseCode": '2016040680BXL',
                    "businessType": "建设用地规划许可证审批",
                    "constructionUnit": "建设单位建设单位建设单位",
                    "constructionAddress": "建设地址建设地址建设地址",
                    "landCharacter": "用地性质用地性质",
                    "netSerialNumber": "网办流水号",
                    "state": "状态状态状态",
                },
                {
                    "projectCode": '20160406BXL',
                    "projectName": "高科西路地块xx办理",
                    "caseCode": '2016040680BXL',
                    "businessType": "建设用地规划许可证审批",
                    "constructionUnit": "建设单位建设单位建设单位",
                    "constructionAddress": "建设地址建设地址建设地址",
                    "landCharacter": "用地性质用地性质",
                    "netSerialNumber": "网办流水号",
                    "state": "状态状态状态",
                },
                {
                    "projectCode": '20160407BXL',
                    "projectName": "高科西路地块xx办理",
                    "caseCode": '2016040670BXL',
                    "businessType": "建设用地规划许可证审批",
                    "constructionUnit": "建设单位建设单位建设单位",
                    "constructionAddress": "建设地址建设地址建设地址",
                    "landCharacter": "用地性质用地性质",
                    "netSerialNumber": "网办流水号",
                    "state": "状态状态状态",
                },
                {
                    "projectCode": '20160407BXL',
                    "projectName": "高科西路地块xx办理",
                    "caseCode": '2016040670BXL',
                    "businessType": "建设用地规划许可证审批",
                    "constructionUnit": "建设单位建设单位建设单位",
                    "constructionAddress": "建设地址建设地址建设地址",
                    "landCharacter": "用地性质用地性质",
                    "netSerialNumber": "网办流水号",
                    "state": "状态状态状态",
                },
                {
                    "projectCode": '20160415BXL',
                    "projectName": "高科西路地块xx办理",
                    "caseCode": '2016040610BXL',
                    "businessType": "建设用地规划许可证审批",
                    "constructionUnit": "建设单位建设单位建设单位",
                    "constructionAddress": "建设地址建设地址建设地址",
                    "landCharacter": "用地性质用地性质",
                    "netSerialNumber": "网办流水号",
                    "state": "状态状态状态",
                },
                {
                    "projectCode": '20160415BXL',
                    "projectName": "高科西路地块xx办理",
                    "caseCode": '2016040610BXL',
                    "businessType": "建设用地规划许可证审批",
                    "constructionUnit": "建设单位建设单位建设单位",
                    "constructionAddress": "建设地址建设地址建设地址",
                    "landCharacter": "用地性质用地性质",
                    "netSerialNumber": "网办流水号",
                    "state": "状态状态状态",
                },
                {
                    "projectCode": '20160425BXL',
                    "projectName": "高科西路地块xx办理",
                    "caseCode": '2016040620BXL',
                    "businessType": "建设用地规划许可证审批",
                    "constructionUnit": "建设单位建设单位建设单位",
                    "constructionAddress": "建设地址建设地址建设地址",
                    "landCharacter": "用地性质用地性质",
                    "netSerialNumber": "网办流水号",
                    "state": "状态状态状态",
                },
                {
                    "projectCode": '20160435BXL',
                    "projectName": "高科西路地块xx办理",
                    "caseCode": '2016040630BXL',
                    "businessType": "建设用地规划许可证审批",
                    "constructionUnit": "建设单位建设单位建设单位",
                    "constructionAddress": "建设地址建设地址建设地址",
                    "landCharacter": "用地性质用地性质",
                    "netSerialNumber": "网办流水号",
                    "state": "状态状态状态",
                },
                {
                    "projectCode": '20160455BXL',
                    "projectName": "高科西路地块xx办理",
                    "caseCode": '2016040660BXL',
                    "businessType": "建设用地规划许可证审批",
                    "constructionUnit": "建设单位建设单位建设单位",
                    "constructionAddress": "建设地址建设地址建设地址",
                    "landCharacter": "用地性质用地性质",
                    "netSerialNumber": "网办流水号",
                    "state": "状态状态状态",
                },
                {
                    "projectCode": '20160455BXL',
                    "projectName": "高科西路地块xx办理",
                    "caseCode": '2016040660BXL',
                    "businessType": "建设用地规划许可证审批",
                    "constructionUnit": "建设单位建设单位建设单位",
                    "constructionAddress": "建设地址建设地址建设地址",
                    "landCharacter": "用地性质用地性质",
                    "netSerialNumber": "网办流水号",
                    "state": "状态状态状态",
                },
                {
                    "projectCode": '20160455BXL',
                    "projectName": "高科西路地块xx办理",
                    "caseCode": '2016040660BXL',
                    "businessType": "建设用地规划许可证审批",
                    "constructionUnit": "建设单位建设单位建设单位",
                    "constructionAddress": "建设地址建设地址建设地址",
                    "landCharacter": "用地性质用地性质",
                    "netSerialNumber": "网办流水号",
                    "state": "状态状态状态",
                },
                {
                    "projectCode": '20160475BXL',
                    "projectName": "高科西路地块xx办理",
                    "caseCode": '2016040680BXL',
                    "businessType": "建设用地规划许可证审批",
                    "constructionUnit": "建设单位建设单位建设单位",
                    "constructionAddress": "建设地址建设地址建设地址",
                    "landCharacter": "用地性质用地性质",
                    "netSerialNumber": "网办流水号",
                    "state": "状态状态状态",
                },
                {
                    "projectCode": '20160475BXL',
                    "projectName": "高科西路地块xx办理",
                    "caseCode": '2016040680BXL',
                    "businessType": "建设用地规划许可证审批",
                    "constructionUnit": "建设单位建设单位建设单位",
                    "constructionAddress": "建设地址建设地址建设地址",
                    "landCharacter": "用地性质用地性质",
                    "netSerialNumber": "网办流水号",
                    "state": "状态状态状态",
                },
        ];

        /**
         * @description:注册表格的API函数,
         * @params {gridApi} ui-grid回调注入的参数
         * @return null 无返回值
         * */
        vm.gridOptions.onRegisterApi=function(gridApi){
            vm.gridApi=gridApi;
            gridApi.selection.on.rowSelectionChanged($scope,function(row){
                vm.gridOptionsRowSelectInfo=row;
                // console.log(row);
            });
        };
        /**
         * @description:续办按钮点击事件,
         * @params:null 需要使用到全局变量下的变量vm.gridOptionsRowSelectInf获取当前选中的行信息
         * @return null 无返回值
         * */
        vm.continueBtnClick=function(){
            var selectItem=vm.gridOptionsRowSelectInfo;//保存当前选中的项目
            if(null==selectItem.isSelected||!selectItem.isSelected){
                layer.confirm('请选择要续办的项目！',{
                    icon:0,
                    btn:['关闭']
                },function(index,text){
                    layer.close(index);
                });
            }else{
                layer.confirm('确定要续办改案卷？',{
                    icon:3,
                    btn:['确定','取消']
                },function(index, text){
                    $state.go('sidebar.content',{url:'AppCenter-appApprove-tpl-approveItemForm',tabName:selectItem.entity.projectName,tabGroup:'businessApproveNew',params:'252525'});
                    $scope.$apply();
                    layer.close(index);
                },function(){

                });
            }
        };

    }

    continueCtrl.$inject=["$scope","$http","$stateParams","$state"];
    return continueCtrl;

});   