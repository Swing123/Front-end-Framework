angular.module('template/popupbutton/template/tree/treeTemplate.html', []).run(['$templateCache', function($templateCache) {
  $templateCache.put('template/popupbutton/template/tree/treeTemplate.html',
    '<ul style="padding-left: 0;margin-left: 0;">\n' +
    '    <li ng-repeat="data in vm._data | orderBy : vm._orderby" style="list-style:none;cursor: pointer;">\n' +
    '        <div ng-class="{\'selected\':data[\'isChecked\']&&!data[\'_semi\']}"\n' +
    '             ng-style="{\'padding-left\': 22*(data[\'_level\']+(data[\'children\']||data[vm._isbranch]?0:1))+\'px\'}">\n' +
    '            <span class="icon-{{data[\'_close\']?\'plus\':\'minus\'}}"\n' +
    '                  ng-if="data[\'children\']||data[vm._isbranch]"\n' +
    '                  ng-click="vm._toggleNode(data)"/>\n' +
    '            <span class="loading"\n' +
    '                  ng-if="data[\'_loading\']"/>\n' +
    '            <span class="icon-folder-{{data[\'_close\']?\'close\':\'open\'}}"\n' +
    '                  ng-if="(data[\'children\']||data[vm._isbranch]) && !data[\'_loading\']"\n' +
    '                  ng-click="vm._toggleNode(data)"/>\n' +
    '            <span class="icon-file"\n' +
    '                  ng-if="!data[\'children\']&&!data[vm._isbranch]"\n' +
    '                  ng-click="vm._itemClick(data)"/>\n' +
    '            <input type="checkbox"\n' +
    '                   ng-class="{\'transparent-50\':data[\'_semi\']}"\n' +
    '                   ng-if="multiselect"\n' +
    '                   ng-checked="data[\'isChecked\']"\n' +
    '                   ng-click="vm._itemClick(data)"/>\n' +
    '            <span ng-click="vm._itemClick(data)"\n' +
    '                  ng-dblclick="vm._itemDblClick(data)">\n' +
    '                {{data[vm._labelfield]}}\n' +
    '            </span>\n' +
    '            <span ng-if="itemrenderer"\n' +
    '                  ng-include src="itemrenderer"\n' +
    '                  ng-click="vm._itemClick(data)"/>\n' +
    '        </div>\n' +
    '\n' +
    '        <wi-tree ng-if="!data[\'_close\'] && data[\'children\']"\n' +
    '                 recursion="true"\n' +
    '                 dataProvider="data[\'children\']"\n' +
    '                 idField="{{vm._idfield}}"\n' +
    '                 pidField="{{vm._pidfield}}"\n' +
    '                 labelField="{{vm._labelfield}}"\n' +
    '                 multiSelect="{{multiselect}}"\n' +
    '                 itemClick="itemclick()"\n' +
    '                 itemOpen="itemopen()"\n' +
    '                 itemRenderer="{{itemrenderer}}"\n' +
    '                 filterBy="filterby"\n' +
    '                 orderBy="{{vm._orderby}}">\n' +
    '        </wi-tree>\n' +
    '    </li>\n' +
    '</ul>\n' +
    '');
}]);
