/*eslint-env es6*/
/*eslint-env browser*/
window.onload = function(){
	
/*animation for knob-1*/
var knob1 = document.getElementsByClassName('knob-1')[0];
var knob1Counter = 0;
function knobRotate() {
	knob1Counter += 45;
	if (knob1Counter == 360) {
		knob1Counter = 0;
	}
	knob1.style.transform = `rotate(${knob1Counter}deg)`;
}
knob1.addEventListener('click',function(){window.requestAnimationFrame(knobRotate)})

	
/*animation for knob-2*/	
var knob2 = document.getElementsByClassName('knob-2')[0];
var knob2Counter = 0;
function knobRotate2() {
	knob2Counter += 45;
	if (knob2Counter == 360) {
		knob2Counter = 0;
	}
	knob2.style.transform = `rotate(${knob2Counter}deg)`;
}
knob2.addEventListener('click',function(){window.requestAnimationFrame(knobRotate2)})	
}
