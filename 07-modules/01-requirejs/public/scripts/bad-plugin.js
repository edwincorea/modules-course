//a sample bad (legacy) jquery plugin
$.fn.bad = function(){
    this.html("Bad plugin, no AMD :(");
    return this;
};