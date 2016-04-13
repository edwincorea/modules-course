"use strict";

System.register(["./models/users-store", "./controllers/users-controller", "./lib/util", "./script"], function (_export, _context) {
  var UserStore, usersController, util, store;
  return {
    setters: [function (_modelsUsersStore) {
      UserStore = _modelsUsersStore.UserStore;
    }, function (_controllersUsersController) {
      usersController = _controllersUsersController.default;
    }, function (_libUtil) {
      util = _libUtil;
    }, function (_script) {}],
    execute: function () {
      store = new UserStore();
    }
  };
});