var key;

overlay = document.getElementById("HoldPending").style;
overlay.display = "none";

function initializeConnection() {
    key = document.getElementById("ConferenceHub").contentWindow.document.getElementById("Movie").contentWindow;
    key.set_conferenceStatus("inactive");

    setInterval(UIStatus, 5000);
    setInterval(NVStatus, 5000);
}

function UIStatus() {
    if (key.conferenceStatus === "pending") {
        overlay.display = "inherit";
    }
    else {
        overlay.display = "none";
    }
}

function NVStatus() {
    if (!navigator.onLine) {
        key.set_conferenceStatus("pending");
    }
    else {
        if (askStatus()) {
            key.set_conferenceStatus("active");
        }
        else {
            key.set_conferenceStatus("inactive");
        }
    }
}

function askStatus() {
    return true;
}