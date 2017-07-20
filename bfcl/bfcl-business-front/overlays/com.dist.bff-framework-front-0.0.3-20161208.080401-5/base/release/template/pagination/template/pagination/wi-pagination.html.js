angular.module('template/pagination/template/pagination/wi-pagination.html', []).run(['$templateCache', function($templateCache) {
  $templateCache.put('template/pagination/template/pagination/wi-pagination.html',
    '<li ng-if="::boundaryLinks" ng-class="{disabled: noPrevious()||ngDisabled}" class="pagination-first">\n' +
    '   <a href ng-click="selectPage(1, $event)" ng-disabled="noPrevious()||ngDisabled" uib-tabindex-toggle>{{::getText(\'first\')}}</a>\n' +
    '</li>\n' +
    '\n' +
    ' <li ng-if="::directionLinks" ng-class="{disabled: noPrevious()||ngDisabled}" class="pagination-prev">\n' +
    '   <a href ng-click="selectPage(page - 1, $event)" ng-disabled="noPrevious()||ngDisabled" uib-tabindex-toggle>{{::getText(\'previous\')}}</a>\n' +
    ' </li>\n' +
    ' \n' +
    ' <li ng-repeat="page in pages track by $index" ng-class="{active: page.active,disabled: ngDisabled&&!page.active}" class="pagination-page">\n' +
    '   <a href ng-click="selectPage(page.number, $event)" ng-disabled="ngDisabled&&!page.active" uib-tabindex-toggle>{{page.text}}</a>\n' +
    ' </li>\n' +
    ' \n' +
    ' <li ng-if="::directionLinks" ng-class="{disabled: noNext()||ngDisabled}" class="pagination-next">\n' +
    '   <a href ng-click="selectPage(page + 1, $event)" ng-disabled="noNext()||ngDisabled" uib-tabindex-toggle>{{::getText(\'next\')}}</a>\n' +
    ' </li>\n' +
    ' \n' +
    ' <li ng-if="::boundaryLinks" ng-class="{disabled: noNext()||ngDisabled}" class="pagination-last">\n' +
    '    <a href ng-click="selectPage(totalPages, $event)" ng-disabled="noNext()||ngDisabled" uib-tabindex-toggle>{{::getText(\'last\')}}</a>\n' +
    '</li>');
}]);
