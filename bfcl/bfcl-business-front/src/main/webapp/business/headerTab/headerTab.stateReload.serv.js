/**
 \* Created by Wanggb with IntelliJ IDEA.
 \*Orgs:DIST
 \*Date:12/1/2016
 \*Time:6:52 PM
 \*Description:程序入口,依赖声明
 */
define([
    'angular'
],function(angular){
    'use strict';
    function stateReloadService(){
        var _stateLabel=[],
             _stateUrl=[];

        /**
         * @description 搜索当前服务中的tab标签组：stateLabel以及对应的页面模板地址：stateUrl 实现功能：找到待搜索项在当前缓存的tab栏中的位置，如果没有，则新添加一个;
         * @name searchState
         * @params {String} stateParams 待搜索的路由对象
         * @params {String} stateUrl，tab项对应的html模板
         * @return {Number} 搜索找到的目标项在已有tab信息中保存的位置
         * */
        function searchState(stateParams){
            var stateParamsResult=getStateParams(stateParams);
            var stateIndex=-1,
                stateLabel=stateParamsResult.stateLabel,//stateLabel，tab项的标签
                stateUrl=stateParamsResult.stateUrl,//stateUrl，tab项对应的html模板
                freshTab=stateParamsResult.freshTab||false;//刷新Tab
            switch(freshTab){
                case true:
                    deleteState(stateLabel);
                    break;
                default:
                    break;
            }
            switch(_stateLabel.indexOf(stateLabel)){
                case -1:
                    pushState(stateLabel,stateUrl);
                    stateIndex=_stateLabel.length-1||0;
                    break;
                default:
                    stateIndex=_stateLabel.indexOf(stateLabel);
                    break;
            }
            return stateIndex;
        }

        /**
         * @description 删除单例服务中保存的tab数组实例对象，实现下次跳转改页面时刷新该页面
         * @name deleteState
         * @params {String} stateLabel，将要删除tab项的标签
         * @return {null}
         * */
        function deleteState(stateLabel){
            stateLabel=stateLabel||null;
            if(null!==stateLabel){
                try{
                    var tempIndex=_stateLabel.indexOf(stateLabel);
                    switch(tempIndex){
                        case -1:
                            break;
                        default:
                            _stateLabel.splice(tempIndex,1);
                            _stateUrl.splice(tempIndex,1);
                            break;
                    }
                }catch(e){
                    console.warn("tab group delete failed");
                }
            }
            return;
        }



        /**
         * @description 删除单例服务中保存的tab数组实例对象，实现下次跳转改页面时刷新该页面
         * @name deleteState
         * @params {String} stateLabel，将要删除tab项的标签
         * @return {null}
         * */
        function getStateParams(toParams){
            var stateParams=angular.copy(toParams);
            var freshTab=stateParams.freshTab||false;
            var stateLabel=stateParams.url+stateParams.tabName+stateParams.tabGroup+'';

            var templateUrl=toParams.url||'';
            templateUrl=templateUrl.replace(/\.html/g,'' );
            templateUrl=templateUrl+'.html';
            templateUrl=templateUrl.replace(/\-/g,'/' );
            return {"stateLabel":stateLabel,"stateUrl":templateUrl,"freshTab":freshTab};
        }


        /**
         * @description 添加tab标签：stateLabel以及对应的页面模板地址：stateUrl,保持在单例服务中;
         * @name pushState
         * @params {String} stateLabel，tab项的标签
         * @params {String} stateUrl，tab项对应的html模板
         * @return null
         * */
        function pushState(stateLabel,stateUrl){
            _stateLabel.push(stateLabel);
            _stateUrl.push(stateUrl);
            return;
        }
        /**
         * @description 获取当前服务中tab标签：stateLabel以及对应的页面模板地址：stateUrl;
         * @name getState
         * @params null
         * @return {objec} {_stateLabel,_stateUrl}
         * */
        function getState(stateParams){
            var stateIndexResult=searchState(stateParams);
            return {stateIndex:stateIndexResult,stateLabel:_stateLabel,stateUrl:_stateUrl};
        }

        /**
         * @description 直接通过路由参数删除缓存的tab项;
         * @name deleteStateByParams
         * @params {object} stateParams 待删除的路由参数信息
         * @return {null}
         * */
        function deleteStateByParams(stateParams){
            var stateParamsResult=getStateParams(stateParams);
            deleteState(stateParamsResult.stateLabel);
        }

        return {"searchState":searchState,
                "deleteState":deleteState,
                "pushState":pushState,
                "deleteStateByParams":deleteStateByParams,
                "getState":getState
        };
    }

    stateReloadService.$inject=[];
    return stateReloadService;
});
