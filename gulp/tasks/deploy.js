var gulp = require('gulp');
var sftp = require('gulp-sftp');
var ghPages = require('gulp-gh-pages');
var runSequence = require('gulp-run-sequence');


gulp.task('deploy', function(cb) {
  runSequence('stfp-deploy', cb);
});
 
gulp.task('ghpages-deploy', function() {
  return gulp.src('./dist/**/*')
    .pipe(ghPages());
});

gulp.task('stfp-deploy', function () {
    return gulp.src('_site/**/*')
        .pipe(sftp({
            host: 'ec2-52-38-156-44.us-west-2.compute.amazonaws.com',
            auth: 'preemedia',
            remotePath: '/var/www/html/',

        }));
});



