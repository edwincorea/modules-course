//this file should not be a module. That's why we are creating it directly on public.
requirejs.config({
    baseUrl: "/scripts",
    paths: {
        "jquery": "../lib/jquery/dist/jquery",
        "jquery-ui": "../lib/jquery-ui/jquery-ui",
        "lodash": "../lib/lodash/lodash"
    },    
    //shim config for legacy code
    shim: {
        "bad": {
            deps: ["jquery", "lodash"],
            //init function takes a list of dependencies and 
            //produces a context where the module is executed in
            init: function($, _){
                return {
                    func1: this.func1,
                    func2: this.func2                    
                }
            }
        },
        "bad-plugin": {
            deps: ["jquery"],
            exports: "$"
        }        
    }
});