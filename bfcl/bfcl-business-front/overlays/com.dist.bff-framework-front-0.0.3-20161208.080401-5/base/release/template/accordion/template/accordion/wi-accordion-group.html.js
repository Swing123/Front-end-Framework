angular.module('template/accordion/template/accordion/wi-accordion-group.html', []).run(['$templateCache', function($templateCache) {
  $templateCache.put('template/accordion/template/accordion/wi-accordion-group.html',
    '<div class="wi-accordion-group" ng-class="{\'open\': isOpen}">\n' +
    '  <div class="wi-accordion-head"  ng-click="toggleOpen()" ng-class="{\'wi-accordion-disabled\': isDisabled}"\n' +
    '       ng-style="{\'height\': style.headheight, \'line-height\': style.headheight}"\n' +
    '       wi-accordion-transclude="heading">{{heading}}</div>\n' +
    '  <div class="wi-accordion-panel" wi-collapse="!isOpen">\n' +
    '      <div class="wi-accordion-cont" ng-style="{\'height\':panelStyle.cheight}" ng-transclude></div>\n' +
    '  </div>\n' +
    '</div>');
}]);
