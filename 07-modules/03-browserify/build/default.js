var gulp = require("gulp"),
    $ = require("gulp-load-plugins")(),
    watchify = require("watchify"),
    source = require("vinyl-source-stream"),
    buffer = require("vinyl-buffer"),    
    config = require('./config');
    
//special cases because they live in another file
require("./scripts");
require("./styles");
var createBundler = require("./scripts").createBundler;

gulp.task("dev", gulp.parallel("dev:scripts", "dev:styles"));

//we are using watchify for this task
// gulp.task("dev:watch", gulp.series(
//     "dev",
//     () => {
//         //add live reload capabilities using gulp-livereload and Chrome livereload extension
//         $.livereload.listen(); //start livereload server
        
//         gulp.watch("./src/styles/**/*.{less,css}", gulp.series("dev:styles"));
//         gulp.watch("./src/scripts/**/*.js", gulp.series("dev:scripts"));
//     }   
// ));

gulp.task("dev:watch", gulp.series(
    "dev:styles",
    () => {
        //add live reload capabilities using gulp-livereload and Chrome livereload extension
        $.livereload.listen(); //start livereload server
        
        gulp.watch("./src/styles/**/*.{less,css}", gulp.series("dev:styles"));
        //gulp.watch("./src/scripts/**/*.js", gulp.series("dev:scripts"));
        const bundler = createBundler(true);
        
        function buildBundle() {
            return bundler.bundle()
                .pipe(source(config.scripts.dev.bundleFile))
                .pipe(buffer())
                .pipe(gulp.dest(config.scripts.dev.dest))
                .pipe($.livereload());
        }        
        
        const watcher = watchify(bundler);
        watcher.on("update", () => {
            console.log("Building...");
            buildBundle();
        });
        
        watcher.on("time", (builtTimeInMilliseconds) => {
            console.log(`Built in ${builtTimeInMilliseconds}`);
        });  
        
        buildBundle();
    }
));
            
gulp.task("default", gulp.series("dev"));

