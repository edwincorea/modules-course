var gulp = require("gulp"),
    $ = require("gulp-load-plugins")(),
    config = require('./config');

gulp.task("dev:styles", () => {
    return gulp
        .src(config.styles.dev.src)
        .pipe($.less())
        .pipe(gulp.dest(config.styles.dev.dest))
        .pipe($.livereload());
});