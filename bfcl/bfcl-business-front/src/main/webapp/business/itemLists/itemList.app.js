/**
 \* Created by wanggb with IntelliJ IDEA.
 \*Orgs:DIST
 \*Date:11/11/2016
 \*Time:2.32 PM
 \*Description:程序入口,依赖声明
 */


define([
    'angular',
    'business/itemLists/itemList.itemListDir',
], function (angular,itemListDir) {
    'use strict';
    var distComItemList= angular.module('dist.com.itemList',[
    ]);
    distComItemList.directive('distItemList',itemListDir);
    return distComItemList;
});