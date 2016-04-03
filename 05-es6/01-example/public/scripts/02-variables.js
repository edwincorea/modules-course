"use strict";

//self executing function to keep namespace clean
(function () {
    //** Let
    function func1() {
        //1. let allows us to avoid redeclaring variables. With var we don't get an error.

        //var x = 10;
        //var x = 20;

        //let a = 10;
        //let a = 20;

        //2. let has block scoping (i.e. C#).
        if (true) {
            var ok = "sure";
        }

        if (true) {
            var _ok = "yay"; //no error
        }
    }

    //3. Scoping issues. 10 printed 10 times because 'var' are scoped to the current function.
    //We use 'let' and the concept of block scoped variables.
    // for(var i = 0; i < 10; i++){
    //     window.setTimeout(() => {
    //         console.log(i);
    //     }, 500);
    // }

    //to solve with var using local scoped closures for every iteration, but very nasty code...
    // for (var i = 0; i < 10; i++) {
    //     (j => {
    //         window.setTimeout(() => {
    //             console.log(j);
    //         }, 500);           
    //     })(i);
    // }

    //to solve with let!
    // for(let i = 0; i < 10; i++){
    //     window.setTimeout(() => {
    //         console.log(i);
    //     }, 500);
    // }           

    //4. Source of many bugs. It just silently shows undefined, not an error.
    // console.log(notDefinedYet);
    // var notDefinedYet = 10;

    //'let' does not allows to do that
    // console.log(letDefined);
    // let letDefined = 10;

    //** Const: just like 'let' but the variable value cannot be reassigned. It's a constant.
    var thing = 10;
    console.log(thing);
    //thing = 20; // not allowed for const

    //but... const doesn't prevent from mutating an object
    var obj = { name: "name1" };
    obj.name = "name2"; //this is allowed
})();