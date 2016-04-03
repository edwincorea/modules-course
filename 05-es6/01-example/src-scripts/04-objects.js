//self executing function to keep namespace clean
(() => {
    //object definition es2015 improvements
    
    function getPoint(){
        let x = 0;
        let y = 0;
        
        //compute x,y
        
        //es5
        //return {x: x, y: y};
        
        //es2015
        return {x, y};
    }    
    
    const firstName = "Edwin";
    const person = {
        firstName,
        lastName: "Corea",
        
        //old way...
        // sayHello: function() {
        //     console.log(`${this.firstName} ${this.lastName}`);
        // }
        
        //an easier way to declare functions on an object...
        sayHello() {
            console.log(`${this.firstName} ${this.lastName}`);
        },
        
        //also applies to properties
        get fullName(){
            return `${this.firstName} ${this.lastName}`;
        }        
    };
    
    //computed properties
    const thing = {
        prop1: "prop1",
        ["thing-" + "other" + Math.random()]: "prop2" //computed property using squared brackets                
    };
})();