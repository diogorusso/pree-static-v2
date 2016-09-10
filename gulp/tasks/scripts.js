var gulp 	= require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var config = require('../config').site;

gulp.task("scripts", ['scripts-head','scripts-footer']);
 
gulp.task('scripts-head', function() {
    return gulp.src([
          config.scriptsSrcHead
        ])
    .pipe(concat( config.scriptsNameHead ))
    .pipe(uglify())
    .pipe(gulp.dest( config.scriptsDestcHead ));

});

gulp.task('scripts-footer', function() {
  	return gulp.src( config.scriptsSrcFooter )
    .pipe(concat( config.scriptsNameFooter ))
    .pipe(uglify())
    .pipe(gulp.dest( config.scriptsDestcFooter ));

});




