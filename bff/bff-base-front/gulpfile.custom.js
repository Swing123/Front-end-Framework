var gulp= require('gulp');
var gutil= require('gulp-util');
var uglify= require('gulp-uglify');
var concat= require('gulp-concat');
var html2js= require('gulp-ng-html2js');//ʹ�����
var clean=require('gulp-clean');
var minifycss = require('gulp-minify-css'); // CSSѹ��

var karma = require('gulp-karma');//����
//var inject = require("gulp-inject");//����ע��
var rename = require("gulp-rename");//������
var run = require('gulp-run');//����������

var insert = require('gulp-insert');//�ļ��в����ַ���
var intercept = require('gulp-intercept');//�ļ�����
var jsoncombine=require('gulp-jsoncombine');//�ϲ�json
require('gulp-grunt')(gulp);//ִ��grunt����

var modules=[];//�������,����ÿ���������Ϣ�����ơ����ȼ���������module����
var moduleNames=[];//���е��������
var tplmodules=[];//ģ��modules������ÿ��ģ�������module����

// less ���� css ����Σ���Ϊ���ݣ�����ɾ��ע��
//var less = require('gulp-less');
//gulp.task('less', function() {
//    var themeName = "default";
//    gulp.src(['./themes/less/*.less','!./themes/less/less-nameset.less'])
//        .pipe(less())
//        .pipe(gulp.dest('./themes/' + themeName + '/'));
//    gulp.src('./themes/*/wi-all.css')
//        .pipe(minifycss())
//        .pipe(gulp.dest('./build/themes/'))
//        .pipe(gulp.dest('./build/docs/themes/'));
//    gulp.src('./themes/*/fonts/**')
//        .pipe(gulp.dest('./build/themes/'))
//        .pipe(gulp.dest('./build/docs/themes/'));
//    gulp.src('./themes/*/images/**')
//        .pipe(gulp.dest('./build/themes/'))
//        .pipe(gulp.dest('./build/docs/themes/'));
//});


//����module����
function setModulesInfo(file){
    var deps=[];//������module����
    //var moduleName=file.path.substring(file.path.lastIndexOf('\\')+1).replace('.js','');

    var contents=file.contents.toString();
    var moduleDeclIndex = contents.indexOf('angular.module(');
    var depArrayStart = contents.indexOf('[', moduleDeclIndex);
    var depArrayEnd = contents.indexOf(']', depArrayStart);
    var dependencies = contents.substring(depArrayStart + 1, depArrayEnd);

    var mStr=contents.substring(moduleDeclIndex+1,depArrayStart).trim();// 'ui.wisoft.wiHdivbox',
    var moduleName=mStr.substring(mStr.lastIndexOf('.')+1,mStr.lastIndexOf('\''));
    var module={"moduleName":"'"+moduleName+"'","priority":0,"deps":deps};
    modules.push(module);

    dependencies.split(',').forEach(function(dep) {
        if (dep.indexOf('ui.wisoft.') > -1) {
            var depName = dep.trim().replace('ui.wisoft.', '');
            deps.push(depName);
        }
    });
}
//����modules�и�module��priority
function setModulePriority(module){
    var deps=module.deps;
    if(deps.length>0){
        deps.forEach(function(depModuleName){
            modules.forEach(function(m){
                if(m.moduleName===depModuleName){
                    m.priority+=1;
                    setModulePriority(m);//�ݹ����
                    return;
                }
            });
        });
    }
}
//�������ȼ����е�������
var compare = function (obj1, obj2) {
    var val1 = obj1.priority;
    var val2 = obj2.priority;
    if (val1 < val2) {
        return 1;
    } else if (val1 > val2) {
        return -1;
    } else {
        return 0;
    }
}

