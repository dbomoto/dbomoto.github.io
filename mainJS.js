/*eslint-env es6*/
/*eslint-env browser*/
window.onload = function(){
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
	
}
