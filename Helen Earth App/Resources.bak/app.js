//global ns
var hea = {};

// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

// create tab group
var tabGroup = Titanium.UI.createTabGroup();

//
// create base UI tab and root window
//
var winBrain = Titanium.UI.createWindow({  
    url: 'winBrain.js',
    title:'Helen Earth Brains'
});

var tabBrain = Titanium.UI.createTab({  
    icon:'KS_nav_ui.png',
    title:'BRAINS',
    window:winBrain
});

//
// create controls tab and root window
//
var winEars = Titanium.UI.createWindow({  
    url: 'winEars.js',
    title:'Helen Earth Ears'
});

var tabEars = Titanium.UI.createTab({  
    icon:'KS_nav_ui.png',
    title:'EARS',
    window:winEars
});


var winEyes = Titanium.UI.createWindow({
	url:'winEyes.js',
	title:'Helen Earth Eyes'
});

var tabEyes = Titanium.UI.createTab({
	icon:'KS_nav_views.png',
	title:'EYES',
	window:winEyes	
});


//
//  add tabs
//
tabGroup.addTab(tabBrain);  
tabGroup.addTab(tabEars);  
tabGroup.addTab(tabEyes);  


// open tab group
tabGroup.open();
