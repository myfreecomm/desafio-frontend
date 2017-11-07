const gulp = require('gulp')
const pump = require('pump')
const sass = require('gulp-sass')
const clean = require('gulp-clean')
const babel = require('gulp-babel')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const htmlmin = require('gulp-htmlmin')
const ghPages = require('gulp-gh-pages')
const imagemin = require('gulp-imagemin')
const cleancss = require('gulp-clean-css')
const autoprefixer = require('gulp-autoprefixer')
const browserSync = require('browser-sync').create()
const gulpSequence = require('gulp-sequence').use(gulp);

const reload = browserSync.reload

gulp.task('browser-sync', () => {
  browserSync.init({
    server: {
      baseDir: './app'
    }
  })
});

gulp.task('deploy', function() {
  gulp.src('./dist/**/*')
    .pipe(ghPages());
});

gulp.task('clean', () => {
  return gulp.src('./dist')
    .pipe(clean());
});

gulp.task('copy-html', () => {
  return gulp.src('app/*.html')
    .pipe(gulp.dest('./dist'))
});
gulp.task('copy-css', () => {
  return gulp.src('app/styles/*.css')
    .pipe(gulp.dest('./dist/styles/'))
});
gulp.task('copy-js', () => {
  return gulp.src('app/scripts/*.js')
    .pipe(gulp.dest('./dist/scripts/'))
});
gulp.task('copy-img', () => {
  return gulp.src('app/images/**/*')
    .pipe(gulp.dest('./dist/images/'))
});

gulp.task('copy', gulpSequence('copy-html','copy-css','copy-js','copy-img'));

gulp.task('build-img', () => {
  gulp.src('dist/images/**/*')
  .pipe(imagemin())  
  .pipe(gulp.dest('./dist/images/'))
});

gulp.task('sass', () => {
  return gulp.src('./app/styles/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./app/styles/'));
});

gulp.task('minify-css', () => {
  gulp.src('./dist/styles/*.css')
    .pipe(cleancss())
    .pipe(gulp.dest('./dist/styles/'));
});

gulp.task('auto-prefixer', () =>
gulp.src('./dist/styles/*.css')
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }))
    .pipe(gulp.dest('./dist/styles/'))
);

gulp.task('concat-js', function() {
  gulp.src('./app/scripts/src/**/*.js')
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./app/scripts/'));
});


gulp.task('babel', () => {
  gulp.src('./app/scripts/*.js')
    .pipe(babel({
      presets: ['env']
    }))
    .pipe(gulp.dest('./app/scripts/'))
});

gulp.task('minify-js', function (cb) {
  pump([
      gulp.src('./dist/scripts/*.js'),
      uglify(),
      gulp.dest('./dist/scripts/')
    ],
    cb
  );
});

gulp.task('minify-html', function() {
  return gulp.src('./dist/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('./dist/'));
});


gulp.task('build', gulpSequence('clean', 'sass', 'concat-js', 'babel', 'copy', 'minify-js', 'build-img', 'auto-prefixer', 'minify-css', 'minify-html'));

gulp.task('default',['browser-sync','sass','concat-js', 'babel'], () => {
  gulp.watch('app/scripts/src/**', ['concat-js']).on("change", reload);
  gulp.watch('app/styles/scss/**', ['sass']).on("change", reload);
  gulp.watch("app/*.html").on("change", reload);
});