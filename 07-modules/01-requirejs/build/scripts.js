var gulp = require("gulp"),
    $ = require("gulp-load-plugins")(),
    config = require('./config');

gulp.task("dev:scripts", () => {
    return gulp
        .src(config.scripts.dev.src)
        .pipe($.babel())
        .pipe(gulp.dest(config.scripts.dev.dest))
        .pipe($.livereload());
});

gulp.task("prod:scripts", gulp.series(
    "dev:scripts",
    gulp.parallel(
        function vendorBundle() {
            const prodConfig = config.scripts.prod;
            return gulp
                .src(prodConfig.srcVendor)
                .pipe($.requirejsOptimize({
                    mainConfigFile: prodConfig.requireOptimizerOptions.mainConfigFile,
                    include: prodConfig.vendor,
                    baseUrl: "./public/scripts"
                }))
                .pipe(gulp.dest(prodConfig.dest));            
        },
        function modulesBundle() {
            const prodConfig = config.scripts.prod;
            return gulp
                .src(prodConfig.src)
                .pipe($.requirejsOptimize({
                    mainConfigFile: prodConfig.requireOptimizerOptions.mainConfigFile,
                    exclude: prodConfig.vendor
                }))
                .pipe(gulp.dest(prodConfig.dest));
        }        
    )
));