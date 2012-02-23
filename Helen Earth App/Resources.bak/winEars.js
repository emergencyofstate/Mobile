win = Titanium.UI.currentWindow;

var labelEars = Titanium.UI.createLabel({
	backgroundColor:'#000',
	color:'#999',
	text:'I am the Ears Window!',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});

win.add(labelEars);