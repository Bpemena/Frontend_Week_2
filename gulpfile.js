var gulp = require('gulp');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();
var sourceMaps = require('gulp-sourcemaps');

gulp.task('sass',function() {
	return gulp.src('sass/style.sass')
	.pipe(plumber())
	.pipe(sourceMaps.init())
	.pipe(sass())
	.pipe(autoprefixer({
		browsers: ['last 20 versions']
	}))
	.pipe(sourceMaps.write())
	.pipe(gulp.dest('build/css'))
	.pipe(browserSync.reload({stream: true}));
});

gulp.task('html', function() {
	return gulp.src('*.html')
	.pipe(gulp.dest('build'))
	.pipe(browserSync.reload({stream: true}));
});

gulp.task('fonts',function() {
	return gulp.src('sass/fonts.sass')
	.pipe(plumber())
	.pipe(sourceMaps.init())
	.pipe(sass())
	.pipe(autoprefixer({
		browsers: ['last 20 versions']
	}))
	.pipe(sourceMaps.write())
	.pipe(gulp.dest('build/css'))
	.pipe(browserSync.reload({stream: true}));
})

gulp.task('media',function(){
	return gulp.src('sass/media.sass')
	.pipe(plumber())
	.pipe(sourceMaps.init())
	.pipe(sass())
	.pipe(autoprefixer({
		browsers: ['last 20 versions']
	}))
	.pipe(sourceMaps.write())
	.pipe(gulp.dest('build/css'))
	.pipe(browserSync.reload({stream: true}));
})

gulp.task('default', function() {
	browserSync.init({
		server: "build"
	});

	gulp.watch("sass/**/*.sass", gulp.series("sass"));
	gulp.watch("sass/**/fonts.sass", gulp.series("fonts"));
	gulp.watch("sass/**/media.sass", gulp.series("media"));
	gulp.watch("*.html", gulp.series("html"));
});