// themes ���
gulp.task('themes', function(){
    gulp.src('./themes/*/wi-all.css')
        .pipe(minifycss())
        .pipe(gulp.dest('./build/themes/'))
        .pipe(gulp.dest('./build/docs/themes/'))
    gulp.src('./themes/*/fonts/**')
        .pipe(gulp.dest('./build/themes/'))
        .pipe(gulp.dest('./build/docs/themes/'))
    gulp.src('./themes/*/images/**')
        .pipe(gulp.dest('./build/themes/'))
        .pipe(gulp.dest('./build/docs/themes/'))
});

//����module��Ϣ
gulp.task('setModuleInfo', function () {
    return gulp.src(['./src/*/*.js'])
        //.pipe(angularFilesort())
//        .pipe(rename(function(path){
//            var m={};
//            m.module=path.basename;
//            modules.push(m);
////			modules.push('"ui.wisoft.'+path.basename+'"');
//           // modules.push('"ui.bootstarp.'+path.basename+'"');
//        }))
        .pipe(intercept(function(file){
            setModulesInfo(file);
        }))
});
//���ø�module��priority
gulp.task('init-modules',['setModuleInfo'],function(){
    //�趨ÿ��module�����ȼ�
    modules.forEach(function(module){
        setModulePriority(module);
    });
    modules.sort(compare).forEach(function(obj){
        obj.moduleName='"ui.wisoft.'+String(obj.moduleName).replace('\'','').replace('\'','')+'"';
        moduleNames.push(obj.moduleName);
    });
})

//��ģ��html�ļ�ת����js�ļ�
gulp.task('template' , function () {
    return gulp.src('./template/**/*.html')
        .pipe(html2js({prefix: "template/"}))
        .pipe(rename({extname:'.html.js'}))
        .pipe(gulp.dest('./build/template'));
});

//��ģ��htmlת����js�ļ��������Ŀ¼�ṹ���磺src/alert/template/alert/alertTemplate.html ��,���ɵ�js�ļ����������Ժ����ɴ�ģ������js
gulp.task('template_new' , function () {
    return gulp.src('./src/*/template/*/*.html')
        .pipe(rename(function (path) {
            tplmodules.push('"'+path.dirname.substring(path.dirname.indexOf('\\')+1).replace('\\','\/')+'/'+path.basename+path.extname+'"');
            path.dirname="./template/"+path.dirname.substring(path.dirname.lastIndexOf('\\')+1)+"/" ;
        }))
        .pipe(html2js())
        .pipe(rename({extname:'.html.js'}))
        .pipe(gulp.dest('./build'));
});

//�����JS�ϲ�(����ģ��)
gulp.task('noTpls',['init-modules'],function(){
    return gulp.src('./src/*/*.js')
        .pipe(concat('WebUI4Angular-all.js'))
        .pipe(insert.prepend('angular.module("ui.wisoft",['+moduleNames.join(',')+']);\r\n'))//����������Ӧ��module�����������е����module
        .pipe(gulp.dest('./build'))
        .pipe(rename({basename:'WebUI4Angular-all-mini'}))
        .pipe(uglify())
        .pipe(gulp.dest('./build'));
});

//�����JS��ģ��JS�ϲ������ɲ�ѹ����ѹ��������js
gulp.task('tpls',['template_new','init-modules'],function(){
    return gulp.src(['./src/*/*.js','./build/template/*/*.js'])
        .pipe(concat('WebUI4Angular-tpls-all.js'))
        .pipe(insert.prepend('angular.module("ui.wisoft.tpls",['+tplmodules.join(',')+']);\r\n'))//����������ģ��module�����������е�ģ��module
        .pipe(insert.prepend('angular.module("ui.wisoft",["ui.wisoft.tpls",'+moduleNames.join(',')+']);\r\n'))//����������Ӧ��module�����������е����module
        .pipe(gulp.dest('./build'))
        .pipe(rename({basename:'WebUI4Angular-tpls-all-mini'}))
        .pipe(uglify())
        .pipe(gulp.dest('./build'));
});

