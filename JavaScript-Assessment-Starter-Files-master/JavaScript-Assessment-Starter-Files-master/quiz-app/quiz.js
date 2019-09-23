console.log('JS IS LOADED');


var form = document.getElementById('quiz');
var q = document.getElementById('question');

   var httprequest = new XMLHttpRequest();
   httprequest.open('GET','http://5d76bf96515d1a0014085cf9.mockapi.io/quiz',true);
   httprequest.send();
   httprequest.onreadystatechange = function(){
   		if(this.readyState === 4){
   			if(this.status == 200){
   				console.log("Call was successful");
   				var products = JSON.parse(this.responseText);
   				for (var i = 0; i < products.length; i++) {
   					console.log(products[i]);
					q.appendChild(Questioncard(products[i]))
   				}
   				form.insertBefore(q,form.firstChild);

			}
   			else{
   				console.log("Call Failed");
   			}
   		}

   }


function Questioncard (obj) {
	var section = document.createElement('section');
	section.className = 'quiz-item';
	var h3 = document.createElement('h3');
	var texth3 = "Q"+ obj.id + ". " + obj.question;
	var question = document.createTextNode(texth3);
	h3.appendChild(question);
	section.appendChild(h3);
	var alloptions = obj.options;
	var id = obj.id
	for (var i = 0; i < alloptions.length; i++) {
		console.log(options(alloptions[i],i,id));

		section.appendChild(options(alloptions[i],i));
	}
	return section;
}
function options (obj,x,y) {
	var div = document.createElement('div');
	div.className = 'option-wrapper';
	var label = document.createElement('label');
	var input = document.createElement('input');
	input.setAttribute("type", "radio");
	var name = "q"+ y
	input.setAttribute("name", name);
	input.id = name;
	x = ++x
	input.setAttribute("value", x);
	var p  = document.createElement('p');
	var content = document.createTextNode(obj)
	p.appendChild(content)
	label.appendChild(input);
	label.appendChild(p);
	div.appendChild(label);
	return div;
}

var btn = document.getElementById('btn-submit');
btn.onclick = function (e) {
	e.preventDefault()
	var list = document.getElementById("q1")
	console.log(list)
}