var d;
function updateTime() {
	d = new Date();
	hours = d.getHours();
	min = d.getMinutes();
	sec = d.getSeconds();

	document.getElementById('sec').style.transform = `rotate(${-90 + sec * 6}deg )`;
	document.getElementById('min').style.transform = `rotate(${-90 + min * 6}deg)`;
	document.getElementById('hour').style.transform = `rotate(${-90 + (hours + min / 60) * 30}deg)`;
}

updateTime();
var time = setInterval(updateTime, 1000);
