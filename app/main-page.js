var createViewModel = require("./main-view-model").createViewModel;
var frameModule = require("ui/frame");



function onNavigatingTo(args) {
    
}

exports.Onsign=function(){
	var topmost=frameModule.topmost();
    topmost.navigate("detail1");
}

exports.Registering=function(){
	var topmost=frameModule.topmost();
    topmost.navigate("register");
}

exports.OnRec=function(){
	var topmost=frameModule.topmost();
    topmost.navigate("recover");
}

exports.onNavigatingTo = onNavigatingTo;