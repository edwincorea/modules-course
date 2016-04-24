"use strict";

var gulp = require("gulp"),
    $ = require("gulp-load-plugins")(),
    webpack = require("webpack"),
    webpackConfig = require("../webpack.config"),
    WebpackDevServer = require("webpack-dev-server"); //classes are written in Pascal case
    
//webpack doesn't work with streams. We create compilers wich run a gulp callback on success.

gulp.task("dev", (callback) => {
    const compiler = webpack(createDevConfig());
    compiler.run((err, stats) => {
        if(err){
            console.log(err);
            return;
        }
        
        //stats is an object which contain build stats.
        //Colors give a nice formatting of stats. We don't want stats for default components, though.
        console.log(stats.toString({
            colors: true,
            exclude: ["node_modules", "bower_components", "jam", "components"]
        }));
        callback();                
    });    
});

gulp.task("dev:watch", () => {
    const config = createDevConfig();
    
    //mutate config here
    config.output.publicPath = "http://localhost:8081/";
    const compiler = webpack(config);
    const devServer = new WebpackDevServer(compiler, {
        inline: true,
        stats: {
            colors: true,
            exclude: ["node_modules", "bower_components", "jam", "components"]            
        }        
    });
    
    devServer.listen(8081, "localhost", () => {
        console.log("Dev server started");
    });    
});
    
gulp.task("default", gulp.series("dev"));

function createDevConfig(){
    const config = webpackConfig.clone();
    //put dev-only stuff here
    return config;    
}
