const gulp = require('gulp');
const babel = require('gulp-babel');
const browserify = require('gulp-browserify');
const rename = require('gulp-rename');
const connect = require('gulp-connect');
const {
  series,
  parallel
} = require('gulp');
const less = require('gulp-less');
const concat = require('gulp-concat');
const {exec} = require("child_process");
const uglify = require("gulp-uglify");
const cssmin = require("gulp-cssmin");
const htmlmin = require("gulp-htmlmin");

//使用task定义一个任务 规定任务名
gulp.task('babel', () =>
  gulp.src('./src/js/*js') //把某个文件夹的文件读取出来一个可读流
  .pipe(babel({
    //把ES6代码编译为ES6
    //把ES6模块化规范编译为CommonJS规范
    presets: ['@babel/env']
  }))
  .pipe(gulp.dest('./dist/js')) //把处理的流写入到某个文件夹
  .pipe(connect.reload())
);



// browserify
gulp.task('browserify', function () {
  return gulp.src('./dist/js/index.js')
    .pipe(browserify({
      insertGlobals: true,
    }))
    .pipe(rename('build.js'))

    .pipe(gulp.dest('./dist/js'))
    .pipe(connect.reload())
});


//less
gulp.task('less', function () {
  return gulp.src('./src/less/*.less')
    .pipe(less())
    .pipe(concat('all.css'))
    .pipe(gulp.dest('./dist/css'))
    .pipe(connect.reload())
});

//http
gulp.task("html", function () {
  return gulp.src("./src/index.html")
    .pipe(gulp.dest("./dist"))
    .pipe(connect.reload())
})

//服务器配置
gulp.task('connect', function () {
  connect.server({
    port: 8888,
    root:['./dist'],
    livereload:true//开启自动刷新
  });
  //自动打开浏览器
  exec("start http://127.0.0.1:8888");

  //自动监视文件变化
  gulp.watch("./src/js/*.js",gulp.series(['js-dev']));
  gulp.watch("./src/js/*.less",gulp.series(['less']));
  gulp.watch("./src/js/index.html",gulp.series(['html']));

});

gulp.task("uglify",function(){
  return gulp
  .src("./dist/js/build.js")
  .pipe(uglify())
  .pipe(rename("build.min.js"))
  .pipe(gulp.dest("./dist/js"))
})

gulp.task("cssmin", function () {
  return gulp
    .src("./dist/css/all.css")
    .pipe(cssmin())
    .pipe(rename("all.min.css"))
    .pipe(gulp.dest("./build/css"));
});

gulp.task("htmlmin", function () {
  return gulp
    .src("./src/index.html")
    .pipe(
      htmlmin({
        collapseWhitespace: true, // 去除空格换行符
        removeComments: true, // 去除注释
      })
    )
    .pipe(gulp.dest("./build"));
});

//整合使用series()方法
gulp.task("js-dev", series(['babel', 'browserify']))

gulp.task("dev", parallel(["js-dev", "html", "less"]))

gulp.task("watch", gulp.series(["dev", "connect"]));


//生产环境配置
gulp.task("js-prod", gulp.series(["js-dev", "uglify"]));
gulp.task("css-prod", gulp.series(["less", "cssmin"]));
gulp.task('build', gulp.parallel(['js-prod', 'css-prod', 'htmlmin']));
