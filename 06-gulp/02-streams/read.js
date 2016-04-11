"use strict";

var fs = require("fs");
//import { createReadStream } from "fs";

//reader stream
const reader = fs.createReadStream("./documents/mydoc.txt");

let fileContents = "";
reader.on("data", (data) => {
    //console.log(`data: ${data}`);
    fileContents += data;
});

reader.on("end", () => {
    console.log(`Data found: ${fileContents}`);
});