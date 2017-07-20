/**
 * Created by Swing on 2016/12/2 .
 */
define([
    'angular',
    'business/carousel/carousel.distCarouselDir'
],function(angular,distCarouselDir){
    'use strict';
    var distComCarousel=angular.module('dist.com.carousel',[

    ]);
    distComCarousel.directive('distCarousel',distCarouselDir);
    return distComCarousel;
});