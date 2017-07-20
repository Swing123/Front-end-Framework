

define([

],function(appCommon){
    'use strict';

        function fromNowFilter() {
        return function(date) {
            return moment(date).fromNow();
        };
    }
        fromNowFilter.$inject=[];
        return fromNowFilter;

});

