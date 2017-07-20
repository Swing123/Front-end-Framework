/**
 * Created by wanghy on 2016/11/18.
 */
define([
], function () {
    function fileFilter () {
        return function (fileName) {
            var ret, arr=['png', 'gif', 'jpg', 'doc', 'docx', 'dwg', 'pdf'];
            var mime = fileName.toLowerCase().substr(fileName.lastIndexOf(".") + 1);

            var index = arr.join('-').indexOf(mime);
            if (index != -1) {
                ret = mime;
            } else {
                ret = -1;
            }

            return ret;
        };
    }

    return fileFilter;
});