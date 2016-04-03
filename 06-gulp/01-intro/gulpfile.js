//import gulp API
var gulp = require("gulp")
    babel = require("gulp-babel");

//define a default task. When we call gulp with no parameters, this task will be run.
// gulp.task("default", (callback) => {
//     console.log("Hello, Gulp!");    
    
//     //Gulp by nature is async and works using streams. If a task does not return a stream object,
//     //Gulp never gets notified that the task did complete. 
//     setTimeout(callback, 1000);    
// });

gulp.task("default", () => {
    return gulp
        .src("./src/scripts/**/*.js")
        .pipe(babel())
        .pipe(gulp.dest("./public/scripts"));    
});