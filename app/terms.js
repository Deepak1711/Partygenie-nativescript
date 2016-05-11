var frameModule = require('ui/frame');
var pageModule = require('ui/page');
var webViewModule = require("ui/web-view");

exports.loaded = function(args) {
    var page = args.object;
    var webView = page.getViewById('myWebView');
    var application = require('application');
    var html = '<html><body>  General terms and conditions Software License Agreement   </body><html>';

    if (application.ios) {
        webView.ios.loadHTMLStringBaseURL(html, null);
    } else if (application.android) {
        webView.android.loadData(html, 'text/html', null);
    }
};