const logout = document.querySelector('#logout');

function loadInfo(doc) {
	$("#first_name").html(doc.data().first_name);
	$("#last_name").html(doc.data().last_name);
	$("#email").html(auth.currentUser.email);
	$("#role").html(doc.data().role);
}

$(function() {
	var user = auth.currentUser;

	if (user) {
		var uid = user.uid;

		db.collection('Users').where("uid", "==", "" + uid).get().then(snapshot => {
			snapshot.docs.forEach(doc => {
				loadInfo(doc);
			});
		});
	} else {
	  console.log("No user logged in");
	}
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
