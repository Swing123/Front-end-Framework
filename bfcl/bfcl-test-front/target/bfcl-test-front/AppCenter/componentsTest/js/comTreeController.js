define([
], function () {
    'use strict';
    function treeController($scope){
        $scope.projectTreeList = [{
            name: 'dashBoard',
            type: 'B',
            children: [{
                name: 'child1.png',
                url: '',
                type: 'png'
            }, {
                name: 'child2.doc',
                url: '',
                type: 'P'
            }, {
                name: 'child2.docx',
                url: '',
                type: 'P'
            }, {
                name: 'child2.dwg',
                url: '',
                type: 'P'
            }, {
                name: 'child2.jpg',
                url: '',
                type: 'P'
            }, {
                name: 'child2.pdf',
                url: '',
                type: 'P'
            }, {
                name: 'child2.pdf',
                url: '',
                type: 'P'
            }]
        },{
            name: 'view Category',
            type:'B', //B
            children: [{
                name: 'child1.pdf',
                url: '',
                type: 'P' //project
            }, {
                name: 'child2.png',
                url: '',
                type: 'P'
            }]
        }];

        $scope.fileTreeList = [{
            name: 'dashBoard',
            type: 'folder',
            children: [{
                name: 'child1.png',
                url: '',
                type: 'file'//根据文件名后缀判断
            }, {
                name: 'child2.doc',
                url: '',
                type: 'file'
            }, {
                name: 'child2.docx',
                url: '',
                type: 'docx'
            }, {
                name: 'child2.dwg',
                url: '',
                type: 'dwg'
            }, {
                name: 'child2.jpg',
                url: '',
                type: 'jpg'
            }, {
                name: 'child2.pdf',
                url: '',
                type: 'pdf'
            }, {
                name: 'child2.pdf',
                url: '',
                type: ''
            }]
        },{
            name: 'view Category',
            children: [{
                name: 'child1.pdf',
                url: ''
            }, {
                name: 'child2.png',
                url: ''
            }]
        }];

        $scope.treeConfig = {
            root: {
                icon: '',
                type: 'm'
            },
            children: {
                icon: '',
                type: 'r'
            }
        };

        $scope.onClickItem = function (item) {
            console.log(item);
            console.log('单击子项');
        };

        $scope.onDoubleClickItem = function (item) {
            console.log(item);
            console.log('双击子项');
        };

        //配置文件
        $scope.configTree = {};
        $scope.configTree = {
            "root": {
                "type": "", //B 、 project 、 Material, folder
                "icon": {
                    "class": "fa fa-add",
                    "imageSource": ""
                },
                "actions": {
                    "add": {
                        "class": "fa fa-add",
                        "do": function () {
                            
                        }
                    },
                    "delete": {
                        "class": "fa fa-delete",
                        "do": function () {

                        }
                    },
                    "refresh": {
                        "class": "fa fa-refresh",
                        "do": function () {

                        }
                    }
                },
                "node": {
                    "type": "", //project、file
                    "icon": {
                        "class": "",
                        "imageSource": ""
                    },
                    "actions": {
                        "add": {
                            "class": "fa fa-add",
                            "do": function () {

                            }
                        },
                        "delete": {
                            "class": "fa fa-delete",
                            "do": function () {

                            }
                        },
                        "refresh": {
                            "class": "fa fa-refresh",
                            "do": function () {

                            }
                        }
                    }
                }
            }
        };
    }

    treeController.$inject=['$scope'];

    return treeController;
});