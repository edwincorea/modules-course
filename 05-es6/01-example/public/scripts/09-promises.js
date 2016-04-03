"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

//self executing function to keep namespace clean
(function () {

    //load a json file asynchronously, the traditional way using JQuery
    function loadUsersCb(callback) {
        $.ajax("/users.json", {
            dataType: "json",
            success: function success(data) {
                callback(null, data);
            },
            error: function error(_error) {
                callback(_error, null);
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
    function loadUsers() {
        return new Promise(function (done, fail) {
            $.ajax("/users.json", {
                dataType: "json",
                success: function success(data) {
                    done(data);
                },
                error: function error(_error2) {
                    fail(_error2);
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

    function succeedAt(milliseconds) {
        return new Promise(function (done, fail) {
            window.setTimeout(done, milliseconds);
        });
    }

    function failtAt(milliseconds) {
        return new Promise(function (done, fail) {
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

    function loadTracks() {
        return new Promise(function (done, fail) {
            $.ajax("/tracks.json", {
                dataType: "json",
                success: function success(data) {
                    done(data);
                },
                error: function error(_error3) {
                    fail(_error3);
                }
            });
        });
    }

    //Load users and tracks at the same time...
    Promise.all([loadUsers(), loadTracks()]).then(function (data) {
        //return a new promise that is a combination of the two previous promises. Only finish when both are done.

        var _data = _slicedToArray(data, 2);

        var users = _data[0];
        var tracks = _data[1]; //array of two objects: users and tracks

        console.log(users);
        console.log(tracks);
    });

    //Doing timeouts... Race. The first promise to complete will be returned, regadless if the other promise has failed.
    // Promise.race([succeedAt(1000), failtAt(2000)])
    //     .then(
    //         () => console.log("Succeed"),
    //         () => console.log("Fail"));

    Promise.race([loadTracks(), failtAt(3000)]).then(function () {
        return console.log("Succeed");
    }, function () {
        return console.log("Fail");
    });

    //catch
    failtAt(1000).catch(function () {
        return console.log("Catched!");
    }); //it only accepts an error callback         
})();