/**
 \* Created by Wanggb with IntelliJ IDEA.
 \*Orgs:DIST
 \*Date:2016/10/9
 \*Time:15:51
 \*Description:
 */
define([
    'angular'
], function (angular) {
    'use strict';
    function hideOverflow($http,$window){
        return {
            restrict:'A',
            compile: function compile(tElement, tAttrs, transclude) {
                return {
                    pre: function preLink(scope, iElement, iAttrs, controller) { },
                    post: function postLink(scope, iElement, iAttrs, controller) {
                        var element=iElement[0];
                        initElementSize(scope,element);
                        console.info(element);
                        $window.addEventListener('resize',onWindowResize);
                        element.addEventListener('resize',onWindowResize);

                        angular.element(iElement).bind('resize',onWindowResize);

                        function initElementSize(scope,element){
                            scope.initElementWidth=element.offsetWidth;
                            scope.initElementHeight=element.offsetHeight;
                        }
                        function onWindowResize(){
                            var isSizeChanged=scope.initElementWidth!=element.offsetWidth||scope.initElementHeight!=element.offsetHeight;
                            console.info("onSized");
                            if(isSizeChanged){
                                console.info("onSized");
                            }
                        }


                    }
                };
            },
        };
    }
    hideOverflow.$inject=['$http','$window'];
    return hideOverflow;
});

