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
          console.log(current)
   				for (var i = 0; i < current.length; i++) {
   					console.log(current[i]);
					newvideo(current[i])
   				}

			}
   			else{
   				console.log("Call Failed");
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
	console.log(source)
	player.src = source;
	count.innerHTML  = argument.views;
	title.innerHTML  = argument.title;
	desc.innerHTML  = argument.description;
	var active = "card"+id
	var activecard = document.getElementById(active);
	console.log(activecard)
}