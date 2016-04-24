//commonjs module
 
var amd = require("./amd");

//First approach:
//using a webpack loader to process CSS: css-loader.
//var css = require("css!../styles/site.css"); //shorthand css!

//Second approach:
//Not particullarly useful because it loads CSS as an array in the Javascript.
//We are going to use style-loader instead. It's responsible for parsing the CSS and resolve dependencies of other CSS and images.
//reads right to left: first css! then style!
//var css = require("style!css!../styles/site.css");
//console.log(css);

//Third approach: set up webpack.config.js to load css for all files which match regex expression (.css)
var css = require("../styles/site.css");

//import legacy misbehave module 
//var badModule = require("./test-bad");
//it won't export module functions. To do that, we use exports!
//var badModule = require("exports?doSomething&doSomethingElse!./test-bad"); //export with param doSomething function and apply to test-bad
//badModule(); //this throws an error because we haven't imported jquery, yet 
//console.log(badModule); 

//... so we import jquery
// var badModule = require("imports?$=jquery!exports?doSomething&doSomethingElse!./test-bad"); //export with param doSomething function and apply to test-bad
// console.log(badModule);
// badModule.doSomething();

//...now let's bring all of this URL-like line into webpack.config 
var badModule = require("./test-bad"); //export with param doSomething function and apply to test-bad
console.log(badModule);
badModule.doSomething();

console.log("Hei!!!");