//Google Maps API bstrap
function initMap() {
	var canada_center = {lat: 56.1304, lng: -106.3468};
	var uottawa = {lat:45.4231, lng:-75.6831};

	var mapCanvas = document.getElementById('map');
	
	var mapOptions = {
	  center: canada_center,
	  zoom: 3,
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

	//uottawa marker
	var marker = new google.maps.Marker({
	  position: uottawa,
	  map: map,
	  icon: markerIcon
	});

	var contentString = '<div class="info-window">' +
	'<h3>Info Window Content</h3>' +
	'<div class="info-content">' +
	'<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>' +
	'</div>' +
	'</div>';

	var infowindow = new google.maps.InfoWindow({
	  content: contentString,
	  maxWidth: 400
	});

	marker.addListener('click', function () {
	  infowindow.open(map, marker);
	});
}