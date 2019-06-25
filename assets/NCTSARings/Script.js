function displayMessage (evt) {
StackTrace="General";

	var message;
	if (evt.origin !== "https://jacksonmeade.github.io/") {
		message = "You are not worthy";
	}
	else {
		message = "I got " + evt.data + " from " + evt.origin;
	}
	TextBoxSet("StatusText",message);
}

if (window.addEventListener) {
	// For standards-compliant web browsers
	window.addEventListener("message", displayMessage, false);
}
else {
	window.attachEvent("onmessage", displayMessage);

}

