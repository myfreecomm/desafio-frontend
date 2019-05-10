var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var browserSync = require('browser-sync').create();

/*
 * Variáveis
 */
// SASS
var scssFiles = './src/scss/style.scss';

// Caminho CSS
var cssDest = './css';

// CSS de desenvolvimento
var sassDevOptions = {
  outputStyle: 'expanded'
}

// CSS de produção
var sassProdOptions = {
  outputStyle: 'compressed'
}

// Task 'sassdev' - Run with command 'gulp sassdev'
gulp.task('sassdev', function() {
    return gulp.src(scssFiles)
      .pipe(sass(sassDevOptions).on('error', sass.logError))
      .pipe(gulp.dest(cssDest));
  });

// Task 'sassprod' - Run with command 'gulp sassprod'
gulp.task('sassprod', function() {
    return gulp.src(scssFiles)
      .pipe(sass(sassProdOptions).on('error', sass.logError))
      .pipe(rename('style.min.css'))
      .pipe(gulp.dest(cssDest));
  });

  // Inicia servidor
  gulp.task('browser-sync', function() {
      browserSync.init({
          server: {
              baseDir: "./"
          }
      });
  });

// Task 'watch' - Run with command 'gulp watch'
gulp.task('watch', function() {
    gulp.watch(scssFiles, ['sassdev', 'sassprod']);
  });

// Default task - Run with command 'gulp'
gulp.task('default', ['sassdev', 'sassprod', 'watch', 'browser-sync']);
