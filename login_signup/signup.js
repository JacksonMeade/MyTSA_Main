const signupForm = document.querySelector('#signupForm');

signupForm.addEventListener('submit', (e) => {
	e.preventDefault();

	const password = signupForm['password'].value;

	if (password !== signupForm['confirm_password'].value) {
		alert("Your passwords do not match");
		return;
	}

	if (auth.CurrentUser != null) {
		auth.signOut().then(() => {
			createUser(password);
		});
	} else {
		createUser(password);
	}
});


function createUser(password) {
	const email = signupForm['email'].value;

	auth.createUserWithEmailAndPassword(email, password).then(() => {
		const e = document.getElementById("role");

		db.collection('Users').add({
			email: email,
			uid : auth.currentUser.uid,
			first_name: signupForm['first_name'].value,
			last_name: signupForm['last_name'].value,
			role: e.options[e.selectedIndex].value
		}).then(() => {
			window.location.replace("../homepage/home.html");
			signupForm.reset();
		});

		signupForm.querySelector('.error').innerHTML = '';
	}).catch(err => {
		signupForm.querySelector('.error').innerHTML = err.message;
	});
}
