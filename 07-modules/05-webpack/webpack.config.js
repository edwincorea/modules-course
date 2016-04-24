var path = require("path");

function config(){
    return {
        entry: {
            application: "./src/scripts/application",
            contact: "./src/scripts/contact"
        },
        output: {
            path: path.join(__dirname, "public/assets"),
            filename: "[name].js",
            publicPath: "/assets/"         
        },
        module: {
            loaders: [
                { test: /\.js/, loader: "babel", exclude: /node_modules/ },
                { test: /\.less/, loader: "style!css!less" }, //reads: compile less, read css and import it, include css into DOM
                { test: /\.css/, loader: "style!css" },
                { test: /\.(png|jpg|jpeg|gif|woff|ttf|eot|svg)/, loader: "url-loader?limit=5000" } //if less than 1Kb, inline it as Base64, otherwise as external resource 
            ]
        }
    };
}

module.exports = config(); //used for webpack command line config
module.exports.clone = config; //used for gulp tasks, avoid mutating config object