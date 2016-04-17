var gulp = require("gulp"),
    $ = require("gulp-load-plugins")(),
    config = require('./config');
    
//special cases because they live in another file
require("./scripts");    
require("./styles");

gulp.task("dev", gulp.parallel("dev:scripts", "dev:styles"));

gulp.task("dev:watch", gulp.series(
    "dev",
    () => {
        //add live reload capabilities using gulp-livereload and Chrome livereload extension
        $.livereload.listen(); //start livereload server
        
        gulp.watch("./src/styles/**/*.{less,css}", gulp.series("dev:styles"));
        gulp.watch("./src/scripts/**/*.js", gulp.series("dev:scripts"));
    }    
));
    
gulp.task("default", gulp.series("dev"));

