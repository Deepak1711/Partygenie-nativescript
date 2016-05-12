var view=require("ui/core/view");
var frameModule = require("ui/frame");

exports.OnRec=function(){
	alert("Password Changed");
	var topmost=frameModule.topmost();
    topmost.navigate("main-page");
}