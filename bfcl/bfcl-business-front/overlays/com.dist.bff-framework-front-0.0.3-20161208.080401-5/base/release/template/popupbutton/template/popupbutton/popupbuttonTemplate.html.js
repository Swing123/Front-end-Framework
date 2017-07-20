angular.module('template/popupbutton/template/popupbutton/popupbuttonTemplate.html', []).run(['$templateCache', function($templateCache) {
  $templateCache.put('template/popupbutton/template/popupbutton/popupbuttonTemplate.html',
    '<div class="wi-popup wi-popupbutton"\n' +
    '     is-open="isopen">\n' +
    '    <div class="wi-popup-menu wi-popupbutton-menu" ng-transclude></div>\n' +
    '    <input class="wi-btn wi-popupbutton-content" type="button" value="{{label}}"/>\n' +
    '    <button class="wi-btn wi-popupbutton-arrow"><span class="icon-chevron-down"></span></button>\n' +
    '</div>');
}]);
