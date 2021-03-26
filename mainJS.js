/*eslint-env es6*/
/*eslint-env browser*/
window.onload = function(){
var audioStatic = document.getElementById('audioStatic');
audioStatic.volume = 0.1;
audioStatic.loop = true;

var knobSound = document.getElementById('knob-sound');
knobSound.volume = 0.2;
knobSound.playbackRate = 3.5;

var switchSound = document.getElementById("switch-sound");
switchSound.volume = 0.2;
switchSound.playbackRate = 2;
	
var crtState = false;	

	
var initialAnimation = document.getElementsByClassName('initial-animation')[0];

	
var animateWidth = 0;
var animateHeight = 0;
var vidStatic = document.getElementsByClassName('static-gif')[0];
	
var crtPages = document.getElementsByClassName('crt-pages');
var crtProjects = document.getElementsByClassName('crt-projects');	

	
/*suggest using image sprite for all images for a single load from the server*/
/*can gif's be sprited?*/	
	
var vidStaticSource = [
'Resources/l41K3o5TzvmhZwd4A.gif',
'Resources/3o6vXRxrhj7Ov94Gbu.gif',
'Resources/riw3K0D2h4klG.gif',
'Resources/KYOD96tSm8Ovm.gif',
'Resources/cIzTaqISogDFS.gif',
'Resources/14b7jOY6PdD3lC.gif'	
];
	
/*download the GIF's, sometimes a 404 error happens*/	
	
	
function randomStatic(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
}

/*one shot, only during the opening of the website*/	
	
function staticIframe() { 
	vidStatic.style.backgroundImage = `url("${vidStaticSource[randomStatic(0,5)]}"`;	
}
	
/*make all opening functions as only one function since it is only triggered once?*/	
						 	
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
		initialAnimation.style.borderRadius =  '0px';
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
		staticIframe();
		vidStatic.classList.toggle('hide');
		initialAnimation.classList.toggle('hide');
		setTimeout(function(){
			
			audioStatic.pause();
			
			document.getElementsByClassName('about')[0].classList.toggle('hide');
			vidStatic.classList.toggle('hide');
			powerButton.addEventListener('click', powerButtonSwitch)
			knob1.addEventListener('click', crtPagesToggle);
			knob2.addEventListener('click', crtProjectsToggle);
		}, 600)	
	}else {
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
powerButton.addEventListener('click', powerButtonSwitch)	
function powerButtonSwitch() {
	if (!crtState){
		switchSound.play();
		crtState = true;
		powerButton.setAttribute('style',"background-image: url('Resources/on-state-switch.png')");
		powerButton.removeEventListener('click', powerButtonSwitch);
		knob1.removeEventListener('click', crtPagesToggle);
		knob2.removeEventListener('click', crtProjectsToggle);
		window.requestAnimationFrame(opening);
	} else {
		switchSound.play();
		crtState = false;
		powerButton.setAttribute('style',"background-image: url('Resources/off-state-switch.png')");
		powerButton.removeEventListener('click', powerButtonSwitch);
		knob1.removeEventListener('click', crtPagesToggle);
		knob2.removeEventListener('click', crtProjectsToggle);
		window.requestAnimationFrame(closing);		
	}	
}	

/*produces stuttering or visible frames as height is going down*/
/*add 2 black horizontal bars inside the dive of initial-animation, top and bottom. since no stuttering happens when div is expanding, expand the bars to create illusion of reducing height of white background.*/	
/*experiment on transition if it generates a cleaner output*/	
/*To trigger an element's transition, toggle a class name on that element that triggers it.*/	
	
	
function closing() {
	initialAnimation.classList.toggle('hide');
	for(let x = 0; x <= crtPages.length-1; x++){
		crtPages[x].classList.add('hide');
	}
	for(let x = 0; x <= crtPages.length-1; x++){
		crtProjects[x].classList.add('hide');
	}	
	closing2();
}
	
function closing2() {
	animateHeight -= 4;	
	if (animateHeight < 2){
		animateHeight = 2;
	}
	initialAnimation.style.height = `${animateHeight}%`;
	if (animateHeight == 2) {
		closing3();
	}else {
		window.requestAnimationFrame(closing2);
	}			
}

function closing3(){
	animateWidth -= 4;	
	if (animateWidth < 2){
		animateWidth = 2;
	}
	initialAnimation.style.width = `${animateWidth}%`;
	if (animateWidth == 2) {
		initialAnimation.style.borderRadius =  '50%';
		closing4();
	}else {
		window.requestAnimationFrame(closing3);
	}		
}

function closing4(){
	animateHeight -= 0.2;
	animateWidth -= 0.2;
	initialAnimation.style.width = `${animateWidth}%`;
	initialAnimation.style.height = `${animateHeight}%`;
	if (animateWidth < 0){
/*redeclare 0 to make sure the values of initial animation is zero*/
		animateHeight = 0 ;
		animateWidth = 0 ;	
		powerButton.addEventListener('click', powerButtonSwitch);
	} else {
		window.requestAnimationFrame(closing4);		
	}
}
	
	
	
/*animation for knob-1*/
var knob1 = document.getElementsByClassName('knob-1')[0];
var knob1Counter = 0;	
	


	
/*animation for knob-2*/	
var knob2 = document.getElementsByClassName('knob-2')[0];
var knob2Counter = 0;

	

	

/*changes the display in the crt as Pages/Projects knob is clicked*/		
function crtPagesToggle() {
	knob1Counter += 45;
	if (knob1Counter == 360) {
		knob1Counter = 0;
	}
	knob1.style.transform = `rotate(${knob1Counter}deg)`;	

	
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
		knobSound.play();
		knob1.removeEventListener('click', crtPagesToggle);
		staticIframe();
		vidStatic.classList.toggle('hide');		
		setTimeout(function(){
			audioStatic.pause();
			knobSound.pause();
			knobSound.currentTime = 0;
			vidStatic.classList.toggle('hide');			
			crtPages[0].classList.toggle('hide');
			knob1.addEventListener('click', crtPagesToggle);
		},200);		
	}else if(toShow == crtPages.length-1) {
		audioStatic.play();
		knobSound.play();
		knob1.removeEventListener('click', crtPagesToggle);
		crtPages[toShow].classList.toggle('hide');
		staticIframe();
		vidStatic.classList.toggle('hide');
		setTimeout(function(){
			audioStatic.pause();
			knobSound.pause();
			knobSound.currentTime = 0;
			vidStatic.classList.toggle('hide');			
			crtPages[0].classList.toggle('hide');
			knob1.addEventListener('click', crtPagesToggle);
		},200);
					
	}else {
		audioStatic.play();
		knobSound.play();
		knob1.removeEventListener('click', crtPagesToggle);
		crtPages[toShow].classList.toggle('hide');
		staticIframe();
		vidStatic.classList.toggle('hide');
		setTimeout(function(){
			audioStatic.pause();
			knobSound.pause();
			knobSound.currentTime = 0;			
			vidStatic.classList.toggle('hide');		
			crtPages[toShow + 1].classList.toggle('hide');
			knob1.addEventListener('click', crtPagesToggle);
		},200)

	}
}	
	
