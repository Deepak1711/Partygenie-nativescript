var view=require("ui/core/view");
var frameModule = require("ui/frame");
var colors=["red","green"];
exports.OnSubmit=function(){
	var topmost=frameModule.topmost();
    topmost.navigate("detail3");
}
