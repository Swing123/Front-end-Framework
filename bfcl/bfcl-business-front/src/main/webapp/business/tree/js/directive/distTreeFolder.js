/**
 * Created by wanghy on 2016/11/18.
 */
define([
    'business/tree/js/controller/distTreeController',
], function (distTreeController) {
    'use strict';
    function distTreeFolder(){
        return {
            restrict: 'EC',
            replace: true,
            scope:{
                "model": "=distTreeModel",
                "fold": '=',
                "title": "@",
                "class": "@",
                "doubleClick": '&',
                "click": '&',
            },
            controller: distTreeController,
            templateUrl: 'business/tree/tpl/tree.html',
            link: function(scope, elem, attrs) {
                scope.config = {
                    root: {
                        icon: '',
                        type: 'folder'
                    },
                    children: {
                        icon: '',
                        type: 'file'
                    }
                };
            }
        };
    }
    return distTreeFolder;
});