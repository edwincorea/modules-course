//self executing function to keep namespace clean
(() => {
    //A enumerable class
    
    //a private field
    const _generator = Symbol("generator");
    
    class Enumerable{
        constructor(generator){
            this[_generator] = generator;
        }    
        
        where(predicate){
            //aliasing out generator
            const wrappedGenerator = this[_generator];
            //instatiating new enumerable
            return new Enumerable(function*() {
                for(let item of wrappedGenerator()) {
                    //filter out items that don't match the predicate
                    if(!predicate(item))
                        continue;
                    
                    yield item;                   
                }                
            });
        } 
        
        //select is a map on items of enumerable
        select(projection){
            //aliasing out generator
            const wrappedGenerator = this[_generator];
            //instatiating new enumerable
            return new Enumerable(function*() {
                for(let item of wrappedGenerator()) {
                    yield projection(item);       
                }                
            });            
        }      
        
        take(number){
            //aliasing out generator
            const wrappedGenerator = this[_generator];
            //instatiating new enumerable
            return new Enumerable(function*() {
                let index = 0;
                for(let item of wrappedGenerator()){
                    if(index++ >= number)
                        break;
                    yield item;                    
                }
            });
        }
        
        //asterisk denotes this function is a generator to use yield
        *[Symbol.iterator](){
            //wrapping generator and invoking it
            for(let item of this[_generator]()){
                yield item;
            }
        }
    }
    
    //subclass
    class ObjectEnumerable extends Enumerable {
        constructor(obj) {
            super(() => { return obj; });
        }
    }
        
    const array = [1, 2, 3, 4, 5, 6, 7, 8];
    const enumerable = new ObjectEnumerable(array);
    
    // for(let item of enumerable){
    //     console.log(item);
    // }
    
    // for(let item of enumerable.where(item => item < 5)){
    //     console.log(item);
    // }
    
    // for(let item of enumerable.where(item => item < 5).select(item => item * item)){
    //     console.log(item);
    // }
    
    const fibEnumerable = new Enumerable(function*(){
        let last1 = 1,
            last2 = 1;
            
        while(true){
            const current = last2;
            last2 = last1;
            last1 += current;
            yield current;            
        }
    });
    
    // for(let item of fibEnumerable.select(item => item * item).take(15)){
    //     console.log(item);
    // } 
     
    const elements = new ObjectEnumerable(document.querySelectorAll("script"))
            .where(i => i.src.indexOf("vendor") != -1)
            .select(i => i.src);
            
    for(let item of elements){
        console.log(item);
    } 
            
                 
         
})();