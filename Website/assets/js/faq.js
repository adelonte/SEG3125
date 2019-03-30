function searchQuestions() {
	let search = document.querySelectorAll(".faq-q button");
	let input = document.getElementById("search").value;
	let results = document.getElementById("results");
	let hasResults = false;
	
	// spcial case: no search query
	if(input === "") {
		results.classList.add("d-none");
		return;
	}
	
	// prepare result box
	while(results.firstChild) {
		results.removeChild(results.firstChild);
	}
	
	for(let i of search) {
		let qText = i.textContent.trim();
		
		if(qText.indexOf(input) !== -1) {
			let qLink = document.createElement("a");
			qLink.appendChild(document.createTextNode(qText));
			qLink.setAttribute("href", "#" + i.id);
			results.appendChild(qLink);
			hasResults = true;
		}
	}
	
	if(hasResults) {
		results.classList.remove("d-none");
	}
	else {
		results.classList.add("d-none");
	}
}

// register input handlers
document.getElementById("search").addEventListener("input", searchQuestions);