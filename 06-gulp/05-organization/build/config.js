module.exports = {
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