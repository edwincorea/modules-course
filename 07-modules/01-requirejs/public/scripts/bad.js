//Bad module!
//Sample use of shim for legacy code (non AMD compatible).

function func1() {
    $("<p>Hi 1!</p>").appendTo($("body"));
}

function func2() {
    $("<p>Hi 2!</p>").appendTo($("body"));
}