var win = Titanium.UI.currentWindow;

var labelEyes = Titanium.UI.createLabel({
	backgroundColor:'#000',
	color:'#999',
	text:'I am the Eyes Window!',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});

win.add(labelEyes);