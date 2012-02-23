var win = Titanium.UI.currentWindow;

var xhr = Ti.Network.createHTTPClient({
    onload: function(e) {
        // function called in readyState DONE (4)
        Ti.API.info('onload called, readyState = '+this.readyState);
    },
    onerror: function(e) {
        // function called in readyState DONE (4)
        Ti.API.info('onerror called, readyState = '+this.readyState);
        Ti.API.info('ERROR = '+e.error);
    },
    ondatastream: function(e) {
        // function called as data is downloaded
        Ti.API.info('ondatastream called, readyState = '+this.readyState);
    },
    onsendstream: function(e) {
        // function called as data is uploaded
        Ti.API.info('onsendstream called, readyState = '+this.readyState);
    },
    onreadystatechange: function(e) {
        switch(this.readyState) {
            case 0:
                // after HTTPClient declared, prior to open()
                // though Ti won't actually report on this readyState
                Ti.API.info('case 0, readyState = '+this.readyState);
            break;
            case 1:
                // open() has been called, now is the time to set headers
                Ti.API.info('case 1, readyState = '+this.readyState);
            break;
            case 2:
                // headers received, xhr.status should be available now
                Ti.API.info('case 2, readyState = '+this.readyState);
            break;
            case 3:
                // data is being received, onsendstream/ondatastream being called now
                Ti.API.info('case 3, readyState = '+this.readyState);
            break;
            case 4:
                // done, onload or onerror should be called now
                Ti.API.info('case 4, readyState = '+this.readyState);
            break;
        }
    },
    timeout:500000  /* in milliseconds */
});
xhr.setTimeout(100000);
xhr.open("GET", 'http://www.zepacha.net/ctztest/citapp/vues/citapp');
xhr.setRequestHeader('User-Agent', 'my browser');
xhr.send();  // request is actually sent with this statement

win.open();
