//self executing function to keep namespace clean
(() => {
    //a symbol is a way to prevent other objects from accesing certain properties from our objects. Private fields!
    //the old way to prevent accesing and changing a variables was...
    // function myThing(){
    //     var localVar = 10;
        
    //     return {
    //         print() {
    //             console.log(localVar);
    //         }            
    //     };
    // }
    
    //es2015 symbols
    //Everytime you invoke the Symbol constructor, you get a new object
    const mySymbol = Symbol("mySymbol");
    const mySymbol2 = Symbol("mySymbol");
    
    //console.log(mySymbol == mySymbol2); //false
    
    const person = {
        [mySymbol]: "blegh",  //computed variable, private field because we use a symbol. A symbol instance is a private location within the object.
        render(){
            console.log(this[mySymbol]);
        }        
    };
    
    //person[mySymbol] = "blegh"
    //we can do this
    person.render(); //blegh
    //... BUT we are not allowed to do this
    //console.log(person.mySymbol); //undefined
    //console.log(person);
    
    //Another use: jquery object
    const myState = Symbol("plugin-x-state");
    $[myState] = "Custom value"; //no ther plugin will access this variable.
    
    //Another example
    const _firstName = Symbol("First Name");
    const _lastName = Symbol("Last Name");
        
    class Person {
        //there´s no way to edit those private fields (_firstName, _lastName) from outside file.
        //It's an encapsulation of data. 
        get firstName(){ return this[_firstName];}
        get lastName(){ return this[_lastName];}
        
        constructor(firstName, lastName){
            this[_firstName] = firstName;
            this[_lastName] = lastName;
        }
    }        
    
         
})();