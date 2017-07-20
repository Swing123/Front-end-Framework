angular.module('template/tilelist/template/tilelist/tilelistTemplate.html', []).run(['$templateCache', function($templateCache) {
  $templateCache.put('template/tilelist/template/tilelist/tilelistTemplate.html',
    '<div class="wi-titlelist">\n' +
    '    <table class="wi-titlelist-table" cellspacing="0" cellpadding="0" ng-style="{\'width\': tableW,\'height\': tableH}">\n' +
    '        <tr ng-repeat="rowItem in dataTable">\n' +
    '            <td class="wi-titlelist-td" ng-repeat="data in rowItem track by $index" ng-style="{\'width\': colW,\'height\': rowH}">\n' +
    '                <div class="wi-titlelist-cont" ng-if="itemrender" ng-include src="itemrender"></div>\n' +
    '            </td>\n' +
    '        </tr>\n' +
    '    </table>\n' +
    '</div>\n' +
    '');
}]);
