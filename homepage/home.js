const logout = document.querySelector('#logout');
var userSignedIn = false;

function loadInfo(doc) {
	$("#first_name").html(doc.data().first_name);
	$("#last_name").html(doc.data().last_name);
	$("#email").html(auth.currentUser.email);
	$("#role").html(doc.data().role);
}

firebase.auth().onAuthStateChanged(user => {
  if (user) {
		if (!userSignedIn) {
			var email = user.email;

			db.collection('Users').where("email", "==", "" + email).get().then(snapshot => {
				snapshot.docs.forEach(doc => {
					loadInfo(doc);
				});
			});

			userSignedIn = true;
		}
  } else {
	  console.log("No user logged in");
	  window.location.replace("../login_signup/login.html");
  }
});

logout.addEventListener('click', (e) => {
	e.preventDefault();

	auth.signOut().then(() => {
		console.log('User Logged Out!');
		window.location.replace("../login_signup/login.html");
	}).catch(err => {
		console.log(err);
	});
});
