var view=require("ui/core/view");
var frameModule = require("ui/frame");
var observableModule = require("data/observable");
var source = new observableModule.Observable();


var appModule = require("application");
var list = ["Birthday","Graduation","Wedding","Festival","Tea"];

source.set("items", list);

exports.deepak=function(args){
	var page=args.object;
   page.bindingContext = source;
}
exports.OnSubmit=function(){
	var topmost=frameModule.topmost();
    topmost.navigate("detail3");
}

exports.OnRead=function(){
	var topmost=frameModule.topmost();
    topmost.navigate("terms.html");
}
