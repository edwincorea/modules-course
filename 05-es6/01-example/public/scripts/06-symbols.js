"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//self executing function to keep namespace clean
(function () {
    var _person;

    //a symbol is a way to prevent other objects from accesing certain properties from our objects. Private fields!
    //the old way to prevent accesing and changing a variables was...
    // function myThing(){
    //     var localVar = 10;

    //     return {
    //         print() {
    //             console.log(localVar);
    //         }           
    //     };
    // }

    //es2015 symbols
    //Everytime you invoke the Symbol constructor, you get a new object
    var mySymbol = Symbol("mySymbol");
    var mySymbol2 = Symbol("mySymbol");

    //console.log(mySymbol == mySymbol2); //false

    var person = (_person = {}, _defineProperty(_person, mySymbol, "blegh"), _defineProperty(_person, "render", function render() {
        console.log(this[mySymbol]);
    }), _person);

    //person[mySymbol] = "blegh"
    //we can do this
    person.render(); //blegh
    //... BUT we are not allowed to do this
    //console.log(person.mySymbol); //undefined
    //console.log(person);

    //Another use: jquery object
    var myState = Symbol("plugin-x-state");
    $[myState] = "Custom value"; //no ther plugin will access this variable.

    //Another example
    var _firstName = Symbol("First Name");
    var _lastName = Symbol("Last Name");

    var Person = function () {
        _createClass(Person, [{
            key: "firstName",

            //there´s no way to edit those private fields (_firstName, _lastName) from outside file.
            //It's an encapsulation of data.
            get: function get() {
                return this[_firstName];
            }
        }, {
            key: "lastName",
            get: function get() {
                return this[_lastName];
            }
        }]);

        function Person(firstName, lastName) {
            _classCallCheck(this, Person);

            this[_firstName] = firstName;
            this[_lastName] = lastName;
        }

        return Person;
    }();
})();