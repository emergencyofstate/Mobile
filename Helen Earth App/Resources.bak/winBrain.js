var win = Titanium.UI.currentWindow;

var topicsTable = Titanium.UI.createTableView({data:[], backgroundColor:'transparent'});

var xhrTopics = Titanium.Network.createHTTPClient();

xhrTopics.onload = function() {
	var topics = JSON.parse(this.responseText);
	var data = [];
	for (var i=0; i < topics.length; i++) {
  		var topic = topics[i].topic;
  		var customColor = topic.color ? topic.color : '#1169ae';
  		var lighterCustomColor = getLighterColor(customColor);
  		var row = Ti.UI.createTableViewRow({
  		  hasChild:true,
  		  height:80,
  		  topic:topic,
  		  title:topic.name,
  		  fontSize:24,
  		  color:'#fff',
  		  selectedBackgroundColor:'#dddddd',
  		  backgroundGradient: {
  		  	type:'linear',
  		  	colors:[customColor,lighterCustomColor],
  		  	startPoint: {x:0,y:0},
  		  	endPoint: {x:0,y:80},
  		  	backFillStart:false
  		  }	
  		});
	};
	
};

//BUTTON

var buttonBrain = Titanium.UI.createButton({
	title:'This is my button',
	right:'auto',
	width:'125',
	height:30,
	bottom:30,
	borderRadius:4 
});

buttonBrain.addEventListener('click', function(e){
	var winBrainExternal = Titanium.UI.createWindow({
		title:'Helen Earth Brains External',
		url:'drupalView.js'
	});
	
	winBrainExternal.myvar = "Don't you wanna know how we keep starting fires?";
	Titanium.UI.currentTab.open(winBrainExternal,{animation:true});
	
});

//add buttonBrain to win beolow if you want it.

win.add(topicsTable);