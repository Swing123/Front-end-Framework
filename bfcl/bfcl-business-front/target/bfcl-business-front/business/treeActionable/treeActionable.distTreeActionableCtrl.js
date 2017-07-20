/**
 * Created by wanghy on 2016/11/24.
 */

//todo 根据文件类型现实不同图标
//todo 写filter对目录排序
//todo 上传文件 上传文件进度展示 下载文件
define([], function () {
    'use strict';
    function distTreeActionableCtrl($scope, $timeout, wiAlert, wiDialog) {
        $scope.isLeaf = function (item) {
            return !item.children;
        };

        //收缩展开列表
        $scope.expendItem = function (item, $event) {
            console.log('expend item');
            item.$$isExpend = !item.$$isExpend;
            $event.stopPropagation();
        };

        //添加目录按钮点击事件
        $scope.treeFolderAdd = function (item, $event) {

            $scope.dialogFolderAdd.open(item);

            $event.stopPropagation();
        };

        //递归寻找目录 删除
        function deleteFolder(item, treeData) {
            if (treeData.children) {
                for (var i = treeData.children.length -1; i >= 0; i--) {
                    if (item.id == treeData.children[i].id) {
                        treeData.children.splice(i, 1);
                        break;
                    }
                }
                deleteFolder(item, treeData.children);
            }
        }
        
        //递归寻找文件 删除
        function deleteFile(item, treeData, upperItem, index) {
            if (treeData.children) {
                for (var i = treeData.children.length -1; i >= 0; i--) {
                    deleteFile(item, treeData.children[i], treeData, i);
                }
            } else {
                if (item.id == treeData.id) {
                    upperItem.children.splice(index, 1);
                    return;
                }
            }
        }

        //删除目录按钮点击事件
        $scope.treeFolderDelete = function (item, $event) {
            wiAlert.confirm("确认要删除该目录及其子项？")
                .yes(function(){
                    //todo 服务器交互

                    //本地删除
                    deleteFolder(item, $scope.treeData);
                })
                .no(function(){
                });
            $event.stopPropagation();
        };

        //删除文件按钮点击事件
        $scope.treeFileDelete = function (item, $event) {
            wiAlert.confirm("确认要删除该文件？")
                .yes(function(){
                    //todo 服务器交互

                    //本地删除
                    deleteFile(item, $scope.treeData);
                })
                .no(function(){
                });
            $event.stopPropagation();
        };

        var AjaxForm = function(cfg){
            if (!window.FormData){
                alert("Sorry, your browser doesn't support FormData!");
            }

            /**
             * null or undefined 返回true, 否则false
             */
            this.isNullOrUndefined = function(v, errMsg){
                if (!v){
                    alert(errMsg);
                    return true;
                }
                return false;
            };

            var cfg = cfg || {};
            if (this.isNullOrUndefined(cfg.id, "id can't be empty")) return;
            if (this.isNullOrUndefined(cfg.url, "url can't be empty")) return;

            this.id = cfg.id; // 表单id
            this.method = cfg.method || "POST"; //默认POST方法
            this.url = cfg.url;
            this.async = !cfg.sync; //同步否
            this.resultType = cfg.resultType || "text"; //返回结果类型 json对象或text
            this.formData = new FormData(document.getElementById(this.id)); //form数据
            this.xhr = new XMLHttpRequest(); //当前请求对象

            /**
             * 超时事件
             * 配置格式：
             *   timeout : xxx,
             *   onTimeout: function(event){}
             */
            if (cfg.timeout){
                this.xhr.timeout = cfg.timeout;
                this.xhr.ontimeout = cfg.onTimeout;
            }

            /**
             * 发送过程事件
             * 配置格式:
             * onProgress: function(loaded, total){}
             */
            if (cfg.onProgress){ //发送数据过程
                this.xhr.upload.onprogress = function(e){
                    if (e.lengthComputable) {
                        cfg.onProgress(e.loaded, e.total);
                    }
                };
            }

            /**
             * 上传完成事件
             */
            if (cfg.onComplete){
                this.xhr.onload = function(event){
                    var res = event.target.responseText;
                    if (this.resultType === 'json'){
                        if ((typeof JSON) === 'undefine'){
                            res = eval("("+res+")");
                        } else{
                            res = JSON.parse(res);
                        }
                    }
                    cfg.onComplete(res);
                };
            }

            /**
             * 发出请求
             */
            this.request = function(){
                this.xhr.open(this.method, this.url, this.async);
                this.xhr.send(this.formData);
            };
        };

        //上传文件按钮点击事件
        $scope.treeFileAdd = function (item, $event) {
            $timeout(function () {
                $scope.currentItem = item;
                $scope.uploadFile.input.click();

                $scope.uploadFiles = '';

                var watch = $scope.$watch('uploadFiles',function(newValue, oldValue, scope){

                    if (newValue != oldValue) {
                        $scope.uploadFileSubmit();
                    }

                });
            });

        };
        //todo 因没有实际服务器，所以未测试
        $scope.uploadFileSubmit = function () {
            var fileList = $scope.uploadFile.input.files;
            var length =fileList.length;
            for (var i = 0; i < length; i++) {
                var formData = new FormData();
                //添加其他表单域
                formData.append('file', fileList[i]);
                // formData.append('pass', '111111');
                var af = new AjaxForm({
                    id: "uploadForm",
                    url: 'upload',
                    method: 'POST',
                    timeout: 5000,
                    onTimeout: function(event){
                        alert('It is timeout.');
                    },
                    onProgress: function(loaded, total){
                        var complete = (loaded / total * 100 | 0);
                        $scope.uploadFileForm.fileList[i].progressLabel = complete;
                        $scope.uploadFileForm.fileList[i].progressValue = complete;

                    },
                    onComplete: function(result){
                        alert(result);
                    }
                });
                af.request();
            }



            $scope.uploadFileForm.fileList = fileList;

        };

        //添加目录对话框
        $scope.dialogFolderAdd = {
            "isDialogFolderAddShow": false,
            "clear": function () {
                var _self = this;
                _self.currentItem = null;
                _self.name = null;
                _self.materialCount = null;
                _self.order = null;
                _self.remark = null;
            },
            "close": function () {
                var _self = this;
                _self.clear();
                _self.isDialogFolderAddShow = false;
            },
            "open": function (item) {
                var _self = this;
                _self.currentItem = item;
                _self.isDialogFolderAddShow = true;
            },
            "submit": function () {
                var _self = this;
                //todo 请求服务器

                //服务器请求成功，添加节点
                var data = {};
                data.name = _self.name;
                data.materialCount = _self.materialCount;
                data.order = _self.order;
                data.remark = _self.remark;
                data.children = [];

                _self.currentItem.children.push(data);

                _self.close();

            }
        };
    }

    distTreeActionableCtrl.$inject=['$scope', '$timeout', 'wiAlert', 'wiDialog'];
    return distTreeActionableCtrl;
});