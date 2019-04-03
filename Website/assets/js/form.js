function onFormSubmit() {
	let storage = window.sessionStorage;
	
	let options = document.getElementById("location").options;
	let selected = [];
	
	for(let i of options) {
		if(i.selected){
			selected.push(i.value);
		}
	}
	
	storage.setItem("locations", JSON.stringify(selected));
}

document.getElementById("userInfo").addEventListener("submit", onFormSubmit);