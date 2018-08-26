var gulp = require('gulp');
var browsersync = require('browser-sync');
var sass = require('gulp-sass');

gulp.task('serve', ['sass'], function() {

  browsersync.init({
    server: '/src'
  });

  gulp.watch(['node_modules/bootstrap/scss/bootstrap.scss', 'src/scss/*.scss'], ['sass']);
  gulp.watch('src/*.html').on('change', browsersync.reload);

})

gulp.task('default', ['js', 'serve']);
