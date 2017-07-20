angular.module('template/tooltip/template/tooltip/tooltip-html-unsafe-popup.html', []).run(['$templateCache', function($templateCache) {
  $templateCache.put('template/tooltip/template/tooltip/tooltip-html-unsafe-popup.html',
    '<div class="wi-tooltip {{\'wi-tooltip-\' + placement}}" ng-class="{ \'wi-tooltip-in\': isOpen() }">\n' +
    '  <div class="tooltip-inner" bind-html-unsafe="content"></div>\n' +
    '</div>\n' +
    '');
}]);
