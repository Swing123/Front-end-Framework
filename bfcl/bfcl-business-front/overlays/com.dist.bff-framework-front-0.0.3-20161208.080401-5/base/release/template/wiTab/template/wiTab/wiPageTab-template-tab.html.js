angular.module('template/wiTab/template/wiTab/wiPageTab-template-tab.html', []).run(['$templateCache', function($templateCache) {
  $templateCache.put('template/wiTab/template/wiTab/wiPageTab-template-tab.html',
    '<div class="nav-tabs-alt">\n' +
    '    <ul class="nav nav-tabs">\n' +
    '		<li ng-repeat="list in tabConfig.lists track by $index" ng-class="{\'active\':$index==currentTab}">\n' +
    '			<a href ng-click="tab(list,$index)">{{list.name}}</a>\n' +
    '		</li>\n' +
    '    </ul>\n' +
    '</div>');
}]);
