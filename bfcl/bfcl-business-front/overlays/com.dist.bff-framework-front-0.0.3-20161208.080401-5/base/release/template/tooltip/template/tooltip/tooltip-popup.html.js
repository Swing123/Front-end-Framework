angular.module('template/tooltip/template/tooltip/tooltip-popup.html', []).run(['$templateCache', function($templateCache) {
  $templateCache.put('template/tooltip/template/tooltip/tooltip-popup.html',
    '<div class="wi-tooltip {{\'wi-tooltip-\' + placement}}" ng-class="{ \'wi-tooltip-in\': isOpen(),\'wi-fade\': animation() }">\n' +
    '  <div class="tooltip-inner" ng-bind="content"></div>\n' +
    '</div>\n' +
    '');
}]);
