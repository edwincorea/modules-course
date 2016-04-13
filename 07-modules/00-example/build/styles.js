var gulp = require("gulp"),
    $ = require("gulp-load-plugins")(),
    config = require('./config');

gulp.task("dev:styles", () => {
    return gulp
        .src("./src/styles/site.less")
        .pipe($.less())
        .pipe(gulp.dest("./public/styles"))
        .pipe($.livereload());
});