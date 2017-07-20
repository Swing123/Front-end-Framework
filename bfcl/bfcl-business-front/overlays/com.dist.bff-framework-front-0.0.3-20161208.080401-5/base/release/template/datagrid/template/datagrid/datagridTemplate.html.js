angular.module('template/datagrid/template/datagrid/datagridTemplate.html', []).run(['$templateCache', function($templateCache) {
  $templateCache.put('template/datagrid/template/datagrid/datagridTemplate.html',
    '<div class="wi-datagrid" ng-class="{\'wi-datagrid-wordWrap\':!_wordwrap}">\n' +
    '    <div class="wi-datagrid-ltop" >\n' +
    '        <table ng-if="lockcolumns">\n' +
    '            <colgroup>\n' +
    '                <col ng-if="showno">\n' +
    '                <col ng-if="multiselect">\n' +
    '                <col ng-repeat="columnItem in columnDefs track by $index" ng-if="$index<lockcolumns"\n' +
    '                     width="{{columnItem.width+\'px\'}}">\n' +
    '            </colgroup>\n' +
    '            <tbody>\n' +
    '            <tr ng-repeat="head in headarray track by $index">\n' +
    '                <td ng-if="$index==0 && showno" class="wi-datagrid-keycol" rowspan="{{::maxLevel}}"></td>\n' +
    '                <td ng-if="$index==0 && multiselect" class="wi-datagrid-keycol" rowspan="{{::maxLevel}}">\n' +
    '                    <input type="checkbox" class="wi-checkbox" ng-click="checkAll()" ng-checked="isCheckAll"  />\n' +
    '                </td>\n' +
    '                <td ng-repeat="child in head track by $index" ng-if="child.colindex<lockcolumns" colspan="{{::child.colspan}}" rowspan="{{::child.rowspan}}" ng-click="sort(child.colindex)" ng-mousemove="headMousemove($event)" ng-mouseleave="headMouseleave()" ng-mousedown="startColumnDrag($event,child,true)">\n' +
    '                    <div class="wi-datagrid-headdiv">\n' +
    '                        <div ng-if="child.headrenderer" ng-include src="child.headrenderer" class="wi-display-inlineb"></div>\n' +
    '                        <span ng-if="!child.headrenderer">{{child.text}}</span>\n' +
    '                        <span ng-if="sortcolumn.datafield==child.datafield" class="wi-datagrid-caret{{sortcolumn.direction}}"></span>\n' +
    '                    </div>\n' +
    '                </td>\n' +
    '                <td>&nbsp;</td><!-- 防止合并行高度自适应 -->\n' +
    '            </tr>\n' +
    '            </tbody>\n' +
    '        </table>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="wi-datagrid-rtop">\n' +
    '        <table ng-style="{width: (rightW + 17) + \'px\'}">\n' +
    '            <colgroup>\n' +
    '                <col ng-if="showno && !lockcolumns">\n' +
    '                <col ng-if="multiselect && !lockcolumns">\n' +
    '                <col ng-repeat="columnItem in columnDefs track by $index" ng-if="!lockcolumns||$index>=lockcolumns"\n' +
    '                     width="{{columnItem.width+\'px\'}}">\n' +
    '                <col width="17px">\n' +
    '            </colgroup>\n' +
    '            <tbody>\n' +
    '            <tr ng-repeat="head in headarray track by $index">\n' +
    '                <td ng-if="$index==0 && showno && !lockcolumns" class="wi-datagrid-keycol" rowspan="{{::maxLevel}}"></td>\n' +
    '                <td ng-if="$index==0 && multiselect && !lockcolumns" class="wi-datagrid-keycol" rowspan="{{::maxLevel}}">\n' +
    '                    <input type="checkbox" class="wi-checkbox" ng-click="checkAll()" ng-checked="isCheckAll" />\n' +
    '                </td>\n' +
    '                <td ng-repeat="child in head track by $index" ng-if="!lockcolumns||child.colindex>=lockcolumns" colspan="{{::child.colspan}}" rowspan="{{::child.rowspan}}" ng-click="sort(child.colindex)" ng-mousemove="headMousemove($event)" ng-mouseleave="headMouseleave()" ng-mousedown="startColumnDrag($event,child,false)">\n' +
    '                    <div class="wi-datagrid-headdiv">\n' +
    '                        <div ng-if="child.headrenderer" ng-include src="child.headrenderer" class="wi-display-inlineb"></div>\n' +
    '                        <span ng-if="!child.headrenderer">{{child.text}}</span>\n' +
    '                        <span ng-if="sortcolumn.datafield==child.datafield" class="wi-datagrid-caret{{sortcolumn.direction}}"></span>\n' +
    '                    </div>\n' +
    '                </td>\n' +
    '                <td style="border-color: transparent; cursor: default;">&nbsp;</td><!-- 防止合并行高度自适应 -->\n' +
    '            </tr>\n' +
    '            </tbody>\n' +
    '        </table>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="wi-datagrid-lbottom">\n' +
    '        <table id="lBottomTable">\n' +
    '            <col ng-if="showno">\n' +
    '            <col ng-if="multiselect">\n' +
    '            <col ng-repeat="columnItem in columnDefs track by $index" ng-if="$index<lockcolumns"\n' +
    '                 width="{{columnItem.width+\'px\'}}">\n' +
    '            <tr id="lBottomTR{{::$index}}" ng-style="{\'background-color\':pdata.__rowcolor,\'height\':_rowheight+\'px\'}" ng-class="{\'wi-datagrid-row-selected\':pdata.__ischecked}">\n' +
    '\n' +
    '            </tr>\n' +
    '            <tr class="wi-datagrid-cover"><td></td></tr>\n' +
    '        </table>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="wi-datagrid-rbottom">\n' +
    '        <table id="rBottomTable" ng-style="{width: rightW + \'px\'}">\n' +
    '            <col ng-if="showno && !lockcolumns">\n' +
    '            <col ng-if="multiselect && !lockcolumns">\n' +
    '            <col ng-repeat="columnItem in columnDefs track by $index" ng-if="!lockcolumns||$index>=lockcolumns"\n' +
    '                 width="{{columnItem.width+\'px\'}}" >\n' +
    '            <tr id="rBottomTR{{::$index}}" ng-style="{\'background-color\':pdata.__rowcolor,\'height\':_rowheight+\'px\'}" ng-class="{\'wi-datagrid-row-selected\':pdata.__ischecked}">\n' +
    '\n' +
    '            </tr>\n' +
    '        </table>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="wi-datagrid-pagebar">\n' +
    '        <div class="wi-datagrid-page-left" ng-if="pagemode!==\'none\'">\n' +
    '            <span>\n' +
    '                每页\n' +
    '                <select id="pageSizeSel" ng-model="$parent.selectedPageSize"  ng-options="op for op in pageselect||[20,30,40,50,60]">\n' +
    '                </select>\n' +
    '                条&nbsp;,&nbsp;共{{dataCount}}条\n' +
    '            </span>\n' +
    '            <span>\n' +
    '                <a href="#" ng-click="pageNum===1?null:doPage(1)" title="首页"><span class="icon-step-backward"></span></a>\n' +
    '                <a href="#" ng-click="pageNum===1?null:doPage(pageNum-1)" title="上一页"><span class="icon-backward"></span></a>\n' +
    '                &nbsp;&nbsp;{{pageNum}}/{{pageCount}}&nbsp;&nbsp;\n' +
    '                <a href="#" ng-click="pageNum===pageCount?null:doPage(pageNum+1)" title="下一页"><span class="icon-forward"></span></a>\n' +
    '                <a href="#" ng-click="pageNum===pageCount?null:doPage(pageCount)" title="尾页"><span class="icon-step-forward"></span></a>\n' +
    '                <input type="text" class="wi-datagrid-page-num" onclick="javascript:this.select()" ng-keydown="gotoPage($event)" />\n' +
    '            </span>\n' +
    '        </div>\n' +
    '        <div class="wi-datagrid-page-right">\n' +
    '            <span ng-if="pagebarrenderer" ng-include src="pagebarrenderer"/>\n' +
    '            <span ng-if="!(showrefresh==\'false\')">\n' +
    '                <a href="#" ng-click="dorefresh()"><span class="icon-refresh"></span> 刷新</a>\n' +
    '            </span>\n' +
    '            <span ng-if="showexcel">\n' +
    '                <a href="#" download="导出文件.xls" ng-click="export2excel($event)"><span class="icon-share-alt"></span> 导出excel</a>\n' +
    '            </span>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="wi-datagrid-followbar" style=\'display: none; left: 0;\'></div>\n' +
    '\n' +
    '    <div class=\'wi-datagrid-maskdiv\' style=\'visibility: hidden\'></div>\n' +
    '    <div id="ngTranscludeDiv" ng-transclude></div>\n' +
    '</div>');
}]);
