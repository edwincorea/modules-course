//ES2015 style module. Very simmilar to AMD, we pass an array of dependencies.
System.register(["./lib.js"], function(_export){
    var lib;
    
    return {
      //this array of setters solve circular dependencies
      setters: [
        //dynamically binding to this dependency
        function(_lib) { lib = _lib; }  
      ],        
      execute: function() {
          console.log("From ES2015");
          lib.func();
          _export("func2", function() {
              console.log("Bye!");              
          });
      }
    };
});