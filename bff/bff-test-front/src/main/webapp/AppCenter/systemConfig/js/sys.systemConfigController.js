/**
 \* Created by Wanggb with IntelliJ IDEA.
 \*Orgs:DIST
 \*Date:11/3/2016
 \*Time:10:24 AM
 \*Description:程序入口,依赖声明
 */

define([
    'jquery',
    'linedtextarea',//textarea显示行信息的插件
    'jsonlint',//校验json的插件
], function ($) {
    'use strict';
    function systemConfigController($scope,$http,HTTPURL,$timeout){
        $http.get(HTTPURL.sysConfig).then(function (resp) {
            $scope.notes = resp.data.notes;
            // set default note
            $scope.note = $scope.notes[0];
            $scope.notes[0].selected = true;
        });

        $scope.colors = ['primary', 'info', 'success', 'warning', 'danger', 'dark'];

        $scope.createNote = function(){
            var note = {
                content: 'New note',
                color: $scope.colors[Math.floor((Math.random()*3))],
                date: Date.now()
            };
            $scope.notes.push(note);
            $scope.selectNote(note);
        };

        $scope.deleteNote = function(note){
            $scope.notes.splice($scope.notes.indexOf(note), 1);
            if(note.selected){
                $scope.note = $scope.notes[0];
                $scope.notes.length && ($scope.notes[0].selected = true);
            }
        };
        $scope.selectNote = function(note){
            angular.forEach($scope.notes, function(note) {
                note.selected = false;
            });
            $scope.note = note;
            $scope.note.selected = true;
            if(note.url){
                $http.get(note.url).then(function(data){
                    $scope.jsonCode=JSON.stringify(data.data, null, 4);
                });
            }else{
                $scope.jsonCode='';
            }
        };
        $timeout(function(){
            $(".lined").linedtextarea(
                {selectedLine: 1}
            );
        },0);
        $scope.checkJSON=function(data){
            try{
                var result=jsonlint.parse(data);
                var jsonData=JSON.parse(data);
                $scope.jsonCode=JSON.stringify(jsonData, null, 4);
                $scope.isCorrect=true;
                $scope.isWarning=false;
                $scope.parseMessage='JSON格式正确';
            }catch(e){
                $scope.isCorrect=false;
                $scope.isWarning=true;
                console.log(e);
                $scope.parseMessage=e.message;
            }
        };
    }
    systemConfigController.$inject=['$scope','$http','HTTPURL','$timeout'];
    return systemConfigController;
});   