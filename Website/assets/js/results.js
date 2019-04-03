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

function filterUnis() {
	let storage = window.sessionStorage;
	let locations = JSON.parse(storage.getItem("locations"));
	
	if(locations.indexOf("on") == -1) {
		document.getElementById("uottawa_card").remove();
		document.getElementById("uoft_card").remove();
	}
	
	if(locations.indexOf("qu") == -1) {
		document.getElementById("mcgill_card").remove();
		document.getElementById("concordia_card").remove();
	}
	
	if(locations.indexOf("bc") == -1) {
		document.getElementById("ubc_card").remove();
	}
	
	if(locations.indexOf("ns") == -1) {
		document.getElementById("dal_card").remove();
	}
	
	let pg1 = document.getElementById("pg1").children[0].children;
	let pg2 = document.getElementById("pg2").children[0].children;
	
	if(pg2.length === 0) {
		document.getElementById("pg2").remove();
		document.getElementById("indicators").classList.add("d-none");
		document.getElementById("prev-btn").classList.add("d-none");
		document.getElementById("next-btn").classList.add("d-none");
	}
	else if(pg1.length < 3) {
		let pg1Len = pg1.children.length;
		
		for(let i = pg1Len; i < 3; i++) {
			let first = pg2.children[0];
			pg1.appendChild(first);
		}
	}
}

//prevent form submit
document.getElementById("infoForm").addEventListener("submit", function(evt) { evt.preventDefault(); });
//register click
document.getElementById("infoForm").addEventListener("submit", onSubmit);
//register onload function
document.addEventListener("DOMContentLoaded", filterUnis);