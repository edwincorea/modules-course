"use strict";

var vfs = require("vinyl-fs"),
    stream = require("stream"),
    fs = require("fs"),
    source = require("vinyl-source-stream"),
    buffer = require("vinyl-buffer");

//gulp plugin... transform every single word of scripts to Yay!
const basicPlugin = new stream.Transform({
    objectMode: true,
    
    transform(file, encoding, next){
        //console.log(JSON.stringify(file));
        //console.log("\n");
        //vinyl-fs works in two modes: buffer and stream
        const contents = file.contents.toString();
        //file.contents = new Buffer(contents.replace(/\w/g, "Yay! "));
        file.contents = new Buffer(contents + " Yay!!!");
        this.push(file);
        next();
    }
});
    
vfs.src("./src/**/*.js")
    .pipe(basicPlugin)
    .pipe(vfs.dest("./dist"));
    
//problem: how to pipe a read stream to vinyl-fs? 
//We are piping a stream which is not an object stream. We are piping raw data, not a vinyl-fs object...
// fs.createReadStream("./docs/doc1.txt")
//     .pipe(vfs.dest("./dist"));
    
//solution: we need to attach metadata to the stream... vinyl-source-stream is your friend!    
// fs.createReadStream("./docs/doc1.txt")
//     .pipe(source("whatever.txt")) //now we have a single vinyl-fs object
//     .pipe(vfs.dest("./dist"));
    
//second issue: transforming the new vinyl object... that's because our basic plugin doesn't handle streaming contents
// fs.createReadStream("./docs/doc1.txt")
//     .pipe(source("whatever.txt")) //now we have a single vinyl-fs object
//     .pipe(basicPlugin)
//     .pipe(vfs.dest("./dist"));
    
//solution: vinyl-buffer!!!
fs.createReadStream("./docs/doc1.txt")
    .pipe(source("whatever.txt")) //now we have a single vinyl-fs object
    .pipe(buffer()) //convert file contents to buffer data before transforming
    .pipe(basicPlugin)
    .pipe(vfs.dest("./dist"));
