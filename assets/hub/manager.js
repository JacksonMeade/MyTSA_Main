var key;

overlay = document.getElementById("HoldPending").style;
overlay.display = "none";

function initializeConnection() {
    key = document.getElementById("ConferenceHub").contentWindow.document.getElementById("Movie").contentWindow;
    key.set_conferenceStatus("inactive");
}

function UIStatus() {
    if (key.conferenceStatus === "Pending") {
        overlay.display = "inherit";
    }
    else {
        overlay.display = "none";
    }
}

function askStatus() {
    return true;
}