console.log('JS IS LOADED')

var index = 0;

var wrapper = document.getElementById('playlist-wrapper');

var httprequest = new XMLHttpRequest();
   httprequest.open('GET','https://5d76bf96515d1a0014085cf9.mockapi.io/playlist',true);
   httprequest.send();
   httprequest.onreadystatechange = function(){
   		if(this.readyState === 4){
   			if(this.status == 200){
   				console.log("Call was successful");
   				var playlist = JSON.parse(this.responseText);
   				for (var i = 0; i < playlist.length; i++) {
   					console.log(playlist[i]);
					wrapper.appendChild(miniplayer(playlist[i]))

   				}
   				trial()

			}
   			else{
   				console.log("Call Failed");
   			}
   		}

   }


function miniplayer (argument) {
	var div = document.createElement('div')
	++index;
	div.className = 'playlist-card';
	var id = "card"+argument.id
	div.id = id
	var img = document.createElement('img');
	img.className = 'thumbnail';
	img.src = argument.thumbnail;
	var title = document.createElement('h3');
	title.className = 'video-card-title';
	var titletext = document.createTextNode(argument.title);
	var link = document.createElement('a');
	link.href = "player.html?id="+argument.id;
	title.appendChild(titletext);
	link.appendChild(title);
	div.appendChild(img);
	div.appendChild(link);

	return div;
}

function trial () {
	// body... 

var search = location.search;
console.log(search);
var idd = search.split('=');
console.log(idd);
var id = idd[idd.length - 1]
console.log(id)
var url = "http://5d76bf96515d1a0014085cf9.mockapi.io/video/"+id;
console.log(url);


var httprequest1 = new XMLHttpRequest();
   httprequest1.open('GET',url,true);
   httprequest1.send();
   httprequest.onreadystatechange = function(){
   		if(this.readyState === 4){
   			if(this.status == 200){
   				console.log("Call was successful");
   				var current = JSON.parse(this.responseText);
   				for (var i = 0; i < current.length; i++) {
   					console.log(current);
					newvideo(current[i])
   				}

			}
   			else{
   				console.log("Call Failed");
   			}
   		}

   }
}
var main = document.getElementById('player-wrapper');
var player = document.getElementById('video-player');
var count = document.getElementById('views-count');
var title = document.getElementById('video-title');
var desc = document.getElementById('video-description');

function newvideo (argument) {
	var source = "https://player.vimeo.com/video/" + argument.vimeoId;
	console.log(argument.vimeoId)
	player.src = source;
	count.innerHTML  = argument.views;
	title.innerHTML  = argument.title;
	desc.innerHTML  = argument.description;
	var active = "card"+id
	var activecard = document.getElementById(active);
	console.log(activecard)
}