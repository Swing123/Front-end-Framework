angular.module('template/searchinput/template/searchinput/wi-searchinput.html', []).run(['$templateCache', function($templateCache) {
  $templateCache.put('template/searchinput/template/searchinput/wi-searchinput.html',
    '<span class="wi-searchinput">\n' +
    '    <input type="text" ng-model="value" placeholder="{{tips}}" />\n' +
    '    <span class="icon-search" ng-click="search()"></span>\n' +
    '</span>\n' +
    '');
}]);
