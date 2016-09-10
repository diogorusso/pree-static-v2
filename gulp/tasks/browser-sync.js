var gulp        = require('gulp');
var browserSync = require('browser-sync');
var site     = require('../config').site

// Task for serving blog with Browsersync
gulp.task('browsersync', function () {
    browserSync.init({server: {
    							baseDir: site.baseDir
    						}
    					});
    // Reloads page when some of the already built files changed:
    gulp.watch(site.baseDir + '/**/*.*').on('change', browserSync.reload);
});