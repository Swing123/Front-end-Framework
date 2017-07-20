angular.module('template/carousel/template/carousel/carousel.html', []).run(['$templateCache', function($templateCache) {
  $templateCache.put('template/carousel/template/carousel/carousel.html',
    '<div ng-mouseenter="pause()" ng-mouseleave="play()" class="wi-carousel" ng-swipe-right="prev()" ng-swipe-left="next()">\n' +
    '    <ul class="wi-carousel-ul" ng-show="slides.length > 1">\n' +
    '        <li ng-repeat="slide in slides track by $index" ng-class="{\'wi-carousel-active\': isActive(slide)}" ng-click="select(slide)"></li>\n' +
    '    </ul>\n' +
    '    <div class="wi-carousel-inner" ng-transclude></div>\n' +
    '    <a class="wi-carousel-ctrl wi-carousel-ctrl-left" ng-click="prev()" ng-show="slides.length > 1"><span class="icon-chevron-left"></span></a>\n' +
    '    <a class="wi-carousel-ctrl wi-carousel-ctrl-right" ng-click="next()" ng-show="slides.length > 1"><span class="icon-chevron-right"></span></a>\n' +
    '</div>\n' +
    '');
}]);
