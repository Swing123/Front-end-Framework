angular.module('template/combobox/template/combobox/comboboxTemplate.html', []).run(['$templateCache', function($templateCache) {
  $templateCache.put('template/combobox/template/combobox/comboboxTemplate.html',
    '<div class="wi-popup wi-combobox"\n' +
    '     ng-keydown="vm.keydownHandler($event)"\n' +
    '     ng-click="vm.clickHandler($event)"\n' +
    '     is-open="vm.isopen" ng-disabled="vm.enable">\n' +
    '    <div class="wi-popup-menu wi-combobox-menu">\n' +
    '        <ul>\n' +
    '            <li ng-repeat="data in vm.dataprovider"\n' +
    '                ng-class="{\'wi-combobox-selected\':($index===vm.selectedindex&&!data[\'isGroup\']) || data[\'_checked\'],\'wi-combobox-option\':!data[\'isGroup\']}"\n' +
    '                ng-click="vm.itemClickHandler(data,$event)"\n' +
    '                ng-style="{\'padding-left\': (groupfield&&!data[\'isGroup\']?15 : 5)+\'px\',\'font-weight\':data[\'isGroup\']?\'bold\':\'normal\'}">\n' +
    '                <input ng-if="multiselect" class="wi-checkbox" type="checkbox" ng-click="checkAll()" ng-checked="data[\'_checked\']" />\n' +
    '                {{data[vm.labelfield]}}\n' +
    '            </li>\n' +
    '        </ul>\n' +
    '    </div>\n' +
    '    <input type="text" ng-model="vm._text" ng-change="vm.inputChange()" ng-disabled="vm.enable"/>\n' +
    '    <span class="icon-chevron-down"></span>\n' +
    '</div>');
}]);
