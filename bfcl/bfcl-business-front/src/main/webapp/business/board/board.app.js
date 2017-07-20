/**
 * Created by Swing on 2016/11/29 .
 */
define([
    'angular',
    'business/board/board.distBoardDir'
],function(angular,distBoardDir){
    'use strict';
    var distComBoard=angular.module('dist.com.board',[

    ]);
    distComBoard.directive('distBoard',distBoardDir);
    return distComBoard;
});