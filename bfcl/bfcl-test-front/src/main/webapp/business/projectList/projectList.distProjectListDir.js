/**
 \* Created by plume with IntelliJ IDEA.
 \*Orgs:DIST
 \*Date:2016/11/11
 \*Time:15:40
 \*Description:
 */
define([

], function () {
    'use strict';

    function distProjectListDir($http){
        return {
            restrict:'EA',
            scope:{
                "config":"="
            },
            controller:['$scope',function($scope){}],
            templateUrl:'business/projectList/tpl/projectList.html',
            compile: function compile(tElement, tAttrs, transclude) {
                return {
                    pre: function preLink(scope, iElement, iAttrs, controller) { },
                    post: function postLink(scope, iElement, iAttrs, controller) {
                        var vm=scope.vm={};
                        $.each(scope.config.state,function(n,value){
                            if(value.selected=="selected"){
                                scope.selectedState=scope.config.state[n].value;
                            }
                        });
                        var setting = {
                            view: {
                                showLine: false,
                                dblClickExpand: false
                            },
                            data: {
                                simpleData: {
                                    enable: true
                                }
                            },
                            callback: {
                                beforeClick: beforeClick,
                                onClick: onClick
                            }
                        };

                        vm.zNodes =scope.config.businessType;
                        document.getElementById("citySel").innerHTML = vm.zNodes[0].name+'<span class="caret"></span>';

                        vm.administrative="";
                        vm.businessType="";

                        function beforeClick(treeId, treeNode) {
                            if(treeNode.isParent){
                                if(treeNode.name!="所有业务"){
                                    vm.administrative=treeNode.name;
                                    vm.businessType="";
                                }
                                else{
                                    vm.administrative="";
                                    vm.businessType="";
                                }
                            }
                            else{
                                vm.businessType=treeNode.name;
                                vm.administrative="";
                            }
                            //var check = (treeNode && !treeNode.isParent);
                           // if (!check) alert("Do not select province...");
                           // return check;
                        }

                        function onClick(e, treeId, treeNode) {
                            var zTree = $.fn.zTree.getZTreeObj("treeDemo"),
                                nodes = zTree.getSelectedNodes(),
                                v = "";
                            nodes.sort(function compare(a,b){return a.id-b.id;});
                            for (var i=0, l=nodes.length; i<l; i++) {
                                v += nodes[i].name + ",";
                            }
                            if (v.length > 0 ) v = v.substring(0, v.length-1);
                            //var cityObj = $("#citySel");
                            //cityObj.attr("value", v);
                            //cityObj.val(v);
                            document.getElementById("citySel").innerHTML = v+'<span class="caret"></span>';
                            hideMenu();
                            vm.search(scope.key,scope.selectedState,vm.administrative,vm.businessType);
                        }

                        vm.showMenu=false;
                        vm.toggleMenu=function(){
                            vm.showMenu=!vm.showMenu;
                            if(vm.showMenu){
                                showMenu();
                            }
                            else {
                                hideMenu();
                            }
                        };
                        function showMenu() {
                            var cityObj = $("#citySel");
                            var cityOffset = cityObj.offset();
                            $("#menuContent").css({left:cityOffset.left + "px", top:cityOffset.top + cityObj.outerHeight() + "px"}).slideDown("fast");

                            $("body").bind("mousedown", onBodyDown);
                        }
                        function hideMenu() {
                            $("#menuContent").fadeOut("fast");
                            $("body").unbind("mousedown", onBodyDown);
                        }
                        function onBodyDown(event) {
                            if (!(event.target.id == "menuBtn" || event.target.id == "menuContent" || $(event.target).parents("#menuContent").length>0)) {
                                hideMenu();
                            }
                        }

                        vm.getHjjs=function(value){
                            if(value.theoryEndTime!=""){
                                var date1=Date.now();
                                var date2 = new Date(value.theoryEndTime.replace(/-/g,"/"));

                                var total=(date1-date2)/1000;

                                var isLeave=total>=0;

                                total=Math.abs(total);
                                var day = parseInt(total / (24*60*60));//计算整数天数
                                var afterDay = total - day*24*60*60;//取得算出天数后剩余的秒数
                                var hour = parseInt(afterDay/(60*60));//计算整数小时数
                                value.hjjs=(isLeave?"余":"超")+day+"天"+hour+"小时";
                            } else{
                                value.hjjs="不计时";
                            }
                        };

                        vm.search=function(key,state,administrative,businessType){
                            var data={key:key,state:state,administrative:administrative,businessType:businessType};
                            $http({
                                "url":'../angular/text/projectList.do',
                                "data":data,
                                "method":"post"
                            }).then(function(data){
                                var list=data.data.projectList;
                                var list1=[];
                                /*假过滤*/
                                $.each(list,function(n,value){
                                    vm.getHjjs(value);
                                    if(state=="所有状态"||value["state"]==state){
                                        if((administrative==""&&businessType=="")||value["administrative"]==administrative||value["businessType"]==businessType){
                                            list1.push(value);
                                        }
                                    }
                                });
                                var list2=[];
                                var ispush=false;
                                if(key!=undefined){
                                    $.each(list1,function(n,value){
                                        ispush=false;
                                        $.each(value,function(k,v){
                                           if(!ispush&& v.toString().indexOf(key)>=0){
                                               list2.push(value);
                                               ispush=true;
                                           }
                                        });

                                    });
                                    vm.projectList=list2;
                                }
                                else{
                                    vm.projectList=list1;
                                }
                                /*假过滤*/

                                //vm.displayPage();
                                //vm.projectList=data.data.projectList;

                                // $log.info("header list data:",data);
                            },function(status,data){ console.log(status,data); });
                        };

                        vm.search(undefined,scope.selectedState,vm.administrative,vm.businessType);

                        vm.setSelectedItem=function(index,item){
                            vm.selectedItem=index;
                            console.log("item click!");
                        };

                        vm.setSelectedItem(0);

                        vm.openItem=function(item){
                            console.log("item db-click!");
                        };

                        vm.toggleLove=function(item){
                            item.isLove=!item.isLove;
                            console.log(item);
                        };

                        vm.showSuperviseInfo=function(item){
                            console.log("show")  ;
                            console.log(item);
                        };

                        $(document).ready(function(){
                            $.fn.zTree.init($("#treeDemo"), setting, vm.zNodes);
                        });

                        /* page/
                        vm.currentPage=1;
                        vm.pageSize=2;
                        vm.prePage=function(){
                            vm.currentPage--;
                            vm.displayPage()
                        };
                        vm.postPage=function(){
                            vm.currentPage++;
                            vm.displayPage();
                        };
                        vm.displayPage=function(){
                            vm.totalItems=vm.projectList.length;
                            vm.page=vm.totalItems%vm.pageSize==0?vm.totalItems/vm.pageSize:Math.floor(vm.totalItems/vm.pageSize)+1;
                            vm.begin=(vm.currentPage-1)*vm.pageSize+1;
                            vm.end=vm.begin+vm.pageSize-1;
                            $("#projectList li").hide();
                            $("#projectList li").each(function(i){
                                if(i>=vm.begin&&i<=vm.end){

                                }
                            })
                        };

                        /* page*/

                    }
                };
            },
        };
    }
    distProjectListDir.$inject=['$http'];
    return distProjectListDir;
});