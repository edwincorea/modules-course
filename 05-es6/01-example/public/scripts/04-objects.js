"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//self executing function to keep namespace clean
(function () {
    //object definition es2015 improvements

    function getPoint() {
        var x = 0;
        var y = 0;

        //compute x,y

        //es5
        //return {x: x, y: y};

        //es2015
        return { x: x, y: y };
    }

    var firstName = "Edwin";
    var person = {
        firstName: firstName,
        lastName: "Corea",

        //old way...
        // sayHello: function() {
        //     console.log(`${this.firstName} ${this.lastName}`);
        // }

        //an easier way to declare functions on an object...
        sayHello: function sayHello() {
            console.log(this.firstName + " " + this.lastName);
        },


        //also applies to properties
        get fullName() {
            return this.firstName + " " + this.lastName;
        }
    };

    //computed properties
    var thing = _defineProperty({
        prop1: "prop1"
    }, "thing-" + "other" + Math.random(), "prop2");
})();