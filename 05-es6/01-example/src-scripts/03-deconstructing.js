//self executing function to keep namespace clean
(() => {
    //deconstructing is extracting values from objects or arrays in a super compact way...
    const person = {
        name: {first: "Edwin", last: "Corea"},
        roles: ["admin"],
        isActive: true
    };
    
    const printPerson = (person) => {
        //we have an object and want to access potentially deeply nested properties, so we alias them out to variables.
        //we this is very tiring...
        const roles = person.roles;
        const firstName = person.name.first;
        const lastName = person.name.last;
        
        console.log(roles);                
        console.log(roles.length);   
        
        console.log([firstName, lastName]);
    };
    
    const printPerson2 = (person) => {
        //... so es2015 solution is: deconstructing the object. New syntax.
        //extracting out the roles property of person object and assigning it to a local variable called roles
        // const {roles} = person;  
        // console.log(roles);
        // console.log(roles.length);
        
        //we can deconstruct many properties at once and nest the deconstruction using ':', too.
        const {name: {first, last}, roles} = person;  
        console.log(roles);
        console.log(roles.length);
        
        console.log(first);
        console.log(last);
    };
    
    const printPerson3 = (greeting, {name:{first, last}, roles}) => {
        //deconstructing also works in function parameters
        console.log(roles);
        console.log(roles.length);
        
        console.log(`${greeting}: ${first} ${last}`);
    };
    
    //printPerson3('Hi', person);
    //["admin"] 
    //1 
    //Hi: Edwin Corea
    
    const point = {x: 1, y: 24};
    function translate({x, y}, amount){
        return {x: x + amount, y: y + amount};        
    }
    
    //console.log(translate(point, 20)); //Object {x: 21, y: 44}
    
    const {x, y} = translate(point, 10);
    
    function getTrack(){
        return {title: "Track 1", lengthInSeconds: 30};
    }
    
    //defaultvalue for  description 
    const {title, lengthInSeconds, description = "No desc found"} = getTrack();
    
    //Now, deconstructing arrays...
    const array = [1, 2, 3, 4, 5, 6, 7];
    
    //Three ways to deconstruct an array:
    //1. first n continuous items
    const [firstNum, secondNum, thirdNum] = array;
    
    //2.skip some items
    const [x1, y1, , z1] = array;
    
    //3. using spread operator (...) Es como el cdr de LISP.
    const [head1, head2, ... rest] = array;
    
    function sum(array){
        if(!array.length)
            return 0;
        
        //car y cdr de la lista
        const [head, ... tail] = array;
        return head + sum(tail);
    }
    
    //console.log(sum(array)); //28
    
    //Another es2015 feat.: swapping variables.
    let left = 10;
    let right = 20;
    
    [left, right] = [right, left];    
    
    //Another es2015 feat.: default parameters
    const withDefaults = (person, output="name", options={verbose: true}) => {
        console.log([person, output, options]);        
    };         
    
    withDefaults(person);
    withDefaults(person, "isActive", {debug: true});
})();