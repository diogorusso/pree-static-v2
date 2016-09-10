var gulp        = require('gulp');
var lodash        = require('lodash');
var shell        = require('gulp-shell');
var browsersync = require('browser-sync');
var config = require('../config').site;

// 6s slower in each relaod
gulp.task('jekyll-dev',shell.task([ config.dev ]));
gulp.task('jekyll-ghpages',shell.task([ config.ghpages ]));
gulp.task('jekyll-sftp',shell.task([ config.sftpDeploy ]));

gulp.task('jekyll-rebuild', ['jekyll-dev'], function() {
  browsersync.reload();
});