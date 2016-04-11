//import gulp API
var gulp = require("gulp"),
    babel = require("gulp-babel"),
    less = require("gulp-less");

//define a default task. When we call gulp with no parameters, this task will be run.
// gulp.task("default", (callback) => {
//     console.log("Hello, Gulp!");    
    
//     //Gulp by nature is async and works using streams. If a task does not return a stream object,
//     //Gulp never gets notified that the task did complete. 
//     setTimeout(callback, 1000);    
// });

//it's a convention that default task compiles all assets: i.e.: js, jsx and less files.

gulp.task("dev:styles", devStyles);
gulp.task("dev:scripts", devScripts);


//use gulp.series to specify a series of steps to be performed sequentially, 
//i.e.: first clean, then compile scripts and finally compile less files.
//the downside of series: it is synchronous    
//gulp.task("default", gulp.series(clean, devStyles, devScripts));
//we might use async parallel. But we have to solve race conditions such as cleaning and generating files.
//gulp.task("default", gulp.parallel(clean, devStyles, devScripts));
//solution: combine series and parallel
gulp.task("default",
    gulp.series(
        clean, 
        gulp.parallel(
            devStyles, //this is a private task, could be written like this to make it public: 'dev:styles'
            devScripts),
        publish));

function devStyles(){
    return gulp
        .src("./src/styles/site.less")
        .pipe(less())
        .pipe(gulp.dest("./public/styles"));
}

function devScripts(){
    return gulp
        .src("./src/scripts/**/*.js")
        .pipe(babel())
        .pipe(gulp.dest("./public/scripts"));    
}

function clean(c){
    setTimeout(() => {
        console.log("Cleaned!");
        c();        
    }, 1000);
}

function publish(c){
    setTimeout(() => {
        console.log("Published!");
        c();        
    }, 1000);
}