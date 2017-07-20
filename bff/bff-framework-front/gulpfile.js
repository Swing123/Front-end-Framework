/**
 \* Created by Wanggb with IntelliJ IDEA.
 \*Orgs:DIST
 \*Date:11/3/2016
 \*Time:12:42 PM
 \*Description:项目构建配置文件
 */

/**
 * 1.将css文件合并压缩后放到dist/css下
 * 2.将template文件压缩后放到dist/template下
 * 3.将src下js文件合并压缩后放到dist/js下
 * 4.将main.html文件使用cssmin，jsmin替换后，并压缩，然后放到dist下
 * 5.最后别忘了将requirejs源文件移过去
 */

var gulp = require('gulp'),
    concat = require('gulp-concat'),
    cleanCss = require('gulp-clean-css'),
    htmlmin = require('gulp-htmlmin'),
    uglify = require("gulp-uglify"),
    clean = require('gulp-clean'),
    usemin = require('gulp-usemin'),
    replace = require('gulp-regex-replace'),
    requirejsOptimize = require('gulp-requirejs-optimize'),
    less = require('gulp-less');
var paths={
    requireMain:'./target/bff-framework-front/main.js',
    outputPath:'./target/bff-framework-front/dist',
    lessMain:'./target/bff-framework-front/main.less',
    lessOutputPath:'./target/bff-framework-front/dist'
};

gulp.task('clean', function(){
    return gulp.src(paths.outputPath)
        .pipe(clean());
});


// 合并压缩js文件
gulp.task('js',['clean'], function(){
    return gulp.src(paths.requireMain)
        .pipe(requirejsOptimize(function(){
            return {
                mainConfigFile: paths.requireMain,
                optimize: "uglify2",
                uglify2: {
                    mangle: true  //false 不混淆变量名
                },
            };
        }))
        // .pipe(uglify())
        .pipe(concat("main.min.js"))
        .pipe(gulp.dest(paths.outputPath));
});
gulp.task('contactLess',['js'],function(){
    return gulp.src([paths.lessMain])
        .pipe(less({relativeUrls: true,rootpath:"../"/*, dumpLineNumbers:"all"*/}))
        .pipe(gulp.dest(paths.lessOutputPath));
});
gulp.task('build',['contactLess'],function(){

});
