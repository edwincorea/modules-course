"use strict";

System.register([], function (_export, _context) {
    var _createClass, _first, _last, _id, User;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [],
        execute: function () {
            _createClass = function () {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }

                return function (Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);
                    if (staticProps) defineProperties(Constructor, staticProps);
                    return Constructor;
                };
            }();

            _first = Symbol("first");
            _last = Symbol("last");
            _id = Symbol("id");

            _export("User", User = function () {
                _createClass(User, [{
                    key: "id",
                    get: function get() {
                        return this[_id];
                    }
                }, {
                    key: "first",
                    get: function get() {
                        return this[_first];
                    }
                }, {
                    key: "last",
                    get: function get() {
                        return this[_last];
                    }
                }]);

                //constructor

                function User(id, first, last) {
                    _classCallCheck(this, User);

                    this[_id] = id;
                    this[_first] = first;
                    this[_last] = last;
                }

                //method


                _createClass(User, [{
                    key: "toString",
                    value: function toString() {
                        return this.id + ": " + this.first + " " + this.last;
                    }
                }]);

                return User;
            }());

            _export("User", User);
        }
    };
});