function crtProjectsToggle() {
	knob2Counter += 45;
	if (knob2Counter == 360) {
		knob2Counter = 0;
	}
	knob2.style.transform = `rotate(${knob2Counter}deg)`;
	
	
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
		knobSound.play();		
		knob2.removeEventListener('click', crtProjectsToggle);
		staticIframe();
		vidStatic.classList.toggle('hide');			
		setTimeout(function(){
			audioStatic.pause();
			knobSound.pause();
			knobSound.currentTime = 0;				
			vidStatic.classList.toggle('hide');			
			crtProjects[0].classList.toggle('hide');
			knob2.addEventListener('click', crtProjectsToggle);	
		},200);		
	}else if(toShow == crtProjects.length-1) {
		audioStatic.play();
		knobSound.play();		
		knob2.removeEventListener('click', crtProjectsToggle);
		crtProjects[toShow].classList.toggle('hide');
		staticIframe();
		vidStatic.classList.toggle('hide');	
		setTimeout(function(){
			audioStatic.pause();
			knobSound.pause();
			knobSound.currentTime = 0;				
			vidStatic.classList.toggle('hide');			
			crtProjects[0].classList.toggle('hide');
			knob2.addEventListener('click', crtProjectsToggle);
		},200);
				
	}else {
		audioStatic.play();
		knobSound.play();		
		knob2.removeEventListener('click', crtProjectsToggle);
		crtProjects[toShow].classList.toggle('hide');
		staticIframe();
		vidStatic.classList.toggle('hide');			
		setTimeout(function(){
			audioStatic.pause();
			knobSound.pause();
			knobSound.currentTime = 0;				
			vidStatic.classList.toggle('hide');			
			crtProjects[toShow + 1].classList.toggle('hide');
			knob2.addEventListener('click', crtProjectsToggle);	
		},200);		
	}
}	
	
}
