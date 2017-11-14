const
  //------------- gulp
  gulp = require('gulp'),
  //------------- global
  runSequence = require('run-sequence'),
  concat = require('gulp-concat'),
  bs = require('browser-sync').create(),
  watch = require('gulp-watch'),
  cache = require('gulp-cached'),
  //------------- css
  postcss = require('gulp-postcss'),
  cssnext = require('postcss-cssnext'),
  sass = require('gulp-sass'),
  sourcemaps = require('gulp-sourcemaps'),
  groupQueries = require('gulp-group-css-media-queries'),
  //------------- js
  depsOrder = require('gulp-deps-order'),
  babel = require('gulp-babel'),
  //------------- html
  nunjucks = require('gulp-nunjucks-html'),
  //------------- images
  imagemin = require('gulp-imagemin'),
  //------------- paths
  paths = require('./gulp.paths.json');

//
//browser sync
///////////////////////////////////////////
gulp.task('sync', () =>
  bs.init({
      server: {
          baseDir: "./dist"
      }
  })
)

//
//@css/styleguide css
///////////////////////////////////////////
gulp.task('css', () =>
    gulp.src( paths.src.css.files )
      .pipe(sourcemaps.init())
      .pipe(sass().on('error', sass.logError))
      .pipe(postcss([
        cssnext({
          browsers: ['last 10 versions']
        })
      ]).on('error', err => console.log(err.message)))
      .pipe(groupQueries())
      .pipe(sourcemaps.write( '.' ))
      .pipe(gulp.dest( paths.dest.css ))
      .pipe(bs.stream())
)

//
//@js/styleguide js
///////////////////////////////////////////
gulp.task('js', () =>
  gulp.src( paths.src.js )
    .pipe(babel({
      presets: ['env'],
      plugins: ["transform-object-rest-spread"]
    }))
    .pipe(depsOrder())
		.pipe(sourcemaps.write())
    .pipe(gulp.dest( paths.dest.js ))
    .pipe(bs.stream())
)

//
//@html includes
///////////////////////////////////////////
gulp.task('html', () =>
  gulp.src( paths.src.views.files )
    .pipe(nunjucks({
      searchPaths: ['./src/components'],
      ext: ".html"
    })
    .on('error', err => console.log(err.message)))
    .pipe(gulp.dest( paths.dest.views ))
    .pipe(bs.stream())
)

//
//@minify images
///////////////////////////////////////////
gulp.task('image', () =>
  gulp.src( paths.src.img )
    .pipe(cache('images'))
    .pipe(imagemin())
    .pipe(gulp.dest( paths.dest.img ))
    .pipe(bs.stream())
)

//
//@watch
///////////////////////////////////////////
gulp.task('watch', () => {
  watch(paths.src.views.watch, () => gulp.start('html'))
  watch(paths.src.css.watch, () => gulp.start('css'))
  watch(paths.src.js, () => gulp.start('js'))
  watch(paths.src.img, () => gulp.start('image'))
})

//
//@tasks default
///////////////////////////////////////////
gulp.task('webserver', ['sync', 'watch'])
gulp.task('build', ['html', 'css', 'js', 'image'])
gulp.task('default', () => runSequence('build', 'webserver'))
