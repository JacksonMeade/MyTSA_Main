const signupForm = document.querySelector('#signupForm');

signupForm.addEventListener('submit', (e) => {
	e.preventDefault();

	const email = signupForm['email'].value;
	const password = signupForm['password'].value;

	if (password !== signupForm['confirm_password'].value) {
		alert("Your passwords do not match");
	}

	var e = document.getElementById("role");
	var strUser = e.options[e.selectedIndex].value;

	auth.createUserWithEmailAndPassword(email, password).then(cred => {
		return db.collection('Users').add({
			email: email,
			first_name: signupForm['first_name'].value,
			last_name: signupForm['last_name'].value,
			role: strUser
		});
	}).then(() => {
		signupForm.querySelector('.error').innerHTML = ''
		window.location.replace("homepage/home.html");
		signupForm.reset();
	}).catch(err => {
		signupForm.querySelector('.error').innerHTML = err.message;
	});
});
