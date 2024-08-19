let continents = ["East Asia", "South Asia", "South East Asia", "Central Asia", "Western Asia", "Northern Africa", "Western Africa", "Eastern Africa", "Southern Africa", "Central Africa", "Europe", "Southern America", "Northern America", "Oceania"];
let continentsToRender = [];
let currentTableList = [];

const countriesJsonFileLocation = "/public/Assets/Json/Countries.json";
const countryCodesJsonFileLocation = "/public/Assets/Json/CountryCodesInv.json";

const searchTable = document.querySelector("#search-table-body");
const searchNotifier = document.querySelector("#search-section-notifier");

const countriesTable = document.querySelector("#countries-list-table-body");
const tableColumns = {"country": 0, "flag": 1, "continent": 2};

let flagImageData = [];

/* modes */
let ascendingNamesMode = false;
let descendingNamesMode = false;

/* Renderer */
function render()
{
	/* Do the sorting */
	if(ascendingNamesMode) sortAscendingNames();
	else if(descendingNamesMode) sortDescendingNames();
	
	countriesTable.innerHTML = "";
	var i = 0;

	currentTableList.forEach(countryData => {
		i++;
		let htmlContent = `
			<tr>
			<th scope="row">${i}</th>
			<td>${countryData[tableColumns.country]}</td>
			<td><img src="${countryData[tableColumns.flag]}" class="flag" alt="${countryData[tableColumns.country]} flag" /></td>
			<td>${countryData[tableColumns.continent]}</td>
			</tr>
		`;

		countriesTable.innerHTML += htmlContent;
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

	let i = 0;
	var requestOptions = {
		method: 'GET',
		redirect: 'follow'
	};

	fetch("https://countriesnow.space/api/v0.1/countries/flag/images", requestOptions)
		.then(response => response.json())
		.then(flagData => {
			fetch(countriesJsonFileLocation)
				.then(response => response.json())
				.then(countries => {
					continents.forEach(continent => {
						countries[continent].forEach(country => {
							flagData["data"].forEach(data => {
								if(data.name === country)
								{
									i++;
									countriesTable.innerHTML += `
										<tr>
										<td>${i}</td>
										<td>${country}</td>
										<td><img src="${data.flag}" class="flag" alt="${country} flag" /></td>
										<td>${continent}</td>
										</tr>
									`;

									currentTableList.push([country, data.flag, continent]);
									flagImageData.push({country: country, url: data.flag});
								}
							})
						});
					});
				})
				.catch(error => {
					console.error("Error: ", error);
				})
				.finally(() => hideLoadingBar())
		})
	.catch(error => console.log('error', error))
}