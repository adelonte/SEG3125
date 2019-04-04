function searchFunc() {
	var input, filter, ul, li, a, i, txtValue;
	input = document.getElementById("searchUni");
	filter = input.value.toUpperCase();
	ul = document.getElementById("myUL");
	li = ul.getElementsByTagName("a");
	
	for (let i = 0; i < li.length; i++) {
		txtValue = li[i].textContent || li[i].innerText;
		
		if (txtValue.toUpperCase().indexOf(filter) > -1) {
			li[i].style.display = "";
		} 
		else {
			li[i].style.display = "none";
		}
	}
}

function setUniInfo(uni) {
	document.getElementById("uni-name").textContent = uni.name;
	document.getElementById("uni-address").textContent = uni.address;
	document.getElementById("uni-established").textContent = uni.established;
	document.getElementById("uni-students").textContent = new Intl.NumberFormat().format(uni.students);
	document.getElementById("uni-language").textContent = uni.language;
	document.getElementById("uni-nickname").textContent = uni.nickname;
	document.getElementById("uni-sports").textContent = uni.sports;
	document.getElementById("uni-desc").textContent = uni.desc;

	let link = document.getElementById("uni-website");
	link.setAttribute("href", uni.website.url);
	link.textContent = uni.website.shortname;

	document.getElementById("uni-details").classList.remove("d-none");
}

function goToUni() {
	let url = window.location.href;
	let query = url.substring(url.indexOf("?"));
	let urlParams = new URLSearchParams(query);
	let uni = urlParams.get("uni");
	
	let link = document.getElementById(uni);
	if(link) {
		link.click();
	}
}

//Google Maps API bstrap
function initMap() {
	var mapCenter = {lat: 56.1304, lng: -98.3468};

	var mapCanvas = document.getElementById('map');
	
	var mapOptions = {
	  center: mapCenter,
	  zoom: 4,
	  panControl: false,
	  mapTypeId: google.maps.MapTypeId.ROADMAP
	}
	var map = new google.maps.Map(mapCanvas, mapOptions);

	var markerIcon = {
		url: "../../assets/img/map-markers/blue-marker.png",
		scaledSize: new google.maps.Size(30, 46),
		origin: new google.maps.Point(0, 0),
		anchor: new google.maps.Point(15, 46)
	};

	for(let uni of unis) {
		let marker = new google.maps.Marker({
			position: uni.latlong,
			map: map,
			icon: markerIcon
		});
		
		let pinContent = document.createElement("div");
		pinContent.classList.add("info-window");
		let pinTitle = document.createElement("h3");
		pinTitle.appendChild(document.createTextNode(uni.name));
		let pinBody = document.createElement("div");
		pinBody.classList.add("info-content");
		let pinBodyText = document.createElement("p");
		pinBodyText.appendChild(document.createTextNode(uni.address));
		pinBody.appendChild(pinBodyText);
		let pinLink = document.createElement("a");
		pinLink.setAttribute("href","#uni-details");
		pinLink.appendChild(document.createTextNode("Learn More"));
		pinBody.appendChild(pinLink);
		pinContent.appendChild(pinTitle);
		pinContent.appendChild(pinBody);
		
		let infowindow = new google.maps.InfoWindow({
			content: pinContent,
			maxWidth: 500
		});
		
		marker.addListener('click', function () {
			infowindow.open(map, marker);
			setUniInfo(uni);
		});
		
		document.getElementById(uni.listid).addEventListener("click", function () { 
			infowindow.open(map, marker);
			setUniInfo(uni);
		});
	}
}

//register search function
document.getElementById("searchUni").addEventListener("input", searchFunc);
//register uni click function
window.addEventListener("load", goToUni);