angular.module('template/camerascanner/template/camerascanner/camerascannerTemplate.html', []).run(['$templateCache', function($templateCache) {
  $templateCache.put('template/camerascanner/template/camerascanner/camerascannerTemplate.html',
    '<div>\n' +
    '    <div>\n' +
    '        <a href="javascript:void(0);" class="wi-btn icon-picture" ng-click="open()">\n' +
    '            <span ng-transclude></span>\n' +
    '        </a>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="wi-camerascanner wi-camerascanner-hide">\n' +
    '\n' +
    '        <div class="wi-camerascanner-main wi-clearf" style="width: 792px;height: 592px;">\n' +
    '            <div class="wi-dialog-head">\n' +
    '                拍照上传\n' +
    '                <span style="margin-left: 130px; visibility: hidden;" class="wi-camerascanner-head-select">\n' +
    '                    请选择视频设备:\n' +
    '                </span>\n' +
    '                <span class="wi-dialog-close icon-remove" ng-click="close()"></span>\n' +
    '            </div>\n' +
    '            <div class="wi-camerascanner-opt">\n' +
    '                <object id="XwebcamXobjectX"\n' +
    '                        type="application/x-shockwave-flash"\n' +
    '                        data="demo/camerascanner/docs/jscam.swf"\n' +
    '                        width="500"\n' +
    '                        height="500">\n' +
    '                    <param name="movie" value="demo/camerascanner/docs/jscam.swf" />\n' +
    '                    <param name="FlashVars" value="cw=1200&ch=1600&vw=375&vh=500" />\n' +
    '                    <param name="allowScriptAccess" value="always" />\n' +
    '                    <param name="bgcolor" value="#FFFFCC" />\n' +
    '                    <!--<param name="wmode" value="Opaque">-->\n' +
    '                </object>\n' +
    '                <div class="wi-camerascanner-toolbar">\n' +
    '                    <a ng-click="rotate(-90)" href="javascript:void(0);" class="wi-camerascanner-left" title="逆时针旋转"></a>\n' +
    '                    <a ng-click="rotate(90)" href="javascript:void(0);" class="wi-camerascanner-right" title="顺时针旋转"></a>\n' +
    '                    <a ng-click="resetCut()" href="javascript:void(0);" class="wi-camerascanner-reset" title="重新裁剪"></a>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '\n' +
    '            <div class="wi-camerascanner-list" style="width: 260px; height:465px;">\n' +
    '            </div>\n' +
    '\n' +
    '            <div class="wi-camerascanner-qulitity">\n' +
    '                图片质量:\n' +
    '                <select ng-model="camResolution" ng-change="resolution()">\n' +
    '                    <option value ="1200*1600">1200*1600(约1.92MB)</option>\n' +
    '                    <option value ="960*1280">960*1280(约1.23MB)</option>\n' +
    '                    <option value ="600*800">600*800(约480KB)</option>\n' +
    '                </select>\n' +
    '            </div>\n' +
    '            <div class="wi-camerascanner-btns">\n' +
    '                <a class="wi-camerascanner-btn" href="javascript:void(0);">拍照</a>\n' +
    '                <a class="wi-btn" href="javascript:void(0);" ng-click="upload()">上传</a>\n' +
    '            </div>\n' +
    '\n' +
    '        </div>\n' +
    '\n' +
    '        <wi-imageview width="800" height="600" adaptive="true" imagedata="imagedata" previous="previous()" next="next()" close="viewClose()"></wi-imageview>\n' +
    '\n' +
    '        <script type="text/ng-template" id="cameraScannerConfirm">\n' +
    '            <div>\n' +
    '                <div style="margin: 20px 30px;">\n' +
    '                    文件名：<input ng-model="filename"/><br>\n' +
    '                </div>\n' +
    '                <div class="wi-alert-toolbar">\n' +
    '                    <button class="wi-btn"  ng-click="closeThisDialog()">取消</button>\n' +
    '                    <button class="wi-btn"  ng-click="confirm(filename)">确认</button>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </script>\n' +
    '\n' +
    '    </div>\n' +
    '\n' +
    '</div>\n' +
    '');
}]);
