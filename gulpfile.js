var gulp = require('gulp'),
  plumber = require('gulp-plumber'),
  sass = require('gulp-sass'),
  sassGlob = require('gulp-sass-glob'),
  autoprefixer = require('gulp-autoprefixer'),
  sourcemaps = require('gulp-sourcemaps'),
  jade = require('gulp-jade'),
  rename = require('gulp-rename'),
  svgstore = require('gulp-svgstore'),
  cheerio = require('gulp-cheerio'),
  svgmin = require('gulp-svgmin'),
  browserSync = require('browser-sync').create();

/*
 Paths
 */

var APP_DIR = './app/';
var DIST_DIR = './dist/';

var paths = {
  sass: {
    main: APP_DIR + 'sass/styles.scss',
    app: APP_DIR + 'sass/**/*.scss',
    dist: DIST_DIR + 'css'
  },
  jade: {
    main: APP_DIR + 'templates/pages/**/*.jade',
    app: APP_DIR + 'templates/**/*.jade',
    dist: APP_DIR
  },
  js: {
    app: APP_DIR + 'js/**/*.js',
    dist: DIST_DIR
  }
};

/*
 Tasks
 */

// jade
gulp.task('jade', function () {
  var YOUR_LOCALS = {};

  gulp.src(paths.jade.main)
    .pipe(plumber())
    .pipe(jade({
      locals: YOUR_LOCALS,
      pretty: true
    }))
    .pipe(gulp.dest('app'))
    .pipe(browserSync.stream())
});

// sass
gulp.task('sass', function () {
  return gulp.src(paths.sass.main)
    .pipe(plumber())
    .pipe(sassGlob())
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
    .pipe(autoprefixer(['last 2 versions'], {cascade: true}))
    .pipe(sourcemaps.write('maps'))
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.stream({match: '**/*.css'}))
});

// svg sprite
gulp.task('svgstore', function () {
  return gulp
    .src('./app/img/svg/*.svg')
    .pipe(svgmin())
    .pipe(svgstore())
    .pipe(cheerio({
      run: function ($, file) {
        $('#header_bottom, #header_bottom_left,  #header_bottom_right').attr('preserveAspectRatio', 'none');
      },
      parserOptions: { xmlMode: true }
    }))
    .pipe(rename({basename: 'sprite'}))
    .pipe(gulp.dest('./app/img'))
});

// browser-sync
gulp.task('browser-sync', function () {
  browserSync.init({
    server: "./app"
  });
});

// watch
gulp.task('watch', ['browser-sync'], function () {
  gulp.watch(paths.sass.app, ['sass']);
  gulp.watch(paths.jade.app, ['jade']);
  gulp.watch(paths.js.app).on('change', browserSync.reload);
});

// default
gulp.task('default', ['watch']);