const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const autoprefixer = require("gulp-autoprefixer");
const purgecss = require("gulp-purgecss");

function compileSass() {
  return src("src/scss/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(purgecss({ content: ["*.html"] }))
    .pipe(autoprefixer())
    .pipe(dest("dist/css"));
}

function watchFiles() {
  return watch("src/scss/**/*.scss", compileSass);
}

exports.default = series(compileSass, watchFiles);
