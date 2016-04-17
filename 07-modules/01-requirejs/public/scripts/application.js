define(["./models/users-store", "./controllers/users-controller", "./lib/util"], function (_usersStore, _usersController, _util) {
  "use strict";

  var _usersController2 = _interopRequireDefault(_usersController);

  var util = _interopRequireWildcard(_util);

  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    } else {
      var newObj = {};

      if (obj != null) {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
        }
      }

      newObj.default = obj;
      return newObj;
    }
  }

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  //import everything from util module
  //import "./script"; //import a single script

  //https://developer.mozilla.org/en/docs/web/javascript/reference/statements/import
  //https://developer.mozilla.org/en/docs/web/javascript/reference/statements/export

  //import a specific class from users-store module
  console.log("Loading application"); //import a default function from users-controller module


  var store = new _usersStore.UsersStore();
  var $mount = $("#mount");
  (0, _usersController2.default)($mount, store);

  //UsersController();
  //util.func1();
  //util.func2();
});