var gulp   = require('gulp');
var config = require('../config').watch;

gulp.task('watch', ['browsersync'], function() {
  gulp.watch(config.jekyll,['jekyll-rebuild']);
  gulp.watch(config.webpack,['webpack']);
});
