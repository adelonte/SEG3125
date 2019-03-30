function shooAlert() {
	document.getElementById("sendSuccess").classList.add("d-none");
}

function onSubmit() {
	if($("#contact-form").valid() === false) {
		return;
	}
	
	document.getElementById("sendSuccess").classList.remove("d-none");
	window.setTimeout(shooAlert,2000);
}
//prevent form submit
document.getElementById("contact-form").addEventListener("submit", function(evt) { evt.preventDefault(); });
//register click
document.getElementById("contact-form").addEventListener("submit", onSubmit);