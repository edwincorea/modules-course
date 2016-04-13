module.exports = {
    styles: {
        src: ["./src/styles/site.less"],
        dest: "./public/styles/",
        srcDirectory: ["./src/styles/**/*.{less,css}"]
    },
    scripts: {
        src: ["./src/scripts/**/*.js"],
        dest: "./public/scripts"
    }
};