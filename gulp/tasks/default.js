var gulp = require('gulp');
var runSequence = require('gulp-run-sequence');

gulp.task('default', function(cb) {
  runSequence('webpack', 'jekyll','watch', cb);
});