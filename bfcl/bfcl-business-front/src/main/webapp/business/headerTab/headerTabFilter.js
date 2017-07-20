/**
 \* Created by Wanggb with IntelliJ IDEA.
 \*Orgs:DIST
 \*Date:11/18/2016
 \*Time:10:24 AM
 \*Description:程序入口,依赖声明
 */

define([
    'angular'
], function (angular) {//测试过滤器
    'use strict';
    function inputFilter(){
        return function(tab){

/*            function jsonStringify(jsonString){
                if(typeof jsonString ==='object'){
                    return jsonString;
                }else{
                    jsonString=jsonString||'';
                    jsonString.replace(/\'/g,'"');
                    return JSON.stringify(jsonString);
                }
            }
            var tabInfo=jsonStringify(tab);
            tabInfo.tabName=tabInfo.tabName||"未命名";
            console.log(tabInfo);
            return tabInfo.tabName;*/
        };
    }

    return inputFilter;
});   