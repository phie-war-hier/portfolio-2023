window.addEventListener("load", function () {
	if (window.location == "https://sophie-was-here.de") {
		window.location.href = 'https://www.so-phie.de'; 
	}
});



var projekte = document.querySelectorAll('.content > div');
var navButtons = document.querySelectorAll('.nav button');


for (var btn of navButtons) {

	btn.addEventListener('pointerup', function () {

		var projektNr = this.getAttribute('data-projekt');

		for (var p of projekte) {
			p.classList.remove('show');
		}

		document.querySelector('.projekt' + projektNr).classList.add('show');

		for (var b of navButtons) {
			b.classList.remove('aktiv');
		}

		document.querySelector('.p' + projektNr).classList.add('aktiv');

		console.log(projektNr);
		
	});
};





const cursorTag = document.querySelector("div.cursors");
const ball = cursorTag.querySelector("div");

const ballMessage = cursorTag.querySelector("div span");
const images = document.querySelectorAll("img[data-hover]");

let currentX = 0;
let currentY = 0;
let aimX = 0;
let aimY = 0;

let speed = 0.2;

const animate = function() {
	currentX += (aimX - currentX) * speed;
	currentY += (aimY - currentY) * speed;

	ball.style.left = currentX + "px";
	ball.style.top = currentY + "px";

	requestAnimationFrame(animate);
};



animate();


document.addEventListener("mousemove", function (event) {
	aimX = event.pageX;
	aimY = event.pageY;
});



images.forEach(image => {
	image.addEventListener("mouseover", function () {

		ballMessage.classList.add("visible");
		ballMessage.innerHTML = image.getAttribute("data-hover");

	});

	image.addEventListener("mouseout", function () {
		
		ballMessage.classList.remove("visible");

	});

});





