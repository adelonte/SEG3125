function shooAlert() {
	document.getElementById("sendSuccess").classList.add("d-none");
}

function onSubmit() {
	if($("#infoForm").valid() === false) {
		return;
	}
	
	document.getElementById("sendSuccess").classList.remove("d-none");
	window.setTimeout(shooAlert,2000);
}

//register click
document.getElementById("infoForm").addEventListener("submit", onSubmit);