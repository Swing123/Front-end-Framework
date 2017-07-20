/**
 * Created by Wanggb on 2016/9/25.
 */


(function(window,angular) {
    'use strict';
    var myAppDev = angular.module('myMockE2E',['ngMockE2E']);

    myAppDev.run(['$httpBackend','$log','$q','$http',function($httpBackend,$log,$q,$http) {


        // returns the current list of phones
        // $httpBackend.whenGET(HTTPURL.sidebar).respond(function(){
        //     return 20;
        // });
        //
        // $httpBackend.whenPOST(HTTPURL.sidebar).respond(function(method, url, data) {
        //     var request = new XMLHttpRequest();
        //     request.open('GET', 'mock/resource/sidebar.json', false);
        //     request.send(null);
        //     return [request.status, request.response, {}];
        // });
        // $httpBackend.whenPOST('http://localhost:8080/uuc-web/orgs').respond(function(method, url, data) {
        //     var request = new XMLHttpRequest();
        //     request.open('GET', 'mock/resource/header.json', false);
        //     request.send(null);
        //     return [request.status, request.response, {}];
        // });

        $httpBackend.whenGET('http://localhost:8080/uuc-web/orgs').respond(function(method, url, data) {
            var request = new XMLHttpRequest();
            request.open('GET', 'mock/resource/applicationList.json', false);
            request.send(null);
            console.log(request);
            return [200, request.response, {}];
        });
        $httpBackend.whenGET('http://localhost:8080/uuc-web/orgs/b2c5d638-9906-11e6-8b3d-a6df6c7f39a0/users').respond(function(method, url, data) {
            var request = new XMLHttpRequest();
            request.open('GET', 'mock/resource/taskLists.json', false);
            request.send(null);
            console.log(request);
            return [200, request.response, {}];
        });
        //
        // $httpBackend.whenPOST(HTTPURL.login).respond(function(method, url, data) {
        //     data=JSON.parse(data);
        //     return [200, {"id":231241,"user":{"id":225555,"role":data.username}}, {}];
        // });
        //
        // $httpBackend.whenGET(HTTPURL.sysConfig).respond(function(method, url, data) {
        //     var request = new XMLHttpRequest();
        //     request.open('GET', 'mock/resource/taskLists.json', false);
        //     request.send(null);
        //     return [request.status, request.response, {}];
        // });

        // Passthrough everything
        $httpBackend.whenPOST(/[\s\S]*/).passThrough();
        $httpBackend.whenDELETE(/[\s\S]*/).passThrough();
        $httpBackend.whenGET(/[\s\S]*/).passThrough();
    }]);
})(window,window.angular);
