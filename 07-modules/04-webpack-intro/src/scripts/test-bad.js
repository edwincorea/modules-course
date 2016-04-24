// a sample misbehaving module, not a commonjs third party module
// we use imports-loader and exports-loader
//https://github.com/webpack/docs/wiki/shimming-modules

function doSomething(){
    $("<p>Bad legacy module</p>").appendTo($("body"));
} 

function doSomethingElse(){
    $("<p>Bad legacy module 2</p>").appendTo($("body"));
} 