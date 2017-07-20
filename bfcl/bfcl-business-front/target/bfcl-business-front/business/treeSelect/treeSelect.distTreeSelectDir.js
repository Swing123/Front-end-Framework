/**
 * Created by wanghy on 2016/11/23.
 */
define([
    'business/treeSelect/treeSelect.distTreeSelectCtrl'
], function (distTreeSelectCtrl) {
    'use strict';
    function distTreeSelectDir(){
        return {
            restrict:'EA',
            scope:{
                "treeData":"=",
                "treeConfirmClick": '&',
                "treePlaceholder": '@'
            },
            controller: distTreeSelectCtrl,
            templateUrl:'business/treeSelect/tpl/treeSelect.html',
            link: function ($scope) {
            }
        };
    }
    distTreeSelectDir.$inject=[];
    return distTreeSelectDir;
});

