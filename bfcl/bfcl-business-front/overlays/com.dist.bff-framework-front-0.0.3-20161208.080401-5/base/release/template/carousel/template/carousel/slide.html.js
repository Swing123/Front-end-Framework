angular.module('template/carousel/template/carousel/slide.html', []).run(['$templateCache', function($templateCache) {
  $templateCache.put('template/carousel/template/carousel/slide.html',
    '<div ng-class="{\n' +
    '    \'wi-slide-active\': leaving || (active && !entering),\n' +
    '    \'wi-slide-prev\': (next || active) && direction==\'prev\',\n' +
    '    \'wi-slide-next\': (next || active) && direction==\'next\',\n' +
    '    \'wi-slide-right\': direction==\'prev\',\n' +
    '    \'wi-slide-left\': direction==\'next\'\n' +
    '  }" class="wi-slide" ng-transclude></div>\n' +
    '');
}]);
