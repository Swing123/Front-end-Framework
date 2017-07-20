angular.module('template/imageview/template/imageview/imageviewTemplate.html', []).run(['$templateCache', function($templateCache) {
  $templateCache.put('template/imageview/template/imageview/imageviewTemplate.html',
    '<div class="wi-imageview" ng-style="{\'display\':isopen?\'block\':\'none\'}">\n' +
    '    <div class="wi-imageview-picbox" ng-style="{\'top\':top,\'left\':left}">\n' +
    '        <div class="wi-imageview-pic" ng-style="{\'width\':+_width+\'px\',\'height\':+_height+\'px\'}"  ng-class="img_exclass" ng-mouseenter="mouseenter()" ng-mouseleave="mouseleave()" ng-mousedown="mousedown($event)"></div>\n' +
    '        <div class="wi-imageview-ctrl wi-imageview-ctrl-prev" ng-click="previous()" title="上一张" ng-if="_show_previous"></div>\n' +
    '        <div class="wi-imageview-ctrl wi-imageview-ctrl-next" ng-click="next()" title="下一张" ng-if="_show_next"></div>\n' +
    '        <div class="wi-imageview-toolbar wi-unselectable">\n' +
    '            <a class="wi-imageview-zoomout" ng-click="zoomout()" title="放大"></a>\n' +
    '            <a class="wi-imageview-zoomin" ng-click="zoomin()" title="缩小"></a>\n' +
    '            <a class="wi-imageview-reset" ng-click="reset()" title="重置"></a>\n' +
    '            <a class="wi-imageview-toleft" ng-click="toright()" title="逆时针旋转"></a>\n' +
    '            <a class="wi-imageview-toright" ng-click="toleft()" title="顺时针旋转"></a>\n' +
    '            <a class="wi-imageview-save" style="text-decoration:none;" href="{{img_src}}" title="本地保存" ng-if="_show_save"></a>\n' +
    '            <a class="wi-imageview-full" ng-click="full()" title="全屏" ng-if="!isfull"></a>\n' +
    '            <a class="wi-imageview-origin" ng-click="origin()" title="退出全屏" ng-if="isfull"></a>\n' +
    '        </div>\n' +
    '        <div class="wi-imageview-close" ng-click="close()"></div>\n' +
    '    </div>\n' +
    '</div>\n' +
    '\n' +
    '\n' +
    '');
}]);
