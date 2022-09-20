var d;
var sound = new Audio('../assets/pop.mp3');
var time = setInterval(function () {
	sound.play();
	d = new Date();
	hours = d.getHours();
	min = d.getMinutes();
	sec = d.getSeconds();

	document.getElementById('sec').style.rotate = `${-90 + sec * 6}deg`;
	document.getElementById('min').style.rotate = `${-90 + min * 6}deg`;
	document.getElementById('hour').style.rotate = `${
		-90 + (hours + min / 60) * 30
	}deg`;
}, 1000);