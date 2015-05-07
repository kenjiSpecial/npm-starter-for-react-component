var gulp = require('gulp');
var sass = require('gulp-sass');
var resetCSS = require('node-reset-scss').includePath;
var autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function () {
    gulp.src("./sass/main.scss")
        .pipe(sass({
            errLogToConsole: true,
            includePaths: [resetCSS]
        }))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('./'))
});

gulp.task('watch', ['sass'], function(){
    gulp.watch(['sass/*.scss', 'sass/**/*.scss'], ['sass']);
});



