var gulp = require("gulp"),
    $ = require("gulp-load-plugins")(),
    browserify = require("browserify"),
    babelify = require("babelify"),
    browserifyCss = require("browserify-css"),
    source = require("vinyl-source-stream"),
    buffer = require("vinyl-buffer"),
    fse = require("fs-extra"),
    path = require("path"),
    _ = require("lodash"),
    config = require('./config');

gulp.task("dev:scripts", () => {
    //we're not using the gulp babel plugin, but babelify instead
    /*
    return gulp
        .src(config.scripts.dev.src)
        .pipe($.babel())
        .pipe(gulp.dest(config.scripts.dev.dest))
        .pipe($.livereload());
    */
    
    return createBundler(true).bundle() //stream of text
        .pipe(source(config.scripts.dev.bundleFile)) //convert to vinyl fs object stream understood by gulp
        .pipe(buffer()) //optional if we want to do additional gulp tasks which require a buffer such as uglify
        .pipe(gulp.dest(config.scripts.dev.dest))
        .pipe($.livereload());            
});

gulp.task("prod:scripts", () => {
    return createBundler(false).bundle() //stream of text
        .pipe(source(config.scripts.prod.bundleFile)) //convert to vinyl fs object stream understood by gulp
        .pipe(buffer()) //required for prod because of uglify
        .pipe($.uglify()) 
        .pipe(gulp.dest(config.scripts.dev.dest));            
});

function createBundler(isDebug) {
    const bundler = browserify(config.scripts.browserifyMain, {
        debug: isDebug,
        cache: {},
        noParse: ["lodash", "jquery", "jquery-ui"] //no parse for required calls
    });
    
    bundler.transform(babelify);
    //we need to copy images to public folder as part of processing css
    bundler.transform(browserifyCss, {
        global: true, //so we can use node_module css files. Run browserifyCss globally.
        rootDir: "public", //the public folder is what's gonna be served out
        
        //rewriter of image relative path
        processRelativeUrl(relativePath){
            //console.log(relativePath);
            const rootDir = path.resolve(process.cwd(), "public"); //current working directory + /public
            //console.log([rootDir, relativePath]);
            const prefix = path.join("..", "node_modules");
            
            if(!_.startsWith(relativePath, prefix))
                return relativePath;
                
            const vendorUrl = "/vendor/" + relativePath.substring(prefix.length);
            const sourceFile = path.join(rootDir, relativePath);
            const destFile = path.join(rootDir, vendorUrl);
            
            //console.log(`${sourceFile} -> ${destFile}`);
            fse.copySync(sourceFile, destFile);   
            
            return vendorUrl;
        }            
    });    
    
    return bundler;
}

module.exports.createBundler = createBundler;