var gulp = require("gulp"),
    $ = require("gulp-load-plugins")();
    
//define a task in gulp 3
//no gulp.series and gulp.parallel available
//no tasks using a defined function
//no warning when we don't return a stream or call a callback in a task, so be careful... 
gulp.task("dev:scripts", () => {
    return gulp
        .src("./src/scripts/**/*.js") //this opens the stream, pipe everything after it, not before...
        .pipe($.plumber({
            errorHandler(err){
                console.error(err);
                this.emit("end");
            } 
        })) //fix error on watch        
        .pipe($.babel())
        .pipe(gulp.dest("./public/assets"));        
});

gulp.task("dev:styles", styles);

//alternative of gulp3 for parallel
gulp.task("dev", ["dev:styles", "dev:scripts"], () => {
    console.log("Done Dev tasks...");
});

gulp.task("watch", ["dev"], () => {
    gulp.watch("./src/styles/site.less", ["dev:styles"]);
    gulp.watch("./src/scripts/**/*.js", ["dev:scripts"]);
});    

function styles(){
    return gulp
        .src("./src/styles/site.less")
        .pipe($.plumber({
            errorHandler(err){
                console.error(err);
                this.emit("end");
            } 
        })) //fix error on watch
        .pipe($.less())
        .pipe(gulp.dest("./public/assets"));
}

//monkey patch fix for watch task on Gulp 3, 
//exiting after errors on less or js retranspiling...
//the stream dies and exits our watch task

