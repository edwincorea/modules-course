//named functions
function loopOver10(action) {
    for (var i = 0; i < 10; i++) {
        action(i);
    }
}

// loopOver10(function(number){
//    console.log(number); 
// });

//es6 arrow functions
//loopOver10(number => console.log(number));

// loopOver10(number => {
//     console.log(number);
//     console.log(number * 10);
// });

//no parameters
// var noParamFunc = () => console.log("hi");
// noParamFunc();  

//multiparameter function
//var multiParamFunc = (left, right) => left + right;
// var multiParamFunc = (left, right) =>{
//     return left + right;
// };
// console.log(multiParamFunc(10, 20));

//error functions
var obj = {
    name: "Edwin Corea",
    /*
    showName: () => {        
    }
    */
    showName() {
        console.log("My name is " + this.name);
        var that = this; //old school JS: alias context before entering a closure
        setTimeout(function() {
            console.log("My name still is " + that.name);
        }, 1000);

        //No problem with arrow functions...
        setTimeout(() => {
            console.log("My name still is " + this.name + " again");
        }, 1000);
    }
};

obj.showName();

