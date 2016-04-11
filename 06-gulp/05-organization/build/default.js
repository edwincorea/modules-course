//organize by resource: styles, scripts. Another approach is organizing by environment.
var gulp = require("gulp"),
    $ = require("gulp-load-plugins")(),
    config = require('./config');
    
//special cases because they live in another file
require("./scripts");    
require("./styles");

gulp.task("prod", gulp.parallel("prod:styles", "prod:scripts"));

gulp.task("dev", gulp.parallel("dev:styles", "dev:scripts"));
gulp.task("dev:watch", gulp.series("dev", devWatch));
    
gulp.task("default", gulp.series("dev"));

function devWatch(){
    $.livereload.listen();
    
    gulp.watch(config.styles.srcDirectory, gulp.series("dev:styles"));
    gulp.watch(config.scripts.src, gulp.series("dev:scripts"));
}