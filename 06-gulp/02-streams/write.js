"use strict";

var fs = require("fs"),
    http = require("http"),
    Transform = require("stream").Transform;

//writing a transform
const basicTransform = new Transform({
    transform(chunk, encoding, next){
        const text = chunk.toString(); //chunk comes as binary data
        this.push(text.replace(/H/g, "J"));
        next();
    } 
});

const server = http.createServer((req, res) => {
    const fileStream = fs.createReadStream("./documents/mydoc.txt");
    fileStream
        .pipe(basicTransform)
        .pipe(res);
});

//piping into a transform...


server.listen(3000); 

