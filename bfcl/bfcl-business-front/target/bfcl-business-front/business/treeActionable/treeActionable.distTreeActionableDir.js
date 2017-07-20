/**
 * Created by wanghy on 2016/11/24.
 */
define([
    'business/treeActionable/treeActionable.distTreeActionableCtrl'
], function(distTreeActionableCtrl){
    'use strict';
    function disTreeActionableDir(){
        return{
            restrict:'EA',
            replace:false,
            templateUrl:'business/treeActionable/tpl/treeActionable.html',
            scope:{
                "treeData":"="
            },
            controller:distTreeActionableCtrl,
            controllerAs: 'distTreeActionableCtrl',
            link: function ($scope) {
                $scope.uploadFile = {
                    form: angular.element.find('form[name="uploadFileForm"]')[0],
                    input: angular.element.find('form[name="uploadFileForm"] input[name="uploadfileInput"]')[0]
                };
            }
        };
    }
    return disTreeActionableDir;
});