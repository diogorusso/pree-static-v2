var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require("gulp-rename");
var config = require('../config').site;

gulp.task('sass', function() {

    gulp.src([ config.themeSrc ])
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(rename( config.themeName))
    .pipe(gulp.dest( config.themeDest ))

});