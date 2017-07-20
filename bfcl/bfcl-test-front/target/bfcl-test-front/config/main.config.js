/**
 \* Created by Wanggb with IntelliJ IDEA.
 \*Orgs:DIST
 \*Date:11/1/2016
 \*Time:2:38 PM
 \*Description:程序入口,依赖声明
 */

define([
], function (app) {
    'use strict';
    var appConfig={
        "controllerProvider":controllerProvider,
        "translateProvider":translateProvider,
        "logProvider":logProvider,
    };
    function controllerProvider($controllerProvider,   $compileProvider,   $filterProvider,   $provide) {

        // // lazy controller, directive and service
        // app.controller = $controllerProvider.register;
        // app.directive  = $compileProvider.directive;
        // app.filter     = $filterProvider.register;
        // app.factory    = $provide.factory;
        // app.service    = $provide.service;
        // app.constant   = $provide.constant;
        // app.value      = $provide.value;
    }
    function translateProvider($translateProvider){
        // Register a loader for the static files
        // So, the module will search missing translation tables under the specified urls.
        // Those urls are [prefix][langKey][suffix].
        $translateProvider.useStaticFilesLoader({
            prefix: 'framework/l10n/',
            suffix: '.js'
        });
        // Tell the module what language to use by default
        $translateProvider.preferredLanguage('en');
        // Tell the module to store the language in the local storage
        $translateProvider.useLocalStorage();
    }
    function logProvider($logProvider){
        $logProvider.debugEnabled(false);
    }
    controllerProvider.$inject=['$controllerProvider', '$compileProvider', '$filterProvider', '$provide'];
    translateProvider.$inject=['$translateProvider'];
    logProvider.$inject=['$logProvider'];
    return appConfig;
});   