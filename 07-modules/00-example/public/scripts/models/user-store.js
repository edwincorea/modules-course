"use strict";

System.register(["./user"], function (_export, _context) {
    var user, UserStore;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [function (_user) {
            user = _user.user;
        }],
        execute: function () {
            _export("UserStore", UserStore = function UserStore() {
                _classCallCheck(this, UserStore);
            });

            _export("UserStore", UserStore);

            function debugStore(store) {
                console.log(store);
            }

            _export("debugStore", debugStore);
        }
    };
});