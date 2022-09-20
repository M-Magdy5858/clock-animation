var timer = 0;

var time;
var interval = 1000;
function start(i) {
	time = setInterval(function () {
		timer++;
		hours = timer / 3600;
		min = (timer % 3600) / 60;
		sec = timer % 60;

		document.getElementById('sec').style.rotate = `${-90 + sec * 6}deg`;
		document.getElementById('min').style.rotate = `${-90 + min * 6}deg`;
		document.getElementById('hour').style.rotate = `${-90 + hours * 30}deg`;
	}, i);
}

start(interval);
// speed up
document.getElementById('up-btn').addEventListener('click', function () {
	document.getElementById('down-btn').disabled = false;
	clearInterval(time);
	interval /= 10;
	if (interval == 1) this.disabled = 'true';
	start(interval);
});

//speed down
document.getElementById('down-btn').addEventListener('click', function () {
	document.getElementById('up-btn').disabled = false;
	clearInterval(time);
	interval *= 10;
	if (interval == 1000) this.disabled = 'true';
	start(interval);
});
