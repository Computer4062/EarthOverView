let continents = ["East Asia", "South Asia", "South East Asia", "Central Asia", "Western Asia", "Northern Africa", "Western Africa", "Eastern Africa", "Southern Africa", "Central Africa", "Europe", "Southern America", "Northern America", "Oceania"];
let continentsToRender = [];
let currentTableList = [];
let downloadsList = [];

const countriesJsonFileLocation = "/public/Assets/Json/Countries.json";
const jsonFileLocation = "/public/Assets/Json/Currencies.json";

const searchTable = document.querySelector("#search-table-body");
const searchNotifier = document.querySelector("#search-section-notifier");

const countriesTable = document.querySelector("#countries-list-table-body");
const tableColumns = {"country": 0, "unit": 1, "name": 2, "symbol": 3, "code": 4, "continent": 5};

/* modes */
let ascendingNamesMode = false;
let descendingNamesMode = false;
let ascendingUnitsMode = false;
let descendingUnitsMode = false;
let ascendingCodesMode = false;
let descendingCodesMode = false;

let filterToUnitsFlag = false;

/* Renderer */
function render()
{
	if(ascendingNamesMode) sortAscendingNames();
	else if(descendingNamesMode) sortDescendingNames();
	else if(ascendingUnitsMode) sortAscendingUnits();
	else if(descendingUnitsMode) sortDescendingUnits();
	else if(ascendingCodesMode) sortAscendingCodes();
	else if(descendingCodesMode) sortDescendingCodes();

	if(filterToUnitsFlag)
	{
		filterUnitsCaller();
	}
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
				<td>${countryData[tableColumns.unit]}</td>
				<td>${countryData[tableColumns.name]}</td>
				<td>${countryData[tableColumns.symbol]}</td>
				<td>${countryData[tableColumns.code]}</td>
				<td>${countryData[tableColumns.continent]}</td>
				</tr>
			`;

			countriesTable.innerHTML += htmlContent;
			downloadsList.push([countryData[tableColumns.country], countryData[tableColumns.unit], countryData[tableColumns.name], countryData[tableColumns.symbol], countryData[tableColumns.code]]);
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

	fetch(countriesJsonFileLocation)
	.then(response => response.json())
	.then(countries => {
		let i = 0;

		fetch(jsonFileLocation)
		.then(response => response.json())
		.then(currency => {
			continents.forEach(continent => {
				countries[continent].forEach(country => {
					i++;
					let htmlContent = `
						<tr>
						<th scope="row">${i}</th>
						<td>${country}</td>
						<td>${currency[country].unit}</td>
						<td>${currency[country].currency}</td>
						<td>${currency[country].symbol}</td>
						<td>${currency[country].code}</td>
						<td>${continent}</td>
						</tr>
					`;

					countriesTable.innerHTML += htmlContent;
					currentTableList.push([country, currency[country].unit, currency[country].currency, currency[country].symbol, currency[country].code, continent]);
					downloadsList.push([country, currency[country].unit, currency[country].currency, currency[country].symbol, currency[country].code]);
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
	});
}