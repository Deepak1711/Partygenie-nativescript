var view=require("ui/core/view");
var frameModule = require("ui/frame");
//var pageModule = require('ui/page');
//var webViewModule = require("ui/web-view");
 


exports.OnSubmit=function(){
	var topmost=frameModule.topmost();
    topmost.navigate("main-page");
}

//exports.OnFace = function () {
  //  var webView = new webViewModule.WebView();
    //webView.url = 'https://www.facebook.com/';
    
    //return page;
//    frameModule.topmost().navigate(webView.url);
//};

//frameModule.topmost().navigate(OnFace);

