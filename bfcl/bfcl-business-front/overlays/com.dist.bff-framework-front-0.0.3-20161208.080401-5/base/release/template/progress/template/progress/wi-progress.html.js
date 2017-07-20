angular.module('template/progress/template/progress/wi-progress.html', []).run(['$templateCache', function($templateCache) {
  $templateCache.put('template/progress/template/progress/wi-progress.html',
    '<div class="wi-progress">\n' +
    '    <span class="wi-progress-bar" ng-style="{\'width\': width}">\n' +
    '        <div class="wi-progress-value" ng-style="{\'width\': percent + \'%\'}"></div>\n' +
    '        <div class="wi-progress-remain"></div>\n' +
    '    </span>\n' +
    '</div>');
}]);
