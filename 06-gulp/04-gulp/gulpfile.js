//import gulp API
// var gulp = require("gulp"),
//     babel = require("gulp-babel"),
//     less = require("gulp-less"),
//     sourcemaps = require("gulp-sourcemaps"), //mapping between source files and transpiled files for tracing errors
//     autoprefixer = require("gulp-autoprefixer");

//let's use gulp-load-plugins...
var gulp = require("gulp"),
    $ = require("gulp-load-plugins")(); //inmediately execute it

//clean up gulpfile
const config = {
    styles: {
        src: ["./src/styles/site.less"],
        dest: "./public/styles/",
        autoprefix: ["last 2 versions"],
        srcDirectory: ["./src/styles/**/*.{less,css}"]
    },
    scripts: {
        src: ["./src/scripts/**/*.js"],
        dest: "./public/scripts",
        bundle: "./app.js"
    }
};

gulp.task("dev:styles", styles(false));
gulp.task("dev:scripts", devScripts);
gulp.task("dev", gulp.parallel("dev:styles", "dev:scripts"));
gulp.task("dev:watch", gulp.series("dev", devWatch)); //first build task and then watch

gulp.task("prod:styles", styles(true)); //first approach: using a single method with gulp-if
gulp.task("prod:scripts", prodScripts); //second approach: have a method for every environment
gulp.task("prod", gulp.parallel("prod:styles", "prod:scripts"));
    
gulp.task("default", gulp.series("dev"));    

function devWatch(){
    //add live reload capabilities using gulp-livereload and Chrome livereload extension
    $.livereload.listen(); //start livereload server
    
    //add watch tasks for automatically recompile scripts and styles 
    gulp.watch(config.styles.srcDirectory, gulp.series("dev:styles"));
    gulp.watch(config.scripts.src, gulp.series("dev:scripts"));
}

function styles(isProduction){
    return () => {
        return gulp
        .src(config.styles.src)
        .pipe($.if(!isProduction, $.sourcemaps.init())) //only sourcemap on development
        //.pipe($.sourcemaps.init()) //source mapping: i.e.: original less files.
        .pipe($.less())
        .pipe($.autoprefixer({
            browsers: config.styles.autoprefix            
        })) //after less transpiling, we don't want to autoprefix less code.
        .pipe($.if(isProduction, $.minifyCss())) //minify css only for production
        .pipe($.if(!isProduction, $.sourcemaps.write())) //only sourcemap on development
        //.pipe($.sourcemaps.write())
        .pipe(gulp.dest(config.styles.dest))
        .pipe($.if(!isProduction, $.livereload()));//pipe livereload here after copying styles        
    };
}

function devScripts(){
    return gulp
        .src(config.scripts.src)
        .pipe($.sourcemaps.init()) //source mapping: i.e.: original js files.
        .pipe($.babel())
        .pipe($.sourcemaps.write("."))
        .pipe(gulp.dest(config.scripts.dest))    
        .pipe($.livereload());//pipe livereload here after copying scripts
}

//this task will concat all into a single app.js file and uglify (minify) it  
function prodScripts(){
    return gulp
        .src(config.scripts.src)
        .pipe($.babel())
        .pipe($.concat(config.scripts.bundle))//after babel transpiling
        .pipe($.uglify())//now minify app.js
        .pipe(gulp.dest(config.scripts.dest));        
}