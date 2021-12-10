'use strict';

const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const htmlmin = require('gulp-htmlmin');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require("gulp-imagemin");
const { series } = require('gulp');

function defaultTask(cb) {
    // place code for your default task here
    cb();
  }

  function minifyStyles() {
    return gulp.src('./css/**/*.css')
      .pipe(cleanCSS().on('error', sass.logError))
      .pipe(gulp.dest('./dist/css'));
  }

  function minifyJs() {
    return gulp.src('./js/**/*.js')
      .pipe(uglify().on('error', sass.logError))
      .pipe(gulp.dest('./dist/js'));
  }

  function minifyhtml() {
    return gulp.src('./*.html')
      .pipe(htmlmin().on('error', sass.logError))
      .pipe(gulp.dest('./dist'));
  }

function minifyimg(){
  return gulp.src("./img/**/*")
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/img/.'));
}
  
  exports.default = defaultTask
  exports.minimitzacss = minifyStyles
  exports.minimitzajs = minifyJs
  exports.minimitzahtml = minifyhtml
  exports.minimitzaimg = minifyimg
  exports.all = series(minifyStyles, minifyJs, minifyhtml, minifyimg)