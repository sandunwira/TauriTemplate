const { appWindow } = window.__TAURI__.window;
const images = document.getElementsByTagName('img');


document.getElementById('titlebar-minimize').addEventListener('click', () => appWindow.minimize());
document.getElementById('titlebar-maximize').addEventListener('click', () => appWindow.toggleMaximize());
document.getElementById('titlebar-close').addEventListener('click', () => appWindow.close());


for (let i = 0; i < images.length; i++) {
	images[i].addEventListener('mousedown', function (e) {
		e.preventDefault();
	});
}

document.addEventListener('contextmenu', function (e) {
	e.preventDefault();
});


window.addEventListener('keydown', function (event) {
	if (event.keyCode === 116 || (event.ctrlKey && event.keyCode === 82)) {
		event.preventDefault();
	}
});