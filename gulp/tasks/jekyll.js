var gulp        = require('gulp');
var lodash        = require('lodash');
var shell        = require('gulp-shell');
var browsersync = require('browser-sync');
var config = require('../config').site;

// 6s slower in each relaod
gulp.task('jekyll',shell.task([ config.build ]));

gulp.task('jekyll-rebuild', ['jekyll'], function() {
  browsersync.reload();
});