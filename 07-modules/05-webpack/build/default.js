"use strict";

var gulp = require("gulp"),
    $ = require("gulp-load-plugins")(),
    webpack = require("webpack"),
    webpackConfig = require("../webpack.config"),
    WebpackDevServer = require("webpack-dev-server"),
    ExtractTextPlugin = require("extract-text-webpack-plugin"); //classes are written in Pascal case
    
//webpack doesn't work with streams. We create compilers wich run a gulp callback on success.

gulp.task("dev", (callback) => runWebpack(createDevConfig(), callback));

gulp.task("prod", (callback) => runWebpack(createProConfig(), callback));

gulp.task("dev:watch", () => {
    const config = createDevConfig();
    
    //mutate config here
    config.output.publicPath = "http://localhost:8081/";
    config.plugins.push(new webpack.HotModuleReplacementPlugin());
    
    for(let entryName in config.entry){
        if(!config.entry.hasOwnProperty(entryName))
            continue;
        
        let entryItems = config.entry[entryName];
        if (typeof(entryItems) === "string")
            entryItems = config.entry[entryName] = [entryItems];
        
        entryItems.splice(0, 0, "webpack-dev-server/client", "webpack/hot/only-dev-server");
    }
    
    const compiler = webpack(config);
    const devServer = new WebpackDevServer(compiler, {
        hot: true, //enable hot module replacement
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

function runWebpack(config, callback){
    const compiler = webpack(config);
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
}

function createDevConfig(){
    const config = webpackConfig.clone();
    
    //source-map is slow but the best option for production. 
    //eval-source-map has faster performance on watch rebuilds on dev.
    //cheap-module-eval-source-map has the best performance on dev, but won't display column number of error.
    config.devtool = "cheap-module-eval-source-map";
    //define a variable for conditional logic based on environment 
    config.plugins.push(new webpack.DefinePlugin({
        env: '"dev"'
    }));
    
    //put dev-only stuff here
    return config;    
}


function createProConfig(){
    const config = webpackConfig.clone();
    
    //source-map for production        
    config.devtool = "source-map";
    //minification
    config.plugins.push(new webpack.optimize.UglifyJsPlugin());
    config.plugins.push(new webpack.DefinePlugin({
        env: '"prod"'
    }));
    //extract all CSS into a custom css file and place it in index.html for caching.
    config.plugins.push(new ExtractTextPlugin("[name].css")); //name of the chunk
    //feed plugin into css loaders
    config.module.loaders[1].loader = ExtractTextPlugin.extract("css-loader!less-loader");
    config.module.loaders[2].loader = ExtractTextPlugin.extract("css-loader");
            
    return config;    
}
