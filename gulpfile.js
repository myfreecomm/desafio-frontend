var gulp = require('gulp'),
  stylus = require('gulp-stylus'),
  connect = require('gulp-connect');

gulp.task('html', function () {
  gulp.src('./*.html')
    .pipe(connect.reload());
});

gulp.task('styles', function () {
  gulp.src('./style/stylus/main.styl')
    .pipe(stylus())
    .pipe(gulp.dest('./style/css'))
    .pipe(connect.reload());
});

gulp.task('watch', function () {
  gulp.watch('style/**/*.styl', ['styles']);
  gulp.watch('./*.html', ['html']);
});

gulp.task('connect', function () {
  connect.server({
    livereload: true
  });
});

gulp.task('default', ['watch', 'connect']);