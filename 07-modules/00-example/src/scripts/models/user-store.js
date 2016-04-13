import _ from "lodash";
import {user} from "./user";

//private fields
const _users = Symbol("users");

export class UserStore{
    //public properties
    get users() { return this[_users].slice(); }
    
    constructor(){
        this[_users] = [
            new User(1, "Jon", "Doe"),
            new User(1, "Joan", "Doe")                        
        ];
    }
    
    add(first, last){
        //we don't use this.users() because we need to access the private field
        const nextId = _.max(this[_users], u => u.id).id + 1;
        const user = new User(nextId, first, last);
        
        //push it into our internal memory "database"
        this[_users].push(user);
        return user;
    }
    
    remove(id){
        _.remove(this[_users], u => u.id == id);
    }
}

/*
export function debugStore(store){
    console.log(store);
}
*/