const signupForm = document.querySelector('#signupForm');
const e = document.getElementById("role");

signupForm.addEventListener('submit', (e) => {
	e.preventDefault();

	const password = signupForm['password'].value;

	if (password !== signupForm['confirm_password'].value) {
		alert("Your passwords do not match");
		return;
	}

	if (auth.currentUser != null) {
		auth.signOut().then(() => {
			createUser(password);
		});
	} else {
		createUser(password);
	}
});


function createUser(password) {
	const email = signupForm['email'].value;

	const stateOption = document.getElementById("state");
	const org = document.getElementById("org-select");

	var state;
	var role = e.options[e.selectedIndex].value;
	var organ;

	if (role == "competitor" || role == "state_delegation_advisor" || role == "chapter_advisor") {
		state = stateOption.options[stateOption.selectedIndex].value;
	} else {
		state = "national";
	}

	if (role == "competitor" || role == "state_delegation_advisor" || role == "chapter_advisor") {
		organ = org.options[org.selectedIndex].value;
	} else {
		organ = "";
	}

	auth.createUserWithEmailAndPassword(email, password).then((cred) => {
		db.collection('Users').add({
			uid : auth.currentUser.uid,
			first_name: signupForm['first_name'].value,
			last_name: signupForm['last_name'].value,
			role: role,
			state: state,
			rejected: false,
			organization: organ,
			approved: false
		}).then(() => {
			window.location.replace("../homepage/home.html");
		});

		signupForm.querySelector('.error').innerHTML = '';
	}).catch(err => {
		signupForm.querySelector('.error').innerHTML = err.message;
	});
}

$(function() {
	$("#label-state").css("visibility", "hidden");
	$("#state").css("visibility", "hidden");

	$("#org-select").css("visibility", "hidden");
	$("#org-select-label").css("visibility", "hidden");

	db.collection('Organizations').get().then(snapshot => {
		snapshot.docs.forEach(doc => {
			var abbreviation = doc.data().abbreviation;
			var name = doc.data().name;

			console.log(name);

			var item = document.createElement("option");
			$(item).addClass("user-organization");
			$(item).html(abbreviation);
			$(item).attr("value", abbreviation);
			$(item).attr("title", name);

			$("#org-select").append($(item));
		});
	});

});

function checkRole() {
	var role = e.options[e.selectedIndex].value;

	if (role == "competitor" || role == "state_delegation_advisor" || role == "chapter_advisor") {
		$("#label-state").css("visibility", "visible");
		$("#state").css("visibility", "visible");
		$("#org-select").css("visibility", "visible");
		$("#org-select-label").css("visibility", "visible");
	} else {
		$("#label-state").css("visibility", "hidden");
		$("#state").css("visibility", "hidden");
		$("#org-select").css("visibility", "hidden");
		$("#org-select-label").css("visibility", "hidden");
	}
}
