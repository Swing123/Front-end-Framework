angular.module('template/menu/template/menu/wi-menu.html', []).run(['$templateCache', function($templateCache) {
  $templateCache.put('template/menu/template/menu/wi-menu.html',
    '<div class="wi-menu" ng-class="{\'wi-menu-open\': isOpen, \'wi-menu-root\': menutype != \'sub\'}">\n' +
    '    <div class="wi-menu-toolbar wi-clearf" ng-style="{display: conf.filterable || groupsBackward.length || groupsForward.length ? \'block\':\'none\'}">\n' +
    '        <span class="wi-menu-backward" ng-class="{\'wi-menu-page\': groupsBackward.length}" ng-click="backwardClick($event)">\n' +
    '            <span class="icon-arrow-left"></span></span>\n' +
    '        <input type="text" class="wi-menu-filter" ng-style="{display: conf.filterable ? \'inline-block\' : \'none\'}" ng-model="filterval" onclick="event.stopPropagation()" placeholder="检索关键字" />\n' +
    '        <span class="wi-menu-forward" ng-class="{\'wi-menu-page\': groupsForward.length}" ng-click="forwardClick($event)">\n' +
    '            <span class="icon-arrow-right"></span></span>\n' +
    '    </div>\n' +
    '    <ul ng-repeat="data in datagroups">\n' +
    '        <li ng-repeat="item in data"\n' +
    '            ng-class="{\'wi-menu-children\': item.children, \'wi-menu-disabled\': item.enabled == false, \'wi-menu-highlight\': item.highlight, \'wi-menu-item-open\': item.childopen}"\n' +
    '            ng-mouseenter="mouseenter(item)" ng-mouseleave="mouseleave(item)" ng-click="clickLi($event, item)">\n' +
    '            <img ng-if="item.icon" class="wi-menu-icon" ng-src="{{item.icon}}" />\n' +
    '            <span class="wi-menu-content">{{item.label}}</span>\n' +
    '            <wi-menu ng-if="item.children"\n' +
    '                     adaptable="true"\n' +
    '                     position="right-top"\n' +
    '                     filterable="{{item.filterable}}"\n' +
    '                     dataprovider="item.children"\n' +
    '                     is-open="{{item.childopen}}">\n' +
    '            </wi-menu>\n' +
    '        </li>\n' +
    '    </ul>\n' +
    '</div>');
}]);
