/**
 * Created by Wanggb on 2016/9/25.
 */


define([

],function(mockApp){
    'use strict';
        function mockServer($httpBackend,$log,HTTPURL,$q,$http) {

        // returns the current list of  phones
            $httpBackend.whenGET(HTTPURL.project).respond(function(){
                return 20;
            });
            $httpBackend.whenPOST(HTTPURL.project).respond(function(method, url, data) {
                var request = new XMLHttpRequest();
                request.open('GET', 'resource/project.json', false);
                request.send(null);
                return [request.status, request.response, {}];
            });
            $httpBackend.whenGET(HTTPURL.projectList).respond(function(){
                return 20;
            });
            $httpBackend.whenPOST(HTTPURL.projectList).respond(function(method, url, data) {
                var request = new XMLHttpRequest();
                request.open('GET', 'resource/projectList.json', false);
                request.send(null);
                return [request.status, request.response, {}];
            });
        $httpBackend.whenGET(HTTPURL.sidebar).respond(function(){
            return 20;
        });
        $httpBackend.whenPOST(HTTPURL.sidebar).respond(function(method, url, data) {
            var request = new XMLHttpRequest();
            request.open('GET', 'resource/sidebar.json', false);
            request.send(null);
            return [request.status, request.response, {}];
        });

        $httpBackend.whenPOST(HTTPURL.header).respond(function(method, url, data) {
            var request = new XMLHttpRequest();
            request.open('GET', 'resource/header.json', false);
            request.send(null);
            return [request.status, request.response, {}];
        });

/*        $httpBackend.whenPOST(HTTPURL.login).respond(function(method, url, data) {
            data=JSON.parse(data);
            return [200, {"id":231241,"user":{"id":225555,"role":data.username}}, {}];
        });*/

        $httpBackend.whenGET(HTTPURL.sysConfig).respond(function(method, url, data) {
            var request = new XMLHttpRequest();
            request.open('GET', 'resource/sys.config.json', false);
            request.send(null);
            return [request.status, request.response, {}];
        });

        $httpBackend.whenPOST(HTTPURL.dynamicTable).respond(function(method, url, data) {
            var request = new XMLHttpRequest();
            request.open('GET', 'resource/dynamicTable.json', false);
            request.send(null);
            return [request.status, request.response, {}];
        });
        $httpBackend.whenPOST(HTTPURL.authentication).respond(function(method, url, data) {
                var request = new XMLHttpRequest();
                request.open('GET', 'resource/auth.json', false);
                request.send(null);
                return [request.status, request.response, {}];
        });

        $httpBackend.whenPOST(HTTPURL.log).respond(function(method, url, data) {
            var request = new XMLHttpRequest();
            request.open('GET', 'resource/log.json', false);
            request.send(null);
            return [request.status, request.response, {}];
        });

        $httpBackend.whenPOST(HTTPURL.info).respond(function(method, url, data) {
            var request = new XMLHttpRequest();
            request.open('GET', 'resource/info.json', false);
            request.send(null);
            return [request.status, request.response, {}];
        });

        $httpBackend.whenPOST(HTTPURL.board).respond(function(method, url, data) {
            var request = new XMLHttpRequest();
            request.open('GET', 'resource/board.json', false);
            request.send(null);
            return [request.status, request.response, {}];
        });

        // Passthrough everything
        $httpBackend.whenPOST(/[\s\S]*/).passThrough();
        $httpBackend.whenGET(/[\s\S]*/).passThrough();
    }
        mockServer.$inject=['$httpBackend','$log','HTTPURL','$q','$http'];
        return mockServer;
});
