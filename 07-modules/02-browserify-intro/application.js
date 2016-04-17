var models = require("./models"),
    $ = require("jquery")
    _ = require("lodash");
    
$("body").html(models.User("Edwin Corea"));
_.each([1, 2, 3, 4, 5], u => console.log(u));    