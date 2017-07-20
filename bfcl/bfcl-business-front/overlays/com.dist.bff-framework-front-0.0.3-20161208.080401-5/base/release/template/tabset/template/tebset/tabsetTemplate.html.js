angular.module('template/tabset/template/tebset/tabsetTemplate.html', []).run(['$templateCache', function($templateCache) {
  $templateCache.put('template/tabset/template/tebset/tabsetTemplate.html',
    '<div ng-style="{\'width\': conf.width,\'height\': conf.height}" class="wi-tabset"\n' +
    '     ng-class="{\'h\':\'wi-tabset-h\',\'v\':\'wi-tabset-v wi-clearf\',\'vh\':\'wi-tabset-vh wi-clearf\'}[conf.vertical?conf.height?\'vh\':\'v\':\'h\']">\n' +
    '    <div class="wi-tabhead"\n' +
    '         ng-style="{\'height\':!conf.vertical?conf.tabheadsize+\'px\':\'\',\'line-height\': !conf.vertical?conf.tabheadsize+\'px\':\'\',\n' +
    '            \'width\': conf.vertical?conf.tabheadsize+\'px\':\'\'}">\n' +
    '        <span ng-if="scrollable" ng-click="backward()" class="wi-unselectable wi-tabctrl-ver icon-chevron-up"></span><!-- 横向超出才显示 -->\n' +
    '        <span ng-if="scrollable" ng-click="forward()" class="wi-unselectable wi-tabctrl-ver icon-chevron-down"></span>\n' +
    '        <span ng-if="scrollable" ng-click="backward()" class="wi-unselectable wi-tabctrl-hor icon-chevron-left"></span><!-- 纵向超出才显示 -->\n' +
    '        <span ng-if="scrollable" ng-click="forward()" class="wi-unselectable wi-tabctrl-hor icon-chevron-right"></span>\n' +
    '        <div class="wi-tabstage">\n' +
    '            <ul ng-class="{true:\'wi-tabul-ver\',false:\'wi-tabul-hor wi-clearf\'}[conf.vertical]"\n' +
    '                ng-style="ulStyle" style="overflow: visible;"\n' +
    '                ng-transclude></ul>\n' +
    '            <wi-menu ng-show="conf.enablerightmenu" wi-right-menu dataprovider="menudata" onselect="rightmenuselect"></wi-menu>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '    <div class="wi-tabcont"\n' +
    '         ng-style="{\'height\':(conf.height&&!conf.vertical)?\'calc(100% - \'+conf.tabheadsize+\'px )\':\'\',\'margin-left\':conf.vertical?conf.tabheadsize+\'px\':\'\'}">\n' +
    '        <div ng-repeat="tab in tabs"\n' +
    '             class="wi-tabpane"\n' +
    '             ng-show="tab.active"\n' +
    '             ng-style = "{\'height\':(conf.height||conf.vertical)?\'100%\':\'\'}"\n' +
    '             wi-tab-content-transclude="tab">\n' +
    '            <div ng-if="tab.data.src"  ng-include="tab.data.src"></div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>\n' +
    '');
}]);
