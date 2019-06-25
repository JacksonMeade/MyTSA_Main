function Movie_OnStart(){
StackTrace="On Start";
count = 0;

window.parent.parent.initializeConnection();
}

function Movie_OnUpdate(TimeChange,SecondsChange){
StackTrace="On Update";
if (!navigator.onLine) {
set_conferenceStatus("pending");
}
else {
if (window.parent.parent.askStatus()) {
set_conferenceStatus("active");
}
else {
set_conferenceStatus("inactive");
}
}
}

function Frame_Notes_Conference_0_0(ID){
StackTrace="Scene 1 Frame 0";
TextBoxSet("N_CN.CountN",count);

}

function Conference_OnClick(){
StackTrace="Conference.On Click";
TimelineSetSpeed("N_CN",-1);
TimelinePlay("N_CN");
}

function Frame_Notes_Competition_0_0(ID){
StackTrace="Scene 1 Frame 0";
TextBoxSet("N_CM.CountM",count);

}

function Competition_OnClick(){
StackTrace="Competition.On Click";
TimelineSetSpeed("N_CM",-1);
TimelinePlay("N_CM");
}

function Frame_Notes_Chapter_0_0(ID){
StackTrace="Scene 1 Frame 0";
TextBoxSet("N_CH.CountH",count);

}

function Chapter_OnClick(){
StackTrace="Chapter.On Click";
TimelineSetSpeed("N_CH",-1);
TimelinePlay("N_CH");
}


StackTrace="General";
var count;

function notify(type,num) {
	count = num;
	var selectedNotifier = "N_" + new String(type);
	TimelineSetSpeed(selectedNotifier,1);
	TimelinePlay(selectedNotifier);
}

function engage_changer() {
	StatusChange.Visible = true;
}

function set_conferenceStatus(status) {
	switch(status) {
		case "active":
			active.Visible = true;
			pending.Visible = false;
			inactive.Visible = false;
			TextBoxSet("StatusText","State Conference is Live");
			break;
		case "pending":
			active.Visible = false;
			pending.Visible = true;
			inactive.Visible = false;
			TextBoxSet("StatusText","State Conference is Pending");
			break;
		case "inactive":
			active.Visible = false;
			pending.Visible = false;
			inactive.Visible = true;
			TextBoxSet("StatusText","State Conference has Not Started");
			break;
	}

}

