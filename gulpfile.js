var gulp = require('gulp'),
    sass = require('gulp-sass'),
    watch = require('gulp-watch');

function compileScss(){
    gulp.src("./src/scss/*.scss")
        .pipe(sass().on('error',sass.logError))
        .pipe(gulp.dest("./src/css/"))
        .pipe( gulp.src('./src/css/*.css'));

    console.log("css compile...");
}

gulp.task('compileCss',  function () {
     compileScss();
})

gulp.task('watchScss',function () {
    // var watcher = gulp.watch("./src/scss/*.scss");
    // watcher.on("all",function(event,path,stats){
    //     compileScss();
    //     console.log(event,path,stats)
    //     console.log(1111111111111)
    // });
    return watch('./src/scss/*.scss',function (event) {
        compileScss();
        console.log('CSSFile ' + event.path + ' changed...');
    })

})

gulp.task('default',gulp.series(gulp.parallel('compileCss','watchScss',function(){
         console.log('gulp completed..')
    })
));
