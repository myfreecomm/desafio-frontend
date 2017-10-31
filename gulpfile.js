const gulp = require('gulp');
const babelify = require('babelify');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const jshint = require('gulp-jshint');
const buffer = require('vinyl-buffer');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const sass = require('gulp-sass');
const htmlmin = require('gulp-htmlmin');
const imagemin = require('gulp-imagemin');
const pngquant = require('imagemin-pngquant');
const runSequence = require('run-sequence');
const entryPoint = 'public/assets/js/main.js';


gulp.task('transpiler', () => {
  return browserify(entryPoint, { debug: true })
    .transform('babelify', { presets: ['es2015'] })
    .bundle()
    .pipe(source('main.js'))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(concat('script.min.js'))
    .pipe(gulp.dest('./dist/js'));
});

gulp.task('jshint', () => {
  return gulp.src('public/assets/js/**/*.js')
    .pipe(jshint({ esversion: 6 }))
    .pipe(jshint.reporter('default'));
});

gulp.task('sass', () => {
  return gulp.src(['public/assets/scss/**/*.scss', 'public/assets/grid/columns.css'])
    .pipe(sass.sync({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(concat('style.min.css'))
    .pipe(gulp.dest('./dist/stylesheets'))
});

gulp.task('htmlmin', () => {
  return gulp.src('public/index.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('./dist'));

});

gulp.task('imagemin', () => {
  return gulp.src('public/assets/images/*')
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [{ removeViewBox: false }],
      use: [pngquant()]
    }))
    .pipe(gulp.dest('./dist/images'));
});

gulp.task('watch', ['transpiler'], () => {
  return gulp.watch('js/*.js', ['transpiler']);
});

gulp.task('default', (cb) => {
  return runSequence(['transpiler', 'jshint', 'sass', 'htmlmin', 'imagemin', 'watch'], cb);
});