/**
 * Created by wanghy on 2016/11/23.
 */
define([

],function(){
    'use strict';
    function comTreeSelectController($scope, $http, $timeout, $interval){
        $scope.item = {};
        $scope.multiItems = [{
            "id": '1',
            "name": '所有业务',
            "children": [
                {
                    'id': '11',
                    "name": '规划审批业务',
                    "children": [
                        {
                            'id': '111',
                            "name": "规划设计条件审批",
                            "children": [
                                {
                                    'id': '1111',
                                    "name": "设计方案审批"
                                }
                            ]
                        }
                    ]
                },
                {
                    'id': '12',
                    "name": "行政办公业务",
                    "children": [
                        {
                            'id': '121',
                            "name": "行政收文",
                        },
                        {
                            'id': '122',
                            "name": "行政发文"
                        }
                    ]
                }
            ]
        }, {
            "name": "次要业务",
            "children": [
                {
                    "name": "审计"
                },
                {
                    "name": "预算"
                }

            ]
        }, {
            'name': '叶子节点'
        }];

        $scope.items = [{
            "name": "项目1"
        },{
            "name": "项目2"
        }, {
            "name": "项目3"
        }, {
            "name": "项目4"
        }];
        
        $scope.confirmClick = function (data) {
            console.log(data);
        }
    }

    comTreeSelectController.$inject=['$scope', '$http', '$timeout', '$interval'];
    return comTreeSelectController;
});