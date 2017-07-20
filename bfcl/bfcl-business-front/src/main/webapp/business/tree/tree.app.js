/**
 * Created by wanghy on 2016/11/15.
 */

define([
    'angular',
    'business/tree/js/directive/distTree',
    'business/tree/js/directive/distTreeProject',
    'business/tree/js/directive/distTreeFolder',
    'business/tree/js/directive/distTreeMaterial',
    'business/tree/js/directive/distTreeIcon',
    'business/tree/js/filter/fileFilter',
    'business/tree/js/filter/firstCharacterFilter'
], function (angular, distTree, distTreeProject, distTreeFolder, distTreeMaterial, distTreeIcon, fileFilter, firstCharacterFilter) {
    'use strict';
    var distComTree = angular.module('dist.com.tree',[

    ]);
    distComTree.directive('distTree',distTree);
    distComTree.directive('distTreeProject',distTreeProject);
    distComTree.directive('distTreeFolder',distTreeFolder);
    distComTree.directive('distTreeMaterial',distTreeMaterial);
    distComTree.directive('distTreeIcon',distTreeIcon);

    distComTree.filter('fileFilter', fileFilter);
    distComTree.filter('firstCharacter', firstCharacterFilter);

    return distComTree;
});