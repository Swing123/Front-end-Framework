/**
 * Created by Swing on 2016/11/15 .
 */
define([

],function(){
    'use strict';
    function comButtonController($scope,$http,$log){
        var vm=$scope.vm={};
        vm.conf={
            buttonLists:[
                {"icon":"fa fa-save pull-left","name":"材料清单","id":"button_0001","permission":"","style":"btn btn-default"},
                {"icon":"fa fa-send pull-left","name":"发送","id":"button_0001","permission":"","style":"btn btn-default"},
                {"icon":"fa fa-reply pull-left","name":"回复","id":"button_0001","permission":"","style":"btn btn-default"},
                {"icon":"fa fa-file-text-o pull-left","name":"材料办理","id":"button_0001","permission":"","style":"btn btn-default"},
                {"icon":"fa fa-edit pull-left","name":"红线绘制","id":"button_0001","permission":"","style":"btn btn-default"},
                {"icon":"fa fa-list-alt pull-left","name":"项目日志","id":"button_0001","permission":"","style":"btn btn-default"},
                {"icon":"fa fa-save pull-left","name":"保存","id":"button_0001","permission":"","style":"btn btn-default"}
            ]
        }
        $scope.singleClick=function(list){
            console.info(list);
        };
        $scope.doubleClick=function(list){
            console.info(list);
        };


        /*
         * 将javascript 面向对象的实现
         * */

        function ParentObject(name,id){
            var $this=this;
            $this._privateName={};
            $this.name=name||'';
            $this.id=id||'';
            $this.roles=['Bob','simy','sunnny'];
        }
        ParentObject.prototype.getName=function(){
            return this.name;
        };
        ParentObject.prototype.getId=function(){
            return this.id;
        };
        ParentObject.prototype.setRoles=function(addItem){
            this.roles.push(addItem);
        };
        ParentObject.prototype.protoRoles=['protoName','protoId'];//注意：引用类的原型数据是会共享的,可以用于各个实例之间共享数据

        function SubObject(name,id){
            var $this=this;
            ParentObject.apply($this,[name,id]);
            $this.name=name+' changed';
            $this.colors=['red','blue','green'];
        }

        SubObject.prototype=new ParentObject();
        SubObject.prototype.addColors=function(color){
            this.colors.push(color);
        };

        /*构造函数实例化*/

        var instance1=new SubObject('instance1','instance1_0001'),
            instance2=new SubObject('instance2','instance2_0002');
        instance1.setRoles('wanggb');
        instance2.setRoles('chenzong');
        instance1.protoRoles.push("instance1_prototype");


       /* console.info(instance1.getName(),instance2.getName());//instance1 changed instance2 changed
        console.info(instance1.getId(),instance2.getId());//instance1_0001 instance2_0002
        console.info(instance1.roles,instance2.roles);//["Bob", "simy", "sunnny", "wanggb"] ["Bob", "simy", "sunnny", "chenzong"]
        console.info(instance1.protoRoles,instance2.protoRoles);//["protoName", "protoId", "instance1_prototype"] ["protoName", "protoId", "instance1_prototype"]
*/
        $scope.myInterval = 2000;
        var slides = $scope.slides = [];
        $scope.addSlide = function() {
            var index = 1 + slides.length%5;
            slides.push({
                image: 'AppCenter/componentsTest/images/carousel/carousel' + index + '.jpg',
                text: ['More','Extra','Lots of','Surplus'][slides.length % 4] + ' ' +
                ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
            });
        };
        for (var i=0; i<4; i++) {
            $scope.addSlide();
        }

    }
    comButtonController.$inject=["$scope","$http","$log"];
    return comButtonController;
});

