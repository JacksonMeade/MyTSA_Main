const form = document.querySelector('#organization-form');
const logout = document.querySelector('#logout');
var userSignedIn = false;

function loadInfo(doc) {
	var role = doc.data().role;
	$("#first_name").html(doc.data().first_name);
	$("#last_name").html(doc.data().last_name);
	$("#email").html(auth.currentUser.email);
	$("#role").html(role);

	if (role == "organization_manager") {
		$("#show-form").css("visibility", "visible");
	}
}

firebase.auth().onAuthStateChanged((user) => {
	if (user) {
		if (!userSignedIn) {
			var uid = user.uid;

			db.collection('Users').where("uid", "==", "" + uid).get().then(snapshot => {
				snapshot.docs.forEach(doc => {
					loadInfo(doc);
				});
			});

			userSignedIn = true;
		}
	} else {
	  console.log("No user logged in");
	}
});

$(function() {
	$("#show-form").css("visibility", "hidden");
	$("#organization-form").css("visibility", "hidden");

	$("#show-form").click(function() {
		$("#organization-form").css("visibility", "visible");
	});
});

logout.addEventListener('click', (e) => {
	e.preventDefault();

	auth.signOut().then(function() {
		console.log('User Logged Out!');
		window.location.replace("../login_signup/login.html");
	}).catch(function(error) {
		console.log(error);
	});
});

form.addEventListener('submit', (e) => {
	e.preventDefault();

		db.collection('Organizations').add({
			name: form['name'].value,
			abbreviation: form['abbreviation'].value,
			description: form['description'].value,
			archived_info: [],
			owners: []
		}).then(() => {
					$("#organization-form").css("visibility", "hidden");
					form.reset();
		});
});
