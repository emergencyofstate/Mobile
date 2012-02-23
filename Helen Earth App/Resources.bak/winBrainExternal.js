var win = Titanium.UI.currentWindow;

webView = Ti.UI.createWebView({
	url : 'http://www.helenearthband.com'
});

webView.addEventListener('load', function(e) {
	Ti.API.info('webview loaded: '+ e.url);
});

// Add to the parent view.
win.add(webView);

