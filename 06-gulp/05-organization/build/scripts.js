var gulp = require("gulp"),
    $ = require("gulp-load-plugins")(),
    config = require('./config');

gulp.task("dev:scripts", devScripts);
gulp.task("prod:scripts", prodScripts);

function devScripts(){
    return gulp
        .src(config.scripts.src)
        .pipe($.sourcemaps.init())
        .pipe($.babel())
        .pipe($.sourcemaps.write("."))
        .pipe(gulp.dest(config.scripts.dest))    
        .pipe($.livereload());
}

function prodScripts(){
    return gulp
        .src(config.scripts.src)
        .pipe($.babel())
        .pipe($.concat(config.scripts.bundle))
        .pipe($.uglify())
        .pipe(gulp.dest(config.scripts.dest));        
}