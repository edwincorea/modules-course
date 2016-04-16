import {UsersStore} from "./models/users-store"; //import a specific class from users-store module 
import UsersController from "./controllers/users-controller"; //import a default function from users-controller module
import * as util from "./lib/util"; //import everything from util module
import "./script"; //import a single script

//https://developer.mozilla.org/en/docs/web/javascript/reference/statements/import
//https://developer.mozilla.org/en/docs/web/javascript/reference/statements/export

console.log("Loading application");

const store = new UsersStore();
const $mount = $("#mount");
UsersController($mount, store);

//UsersController();
//util.func1();
//util.func2();

