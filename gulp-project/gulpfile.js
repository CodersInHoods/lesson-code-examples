const gulp = require("gulp");
const sass = require('gulp-sass')(require('sass'));

function style() {
  return gulp.src("scss/styles.scss").pipe(sass()).pipe(gulp.dest("css"));
}

function watch(cb) {
  // place code for your default task here
  gulp.watch("scss/**/*.scss", style);
}

exports.default = watch;
