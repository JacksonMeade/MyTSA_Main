var key;

overlay = document.getElementById("HoldPending").style
overlay.display = "none";

setInterval(UIStatus, 5000);

function initializeConnection() {
    key = document.getElementById("ConferenceHub").contentWindow.document.getElementById("Movie").contentWindow;
    key.set_conferenceStatus("inactive");
}

function UIStatus() {
    if (key.conferenceStatus === "Pending") {
        overlay.display = "inherit";
    }
}

function askStatus() {
    return true;
}