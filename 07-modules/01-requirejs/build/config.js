module.exports = {
    styles: {
        dev: {
            src: ["./src/styles/site.less"],
            dest: "./public/styles/",
            srcDirectory: ["./src/styles/**/*.{less,css}"]            
        }
    },
    scripts: {
        dev: {
            src: ["./src/scripts/**/*.js"],
            dest: "./public/scripts/",            
        },
        prod: {
            //public src to be optimized...
            src: ["./public/scripts/*.js", "!./public/scripts/_*.js"], //exclusion patterns: !
            dest: "./public/build/",
            srcVendor: "./public/scripts/_vendor.js",
            requireOptimizerOptions: {
                mainConfigFile: "./public/config.js"
            },
            //refactor common modules out such they can be cached by browser 
            vendor: ["jquery", "jquery-ui", "lodash"]
        }
    }
};