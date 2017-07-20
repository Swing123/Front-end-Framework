/**
 * Created by wanghy on 2016/11/18.
 */
define([
], function () {
    function firstCharacterFilter () {
        return function(str) {
            return str.substr(0,1).toUpperCase();
        };
    }

    return firstCharacterFilter;
});