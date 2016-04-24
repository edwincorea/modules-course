//AMD style module
define(["./lib.js", "./es2015.js"], function(lib, es2015) {
    lib.func();
    console.log(es2015);
    es2015.func2();
});