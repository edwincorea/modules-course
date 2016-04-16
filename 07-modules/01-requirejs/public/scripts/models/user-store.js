define(["exports", "lodash", "./user"], function (exports, _lodash, _user) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.UserStore = undefined;

    var _lodash2 = _interopRequireDefault(_lodash);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _createClass = function () {
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

    //private fields
    var _users = Symbol("users");

    var UserStore = exports.UserStore = function () {
        _createClass(UserStore, [{
            key: "users",

            //public properties
            get: function get() {
                return this[_users].slice();
            }
        }]);

        function UserStore() {
            _classCallCheck(this, UserStore);

            this[_users] = [new User(1, "Jon", "Doe"), new User(1, "Joan", "Doe")];
        }

        _createClass(UserStore, [{
            key: "add",
            value: function add(first, last) {
                //we don't use this.users() because we need to access the private field
                var nextId = _lodash2.default.max(this[_users], function (u) {
                    return u.id;
                }).id + 1;
                var user = new User(nextId, first, last);

                //push it into our internal memory "database"
                this[_users].push(user);
                return user;
            }
        }, {
            key: "remove",
            value: function remove(id) {
                _lodash2.default.remove(this[_users], function (u) {
                    return u.id == id;
                });
            }
        }]);

        return UserStore;
    }();
});