/**
 * Created by wanggb on 16-11-25.
 */
define([],
    function(){
        'use strict';
        function comProjectListTest($scope,$http,HTTPURL) {
            var vm=$scope.vm={};
                 //获取列表配置--begin
                    $http({
                        "url":'../angular/text/project.do',
                        "params":'',
                        "method":"post"
                    }).then(function(data){
                        vm.project=data.data;
                    },function(status,data){ console.log(status,data); });
                    //获取列表配置--end
        }
        comProjectListTest.$inject=["$scope","$http","HTTPURL"];
        return comProjectListTest;
    }
);