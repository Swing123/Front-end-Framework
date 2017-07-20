angular.module('template/dividedbox/template/dividedbox/wi-dividedbox-group.html', []).run(['$templateCache', function($templateCache) {
  $templateCache.put('template/dividedbox/template/dividedbox/wi-dividedbox-group.html',
    '<div class="wi-dividedbox-group"\n' +
    '     ng-style="{ width:dividedboxG.type==\'h\'?\'calc(\'+ dividedboxG.size +\' + \'+ dividedboxG.resize +\'px)\':\'\',\n' +
    '        height:dividedboxG.type==\'v\'?\'calc(\'+dividedboxG.size+\' + \'+dividedboxG.resize+\'px)\':\'\'}">\n' +
    '    <div class="wi-dividedbox-head wi-clearf" ng-class="{\'wi-dividedbox-colled\':dividedboxG.collapsed}">\n' +
    '        <span class="wi-dividedbox-title">\n' +
    '            <img class="wi-dividedbox-icon" ng-if="dividedboxG.icon" ng-src="{{dividedboxG.icon}}" />\n' +
    '            {{dividedboxG.title}}\n' +
    '        </span>\n' +
    '        <div ng-class="\'wi-display-none wi-dividedbox-collctrl-\'+dividedboxG.collapseto" ng-click="doCollapse()"></div>\n' +
    '    </div>\n' +
    '    <div class="wi-dividedbox-cont" ng-transclude></div>\n' +
    '    <div class="wi-dividedbox-bar" ng-mousedown="startResize()"></div>\n' +
    '</div>');
}]);
