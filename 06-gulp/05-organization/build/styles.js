var gulp = require("gulp"),
    $ = require("gulp-load-plugins")(),
    config = require('./config');

gulp.task("dev:styles", styles(false));
gulp.task("prod:styles", styles(true));

function styles(isProduction){
    return () => {
        return gulp
        .src(config.styles.src)
        .pipe($.if(!isProduction, $.sourcemaps.init()))
        .pipe($.less())
        .pipe($.autoprefixer({
            browsers: config.styles.autoprefix            
        }))
        .pipe($.if(isProduction, $.minifyCss()))
        .pipe($.if(!isProduction, $.sourcemaps.write()))
        .pipe(gulp.dest(config.styles.dest))
        .pipe($.if(!isProduction, $.livereload()));        
    };
}
