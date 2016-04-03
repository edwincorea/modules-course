//self executing function to keep namespace clean
(() => {
    const elements = document.querySelectorAll("*");
    
    for(let index in elements){
        const element = elements[index];
        console.log(element.tagName);       
    }       
    
    /* we get two undefined things that are not elements. Includes properties defined by the prototype of the object. 
        HTML
        HEAD
        BODY
        SCRIPT
        undefined (2)
    */
    
    console.log("-------------------");
    
    for(let element of elements){
        console.log(element.tagName);
    }
    
    /*  we get only elements. Simmilar to Iterator in Java or Ennumerable in C#.
        HTML
        HEAD
        BODY
        SCRIPT
    */
    
    console.log("-------------------");
    
    //arrays are iterables
    const array = [1, 2, 3, 4, 5, 6];
    
    for(let item of array){
        console.log(item);
    }    
    
    console.log("-------------------");
    
    //now, how about an object that doesn't have a concept of being ennumerable?
    const person = {
        name: "Edwin"
    };
    
    // for(let item of person){
    //     console.log(item);        
    // }
    
    //Uncaught TypeError: person[Symbol.iterator] is not a function
    
    //An iterable that runs 5 times and prints the number.
    const iterable = {
        //hook into special JS engine methods such as iterator using Symbols...
        //brackets mean this is a computed property and is a method.
        //Now lets write our iterator...
        [Symbol.iterator](){
            let index = 0;
            return {//iterable object
                next(){
                    index++;
                    return {
                        value: index * 5,
                        done: index > 5                        
                    };
                }                
            };
        }
    };
    
    for (let item of iterable){
        console.log(item);
    }
    
    //Now generators... They are practically identical to iterables blocks in C# (yield)
    
    // function* fib(max=10){
    //     yield 1; //return { value: 1, done: false }
    //     yield 1; //return { value: 1, done: false }
    //     yield 2; //return { value: 2, done: false }
    //     yield 3; //return { value: 3, done: false }
    //     yield 5; //return { value: 5, done: false }       
    // }
    
    function* fib(max=10){
      let last1 = 1,
          last2 = 1;
          
      for (let i = 0; i < max; i++){
          const current = last2;
          last2 = last1;
          last1 += current;
          console.log(`Calc: ${current}`);
          yield current;
      }
        
    }  
    
    for (let item of fib())
    {
        console.log(item);
    }
    
         
})();