var gulp = require("gulp"),
	sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    tinylr;

gulp.task('express', function() {
	var express = require('express');
	var app = express();
	app.use(require('connect-livereload')({port: 4002}));
	app.use(express.static(__dirname));
	app.listen(4000, '0.0.0.0');
});

gulp.task('livereload', function() {
	tinylr = require('tiny-lr')();
	tinylr.listen(35729);
});

function notifyLiveReload(event) {
	var filename = require('path').relative(__dirname, event.path);

	tinylr.changed({
		body: {
			files: [filename]
		}
	});
}

gulp.task('styles', function() {
	return gulp.src('./sass/**/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('./css'))
		.pipe(rename({ suffix: '.min' }))
		.pipe(minifycss())
		.pipe(gulp.dest('./css'));
});

gulp.task('watch', function() {
	gulp.watch('sass/*.scss', ['styles']);
	gulp.watch('*.html', notifyLiveReload);
	gulp.watch('css/*.css', notifyLiveReload);
});

gulp.task('default', ['styles', 'express', 'livereload', 'watch'], function() {

});