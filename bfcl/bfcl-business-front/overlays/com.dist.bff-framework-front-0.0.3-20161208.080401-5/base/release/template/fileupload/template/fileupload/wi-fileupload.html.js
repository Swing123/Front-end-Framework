angular.module('template/fileupload/template/fileupload/wi-fileupload.html', []).run(['$templateCache', function($templateCache) {
  $templateCache.put('template/fileupload/template/fileupload/wi-fileupload.html',
    '<ul class="wi-fileupload" ng-style="{display: files.length>0 && !fileULOptions.modal ? \'\' : \'none\'}">\n' +
    '    <li ng-repeat="file in files track by file.id">\n' +
    '        <span class="wi-fileupload-info" ng-style="{cursor: file.stat==3 ? \'pointer\': \'\'}" ng-click="getResponse(file)">\n' +
    '            <span class="wi-fileupload-icon icon-{{file.type}}"></span>\n' +
    '            {{file.name}}\n' +
    '            <span class="wi-fileupload-tip">({{file.size}})</span>\n' +
    '        </span>\n' +
    '        <span class="wi-fileupload-completed" ng-style="{display: file.stat==3 ? \'\' : \'none\'}">完成</span>\n' +
    '        <span class="wi-fileupload-queued" ng-style="{display: file.stat==1 ? \'\' : \'none\'}">等待上传</span>\n' +
    '        <!--<span class="wi-fileupload-uploading" ng-style="{display: file.stat==2 ? \'\' : \'none\'}">\n' +
    '            <span class="wi-fileupload-bar">\n' +
    '                <div class="wi-fileupload-progress" ng-style="{\'width\': file.percent + \'%\'}"></div>\n' +
    '            </span>\n' +
    '            {{file.percent}}%\n' +
    '        </span>-->\n' +
    '        <wi-progress ng-style="{display: file.stat==2 ? \'\' : \'none\'}" label="file.progressLabel" value="file.percent"></wi-progress>\n' +
    '        <span class="wi-fileupload-error" ng-style="{display: file.stat==4 ? \'\' : \'none\'}">上传失败</span>\n' +
    '        <span class="wi-fileupload-del" ng-click="removeFile(file)">删除</span>\n' +
    '    </li>\n' +
    '</ul>');
}]);
