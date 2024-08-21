let continents = ["East Asia", "South Asia", "South East Asia", "Central Asia", "Western Asia", "Northern Africa", "Western Africa", "Eastern Africa", "Southern Africa", "Central Africa", "Europe", "Southern America", "Northern America", "Oceania"];
let continentsToRender = [];
let currentTableList = [];
let downloadsList = [];

const countriesJsonFileLocation = "/public/Assets/Json/Countries.json";
const jsonFileLocation = "/public/Assets/Json/CallingCodes.json";

const searchTable = document.querySelector("#search-table-body");
const searchNotifier = document.querySelector("#search-section-notifier");

const countriesTable = document.querySelector("#countries-list-table-body");
const tableColumns = {"country": 0, "code": 1, "continent": 2};

/* modes */
let ascendingCodeMode = false;
let descendingCodeMode = false;
let ascendingNamesMode = false;
let descendingNamesMode = false;

let filterToCallingCodes = false;

/* Renderer */
function render()
{
	/* Do the sorting */
	if(ascendingNamesMode) sortAscendingNames();
	else if(descendingNamesMode) sortDescendingNames();
	else if(ascendingCodeMode) sortAscendingCodes();
	else if(descendingCodeMode) sortDescendingCodes();

	/* Do the filtering */
	if(filterToCallingCodes)
	{
		filterDigitsCaller();
	} /* No filters */
	else
	{
		countriesTable.innerHTML = "";
		downloadsList = [];

		var i = 0;
		currentTableList.forEach(countryData => {
			i++;
			let htmlContent = `
				<tr>
				<th scope="row">${i}</th>
				<td>${countryData[tableColumns.country]}</td>
				<td>${countryData[tableColumns.code]}</td>
				<td>${countryData[tableColumns.continent]}</td>
				</tr>
			`;

			countriesTable.innerHTML += htmlContent;
			downloadsList.push([countryData[tableColumns.country], countryData[tableColumns.code]]);
		});
	}

	/* Reload the search section if it is activated so that it will also be sorted or filtered */
	if(!searchSection.classList.contains("hidden"))
		searchCaller();
}

/* Default renderer - played at the beginning */
function defaultRender(){
	showLoadingBar();

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
		.then(code => {
			countriesTable.innerHTML = "";

			listOfCountries.forEach(countryData => {
				i++;
				let htmlContent = `
					<tr>
					<th scope="row">${i}</th>
					<td>${countryData[0]}</td>
					<td>${code[countryData[0]]}</td>
					<td>${countryData[1]}</td>
					</tr>
				`;

				countriesTable.innerHTML += htmlContent;
				currentTableList.push([countryData[0], code[countryData[0]], countryData[1]]);
				downloadsList.push([countryData[0], code[countryData[0]]]);
			});
		})
	.catch(error => {
		console.error('Error:', error);
	})
	.finally(() => {
		hideLoadingBar();
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