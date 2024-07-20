// Notification Handling
const notificationChecker = document.getElementById('notificationChecker');
notificationChecker.addEventListener('click', () => {
	if (Notification.permission === 'granted') {
		new Notification('Hello from TauriTemplate!', {
			// icon: 'assets/images/tauri.svg',
			body: 'This is a sample notification',
			sound: 'Default'
		});
	} else if (Notification.permission !== 'granted') {
		alert('Notifications cannot be displayed in this system');
	}
});

// Form Handling
const nameForm = document.getElementById('nameForm');
const nameInput = document.getElementById('nameInput');
const nameSubmitBtn = document.getElementById('nameSubmitBtn');

function nameSubmitValidation() {
	if (nameInput.value.length === 0) {
		nameSubmitBtn.disabled = true;
		nameSubmitBtn.title = 'Please enter your name';
	} else {
		nameSubmitBtn.disabled = false;
		nameSubmitBtn.title = 'Submit';
	}
};

nameInput.addEventListener('input', nameSubmitValidation);

nameForm.addEventListener('submit', (e) => {
	e.preventDefault();
	const name = document.getElementById('nameInput').value;
	alert(`Hello, ${name}!`);
	nameForm.reset();
	nameSubmitValidation();
});



window.addEventListener('load', () => {
	nameSubmitValidation();
});