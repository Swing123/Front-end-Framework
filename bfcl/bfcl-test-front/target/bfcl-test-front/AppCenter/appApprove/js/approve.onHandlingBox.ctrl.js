/**
 \* Created by Wanggb with IntelliJ IDEA.
 \*Orgs:DIST
 \*Date:11/3/2016
 \*Time:10:34 AM
 \*Description:程序入口,依赖声明
 */

define([
    "Layer",//layer弹出框插件
    "angular"
], function (layer,angular) {
    'use strict';
    function onHandlingController($scope,$state){
        var vm=$scope.vm={};

        /*
        * 页面布局变量初始化
        * */
        vm.layout={};
        vm.layout={
            leftPanelHide:false,
            rightPanelHide:false,
            itemFull:false
        };
        vm.changeLayout=function(type,obj){
            switch(type){
                case 'leftFull':
                    obj.leftPanelHide=false;
                    obj.rightPanelHide=true;
                    obj.itemFull=!obj.itemFull;
                    break;
                case 'rightFull':
                    obj.leftPanelHide=true;
                    obj.rightPanelHide=false;
                    obj.itemFull=!obj.itemFull;
                    break;
                default:
                    obj.leftPanelHide=false;
                    obj.rightPanelHide=false;
                    break;
            }
            console.log(vm.layout);
        }
        /*tab选项卡数据 数据模型提供者wanggb*/
        // 选项卡配置
        vm.tabConfig={
            "lists":[
                {"name":"项目信息","param":"","active":true},
                {"name":"项目日志","param":"","active":false},
                {"name":"项目树","param":"","active":false},
                {"name":"材料袋","param":"","active":false},
                {"name":"报表","param":"","active":false},
            ]
        };

        // 选项卡单击
        vm.tabClick=function(index,list){
            angular.forEach(vm.tabs,function(data,index,array){
                vm.tabs[index]=false;
            });
            vm.tabs[index]=true;
            // console.info(index,list);
        };

        /*tab Panel显示隐藏初始化*/
        vm.tabs=[true,false,false,false,false];


        /*日志部分代码，数据模型提供者wangxw*/
        vm.circleLog={
            "log_col":[
                "col-md-1",
                "col-md-3",
                "col-md-8"
            ],
            "log_List":[
                ["2016年7月28日12:30","开始"],
                ["2016年7月30日18:10","分拣"],
                ["2016年7月30日18:10","分拣"],
                ["2016年8月28日18:10","窗口收件窗口收件窗口收件窗口收件窗口收件窗口收件窗口收件窗口收件窗口收件"]
            ]
        };


        /*
        * [
         {"label":"项目编号","value":"SP20160058","status":0},
         {"label":"受理编号","value":"YD2016081","status":0},
         {"label":"建设地址","value":"民营科技产业基地SA-19B","status":0},
         {"label":"受理日期","value":"2016年11月21日 09时03分","status":0,"color":"success"},
         {"label":"当前环节","value":"窗口收件","status":0},
         {"label":"当前办理人","value":"窗口","status":0},
         {"label":"建设单位","value":"新翔建设投资有限公司","status":0},
         {"label":"联系人","value":"王某某","status":0},
         {"label":"联系电话","value":"15521584875","status":0},
         {"label":"流程计时","value":"剩余1天1.8小时","status":0,"color":"warning"},
         {"label":"当前计时","value":"不计时","status":0},
         ]*/
        /*项目信息数据，模型提供者wanggb*/
        vm.basicInfo={
            "items":[
                {"label":"建设地址","value":"民营科技产业基地SA-19B","status":0},
                {"label":"建设单位","value":"新翔建设投资有限公司","status":0},
                {"label":"联系人","value":"王某某","status":0},
                {"label":"联系电话","value":"15521584875","status":0},
            ]
        };
        /*项目信息，数据模型提供者wangxw*/
        vm.projectInfo={
            "itemInfo":{
                "projectName":"B地块项目选址",
                "state":"申请上会中",
                "projectCode":"XML20160406",
                "processCode":"2201632644646",
                "processDate":"06月23日 09时22分",
                "limitTime":"剩余3天6小时",
                "currentLink":"窗口收件",
                "currentHandlePerson":"李晓",
                "label":0
            }
        };
        vm.openProjectItem=function(){
            $state.go("sidebar.content",{url:'AppCenter-appApprove-tpl-approveItemForm',tabName:'测试表单',tabGroup:'businessApproveOnHandling' +
            '',params:''});
        }
        /*项目树，数据模型提供者wanghy*/
        vm.treeConfig = {
            root: {
                icon: '',
                type: ''
            },
            children: {
                icon: '',
                type: ''
            }
        };
        vm.projectTreeList = [
            {
            name: '规划设计条件审批',
            type: 'folder',
            children: [{
                name: '民营科技产业基地A-19b地块海域使用权公开出让/2016年05月10日/TJ2016009在办',
                url: '',
            }, {
                name: '民营科技产业基地A-19b地块海域使用权公开出让/2016年05月10日/TJ2016009在办',
                url: '',
            }, {
                name: '民营科技产业基地A-19b地块海域使用权公开出让/2016年05月10日/TJ2016009在办',
                url: '',
            }]
        },{
            name: '建设工程规划许可证审批',
            type:'', //B
            children: [{
                name: 'A-19b地块海域使用权公开出让/2016年05月10日/TJ2016009在办',
                url: '',
            }, {
                name: 'A-19b地块海域使用权公开出让/2016年05月10日/TJ2016009在办',
                url: '',
                type: ''
            }]
        },
            {
                name: '规划许可证审批',
                type:'', //B
                children: [{
                    name: 'A-19b地块海域使用权公开出让/2016年05月10日/TJ2016009在办',
                    url: '',
                }, {
                    name: 'A-19b地块海域使用权公开出让/2016年05月10日/TJ2016009在办',
                    url: '',
                }]
            }];

        /*材料袋，数据模型提供者wanghy*/
        vm.materialTreeConfig = {
            root: {
                icon: '',
                type: 'folder'
            },
            children: {
                icon: '',
                type: 'file'
            }
        };
        vm.materialTreeList = [
            {
                name: '规划设计条件审批',
                type: 'folder',
                children: [{
                    name: '民营科技产业基地A-19b地块海域使用权公开出让/2016年05月10日/TJ2016009在办.jpg',
                    url: '',
                }, {
                    name: '民营科技产业基地A-19b地块海域使用权公开出让/2016年05月10日/TJ2016009在办.png',
                    url: '',
                }, {
                    name: '民营科技产业基地A-19b地块海域使用权公开出让/2016年05月10日/TJ2016009在办.jpg',
                    url: '',
                }]
            },{
                name: '建设工程规划许可证审批',
                type:'folder', //B
                children: [{
                    name: 'A-19b地块海域使用权公开出让/2016年05月10日/TJ2016009在办.jpg',
                    url: '',
                }, {
                    name: 'A-19b地块海域使用权公开出让/2016年05月10日/TJ2016009在办.docx',
                    url: '',
                }]
            },
            {
                name: '规划许可证审批',
                type:'folder', //B
                children: [{
                    name: 'A-19b地块海域使用权公开出让/2016年05月10日/TJ2016009在办.jpg',
                    url: '',
                }, {
                    name: 'A-19b地块海域使用权公开出让/2016年05月10日/TJ2016009在办.doc',
                    url: '',
                }]
            }];

        /*报表，数据模型提供者wanghy*/
        vm.reportTreeConfig = {
            root: {
                icon: '',
                type: ''
            },
            children: {
                icon: '',
                type: ''
            }
        };
        vm.reportTreeList = [
            {
                name: '建设项目报件回执单',
                type: 'R',
            },{
                name: '不予行政许可决定书',
                type:'R', //B
            },
            {
                name: '建设项目选址意见书',
                type:'R', //B
            },
            {
                name: '便民服务卡',
                type:'R', //B
            }];

        /*项目列表，数据模型提供者wanggb*/
        vm.notes=[
            {
                "content": "圣寿路市政工程",
                "color": "warning",
                "currentLink": "窗口收件",
                "timeLimit": "不计时",
                "caseCode": 1410788931159
            },
            {
                "content": "机场拆迁安置区市政工程（无名路）",
                "color": "primary",
                "currentLink": "窗口收件",
                "timeLimit": "不计时",
                "caseCode": 1410788631159
            },
            {
                "content": "二产标准厂房",
                "color": "success",
                "currentLink": "窗口收件",
                "timeLimit": "不计时",
                "caseCode": 1410788731159
            },
            {
                "content": "环山路龙湾道路工程",
                "color": "success",
                "currentLink": "窗口收件",
                "timeLimit": "不计时",
                "caseCode": 1410788731159
            },
            {
                "content": "圣寿路市政工程",
                "color": "success",
                "currentLink": "窗口收件",
                "timeLimit": "不计时",
                "caseCode": 1410788731159
            },
            {
                "content": "武陵黄厦机场拆迁安置区市政工程（无名路）",
                "color": "success",
                "currentLink": "窗口收件",
                "timeLimit": "不计时",
                "caseCode": 1410788731159
            },
            {
                "content": "二产标准厂房",
                "color": "success",
                "currentLink": "窗口收件",
                "timeLimit": "不计时",
                "caseCode": 1410788731159
            },
            {
                "content": "环山路龙湾道路工程",
                "color": "danger",
                "currentLink": "窗口收件",
                "timeLimit": "超时2天5小时30分钟",
                "caseCode": 1410788731159
            }
        ];
        vm.note = vm.notes[0];
        vm.notes[0].selected = true;
        vm.colors = ['primary', 'info', 'success', 'warning', 'danger', 'dark'];
        vm.selectNote = function(note){
            angular.forEach(vm.notes, function(note) {
                note.selected = false;
            });
            vm.note = note;
            vm.note.selected = true;
        };

        /*下拉树，数据模型提供者wanghy*/
        vm.multiItems = [
            {
            "id": '1',
            "name": '所有业务',
            "children": [
                {
                    'id': '11',
                    "name": '规划行政许可事项',
                    "children": [
                        {
                            'id': '111',
                            "name": "建设项目选址意见书（市局）",
                        },
                        {
                            'id': '112',
                            "name": "建设项目选址意见书（分局）",
                        },
                        {
                            'id': '113',
                            "name": "建设用地规划许可证",
                        },
                        {
                            'id': '114',
                            "name": "临时建设用地规划许可证",
                        }
                    ]
                },
                {
                    'id': '12',
                    "name": '规划行政许可事项',
                    "children": [
                        {
                            'id': '121',
                            "name": "建设项目选址意见书（市局）",
                        },
                        {
                            'id': '122',
                            "name": "建设项目选址意见书（分局）",
                        },
                        {
                            'id': '123',
                            "name": "建设用地规划许可证",
                        },
                        {
                            'id': '124',
                            "name": "临时建设用地规划许可证",
                        }
                    ]
                }
            ]
        }];

        /*项目列表，数据模型提供者wanggb wanghy*/
        vm.config={
            "BStates":{
                "states":[
                    {"name":"所有状态"},
                    {"name":"在办"},
                    {"name":"暂停"},
                    {"name":"申请上会中"}
                ],
                "currentState":"所有状态"
            },
            "BTree":{
                "items":[
                    {
                        "id": '1',
                        "name": '所有业务',
                        "children": [
                            {
                                'id': '11',
                                "name": '规划行政许可事项',
                                "children": [
                                    {
                                        'id': '111',
                                        "name": "建设项目选址意见书（市局）",
                                    },
                                    {
                                        'id': '112',
                                        "name": "建设项目选址意见书（分局）",
                                    },
                                    {
                                        'id': '113',
                                        "name": "建设用地规划许可证",
                                    },
                                    {
                                        'id': '114',
                                        "name": "临时建设用地规划许可证",
                                    }
                                ]
                            },
                            {
                                'id': '12',
                                "name": '规划行政许可事项',
                                "children": [
                                    {
                                        'id': '121',
                                        "name": "建设项目选址意见书（市局）",
                                    },
                                    {
                                        'id': '122',
                                        "name": "建设项目选址意见书（分局）",
                                    },
                                    {
                                        'id': '123',
                                        "name": "建设用地规划许可证",
                                    },
                                    {
                                        'id': '124',
                                        "name": "临时建设用地规划许可证",
                                    }
                                ]
                            }
                        ]
                    }],
                "placeholder":"选择项目"
            }
        };
        vm.itemLists={
            "lists":[
                {
                    "content": "圣寿路市政工程",
                    "color": "warning",
                    "currentLink": "窗口收件",
                    "timeLimit": "不计时",
                    "caseCode": 1410788931159,
                },
                {
                    "content": "机场拆迁安置区市政工程（无名路）",
                    "color": "primary",
                    "currentLink": "窗口收件",
                    "timeLimit": "不计时",
                    "caseCode": 1410788631159,
                    "selected":true

                },
                {
                    "content": "二产标准厂房",
                    "color": "success",
                    "currentLink": "窗口收件",
                    "timeLimit": "不计时",
                    "caseCode": 1410788731159
                },
                {
                    "content": "环山路龙湾道路工程",
                    "color": "success",
                    "currentLink": "窗口收件",
                    "timeLimit": "不计时",
                    "caseCode": 1410788731159
                },
                {
                    "content": "圣寿路市政工程",
                    "color": "success",
                    "currentLink": "窗口收件",
                    "timeLimit": "不计时",
                    "caseCode": 1410788731159
                },
                {
                    "content": "武陵黄厦机场拆迁安置区市政工程（无名路）",
                    "color": "success",
                    "currentLink": "窗口收件",
                    "timeLimit": "不计时",
                    "caseCode": 1410788731159
                },
                {
                    "content": "二产标准厂房",
                    "color": "success",
                    "currentLink": "窗口收件",
                    "timeLimit": "不计时",
                    "caseCode": 1410788731159
                },
                {
                    "content": "环山路龙湾道路工程",
                    "color": "danger",
                    "currentLink": "窗口收件",
                    "timeLimit": "超时2天5小时30分钟",
                    "caseCode": 1410788731159
                }
            ],
            "defaultSelectIndex":1
        };
        vm.doubleListClick=function(note){
            $state.go("sidebar.content",{url:'AppCenter-appApprove-tpl-approveItemForm',tabName:note.content,tabGroup:'businessApproveOnHandling' +
            '',params:''});
        };
        vm.singleListClick=function(note){
            console.log(note);
        };
        vm.panelResize=function(e){
            console.log(e);
        };
    }
    onHandlingController.$inject=['$scope','$state'];
    return onHandlingController;
});