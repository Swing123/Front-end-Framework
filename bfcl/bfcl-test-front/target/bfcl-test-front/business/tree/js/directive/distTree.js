/**
 * Created by wanghy on 2016/11/18.
 */
define([
    'business/tree/js/controller/distTreeController'
], function (distTreeController) {
    'use strict';
    function distTree($timeout){
        return {
            restrict: 'EC',
            replace: true,
            scope:{
                "model": "=distTreeModel",
                "fold": "=",
                "configCustom": "=distTreeConfig",
                "treeType": "@distTreeType",
                "title": "@",
                "class": "@",
                "doubleClick": '&',
                "click": '&',
            },
            controller: distTreeController,
            templateUrl: 'business/tree/tpl/tree.html',
            link: function(scope, elem, attrs) {
                scope.configs = {
                    projectTree: {
                        root: {
                            icon: '',
                            type: 'B'
                        },
                        children: {
                            icon: '',
                            type: 'project'
                        }
                    },
                    materialTree: {
                        root: {
                            icon: '',
                            type: 'material'
                        },
                        children: {
                            icon: '',
                            type: 'file'
                        }
                    },
                    default: {
                        root: {
                            icon: '',
                            type: 'folder'
                        },
                        children: {
                            icon: '',
                            type: 'file'
                        }
                    }
                };

                scope.config = scope.configCustom || scope.configs[scope.treeType] || scope.configs.default;
            }
        };
    }
    distTree.$inject=['$timeout'];
    return distTree;
});