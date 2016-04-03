"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//self executing function to keep namespace clean
(function () {
    //A enumerable class

    //a private field
    var _generator = Symbol("generator");

    var Enumerable = function () {
        function Enumerable(generator) {
            _classCallCheck(this, Enumerable);

            this[_generator] = generator;
        }

        _createClass(Enumerable, [{
            key: "where",
            value: function where(predicate) {
                //aliasing out generator
                var wrappedGenerator = this[_generator];
                //instatiating new enumerable
                return new Enumerable(regeneratorRuntime.mark(function _callee() {
                    var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, item;

                    return regeneratorRuntime.wrap(function _callee$(_context) {
                        while (1) {
                            switch (_context.prev = _context.next) {
                                case 0:
                                    _iteratorNormalCompletion = true;
                                    _didIteratorError = false;
                                    _iteratorError = undefined;
                                    _context.prev = 3;
                                    _iterator = wrappedGenerator()[Symbol.iterator]();

                                case 5:
                                    if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                                        _context.next = 14;
                                        break;
                                    }

                                    item = _step.value;

                                    if (predicate(item)) {
                                        _context.next = 9;
                                        break;
                                    }

                                    return _context.abrupt("continue", 11);

                                case 9:
                                    _context.next = 11;
                                    return item;

                                case 11:
                                    _iteratorNormalCompletion = true;
                                    _context.next = 5;
                                    break;

                                case 14:
                                    _context.next = 20;
                                    break;

                                case 16:
                                    _context.prev = 16;
                                    _context.t0 = _context["catch"](3);
                                    _didIteratorError = true;
                                    _iteratorError = _context.t0;

                                case 20:
                                    _context.prev = 20;
                                    _context.prev = 21;

                                    if (!_iteratorNormalCompletion && _iterator.return) {
                                        _iterator.return();
                                    }

                                case 23:
                                    _context.prev = 23;

                                    if (!_didIteratorError) {
                                        _context.next = 26;
                                        break;
                                    }

                                    throw _iteratorError;

                                case 26:
                                    return _context.finish(23);

                                case 27:
                                    return _context.finish(20);

                                case 28:
                                case "end":
                                    return _context.stop();
                            }
                        }
                    }, _callee, this, [[3, 16, 20, 28], [21,, 23, 27]]);
                }));
            }

            //select is a map on items of enumerable

        }, {
            key: "select",
            value: function select(projection) {
                //aliasing out generator
                var wrappedGenerator = this[_generator];
                //instatiating new enumerable
                return new Enumerable(regeneratorRuntime.mark(function _callee2() {
                    var _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, item;

                    return regeneratorRuntime.wrap(function _callee2$(_context2) {
                        while (1) {
                            switch (_context2.prev = _context2.next) {
                                case 0:
                                    _iteratorNormalCompletion2 = true;
                                    _didIteratorError2 = false;
                                    _iteratorError2 = undefined;
                                    _context2.prev = 3;
                                    _iterator2 = wrappedGenerator()[Symbol.iterator]();

                                case 5:
                                    if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
                                        _context2.next = 12;
                                        break;
                                    }

                                    item = _step2.value;
                                    _context2.next = 9;
                                    return projection(item);

                                case 9:
                                    _iteratorNormalCompletion2 = true;
                                    _context2.next = 5;
                                    break;

                                case 12:
                                    _context2.next = 18;
                                    break;

                                case 14:
                                    _context2.prev = 14;
                                    _context2.t0 = _context2["catch"](3);
                                    _didIteratorError2 = true;
                                    _iteratorError2 = _context2.t0;

                                case 18:
                                    _context2.prev = 18;
                                    _context2.prev = 19;

                                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
                                        _iterator2.return();
                                    }

                                case 21:
                                    _context2.prev = 21;

                                    if (!_didIteratorError2) {
                                        _context2.next = 24;
                                        break;
                                    }

                                    throw _iteratorError2;

                                case 24:
                                    return _context2.finish(21);

                                case 25:
                                    return _context2.finish(18);

                                case 26:
                                case "end":
                                    return _context2.stop();
                            }
                        }
                    }, _callee2, this, [[3, 14, 18, 26], [19,, 21, 25]]);
                }));
            }
        }, {
            key: "take",
            value: function take(number) {
                //aliasing out generator
                var wrappedGenerator = this[_generator];
                //instatiating new enumerable
                return new Enumerable(regeneratorRuntime.mark(function _callee3() {
                    var index, _iteratorNormalCompletion3, _didIteratorError3, _iteratorError3, _iterator3, _step3, item;

                    return regeneratorRuntime.wrap(function _callee3$(_context3) {
                        while (1) {
                            switch (_context3.prev = _context3.next) {
                                case 0:
                                    index = 0;
                                    _iteratorNormalCompletion3 = true;
                                    _didIteratorError3 = false;
                                    _iteratorError3 = undefined;
                                    _context3.prev = 4;
                                    _iterator3 = wrappedGenerator()[Symbol.iterator]();

                                case 6:
                                    if (_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done) {
                                        _context3.next = 15;
                                        break;
                                    }

                                    item = _step3.value;

                                    if (!(index++ >= number)) {
                                        _context3.next = 10;
                                        break;
                                    }

                                    return _context3.abrupt("break", 15);

                                case 10:
                                    _context3.next = 12;
                                    return item;

                                case 12:
                                    _iteratorNormalCompletion3 = true;
                                    _context3.next = 6;
                                    break;

                                case 15:
                                    _context3.next = 21;
                                    break;

                                case 17:
                                    _context3.prev = 17;
                                    _context3.t0 = _context3["catch"](4);
                                    _didIteratorError3 = true;
                                    _iteratorError3 = _context3.t0;

                                case 21:
                                    _context3.prev = 21;
                                    _context3.prev = 22;

                                    if (!_iteratorNormalCompletion3 && _iterator3.return) {
                                        _iterator3.return();
                                    }

                                case 24:
                                    _context3.prev = 24;

                                    if (!_didIteratorError3) {
                                        _context3.next = 27;
                                        break;
                                    }

                                    throw _iteratorError3;

                                case 27:
                                    return _context3.finish(24);

                                case 28:
                                    return _context3.finish(21);

                                case 29:
                                case "end":
                                    return _context3.stop();
                            }
                        }
                    }, _callee3, this, [[4, 17, 21, 29], [22,, 24, 28]]);
                }));
            }

            //asterisk denotes this function is a generator to use yield

        }, {
            key: Symbol.iterator,
            value: regeneratorRuntime.mark(function value() {
                var _iteratorNormalCompletion4, _didIteratorError4, _iteratorError4, _iterator4, _step4, item;

                return regeneratorRuntime.wrap(function value$(_context4) {
                    while (1) {
                        switch (_context4.prev = _context4.next) {
                            case 0:
                                //wrapping generator and invoking it
                                _iteratorNormalCompletion4 = true;
                                _didIteratorError4 = false;
                                _iteratorError4 = undefined;
                                _context4.prev = 3;
                                _iterator4 = this[_generator]()[Symbol.iterator]();

                            case 5:
                                if (_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done) {
                                    _context4.next = 12;
                                    break;
                                }

                                item = _step4.value;
                                _context4.next = 9;
                                return item;

                            case 9:
                                _iteratorNormalCompletion4 = true;
                                _context4.next = 5;
                                break;

                            case 12:
                                _context4.next = 18;
                                break;

                            case 14:
                                _context4.prev = 14;
                                _context4.t0 = _context4["catch"](3);
                                _didIteratorError4 = true;
                                _iteratorError4 = _context4.t0;

                            case 18:
                                _context4.prev = 18;
                                _context4.prev = 19;

                                if (!_iteratorNormalCompletion4 && _iterator4.return) {
                                    _iterator4.return();
                                }

                            case 21:
                                _context4.prev = 21;

                                if (!_didIteratorError4) {
                                    _context4.next = 24;
                                    break;
                                }

                                throw _iteratorError4;

                            case 24:
                                return _context4.finish(21);

                            case 25:
                                return _context4.finish(18);

                            case 26:
                            case "end":
                                return _context4.stop();
                        }
                    }
                }, value, this, [[3, 14, 18, 26], [19,, 21, 25]]);
            })
        }]);

        return Enumerable;
    }();

    //subclass


    var ObjectEnumerable = function (_Enumerable) {
        _inherits(ObjectEnumerable, _Enumerable);

        function ObjectEnumerable(obj) {
            _classCallCheck(this, ObjectEnumerable);

            return _possibleConstructorReturn(this, Object.getPrototypeOf(ObjectEnumerable).call(this, function () {
                return obj;
            }));
        }

        return ObjectEnumerable;
    }(Enumerable);

    var array = [1, 2, 3, 4, 5, 6, 7, 8];
    var enumerable = new ObjectEnumerable(array);

    // for(let item of enumerable){
    //     console.log(item);
    // }

    // for(let item of enumerable.where(item => item < 5)){
    //     console.log(item);
    // }

    // for(let item of enumerable.where(item => item < 5).select(item => item * item)){
    //     console.log(item);
    // }

    var fibEnumerable = new Enumerable(regeneratorRuntime.mark(function _callee4() {
        var last1, last2, current;
        return regeneratorRuntime.wrap(function _callee4$(_context5) {
            while (1) {
                switch (_context5.prev = _context5.next) {
                    case 0:
                        last1 = 1, last2 = 1;

                    case 1:
                        if (!true) {
                            _context5.next = 9;
                            break;
                        }

                        current = last2;

                        last2 = last1;
                        last1 += current;
                        _context5.next = 7;
                        return current;

                    case 7:
                        _context5.next = 1;
                        break;

                    case 9:
                    case "end":
                        return _context5.stop();
                }
            }
        }, _callee4, this);
    }));

    // for(let item of fibEnumerable.select(item => item * item).take(15)){
    //     console.log(item);
    // }

    var elements = new ObjectEnumerable(document.querySelectorAll("script")).where(function (i) {
        return i.src.indexOf("vendor") != -1;
    }).select(function (i) {
        return i.src;
    });

    var _iteratorNormalCompletion5 = true;
    var _didIteratorError5 = false;
    var _iteratorError5 = undefined;

    try {
        for (var _iterator5 = elements[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
            var item = _step5.value;

            console.log(item);
        }
    } catch (err) {
        _didIteratorError5 = true;
        _iteratorError5 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion5 && _iterator5.return) {
                _iterator5.return();
            }
        } finally {
            if (_didIteratorError5) {
                throw _iteratorError5;
            }
        }
    }
})();