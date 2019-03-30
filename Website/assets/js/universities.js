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

//register search function
document.getElementById("searchUni").addEventListener("input", searchFunc);

//Google Maps API bstrap
function initMap() {
	var unis = [
	{ name:"University of Ottawa", desc:"The University of Ottawa (uOttawa or U of O) (French: Université d'Ottawa) is a bilingual public research university in Ottawa, Ontario, Canada. The main campus is located on 42.5 hectares (105 acres) in the residential neighbourhood of Sandy Hill, adjacent to Ottawa's Rideau Canal. The university offers a wide variety of academic programs, administered by ten faculties. It is a member of the U15, a group of research-intensive universities in Canada. The University of Ottawa is the largest English-French bilingual university in the world.", latlong:{lat:45.4231, lng:-75.6831}, listid:"uottawa" },
	{ name:"University of Toronto", desc:"The University of Toronto (UofT, or UToronto) is a public research university in Toronto, Ontario, Canada, located on the grounds that surround Queen's Park. It was founded by royal charter in 1827 as King's College, the first institution of higher learning in the colony of Upper Canada. Originally controlled by the Church of England, the university assumed the present name in 1850 upon becoming a secular institution. As a collegiate university, it comprises eleven colleges, which differ in character and history, each with substantial autonomy on financial and institutional affairs. It has two satellite campuses in Scarborough and Mississauga.", latlong:{lat:43.6629, lng:-79.3957}, listid:"uoft" },
	{ name:"McGill University", desc:"McGill University (French: Université McGill) is a public research university in Montreal, Quebec, Canada. It was established in 1821 by royal charter, granted by King George IV. The university bears the name of James McGill, a Montreal merchant originally from Scotland whose bequest in 1813 formed the university's precursor, McGill College.", latlong:{lat:45.5048, lng:-73.5772}, listid:"mcgill" },
	{ name:"Carleton University", desc:"Carleton University is a public comprehensive university in Ottawa, Ontario, Canada. Founded in 1942 as Carleton College, a private, non-denominational evening college to serve veterans returning from World War II, the institution was chartered as a university by the provincial government in 1952 through the The Carleton University Act. The legislation was subsequently amended in 1957 to give the institution to its current name. The university moved to its current campus in 1959, and would expand rapidly throughout the 1960s amid broader efforts by the provincial government to increase support to post-secondary institutions and expand access to higher education.", latlong:{lat:45.3876, lng:-75.6960}, listid:"carleton" },
	{ name:"University of British Columbia", desc:"The University of British Columbia (UBC) is a public research university with campuses in Vancouver and Kelowna, British Columbia. Established in 1908, UBC is British Columbia's oldest university. The university is ranked among the top 20 public universities worldwide and among the top three in Canada. With an annual research budget of $600 million (one of the largest in Canada), UBC funds over 8,000 projects a year.", latlong:{lat:49.2606, lng:-123.2460}, listid:"ubc" },
	{ name:"University of Alberta", desc:"The University of Alberta (also known as U of A and UAlberta) is a public research university located in Edmonton, Alberta, Canada. It was founded in 1908 by Alexander Cameron Rutherford, the first premier of Alberta, and Henry Marshall Tory, its first president. Its enabling legislation is the Post-secondary Learning Act. The university is considered a “Comprehensive academic and research university” (CARU), which means that it offers a range of academic and professional programs, which generally lead to undergraduate and graduate level credentials, and have a strong research focus.", latlong:{lat:53.5232, lng:-113.5263}, listid:"ualberta" },
	{ name:"University of Waterloo", desc:"The University of Waterloo (commonly referred to as Waterloo, UW, or UWaterloo) is a public research university with a main campus in Waterloo, Ontario, Canada. The main campus is on 404 hectares (998 acres) of land adjacent to \"Uptown\" Waterloo and Waterloo Park. The university offers academic programs administered by six faculties and ten faculty-based schools. The university also operates three satellite campuses and four affiliated university colleges. Waterloo is a member of the U15, a group of research-intensive universities in Canada. The University of Waterloo is most famous for its cooperative education (co-op) programs, which allow the students to integrate their education with applicable work experiences. The university operates the largest post-secondary co-operative education program in the world, with over 20,000 undergraduate students in over 140 co-operative education programs.", latlong:{lat:43.4723, lng:-80.5449}, listid:"uwaterloo" },
	{ name:"York University", desc:"York University (French: Université York) is a public research university in Toronto, Ontario, Canada. It is Canada's third-largest university, and it has approximately 52,300 students, 7,000 faculty and staff, and 295,000 alumni worldwide. It has eleven faculties, including the Faculty of Liberal Arts & Professional Studies, Faculty of Science, Lassonde School of Engineering, Schulich School of Business, Osgoode Hall Law School, Glendon College, Faculty of Education, Faculty of Health, Faculty of Environmental Studies, Faculty of Graduate Studies, the School of the Arts, Media, Performance and Design (formerly the Faculty of Fine Arts), and 28 research centres. The Keele campus is also home to a satellite location of Seneca College.", latlong:{lat:43.7735, lng:-79.5019}, listid:"york" },
	{ name:"Ryerson University", desc:"Ryerson University (commonly referred to as Ryerson) is a public research university in Toronto, Ontario, Canada. Its urban campus surrounds the Yonge-Dundas Square, located at one of the busiest intersections in downtown Toronto.", latlong:{lat:43.6577, lng:-79.3788}, listid:"ryerson" },
	{ name:"University of Guelph", desc:"The University of Guelph (U of G) is a comprehensive public research university in Guelph, Ontario, Canada. It was established in 1964 after the amalgamation of Ontario Agricultural College, the MacDonald Institute, and the Ontario Veterinary College, and has since grown to an institution of more than 32,000 students (including those at the Humber campus, off-campus degree enrollments, diploma enrollments and part-time students) and over 1,500 faculty (academic staff) as of fall 2015. It offers 94 undergraduate degrees, 48 graduate programs, and 6 associate degrees in many different disciplines.", latlong:{lat:43.5329, lng:-80.2262}, listid:"uoguelph" },
	{ name:"University of Calgary", desc:"The University of Calgary (U of C or UCalgary) is a public research university located in Calgary, Alberta, Canada. The University of Calgary started in 1944 as the Calgary branch of the University of Alberta, founded in 1908, prior to being instituted into a separate, autonomous university in 1966. It is composed of 14 faculties and over 85 research institutes and centres. The main campus is located in the northwest quadrant of the city near the Bow River and a smaller south campus is located in the city center.", latlong:{lat:51.0782, lng:-114.1358}, listid:"ucalgary" },
	{ name:"McMaster University", desc:"McMaster University (commonly referred to as McMaster or Mac) is a public research university in Hamilton, Ontario, Canada. The main McMaster campus is on 121 hectares (300 acres) of land near the residential neighbourhoods of Ainslie Wood and Westdale, adjacent to the Royal Botanical Gardens. It operates six academic faculties: the DeGroote School of Business, Engineering, Health Sciences, Humanities, Social Science, and Science. It is a member of the U15, a group of research-intensive universities in Canada.", latlong:{lat:43.2609, lng:-79.9192}, listid:"mcmaster" },
	{ name:"Laval University", desc:"Université Laval (English: Laval University) is a French-language, public research university in Quebec City, Quebec, Canada. The University was founded by royal charter issued by Queen Victoria in 1852, with roots in the founding of the Séminaire de Québec in 1663 by François de Montmorency-Laval, making it the oldest centre of higher education in Canada and the first North American institution to offer higher education in French. The university, whose campus was erected from the 1950s onward in the suburban borough of Sainte-Foy–Sillery–Cap-Rouge, is ranked among the top ten Canadian universities in terms of research funding and holds four Canada Excellence Research Chairs.", latlong:{lat:46.7817, lng:-71.2747}, listid:"laval" },
	{ name:"Concordia University", desc:"Concordia University (French: Université Concordia; commonly referred to as Concordia) is a public comprehensive university located in Montreal, Quebec, Canada on unceded Indigenous lands. Founded in 1974 following the merger of Loyola College and Sir George Williams University, Concordia is one of the three universities in Quebec where English is the primary language of instruction. As of the 2017–2018 academic year, there were 46,093 students enrolled at Concordia, making the university among the largest in Canada by enrolment. The university has two campuses, set approximately 7 kilometres (4 miles) apart: Sir George Williams Campus is the main campus in Downtown Montreal, in an area known as Quartier Concordia, and Loyola Campus in the residential district of Notre-Dame-de-Grâce. With four faculties, a school of graduate studies and numerous colleges, centres and institutes, Concordia offers over 300 undergraduate and 100 graduate programs and courses.", latlong:{lat:45.4973, lng:-73.5790}, listid:"concordia" },
	{ name:"University of Victoria", desc:"The University of Victoria ('UVictoria or UVic') is a major research university located in Victoria, British Columbia, Canada. The University of Victoria is the oldest post-secondary institution in British Columbia, tracing its roots back to Victoria College which was founded in 1903, under the sponsorship of McGill University. The University of Victoria is a non-religious institution which is centred around the Greater Victoria suburb of Oak Bay. The university has approximately 22,000 students, including many post-graduate and doctoral candidates.", latlong:{lat:48.4634, lng:-123.3117}, listid:"uvic" },
	{ name:"Brock University", desc:"Brock University is a public research university in St. Catharines, Ontario, Canada. It is the only university in Canada in a UNESCO Biosphere Reserve, at the centre of Canada's Niagara Peninsula on the Niagara Escarpment. The university bears the name of Major-General Sir Isaac Brock, who was responsible for defending Upper Canada against the United States during the War of 1812.", latlong:{lat:43.1176, lng:-79.2477}, listid:"brock" },
	{ name:"University of Manitoba", desc:"The University of Manitoba (U of M, UMN, or UMB) is a public research university in Manitoba, Canada. Its main campus is located in the Fort Garry neighbourhood of southern Winnipeg with other campuses throughout the city. Founded in 1877, it is Western Canada's first university. The university maintains a reputation as a top research-intensive post-secondary educational institution and conducts more research annually than any other university in the region.", latlong:{lat:49.8075, lng:-97.1366}, listid:"umanitoba" },
	{ name:"University of Saskatchewan", desc:"The University of Saskatchewan (U of S) is a Canadian public research university, founded on March 19, 1907, and located on the east side of the South Saskatchewan River in Saskatoon, Saskatchewan, Canada. An \"Act to establish and incorporate a University for the Province of Saskatchewan\" was passed by the provincial legislature in 1907. It established the provincial university on March 19, 1907 \"for the purpose of providing facilities for higher education in all its branches and enabling all persons without regard to race, creed or religion to take the fullest advantage\". The University of Saskatchewan is the largest education institution in the Canadian province of Saskatchewan. The University of Saskatchewan is one of Canada’s top research universities (based on the number of Canada Research Chairs) and is a member of the U15 Group of Canadian Research Universities (the 15 most research-intensive universities in Canada).", latlong:{lat:52.1334, lng:-106.6314}, listid:"usask" }
	];
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
		pinBodyText.appendChild(document.createTextNode(uni.desc));
		pinBody.appendChild(pinBodyText);
		pinContent.appendChild(pinTitle);
		pinContent.appendChild(pinBody);
		
		let infowindow = new google.maps.InfoWindow({
			content: pinContent,
			maxWidth: 500
		});
		
		marker.addListener('click', function () {
			infowindow.open(map, marker);
		});
		
		document.getElementById(uni.listid).addEventListener("click", function () { infowindow.open(map, marker); });
	}
}