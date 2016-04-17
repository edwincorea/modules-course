module.exports = {
    styles: {
        dev: {
            src: ["./src/styles/site.less"],
            dest: "./public/styles/"            
        }
    },
    scripts: {
        dev: {
            src: ["./src/scripts/**/*.js"],
            dest: "./public/build/",            
            bundleFile: "bundle.js"
        },
        prod: {
            src: "",
            dest: "",
            bundleFile: "all.js"
        },
        browserifyMain: "./src/scripts/application.js",                
    }
};