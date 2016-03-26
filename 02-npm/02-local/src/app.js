var _ = require("lodash");

var users = [
    {id: 1, name: "Name1", roles: ["admin"]},
    {id: 2, name: "Name2", roles: ["user", "moderator"]},
    {id: 3, name: "Name3", roles: []}, //guest
    {id: 4, name: "Name4", roles: ["user"]},    
    {id: 4, name: "Name5", roles: ["admin"]}
];

// var admins = _(users)
//     .filter(u => _.contains(u.roles, "admin"))
//     .pluck("name");
    
// console.log(admins.value()); //until value we get the data

// users.push({id: 5, name: "Name6", roles: ["admin"]});    

// console.log(admins.value());

//Name1: admin format using map
// var userRoleList = _(users)
//     .map(u => `${u.name}: ${u.roles.join(", ")}`)
//     .value();
    
// console.log(userRoleList);


//find an object
// var user = _.find(users, {id: 4});
// console.log(user);

//loading a specific module from package 
var array = require("lodash/array");
console.log(array.first(users));    

//loading a specific class from package
var each = require("lodash/collection/each");
each(users, user => console.log(user.name));

