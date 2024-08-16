let continents = ["East Asia", "South Asia", "South East Asia", "Central Asia", "Western Asia", "Northern Africa", "Western Africa", "Eastern Africa", "Southern Africa", "Central Africa", "Europe", "Southern America", "Northern America", "Oceania"];
let continentsToRender = [];
let currentTableList = [];

const countriesJsonFileLocation = "/Assets/Json/Countries.json";
const jsonFileLocation = "/Assets/Json/Languages.json";

const searchTable = document.querySelector("#search-table-body");
const searchNotifier = document.querySelector("#search-section-notifier");

const countriesTable = document.querySelector("#countries-list-table-body");
const tableColumns = {"country": 0, "lang": 1, "code": 2, "continent": 3};

/* modes */
let ascendingCountryNamesMode = false;
let descendingCountryNamesMode = false;

let filterToLanguageNameFlag = false;

/* Renderer */
function render()
{
	if(ascendingCountryNamesMode) sortAscendingNames();
	else if(descendingCountryNamesMode) sortDescendingNames();

	if(filterToLanguageNameFlag)
	{
		filterLanguageNameCaller();
	}
	else
	{
		countriesTable.innerHTML = "";

		var i = 0;
		currentTableList.forEach(countryData => {
			i++;
			let htmlContent = `
				<tr>
				<th scope="row">${i}</th>
				<td>${countryData[tableColumns.country]}</td>
				<td>
					<ul>
						${countryData[1].map(lang => `<li>${lang}</li>`).join('')}
					</ul>					
					</td>
				<td>
					<ul>
						${countryData[2].map(code => `<li>${code}</li>`).join('')}
					</ul>
				</td>
				<td>${countryData[tableColumns.continent]}</td>
				</tr>
			`;

			countriesTable.innerHTML += htmlContent;
		});
	}


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
		.then(languages => {
			countriesTable.innerHTML = "";

			listOfCountries.forEach(countryData => {
				i++;
				let htmlContent = `
					<tr>
					<th scope="row">${i}</th>
					<td>${countryData[0]}</td>
					<td>
						<ul>
							${languages[countryData[0]].language.map(lang => `<li>${lang}</li>`).join('')}
						</ul>
					</td>
					<td>
						<ul>
							${languages[countryData[0]].iso639_1.map(code => `<li>${code}</li>`).join('')}
						</ul>
					</td>
					<td>${countryData[1]}</td>
					</tr>
				`;

				countriesTable.innerHTML += htmlContent;
				currentTableList.push([countryData[0], languages[countryData[0]].language, languages[countryData[0]].iso639_1, countryData[1]]);
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