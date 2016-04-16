//private fields
const _first = Symbol("first"),
    _last =  Symbol("last"),
    _id =  Symbol("id");

export class User {
    //public properties
    get id() { return this[_id]; }
    get first() { return this[_first]; }
    get last() { return this[_last]; }
    
    //constructor
    constructor(id, first, last){
        this[_id] = id;
        this[_first] = first;
        this[_last] = last;
    }    
    
    //method
    toString(){
        return `${this.id}: ${this.first} ${this.last}`;        
    }
}