/*eslint-env es6*/
/*eslint-env browser*/
window.onload = function(){
var audioStatic = document.getElementById('audioStatic');
audioStatic.volume = 0.09;
audioStatic.loop = true;

	
var initialAnimation = document.getElementsByClassName('initial-animation')[0];

	
var animateWidth = 0;
var animateHeight = 0;
var vidStatic = document.getElementsByClassName('static-gif')[0];
var vidStaticSource = [
	"https://giphy.com/embed/l41K3o5TzvmhZwd4A",
	"https://giphy.com/embed/3o6vXRxrhj7Ov94Gbu",
	"https://giphy.com/embed/riw3K0D2h4klG",
	"https://giphy.com/embed/KYOD96tSm8Ovm",
	"https://giphy.com/embed/cIzTaqISogDFS",
	"https://giphy.com/embed/14b7jOY6PdD3lC"
];
	
	
/*download the GIF's, sometimes a 404 error happens*/	
	
	
function randomStatic(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
}

/*one shot, only during the opening of the website*/	
var staticIframe = document.getElementsByClassName('static-iframe')[0].getAttributeNode('src'); 
staticIframe.value = vidStaticSource[randomStatic(0,5)];
	
function opening(){
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
		
		audioStatic.play();
		
		vidStatic.classList.toggle('hide');
		initialAnimation.classList.toggle('hide');
		setTimeout(function(){
			
			audioStatic.pause();
			
			document.getElementsByClassName('about')[0].classList.toggle('hide');
			vidStatic.classList.toggle('hide');
		}, 600)	
	}else if (animateHeight < 70){
		window.requestAnimationFrame(openingPart3);
	}		
}	
/*
workaround for disabled autoplay on all browsers for sercurity reasons

When you attempt to autoplay audio without the user interacting with the document first, it will throw an error. So the key is to get the user interact with the document first.

Source: https://stackoverflow.com/questions/58002958/is-there-any-workaround-or-hack-to-make-the-audio-autoplay-on-chrome-firefox
Contributor: https://stackoverflow.com/users/11519208/taki7o7
*/	

var powerButton = document.getElementById('powerButton');
powerButton.addEventListener('click',()=>{window.requestAnimationFrame(opening);})
	
	
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
		audioStatic.play();
		knob1.removeEventListener('click',function(){window.requestAnimationFrame(knobRotate)});
		knob1.removeEventListener('click', crtPagesToggle);
		staticIframe.value = vidStaticSource[randomStatic(0,5)];
		vidStatic.classList.toggle('hide');		
		setTimeout(function(){
			audioStatic.pause();
			vidStatic.classList.toggle('hide');			
			crtPages[0].classList.toggle('hide');
			knob1.addEventListener('click', crtPagesToggle);
			knob1.addEventListener('click',function(){window.requestAnimationFrame(knobRotate)});	
		},200);		
	}else if(toShow == crtProjects.length-1) {
		audioStatic.play();
		knob1.removeEventListener('click',function(){window.requestAnimationFrame(knobRotate)});
		knob1.removeEventListener('click', crtPagesToggle);
		crtPages[toShow].classList.toggle('hide');
		staticIframe.value = vidStaticSource[randomStatic(0,5)];
		vidStatic.classList.toggle('hide');
		setTimeout(function(){
			audioStatic.pause();
			vidStatic.classList.toggle('hide');			
			crtPages[0].classList.toggle('hide');
			knob1.addEventListener('click', crtPagesToggle);
			knob1.addEventListener('click',function(){window.requestAnimationFrame(knobRotate)});	
		},200);
					
	}else {
		audioStatic.play();
		knob1.removeEventListener('click',function(){window.requestAnimationFrame(knobRotate)});
		knob1.removeEventListener('click', crtPagesToggle);
		crtPages[toShow].classList.toggle('hide');
		staticIframe.value = vidStaticSource[randomStatic(0,5)];
		vidStatic.classList.toggle('hide');
		setTimeout(function(){
			audioStatic.pause();
			vidStatic.classList.toggle('hide');		
			crtPages[toShow + 1].classList.toggle('hide');
			knob1.addEventListener('click', crtPagesToggle);
			knob1.addEventListener('click',function(){window.requestAnimationFrame(knobRotate)});	
		},200)

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
		audioStatic.play();
		knob2.removeEventListener('click',function(){window.requestAnimationFrame(knobRotate2)})			
		knob2.removeEventListener('click', crtProjectsToggle);
		staticIframe.value = vidStaticSource[randomStatic(0,5)];
		vidStatic.classList.toggle('hide');			
		setTimeout(function(){
			audioStatic.pause();
			vidStatic.classList.toggle('hide');			
			crtProjects[0].classList.toggle('hide');
			knob2.addEventListener('click', crtProjectsToggle);	
			knob2.addEventListener('click',function(){window.requestAnimationFrame(knobRotate2)})			
		},200);		
	}else if(toShow == crtProjects.length-1) {
		audioStatic.play();
		knob2.removeEventListener('click',function(){window.requestAnimationFrame(knobRotate2)})		
		knob2.removeEventListener('click', crtProjectsToggle);
		crtProjects[toShow].classList.toggle('hide');
		staticIframe.value = vidStaticSource[randomStatic(0,5)];
		vidStatic.classList.toggle('hide');	
		setTimeout(function(){
			audioStatic.pause();
			vidStatic.classList.toggle('hide');			
			crtProjects[0].classList.toggle('hide');
			knob2.addEventListener('click', crtProjectsToggle);
			knob2.addEventListener('click',function(){window.requestAnimationFrame(knobRotate2)})			
		},200);
				
	}else {
		audioStatic.play();
		knob2.removeEventListener('click',function(){window.requestAnimationFrame(knobRotate2)})		
		knob2.removeEventListener('click', crtProjectsToggle);
		crtProjects[toShow].classList.toggle('hide');
		staticIframe.value = vidStaticSource[randomStatic(0,5)];
		vidStatic.classList.toggle('hide');			
		setTimeout(function(){
			audioStatic.pause();
			vidStatic.classList.toggle('hide');			
			crtProjects[toShow + 1].classList.toggle('hide');
			knob2.addEventListener('click', crtProjectsToggle);	
			knob2.addEventListener('click',function(){window.requestAnimationFrame(knobRotate2)})		
		},200);		
	}
}	
knob1.addEventListener('click', crtPagesToggle);
knob2.addEventListener('click', crtProjectsToggle);
	
}
