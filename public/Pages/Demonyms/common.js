let continents = ["East Asia", "South Asia", "South East Asia", "Central Asia", "Western Asia", "Northern Africa", "Western Africa", "Eastern Africa", "Southern Africa", "Central Africa", "Europe", "Southern America", "Northern America", "Oceania"];
let continentsToRender = [];
let currentTableList = [];

const countriesJsonFileLocation = "/Assets/Json/Countries.json";
const jsonFileLocation = "/Assets/Json/Demonyms.json";

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
	});

	/* Reload the search section if it is activated so that it will also be sorted or filtered */
	if(!searchSection.classList.contains("hidden"))
		searchCaller();
}

/* Default renderer - played at the beginning */
function defaultRender(){
	countriesTable.innerHTML = "";
	currentTableList = [];

	let listOfCountries = [];
	fetch(countriesJsonFileLocation)
	.then(response => response.json())
	.then(countries => {
		continents.forEach(continent => {
			countries[continent].forEach(country => {
				listOfCountries.push([country, continent]);
			});
		});
	})
	.catch(error => {
		console.error("Error:", error);
	});

	var i = 0;
	fetch(jsonFileLocation)
		.then(response => response.json())
		.then(demonyms => {
			countriesTable.innerHTML = "";

			listOfCountries.forEach(countryData => {
				i++;
				let htmlContent = `
					<tr>
					<th scope="row">${i}</th>
					<td>${countryData[0]}</td>
					<td>${demonyms[countryData[0]]}</td>
					<td>${countryData[1]}</td>
					</tr>
				`;

				countriesTable.innerHTML += htmlContent;
				currentTableList.push([countryData[0], demonyms[countryData[0]], countryData[1]]);
			});
		})
	.catch(error => {
		console.error('Error:', error);
	});
}

/* Functions */
function removeItem(list, itemToRemove) {
  const index = list.indexOf(itemToRemove);
  if (index !== -1) {
    list.splice(index, 1);
  }
  return list;
}