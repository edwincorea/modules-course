var path = require("path");

module.exports = {
    entry: "./src/scripts/index.js", //app entry point
    output: {
        path: path.join(__dirname, "public", "build"),
        filename: "app.js"
    }
};
    