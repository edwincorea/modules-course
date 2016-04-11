"use strict";

//object streams

var stream = require("stream");

//readable stream
//const source = new stream.Readable();
const source = new stream.Readable({
    objectMode: true
});
source.push("data1");
source.push("data2");
source.push({file: "file1.txt", length: 300});//for objects we need object streams

//writable stream
const destination = new stream.Writable({
    objectMode: true,
    write(chunk, encoding, next){
        console.log(`Writing ${chunk.toString()}`);
        next(); //callback for more stuff to read
    } 
});

const transform = new stream.Transform({
    objectMode: true,
    transform(chunk, encoding, next){
        this.push(`Transform: ${chunk.toString()}`);
        next();
    }
});
 
source
    .pipe(transform)
    .pipe(destination);

source.push("More data...");
source.push(null); //end of stream