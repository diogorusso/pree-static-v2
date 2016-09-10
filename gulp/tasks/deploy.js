var gulp = require('gulp');
var sftp = require('gulp-sftp');
var ghPages = require('gulp-gh-pages');
var runSequence = require('gulp-run-sequence');


gulp.task('deploy', function(cb) {
  runSequence('sftp-deploy', cb);
});
 


gulp.task('ghpages-build', function() {
  return gulp.src('./_site_gh-pages/**/*')
    .pipe(ghPages());
});

gulp.task('ghpages-deploy', function(cb) {
  runSequence('jekyll-ghpages','ghpages-build', cb);
});


gulp.task('sftp-deploy', function(cb) {
  runSequence('jekyll-sftp','stfp-build', cb);
});

gulp.task('stfp-build', function () {
    return gulp.src('_site_sftp/**/*')
        .pipe(sftp({
            host: 'ec2-52-38-156-44.us-west-2.compute.amazonaws.com',
            auth: 'preemedia',
            remotePath: '/var/www/html/',
    }));
});




