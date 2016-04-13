"use strict";

System.register([], function (_export, _context) {
    return {
        setters: [],
        execute: function () {
            function func1() {
                console.log("func1");
            }

            _export("func1", func1);

            function func2() {
                console.log("func2");
            }

            _export("func2", func2);
        }
    };
});