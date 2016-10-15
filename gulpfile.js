var gulp = require('gulp'),
	bs = require('browser-sync'),
	htmlmin = require('gulp-htmlmin'),
	sass = require('gulp-sass'),
	csso = require('gulp-csso'),
	autoprefixer = require('gulp-autoprefixer'),
	imagemin = require('gulp-imagemin');

gulp.task('htmlmin', function() {
	gulp.src('./source/**/*.html')
		.pipe(htmlmin({collapseWhiteSpace: true}))
		.pipe(gulp.dest('./public'));
});

gulp.task('htmlmin-watch', ['htmlmin'], function(done) {
	bs.reload();
	done();
});

gulp.task('js', function() {
	gulp.src('./source/js/**/*.js')
		.pipe(gulp.dest('./public/js'));
});

gulp.task('js-watch', ['js'], function(done) {
	bs.reload();
	done();
});

gulp.task('sass', function() {
	gulp.src('./source/styles/**/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('./public/styles'));
});

gulp.task('sass-watch', ['sass'], function(done) {
	bs.reload();
	done();
});

gulp.task('css', function() {
	gulp.src('./source/styles/**/*.css')
		.pipe(gulp.dest('./public/styles'));
});

gulp.task('css-watch', ['css'], function(done) {
	bs.reload();
	done();
});

gulp.task('imagemin', function() {
	gulp.src('./source/native/**/*')
		.pipe(imagemin())
		.pipe(gulp.dest('./public/native'));
});

gulp.task('serve', ['htmlmin', 'sass', 'imagemin'], function() {
	bs.init({
		server: {
			baseDir: './public'
		},
		notify: false
	});

	gulp.watch('./source/**/*.html', ['htmlmin-watch']);
	gulp.watch('./source/js/**/*.js', ['js-watch']);
	gulp.watch('./source/styles/**/*.scss', ['sass-watch']);
	gulp.watch('./source/styles/**/*.css', ['css-watch']);
});

gulp.task('default', ['serve']);

gulp.task('dev-build', function() {
	gulp.src('./source/**/*.html')
		.pipe(gulp.dest('./public'));

	gulp.src('./source/styles/**/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('./public/styles'));

	gulp.src('./source/styles/**/*.css')
		.pipe(gulp.dest('./public/styles'));

	gulp.src('./source/js/**/*.js')
		.pipe(gulp.dest('./public/js'));

	gulp.src('./source/native/**/*')
		.pipe(gulp.dest('./public/native'));
});

gulp.task('build', function() {
	gulp.src('./source/**/*.html')
		.pipe(htmlmin({collapseWhitespace: true}))
		.pipe(gulp.dest('./build'));

	gulp.src('./source/**/*.php')
		.pipe(gulp.dest('./build'));

	gulp.src('./source/styles/**/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('./build/styles'));

	gulp.src('./source/styles/**/*.css')
		.pipe(gulp.dest('./build/styles'));

	gulp.src('./source/js/**/*.js')
		.pipe(gulp.dest('./build/js'));

	gulp.src('./source/native/**/*')
		.pipe(imagemin())
		.pipe(gulp.dest('./build/native'));
});
