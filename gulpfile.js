var gulp  = require('gulp');
var sass  = require('gulp-sass');
var htmlmin = require('gulp-htmlmin');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');


/*gulp.task('default',function(){
    console.log('测试完成');
})
//gulp*/ 
//default是默认的一个任务名
//下的task方法，参数，两个：任务名称，任务函数

/*gulp.task('html-min',function(){
    gulp.src('src/index.html')
    .pipe(htmlmin())
    .pipe(gulp.dest('dist'))

})*/
// gulp.task('js-min',function(){
//     //这是js压缩任务
//    /* console.log('this is js-min');*/
//    gulp.src('src/js/*.js')
//    .pipe(urlify({
//     mangle:true,
//     compress:true,
//     preserveComments:'license'
//    }))
//    .pipe(gulp.dest('dist/js'))
// })
// gulp.task('sass-task',function(){
//     outputStyle:'compressed'
//     gulp.src('src/sass/*.scss') //读入文件
//     .pipe(sass())
//     .pipe(gulp.dest('dist/css'))

// })
// gulp.task('concat-js',function(){
//     gulp.src('src/js/{test,test1}.js')
//     .pipe(concat('all.js'))
//     .pipe(gulp.dest('dist/js'))
// })
var imagemin = require('gulp-imagemin')
gulp.task('image-min',function(){
    gulp.src('src/img/*.{jpg,png,gif,ico}')
    .pipe(imagemin({
        optimizationLevel:5,
        progressive:true,
        interlaced:true,
        mutipass:true,
    }))
    .pipe(gulp.dest('dist/img'));
})