angular.module('template/tree/template/tree/treeTemplate.html', []).run(['$templateCache', function($templateCache) {
  $templateCache.put('template/tree/template/tree/treeTemplate.html',
    '<ul class="wi-tree">\n' +
    '    <li ng-repeat="data in vm._data | orderBy : conf.orderby">\n' +
    '        <div class="wi-tree-item" ng-class="{\'wi-tree-current\':data[\'__current\']}"\n' +
    '             ng-style="{\'padding-left\': 16*(data[\'__level\']+(data[\'children\']?0:1))+\'px\'}"\n' +
    '             ng-click="handler.clickRow(data)"\n' +
    '             ng-mouseenter="handler.toggleHover(data)" ng-mouseleave="handler.toggleHover(data)">\n' +
    '            <span class="icon-{{data[\'__closed\']?\'plus\':\'minus\'}}"\n' +
    '                  ng-if="!!data[\'children\']"\n' +
    '                  ng-click="handler.toggleNode($event,data)"></span>\n' +
    '            <!-- 选中或半选 -->\n' +
    '            <input type="checkbox" class="wi-checkbox"\n' +
    '                   ng-class="{\'wi-tree-transparent-50\':data[\'__semi\']}"\n' +
    '                   ng-if="conf.multiselect"\n' +
    '                   ng-checked="data[\'__selected\']||data[\'__semi\']" />\n' +
    '            <span class="wi-tree-loading" ng-if="data[\'__loading\']"></span>\n' +
    '            <!-- 优先级：数据项中 cls，根节点定义的 pCls 或 cCls，默认图标 -->\n' +
    '            <span class="wi-tree-icon {{data[\'cls\']||(data[\'children\']?\n' +
    '                conf.pCls||\'icon-folder-\'+(data[\'__closed\']?\'close\':\'open\'):\n' +
    '                conf.cCls)}}" ng-if="!data[\'__loading\']"></span>\n' +
    '            <span>{{data[conf.labelfield]}}</span>\n' +
    '            <span ng-if="conf.itemrenderer"\n' +
    '                  ng-include src="conf.itemrenderer"></span>\n' +
    '        </div>\n' +
    '        <wi-tree ng-if="data[\'children\'] && !data[\'__closed\']"\n' +
    '                 dataProvider="data[\'children\']">\n' +
    '        </wi-tree>\n' +
    '    </li>\n' +
    '</ul>');
}]);
