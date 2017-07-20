/**
 \* Created by Wanggb with IntelliJ IDEA.
 \*Orgs:DIST
 \*Date:11/3/2016
 \*Time:10:34 AM
 \*Description:程序入口,依赖声明
 */

define([
    "Layer",//layer弹出框插件
], function () {
    'use strict';
    function handledController($scope){
        $scope.parentFunc=function(test){
            console.info(test);
        };
        $scope.config={'fName':'parentFunc'};

        $scope.layerClick=function(){
            var data={"elapsedTime":1241,"ldapInsertCount":147,"ldapDeleteCount":0,"ldapModifyCount":0,"dbInsertCount":0,"dbDeleteCount":0,"dbModifyCount":0};
            layerClick(data);
        };

        function layerClick(data,fn){
            //询问框
            data=data||'';
            fn=fn||function(index){};
            var content=
                '<div class="row" style="padding:0; overflow-x:hidden;margin:0;">'+
                '<div class="col-md-12 col-sm-12 col-xs-12"  style="padding:0">\n'+
                '<div class="col-md-5 col-sm-5 col-xs-5" style="padding-right:0;text-align:right;">执行时间：</div>\n'+
                '<div class="col-md-7 col-sm-7 col-xs-7" style="padding-left:0;text-align:left;">{{elapsedTime}}</div>\n'+
                '</div>\n'+
                '<div class="col-md-12 col-sm-12 col-xs-12"  style="padding:0">\n'+
                '<div class="col-md-5 col-sm-5 col-xs-5" style="padding-right:0;text-align:right;">Idap插入数量：</div>\n'+
                '<div class="col-md-7 col-sm-7 col-xs-7" style="padding-left:0;text-align:left;">{{ldapInsertCount}}</div>\n'+
                '</div>\n'+
                '<div class="col-md-12 col-sm-12 col-xs-12"  style="padding:0">\n'+
                '<div class="col-md-5 col-sm-5 col-xs-5" style="padding-right:0;text-align:right;">Idap删除数量：</div>\n'+
                '<div class="col-md-7 col-sm-7 col-xs-7" style="padding-left:0;text-align:left;">{{ldapDeleteCount}}</div>\n'+
                '</div>\n'+
                '<div class="col-md-12 col-sm-12 col-xs-12"  style="padding:0">\n'+
                '<div class="col-md-5 col-sm-5 col-xs-5" style="padding-right:0;text-align:right;">Idap修改数量：</div>\n'+
                '<div class="col-md-7 col-sm-7 col-xs-7" style="padding-left:0;text-align:left;">{{ldapModifyCount}}</div>\n'+
                '</div>\n'+
                '<div class="col-md-12 col-sm-12 col-xs-12"  style="padding:0">\n'+
                '<div class="col-md-5 col-sm-5 col-xs-5" style="padding-right:0;text-align:right;">数据库插入数量：</div>\n'+
                '<div class="col-md-7 col-sm-7 col-xs-7" style="padding-left:0;text-align:left;">{{dbInsertCount}}</div>\n'+
                '</div>\n'+
                '<div class="col-md-12 col-sm-12 col-xs-12"  style="padding:0">\n'+
                '<div class="col-md-5 col-sm-5 col-xs-5" style="padding-right:0;text-align:right;">数据库修改数量：</div>\n'+
                '<div class="col-md-7 col-sm-7 col-xs-7" style="padding-left:0;text-align:left;">{{dbDeleteCount}}</div>\n'+
                '</div>\n'+
                '<div class="col-md-12 col-sm-12 col-xs-12"  style="padding:0">\n'+
                '<div class="col-md-5 col-sm-5 col-xs-5" style="padding-right:0;text-align:right;">数据库修改数量：</div>\n'+
                '<div class="col-md-7 col-sm-7 col-xs-7" style="padding-left:0;text-align:left;">{{dbModifyCount}}</div>\n'+
                '</div>\n'+
                '</div>\n';
            var modifyData=[
                {'target':'{{elapsedTime}}','data':data.elapsedTime},
                {'target':'{{ldapInsertCount}}','data':data.ldapInsertCount},
                {'target':'{{ldapDeleteCount}}','data':data.ldapDeleteCount},
                {'target':'{{ldapModifyCount}}','data':data.ldapModifyCount},
                {'target':'{{dbInsertCount}}','data':data.dbInsertCount},
                {'target':'{{dbDeleteCount}}','data':data.dbDeleteCount},
                {'target':'{{dbModifyCount}}','data':data.dbModifyCount}];

            $.each(modifyData,function(i,item){
                var reg=new RegExp(item.target,'g');
                content=content.replace(reg,item.data);
            });
            layer.open({
                title:'信息提示',
                shade:0.8,
                type:1,
                timeout:5000,
                area: ['340px', '235px'],
                content:content,
                btn: ['确定'],
                yes: function(index){
                    fn(index);
                    layer.close(index);
                }
            });

        };
    }
    handledController.$inject=['$scope'];
    return handledController;
});   