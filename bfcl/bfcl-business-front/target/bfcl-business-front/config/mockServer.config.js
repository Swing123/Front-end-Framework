/**
 * Created by Wanggb on 2016/9/25.
 */


define([

],function(){
    'use strict';
        function mockServer($httpBackend,$log,HTTPURL,$q,$http) {

        // returns the current list of phones
        $httpBackend.whenPOST(HTTPURL.sidebar).respond(function(method, url, data) {
            var request = new XMLHttpRequest();
            request.open('GET', 'framework/mockServer/resource/sidebar.json', false);
            request.send(null);
            return [request.status, request.response, {}];
        });
        $httpBackend.whenPOST(HTTPURL.header).respond(function(method, url, data) {
            var request = new XMLHttpRequest();
            request.open('GET', 'framework/mockServer/resource/header.json', false);
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
