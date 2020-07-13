var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var connect = require('gulp-connect');
var imagemin = require('gulp-imagemin');

gulp.task('scripts', () =>
	gulp.src('assets-dev/js/**/*.js')
		.pipe(concat('load.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('assets/js/'))
);

gulp.task('styles', () =>
	gulp.src('assets-dev/css/**/*.scss')
		.pipe(sass({outputStyle: 'compressed'}))
		.pipe(gulp.dest('assets/css/'))
		.pipe(connect.reload())
);

gulp.task('compressImg', () =>
	gulp.src('assets-dev/img/*')
		.pipe(imagemin())
		.pipe(gulp.dest('assets/img/'))
);

gulp.task('connect', () =>
	connect.server({
		livereload: true
	})
);

gulp.task('watch', () =>
	gulp.watch('assets-dev/css/**/*.scss', ['styles'])
);


gulp.task('default', ['scripts', 'styles', 'watch', 'connect', 'compressImg']);
