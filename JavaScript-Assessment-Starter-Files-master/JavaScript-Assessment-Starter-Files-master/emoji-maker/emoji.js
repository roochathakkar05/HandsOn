console.log("JS IS LOADED");

var skin = document.getElementById("skin");
var eyes = document.getElementById("eyes");
var mouth = document.getElementById("mouth");

var yellowskin = document.getElementById("yellow-skin");
var greenskin = document.getElementById("green-skin");
var redskin = document.getElementById("red-skin");

var skincard = document.getElementById("select-skin-card");
var eyecard = document.getElementById("select-eyes-card");
var mouthcard = document.getElementById("select-mouth-card");

yellowskin.onclick = function () {
	var thumbnail = yellowskin.src;
	skin.src = thumbnail;
	eyecard.style.display = 'block';
	skincard.style.display = 'none';

}
greenskin.onclick = function () {
	var thumbnail = greenskin.src;
	skin.src = thumbnail;
	eyecard.style.display = 'block';
	skincard.style.display = 'none';
}
redskin.onclick = function () {
	var thumbnail = redskin.src;
	skin.src = thumbnail;
	eyecard.style.display = 'block';
	skincard.style.display = 'none';
}

var normal = document.getElementById('eye-normal');
var closed = document.getElementById('eye-closed');
var long = document.getElementById('eye-long');
var laughing = document.getElementById('eye-laughing');
var rolling = document.getElementById('eye-rolling');
var winking = document.getElementById('eye-winking');

normal.onclick = function(){
	changeeyes(normal);
}
closed.onclick = function(){
	changeeyes(closed);
}
long.onclick = function(){
	changeeyes(long);
}
laughing.onclick = function(){
	changeeyes(laughing);
}
rolling.onclick = function(){
	changeeyes(rolling);
}
winking.onclick = function(){
	changeeyes(winking);
}

function changeeyes (obj) {
	var eyeselected = obj.src;
	eyes.src = eyeselected;
	eyecard.style.display = 'none';
	mouthcard.style.display = 'block';
}

var open = document.getElementById('mouth-open');
var smiling = document.getElementById('mouth-smiling');
var sad = document.getElementById('mouth-sad');
var straight = document.getElementById('mouth-straight');
var teeth = document.getElementById('mouth-teeth');

open.onclick = function(){
	changemouth(open);
}
smiling.onclick = function(){
	changemouth(smiling);
}
sad.onclick = function(){
	changemouth(sad);
}
straight.onclick = function(){
	changemouth(straight);
}
teeth.onclick = function(){
	changemouth(teeth);
}
function changemouth (obj) {
	var mouthselected = obj.src;
	mouth.src = mouthselected;
	eyecard.style.display = 'none';
	mouthcard.style.display = 'block';
}

var mouthnext = document.getElementById('show-mouth-card');
var skinnext = document.getElementById('show-skin-card');
var eyesnext = document.getElementById('show-eyes-card');

mouthnext.onclick = function () {
	mouthcard.style.display = 'block';
	skincard.style.display = 'none';
	eyecard.style.display = 'none';

}
skinnext.onclick = function () {
	mouthcard.style.display = 'none';
	skincard.style.display = 'block';
	eyecard.style.display = 'none';
}
eyesnext.onclick = function () {
	mouthcard.style.display = 'none';
	skincard.style.display = 'none';
	eyecard.style.display = 'block';
}