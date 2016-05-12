var view=require("ui/core/view");
var frameModule = require("ui/frame");

exports.OnRec=function(){
	var topmost=frameModule.topmost();
    topmost.navigate("recover1");
}