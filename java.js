var a = document.getElementById("luke");
var b = document.getElementById("michael");
var c = document.getElementById("calum");
var d = document.getElementById("ash");
var e = document.getElementById("young");
var audio = new Audio("images/it-sounds-a-bit-loud-for-an-acoustic-set-calum.mp3") ;

function newImg(){
	a.src="images/ezgif-6-38aabc66c892.gif";
	a.classList.remove("hvr-glow");
}

function newImg1(){
	b.src="images/ezgif-6-9cbefa22dfde.gif";
	b.classList.remove("hvr-glow");
}

function newImg2(){
	c.src="images/ezgif-6-e66a354a424f.gif";
	c.classList.remove("hvr-glow");
}

function newImg3(){
	d.src="images/ezgif-6-30056ffb951f.gif";
	d.classList.remove("hvr-glow");
}

function newSound(){
	audio.play();
}

