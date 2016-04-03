"use strict";

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

//self executing function to keep namespace clean
(function () {
    //deconstructing is extracting values from objects or arrays in a super compact way...
    var person = {
        name: { first: "Edwin", last: "Corea" },
        roles: ["admin"],
        isActive: true
    };

    var printPerson = function printPerson(person) {
        //we have an object and want to access potentially deeply nested properties, so we alias them out to variables.
        //we this is very tiring...
        var roles = person.roles;
        var firstName = person.name.first;
        var lastName = person.name.last;

        console.log(roles);
        console.log(roles.length);

        console.log([firstName, lastName]);
    };

    var printPerson2 = function printPerson2(person) {
        //... so es2015 solution is: deconstructing the object. New syntax.
        //extracting out the roles property of person object and assigning it to a local variable called roles
        // const {roles} = person; 
        // console.log(roles);
        // console.log(roles.length);

        //we can deconstruct many properties at once and nest the deconstruction using ':', too.
        var _person$name = person.name;
        var first = _person$name.first;
        var last = _person$name.last;
        var roles = person.roles;

        console.log(roles);
        console.log(roles.length);

        console.log(first);
        console.log(last);
    };

    var printPerson3 = function printPerson3(greeting, _ref) {
        var _ref$name = _ref.name;
        var first = _ref$name.first;
        var last = _ref$name.last;
        var roles = _ref.roles;

        //deconstructing also works in function parameters
        console.log(roles);
        console.log(roles.length);

        console.log(greeting + ": " + first + " " + last);
    };

    //printPerson3('Hi', person);
    //["admin"]
    //1
    //Hi: Edwin Corea

    var point = { x: 1, y: 24 };
    function translate(_ref2, amount) {
        var x = _ref2.x;
        var y = _ref2.y;

        return { x: x + amount, y: y + amount };
    }

    //console.log(translate(point, 20)); //Object {x: 21, y: 44}

    var _translate = translate(point, 10);

    var x = _translate.x;
    var y = _translate.y;


    function getTrack() {
        return { title: "Track 1", lengthInSeconds: 30 };
    }

    //defaultvalue for  description

    var _getTrack = getTrack();

    var title = _getTrack.title;
    var lengthInSeconds = _getTrack.lengthInSeconds;
    var _getTrack$description = _getTrack.description;
    var description = _getTrack$description === undefined ? "No desc found" : _getTrack$description;

    //Now, deconstructing arrays...

    var array = [1, 2, 3, 4, 5, 6, 7];

    //Three ways to deconstruct an array:
    //1. first n continuous items
    var firstNum = array[0];
    var secondNum = array[1];
    var thirdNum = array[2];

    //2.skip some items

    var x1 = array[0];
    var y1 = array[1];
    var z1 = array[3];

    //3. using spread operator (...) Es como el cdr de LISP.

    var head1 = array[0];
    var head2 = array[1];
    var rest = array.slice(2);


    function sum(array) {
        if (!array.length) return 0;

        //car y cdr de la lista

        var _array = _toArray(array);

        var head = _array[0];

        var tail = _array.slice(1);

        return head + sum(tail);
    }

    //console.log(sum(array)); //28

    //Another es2015 feat.: swapping variables.
    var left = 10;
    var right = 20;

    //Another es2015 feat.: default parameters
    var _ref3 = [right, left];
    left = _ref3[0];
    right = _ref3[1];
    var withDefaults = function withDefaults(person) {
        var output = arguments.length <= 1 || arguments[1] === undefined ? "name" : arguments[1];
        var options = arguments.length <= 2 || arguments[2] === undefined ? { verbose: true } : arguments[2];

        console.log([person, output, options]);
    };

    withDefaults(person);
    withDefaults(person, "isActive", { debug: true });
})();