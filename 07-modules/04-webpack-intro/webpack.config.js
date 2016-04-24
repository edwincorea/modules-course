var path = require("path");

module.exports = {
    entry: "./src/scripts/index.js", //app entry point
    output: {
        path: path.join(__dirname, "public", "build"),
        filename: "app.js"
    },
    module: {
        loaders: [
            { test: /\.css/, loader: "style!css" },
            //{ test: /test-bad\.js$/, loader: "imports?$=jquery!exports?doSomething&doSomethingElse"}
            { 
                test: path.resolve("./src/scripts/test-bad.js"), 
                loaders: [
                    "imports?$=jquery",
                    "exports?doSomething&doSomethingElse"]
            }
        ]
    }
};
    