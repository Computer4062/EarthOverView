let continents = ["East Asia", "South Asia", "South East Asia", "Central Asia", "Western Asia", "Northern Africa", "Western Africa", "Eastern Africa", "Southern Africa", "Central Africa", "Europe", "Southern America", "Northern America", "Oceania"];
let continentsToRender = [];
let currentTableList = [];
let downloadsList = [];

const countriesJsonFileLocation = "/public/Assets/Json/Countries.json";
const jsonFileLocation = "/public/Assets/Json/Demonyms.json";

const searchTable = document.querySelector("#search-table-body");
const searchNotifier = document.querySelector("#search-section-notifier");

const countriesTable = document.querySelector("#countries-list-table-body");
const tableColumns = {"country": 0, "demonyms": 1, "continent": 2};

/* modes */
let ascendingNamesMode = false;
let descendingNamesMode = false;
let ascendingDemonymsMode = false;
let descendingDemonymsMode = false;

/* Renderer */
function render()
{
	if(ascendingNamesMode) sortAscendingNames();
	else if(descendingNamesMode) sortDescendingNames();
	else if(ascendingDemonymsMode) sortAscendingDemonyms();
	else if(descendingDemonymsMode) sortDescendingDemonyms();

	countriesTable.innerHTML = "";
	downloadsList = [];

	var i = 0;
	currentTableList.forEach(countryData => {
		i++;
		let htmlContent = `
			<tr>
			<th scope="row">${i}</th>
			<td>${countryData[tableColumns.country]}</td>
			<td>${countryData[tableColumns.demonyms]}</td>
			<td>${countryData[tableColumns.continent]}</td>
			</tr>
		`;

		countriesTable.innerHTML += htmlContent;
		downloadsList.push([countryData[tableColumns.country], countryData[tableColumns.demonyms]]);
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
		.then(demonyms => {
			continents.forEach(continent => {
				countries[continent].forEach(country => {
					i++;
					let htmlContent = `
						<tr>
						<th scope="row">${i}</th>
						<td>${country}</td>
						<td>${demonyms[country]}</td>
						<td>${continent}</td>
						</tr>
					`;

					countriesTable.innerHTML += htmlContent;
					currentTableList.push([country, demonyms[country], continent]);
					downloadsList.push([country, demonyms[country]]);
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