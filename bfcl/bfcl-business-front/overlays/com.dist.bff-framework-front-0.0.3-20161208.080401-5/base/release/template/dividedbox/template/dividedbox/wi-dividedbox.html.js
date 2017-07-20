angular.module('template/dividedbox/template/dividedbox/wi-dividedbox.html', []).run(['$templateCache', function($templateCache) {
  $templateCache.put('template/dividedbox/template/dividedbox/wi-dividedbox.html',
    '<div class="wi-dividedbox wi-clearf"\n' +
    '     ng-class="{\'wi-unselectable\':resizeConf.resizing,\'wi-dividedbox-resizing\':resizeConf.resizing,\'wi-dividedbox-resizable\': resizeConf.resizable}" ng-transclude>\n' +
    '</div>');
}]);
