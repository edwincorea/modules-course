//self executing function to keep namespace clean
(() => {
    
    //load a json file asynchronously, the traditional way using JQuery
    function loadUsersCb(callback){
        $.ajax("/users.json", {
            dataType: "json",
            success(data){
                callback(null, data);
            },
            error(error){
                callback(error, null);
            }
        });
    }
    
    //invoke async function
    // loadUsersCb((err, data) => {
    //     if(err){
    //         console.log(err);
    //         return;
    //     }          
        
    //     console.log(data);          
    // });
    
    //issues with traditional way:
    //1. How about having two or more async ops but dealing with only one callback function?
    //2. How about having a timer to throw an error if the waiting time reaches certain threshold?
    
    //with promises
    function loadUsers(){
        return new Promise((done, fail) => {
            $.ajax("/users.json", {
                dataType: "json",
                success(data){
                    done(data);
                },
                error(error){
                    fail(error);
                }  
            });          
        });      
    }                   
    
    //invoke async function with promises
    // loadUsers().then(
    //     data => {
    //         console.log("We got data!");
    //         console.log(data);
    //     },        
    //     error => {
    //         console.log("We got an error!");
    //         console.log(error);            
    //     }       
    // );
    
    //helper functions
    
    function succeedAt(milliseconds){
        return new Promise((done, fail) => {
            window.setTimeout(done, milliseconds);
        });
    }
    
    function failtAt(milliseconds){
        return new Promise((done, fail) => {
            window.setTimeout(fail, milliseconds);
        });
    }    
    
    //suboptimal solution
    // succeedAt(1000).then(() => {
    //     loadUsers().then(data => {
    //         console.log(data);            
    //     });        
    // });
    
    //chaining promises
    // succeedAt(2000)
    //     .then(() => loadUsers()) //simmilar to () => return loadUsers(). We are returning a promise and adding it to the chain. 
    //     .then(data => console.log(data));
    
    function loadTracks(){
        return new Promise((done, fail) => {
            $.ajax("/tracks.json", {
                dataType: "json",
                success(data){
                    done(data);
                },
                error(error){
                    fail(error);
                }  
            });          
        });      
    }           
    
    //Load users and tracks at the same time...
    Promise.all([loadUsers(), loadTracks()])
        .then(data => {            
            //return a new promise that is a combination of the two previous promises. Only finish when both are done.
            const [users, tracks] = data; //array of two objects: users and tracks
            console.log(users);
            console.log(tracks);            
        });
        
    //Doing timeouts... Race. The first promise to complete will be returned, regadless if the other promise has failed. 
    // Promise.race([succeedAt(1000), failtAt(2000)])
    //     .then(
    //         () => console.log("Succeed"),
    //         () => console.log("Fail"));
    
    Promise.race([loadTracks(), failtAt(3000)])
        .then(
            () => console.log("Succeed"),
            () => console.log("Fail"));
            
    //catch
    failtAt(1000)  
        .catch(() => console.log("Catched!")); //it only accepts an error callback           
             
})();

