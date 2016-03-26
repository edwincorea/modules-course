//var calc = require("./calculator")
var add = require("./calculator").add,    
    sub = require("./calculator").sub,
    service = require("./services/service")
    stuff = require("./services");

var result = add(10, 20);
console.log(result);

var result = sub(30, 10);
console.log(result);

console.log(service);

console.log(stuff);
