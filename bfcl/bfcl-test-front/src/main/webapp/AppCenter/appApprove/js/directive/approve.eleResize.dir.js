/**
 \* Created by Wanggb with IntelliJ IDEA.
 \*Orgs:DIST
 \*Date:12/23/2016
 \*Time:9:37 AM
 \*Description:程序入口,依赖声明
 */

define([
    'angular',
    'jquery'
], function (angular,$) {
    'use strict';
    function elementResizeDirective($window){
        return{
                restrict:'A',
                compile:function(){
                    return {
                        pre:function(){},
                        post:function(scope,ele,attr){
                            var $ele=ele[0];//获取待拖动的元素
                            $ele.addEventListener('mousedown', initResize, false);//添加鼠标按下事件，每当鼠标点击之后开始注册resize事件
                            var resizeId='#'+attr.eleResize;
                            var resizeElement=$(resizeId)[0];//选中宽度变化目标dom
                            var offsetX=null;//鼠标x轴偏移量
                            var resizeElementInitWidth=null;//宽度变化div起始宽度
                            /**
                             * @description 初始化、注册鼠标移动、鼠标弹起事件
                             * @name initResize
                             * */
                            function initResize(e) {
                                $window.addEventListener('mousemove', Resize, false);
                                $window.addEventListener('mouseup', stopResize, false);
                                offsetX=e.clientX;
                                resizeElementInitWidth=resizeElement.offsetWidth;
                            }

                            /**
                             * @description 宽度变化回调函数
                             * @name Resize
                             * */
                            function Resize(e) {
                                var offsetWidth=resizeElementInitWidth+(e.clientX-offsetX);
                                if(offsetWidth>120){
                                    resizeElement.style.width=offsetWidth+'px';

                                }
                            }
                            /**
                             * @description 取消注册回调函数
                             * @name stopResize
                             * */
                            function stopResize(e) {
                                $window.removeEventListener('mousemove', Resize, false);
                                $window.removeEventListener('mouseup', stopResize, false);
                            }
                        }
                    };
                }
        };
    }
    elementResizeDirective.inject=['$window'];
    return elementResizeDirective;
});   