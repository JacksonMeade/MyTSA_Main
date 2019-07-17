const loginForm = document.querySelector('#loginForm');

loginForm.addEventListener('submit', (e) => {
	e.preventDefault();

	const email = loginForm['email'].value;
	const password = loginForm['password'].value;

	auth.signInWithEmailAndPassword(email, password).then((cred) => {
		loginForm.reset();
		loginForm.querySelector('.error').innerHTML = '';
		window.location.replace("../homepage/home.html");
	}).catch(err => {
		loginForm.querySelector('.error').innerHTML = err.message;
	});
});
