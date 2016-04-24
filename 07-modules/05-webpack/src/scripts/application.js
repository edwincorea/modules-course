import {UsersStore} from "./models/users-store"; //import a specific class from users-store module 
import usersController from "./controllers/users-controller"; //import a default function from users-controller module
import * as util from "./lib/util"; //import everything from util module
import "./script"; //import a single script
import $ from "jquery";

//https://developer.mozilla.org/en/docs/web/javascript/reference/statements/import
//https://developer.mozilla.org/en/docs/web/javascript/reference/statements/export

import "../styles/site.less";
import "jquery-ui/themes/ui-darkness/jquery-ui.css";

console.log("Loading application");

const store = new UsersStore();
const $mount = $("#mount");
usersController($mount, store);

//usersController();
util.func1();
util.func2();

console.log(`We are now running in ${env}`);

