angular.module('template/tabset/template/tebset/tabTemplate.html', []).run(['$templateCache', function($templateCache) {
  $templateCache.put('template/tabset/template/tebset/tabTemplate.html',
    '<li class="wi-tab"\n' +
    '    ng-class="{\'wi-tab-active\': active, \'wi-tab-disabled\': disable, \'wi-tab-hasclose\': _closeable}"\n' +
    '    ng-click="select()">\n' +
    '    <span class="icon-remove" ng-click="close($event)"></span>\n' +
    '    <div class="wi-tabhead-cont" wi-tab-heading-transclude>\n' +
    '        <img class="wi-tab-icon" ng-src="{{data.icon}}" ng-if="data.icon"/>{{heading}}\n' +
    '    </div>\n' +
    '</li>');
}]);
