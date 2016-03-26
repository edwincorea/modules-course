var fs = require("fs"),
    path = require("path");
    
var directory = "./documents";
fs.readdir(directory, function(err, files){
    if(err) {
        console.error(err);
        return;
    }
    
    for(var i = 0; i < files.length; i++){
        var file = files[i];
        console.log(file);
        
        var fileContentsBuffer = fs.readFileSync(path.join(directory, file));
        console.log(fileContentsBuffer.toString());                
    }    
        
});  