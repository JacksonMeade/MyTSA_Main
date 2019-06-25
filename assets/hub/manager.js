var key;

function initializeConnection() {
    key = document.getElementById("ConferenceHub").contentWindow.document.getElementById("Movie").contentWindow;
    key.set_conferenceStatus("inactive");
}