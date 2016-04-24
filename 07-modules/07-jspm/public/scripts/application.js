import {UsersStore} from "./models/users-store"; //import a specific class from users-store module 
import usersController from "./controllers/users-controller"; //import a default function from users-controller module
import * as util from "./lib/util"; //import everything from util module
import "./script"; //import a single script
import $ from "jquery";
import "jquery-ui/themes/ui-darkness/jquery-ui.css!"; //we append a bang (!) to indicate jspm we will use a css loader

import React from "react";
import angular from "angular";
import ReactDom from "react-dom";

console.log([React, angular, ReactDom]);

console.log("Loading application");

const store = new UsersStore();
const $mount = $("#mount");
usersController($mount, store);

//usersController();
//util.func1();
//util.func2();

