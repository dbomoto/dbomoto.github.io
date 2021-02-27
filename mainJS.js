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
knob1.addEventListener('click',function(){window.requestAnimationFrame(knobRotate)});


	
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
	
/*changes the display in the crt as Pages knob is clicked*/	
var crtPages = document.getElementsByClassName('crt-pages');
function crtPagesToggle() {
	let toShow=0;
	for(let x = 0; x <= crtPages.length-1; x++){
		if (!crtPages[x].classList.contains('hide')){
			toShow = x;
		}
	}
	if (toShow == crtPages.length-1) {
		crtPages[toShow].classList.toggle('hide');
		crtPages[0].classList.toggle('hide');
	} else {
		crtPages[toShow].classList.toggle('hide');
		crtPages[toShow + 1].classList.toggle('hide');		
	}
}
knob1.addEventListener('click', crtPagesToggle);

	
}