//����ǰ�����һ�ι������
gulp.task('clean', function () {
    return  gulp.src(['./coverage/*.*','./build/*'],{read: false})
        .pipe(clean('build'))
});

//������build����,����ǰ����ϴι���������Ŀ¼������ѹ��mini������Զ����ж�Ӧ��all������������ֻ������mini����
gulp.task('build',['clean','tpls'],function(){
    gulp.src('./lib/My97DatePicker/**')
        .pipe(gulp.dest('./build/My97DatePicker'))
//    gulp.run('all-mini');//�������ɲ���ģ���js������ģ��ʹ�ò�����
//    gulp.run('tpls');
    gulp.src('./themes/*/wi-all.css')
        .pipe(minifycss())
        .pipe(gulp.dest('./build/themes/'))
    gulp.src('./themes/*/fonts/**')
        .pipe(gulp.dest('./build/themes/'))
    gulp.src('./themes/*/images/**')
        .pipe(gulp.dest('./build/themes/'))
    gulp.run('clearTemp');
    console.log('========================�����ɹ�����=====================');
});

gulp.task('mergeJSON',function(){
    return gulp.src('src/*/docs/demo.json')
        .pipe(jsoncombine("alldemo.json",function(data){
            return new Buffer(JSON.stringify(data));
        }))
        .pipe(gulp.dest('build/docs/demo'));
})
gulp.task('mergeDemoJS',function(){
    return gulp.src('src/*/docs/*.js')
        .pipe(concat('allDemo.js'))
        .pipe(gulp.dest('build/docs/demo'));
})
gulp.task('demoRes',function(){
    gulp.src(['src/*/docs/*.js','src/*/docs/*.html','src/*/docs/*.swf'])
        .pipe(gulp.dest('build/docs/demo'));
    gulp.src('misc/**')
        .pipe(gulp.dest('build/docs/misc'));
    gulp.src('misc/google-code-prettify/**')
        .pipe(gulp.dest('build/docs/google-code-prettify'))
    gulp.src('lib/jquery-1.8.2.min.js')
        .pipe(gulp.dest('build/docs/js'))
    gulp.src('lib/angular-1.3.6/**')
        .pipe(gulp.dest('build/docs/js/angular-1.3.6'))
    gulp.src('./lib/My97DatePicker/**')
        .pipe(gulp.dest('./build/docs/My97DatePicker'))
})
//����demo�ĵ�
gulp.task('demoDoc',['mergeJSON','mergeDemoJS','demoRes','themes'],function(){
    return gulp.src(['./src/index_demo.html','./src/index_demo.js',])
        .pipe(gulp.dest('build/docs'));
})
//���ɰ����ĵ�(demo��api)
gulp.task('doc',['build'],function(){
    gulp.run('grunt-ngdocs');
    gulp.run('demoDoc');
});
//���build/�µ�templateĿ¼
gulp.task('clearTemp',function(){
    gulp.src(['build/template'],{read: false})
        .pipe(clean())
})
//�������еĵ�Ԫ����
gulp.task('test',['template_new'], function() {
    // Be sure to return the stream
    // NOTE: Using the fake './foobar' so as to run the files
    // listed in karma.conf.js INSTEAD of what was passed to
    // gulp.src !
    return gulp.src('./foobar')
        .pipe(karma({
            configFile: 'karma.conf.js',
            action: 'run'
        }))
        .on('error', function(err) {
            // Make sure failed tests cause gulp to exit non-zero
            console.log(err);
            console.log('���е�Ԫ���Է�������===================');
            //run('calc').exec();
            this.emit('end'); //instead of erroring the stream, end it
            //throw err;//��ֹgulp
        });
});

//Ĭ�����������в��ԣ�������Ϻ��Զ����������ɰ����ĵ�
gulp.task('default',['test'],function(){
    //run('gulp build').exec();//ִ��������ʱʹ��
    gulp.run('doc');
});
