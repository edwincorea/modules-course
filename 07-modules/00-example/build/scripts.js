var gulp = require("gulp"),
    $ = require("gulp-load-plugins")(),
    config = require('./config');

gulp.task("dev:scripts", () => {
    return gulp
        .src("./src/scripts/**/*.js")
        .pipe($.babel())
        .pipe(gulp.dest("./public/scripts"))
        .pipe($.livereload());
});