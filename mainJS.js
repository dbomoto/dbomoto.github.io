/*eslint-env es6*/
/*eslint-env browser*/
window.onload = function(){
var initialAnimation = document.getElementsByClassName('initial-animation')[0];
var animateWidth = 0;
var animateHeight = 0;
	
function opening(time){
	animateWidth += 0.5;
	animateHeight += 0.5;
	if (animateHeight > 5){
		animateHeight = 5;
	}
	if (animateWidth > 2){
		animateWidth = 2;
	}
	initialAnimation.style.width = `${animateWidth}%`;
	initialAnimation.style.height = `${animateHeight}%`;
	if ((animateHeight == 5) && (animateWidth == 2)) {
		openingPart2();
	}else if ((animateWidth < 2) || (animateHeight < 5)){
		window.requestAnimationFrame(opening);
	}
}

function openingPart2(){
	animateWidth += 3;
	animateHeight -= 0.2;	
	if (animateHeight < 1){
		animateHeight = 1;
	}
	if (animateWidth > 60){
		animateWidth = 60;
	}
	initialAnimation.style.width = `${animateWidth}%`;
	initialAnimation.style.height = `${animateHeight}%`;
	if ((animateHeight == 1) && (animateWidth == 60)) {
		openingPart3();
	}else if ((animateWidth < 60) || (animateHeight > 1)){
		window.requestAnimationFrame(openingPart2);
	}	
}
	
function openingPart3(){
	animateHeight += 5;	
	if (animateHeight > 70){
		animateHeight = 70;
	}
	initialAnimation.style.height = `${animateHeight}%`;
	if (animateHeight == 70) {
		initialAnimation.classList.toggle('hide');
		let vidStatic = document.getElementById('static-vid');
		vidStatic.classList.toggle('hide');
		vidStatic.play();
/* video not currently working, use GIF? */		
	}else if (animateHeight < 70){
		window.requestAnimationFrame(openingPart3);
	}		
}	
/*
		initialAnimation.classList.toggle('hide');
		document.getElementsByClassName('about')[0].classList.toggle('hide');	
*/
	
window.requestAnimationFrame(opening);
	
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
	

	
var crtPages = document.getElementsByClassName('crt-pages');
var crtProjects = document.getElementsByClassName('crt-projects');
/*changes the display in the crt as Pages/Projects knob is clicked*/		
function crtPagesToggle() {
	let toShow=0;
	for(let x of crtProjects){
		if(!x.classList.contains('hide')){
			x.classList.toggle('hide')
		}
	}	
	for(let x = 0; x <= crtPages.length-1; x++){
		if (!crtPages[x].classList.contains('hide')){
			toShow = x;
			x = crtPages.length;
		} else {
			toShow = -1;
		}
	}
	if (toShow == -1) {
		crtPages[0].classList.toggle('hide');
	}else if(toShow == crtProjects.length-1) {
		crtPages[toShow].classList.toggle('hide');
		crtPages[0].classList.toggle('hide');		
	}else {
		crtPages[toShow].classList.toggle('hide');
		crtPages[toShow + 1].classList.toggle('hide');	
	}
}	
function crtProjectsToggle() {
	let toShow=0;
	for(let x of crtPages){
		if(!x.classList.contains('hide')){
			x.classList.toggle('hide')
		}
	}	
	for(let x = 0; x <= crtProjects.length-1; x++){
		if (!crtProjects[x].classList.contains('hide')){
			toShow = x;
			x = crtProjects.length;
		} else {
			toShow = -1;
		}
	}
	if (toShow == -1) {
		crtProjects[0].classList.toggle('hide');
	}else if(toShow == crtProjects.length-1) {
		crtProjects[toShow].classList.toggle('hide');
		crtProjects[0].classList.toggle('hide');		
	}else {
		crtProjects[toShow].classList.toggle('hide');
		crtProjects[toShow + 1].classList.toggle('hide');	
	}
}	
knob1.addEventListener('click', crtPagesToggle);
knob2.addEventListener('click', crtProjectsToggle);
	
}
