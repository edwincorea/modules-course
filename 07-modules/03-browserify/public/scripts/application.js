"use strict";

System.register(["./models/users-store", "./controllers/users-controller", "./lib/util", "./script"], function (_export, _context) {
  var UsersStore, usersController, util, store, $mount;
  return {
    setters: [function (_modelsUsersStore) {
      UsersStore = _modelsUsersStore.UsersStore;
    }, function (_controllersUsersController) {
      usersController = _controllersUsersController.default;
    }, function (_libUtil) {
      util = _libUtil;
    }, function (_script) {}],
    execute: function () {
      //import a single script

      //https://developer.mozilla.org/en/docs/web/javascript/reference/statements/import
      //https://developer.mozilla.org/en/docs/web/javascript/reference/statements/export

      //import a default function from users-controller module
      console.log("Loading application"); //import everything from util module
      //import a specific class from users-store module


      store = new UsersStore();
      $mount = $("#mount");

      usersController($mount, store);

      //usersController();
      //util.func1();
      //util.func2();
    }
  };
});