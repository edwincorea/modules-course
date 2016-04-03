//self executing function to keep namespace clean
(() => {
    //clean syntax for defining classes, constructors and methods.
    //there is no encapsulation, though.
    class Person {
        get name() {return this._name;}
        set name(name) {
            console.log(`Setting name to ${name}`);
            this._name = name;
        }
        
        //constructor
        constructor(name){
            this._name = name;                        
        }        
        
        render(){
            console.log(`Hi, I am a person named ${this._name}`);
        } 
        
        //a static method
        static loadPeople(){
            return [
                new Person("Person1"),
                new Person("Person2")
            ];            
        } 
    }
    
    //inheritance
    class Admin extends Person {
        constructor(){
            super("I'm an admin");            
        }
        
        doAnAdminThing(){
            console.log("Doing admin things...");
        }
        
        //override method
        render(){
            console.log("Rendering an admin...");
            super.render();
        }
    }
    
    // const edwin = new Person("Edwin");
    // edwin.render();
    
    // edwin.name = "Edwin Corea";
    // edwin.render();
    
    // const [p1, p2] = Person.loadPeople();
    // p1.render();
    // p2.render();
    
    var admin1 = new Admin("admin1");
    admin1.doAnAdminThing();
    admin1.render();
     
})();