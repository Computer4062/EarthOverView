let continents = ["East Asia", "South Asia", "South East Asia", "Central Asia", "Western Asia", "Northern Africa", "Western Africa", "Eastern Africa", "Southern Africa", "Central Africa", "Europe", "Southern America", "Northern America", "Oceania"];
let continentsToRender = [];
let currentTableList = [];
let downloadsList = [];

const countriesJsonFileLocation = "/public/Assets/Json/Countries.json";
const jsonFileLocation = "/public/Assets/Json/CapitalCities.json";

const searchTable = document.querySelector("#search-table-body");
const searchNotifier = document.querySelector("#search-section-notifier");

const countriesTable = document.querySelector("#countries-list-table-body");
const tableColumns = {"country": 0, "city": 1, "lat": 2, "lng": 3, "map": 4, "continent": 5};

/* modes */
let ascendingCountryNamesMode = false;
let descendingCountryNamesMode = false;
let ascendingCityNamesMode = false;
let descendingCityNamesMode = false;
let ascendingLatitudesMode = false;
let descendingLatitudesMode = false;
let ascendingLongitudesMode = false;
let descendingLongitudesMode = false;

/* Renderer */
function render()
{
	if(ascendingCountryNamesMode) sortAscendingCountryNames();
	else if(descendingCountryNamesMode) sortDescendingCountryNames();
	else if(ascendingCityNamesMode) sortAscendingCityNames();
	else if(descendingCityNamesMode) sortDescendingCityNames();
	else if(ascendingLatitudesMode) sortAscendingLatitudes();
	else if(descendingLatitudesMode) sortDescendingLatitudes();
	else if(ascendingLongitudesMode) sortAscendingLongitudes();
	else if(descendingLongitudesMode) sortDescendingLongitudes();

	countriesTable.innerHTML = "";
	downloadsList = [];

	var i = 0;
	currentTableList.forEach(countryData => {
		i++;
		countriesTable.innerHTML += `
			<tr>
				<th scope="row">${i}</th>
				<td>${countryData[tableColumns.country]}</td>
				<td>${countryData[tableColumns.city]}</td>
				<td>${countryData[tableColumns.lat]}</td>
				<td>${countryData[tableColumns.lng]}</td>
				<td class="map-cell">
					<button class="map-btn" value="${countryData[tableColumns.lat]},${countryData[tableColumns.lng]}"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
						<path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/>
						<path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/></svg>
					</button>
				</td>
				<td>${countryData[4]}</td>
			</tr>
		`;

		addMapBtnFunctionality();
		downloadsList.push([countryData[tableColumns.country], countryData[tableColumns.city], countryData[tableColumns.lat], countryData[tableColumns.lng]]);
	});

	/* Reload the search section if it is activated so that it will also be sorted or filtered */
	if(!searchSection.classList.contains("hidden"))
		searchCaller();
}

/* Default renderer - played at the beginning */
function defaultRender(){
	showLoadingBar();

	countriesTable.innerHTML = "";
	currentTableList = [];

	fetch(countriesJsonFileLocation)
	.then(response => response.json())
	.then(countries => {
		let i = 0;

		fetch(jsonFileLocation)
		.then(response => response.json())
		.then(cityData => {
			continents.forEach(continent => {
				countries[continent].forEach(country => {
					i++;
					countriesTable.innerHTML += `
						<tr>
						<th scope="row">${i}</th>
						<td>${country}</td>
						<td>${cityData[country].city}</td>
						<td>${cityData[country].latitude}</td>
						<td>${cityData[country].longitude}</td>
						<td class="map-cell">
							<button class="map-btn" value="${cityData[country].latitude},${cityData[country].longitude}"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
								<path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/>
								<path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/></svg>
							</button>
						</td>
						<td>${continent}</td>
						</tr>
					`;

					currentTableList.push([country, cityData[country].city, cityData[country].latitude, cityData[country].longitude, continent]);
					downloadsList.push([country, cityData[country].city, cityData[country].latitude, cityData[country].longitude]);
					addMapBtnFunctionality();
				})
			})
		})
		.catch(error => {
			console.error("Error:", error);
		})
		.finally(() => hideLoadingBar());
	})
	.catch(error => {
		console.error("Error:", error);
	})
}