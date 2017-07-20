angular.module('template/panel/template/panel/wi-panel.html', []).run(['$templateCache', function($templateCache) {
  $templateCache.put('template/panel/template/panel/wi-panel.html',
    '<div class="wi-panel" ng-class="{\'wi-panel-close\': !isOpen}"\n' +
    '     ng-style="{\'width\': width}">\n' +
    '    <div class="wi-panel-head" ng-click="collbyHead()">\n' +
    '        <div wi-panel-transclude="headingEl">\n' +
    '            <img ng-if="headicon" class="wi-panel-icon" ng-src="{{headicon}}" />\n' +
    '            {{heading}}\n' +
    '        </div>\n' +
    '        <div ng-if="headTools.visible" class="wi-panel-tools"><!--span首尾相连，避免换行产生空格-->\n' +
    '            <span ng-repeat="tool in headTools.custom track by tool.name"\n' +
    '                  ng-click="tool.opt($event)" class="{{tool.cls}}"></span\n' +
    '            ><span ng-if="headTools[\'collapse\']"\n' +
    '                  ng-click="collbyTool($event)"\n' +
    '                  ng-class="{\'icon-chevron-down\':collapsed, \'icon-chevron-up\':!collapsed}"></span\n' +
    '            ><span ng-if="headTools[\'close\']" class="icon-remove"\n' +
    '                  ng-click="closebyTool($event)"></span>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '    <div class="wi-panel-box" wi-collapse="collapsed" ng-transclude></div>\n' +
    '</div>');
}]);
