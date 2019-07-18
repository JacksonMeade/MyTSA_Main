loginForm.addEventListener('submit', (e) => {
	e.preventDefault();

	const loginForm = document.querySelector('#loginForm');
	
	const email = loginForm['email'].value;
	const password = loginForm['password'].value;

	auth.signInWithEmailAndPassword(email, password).then(() => {
		loginForm.reset();
		loginForm.querySelector('.error').innerHTML = '';
		window.location.replace("../homepage/home.html");
	}).catch(err => {
		loginForm.querySelector('.error').innerHTML = err.message;
	});
});
