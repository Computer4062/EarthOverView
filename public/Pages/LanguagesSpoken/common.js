let continents = ["East Asia", "South Asia", "South East Asia", "Central Asia", "Western Asia", "Northern Africa", "Western Africa", "Eastern Africa", "Southern Africa", "Central Africa", "Europe", "Southern America", "Northern America", "Oceania"];
let continentsToRender = [];
let currentTableList = [];
let downloadsList = [];

const countriesJsonFileLocation = "/public/Assets/Json/Countries.json";
const jsonFileLocation = "/public/Assets/Json/Languages.json";

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
		downloadsList = [];

		var i = 0;
		currentTableList.forEach(countryData => {
			i++;
			let htmlContent = `
				<tr>
				<th scope="row">${i}</th>
				<td>${countryData[tableColumns.country]}</td>
				<td>
					<ul>
						${countryData[tableColumns.lang].map(lang => `<li>${lang}</li>`).join('')}
					</ul>					
					</td>
				<td>
					<ul>
						${countryData[tableColumns.code].map(code => `<li>${code}</li>`).join('')}
					</ul>
				</td>
				<td>${countryData[tableColumns.continent]}</td>
				</tr>
			`;

			countriesTable.innerHTML += htmlContent;
			downloadsList.push([
				countryData[tableColumns.country],
				countryData[tableColumns.lang].map(lang => `${lang}`).join('|'),
				countryData[tableColumns.code].map(code => `${code}`).join('|')
			]);
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
		.then(languages => {
			continents.forEach(continent => {
				countries[continent].forEach(country => {
					i++;
					let htmlContent = `
						<tr>
						<th scope="row">${i}</th>
						<td>${country}</td>
						<td>
							<ul>
								${languages[country].language.map(lang => `<li>${lang}</li>`).join('')}
							</ul>
						</td>
						<td>
							<ul>
								${languages[country].iso639_1.map(code => `<li>${code}</li>`).join('')}
							</ul>
						</td>
						<td>${continent}</td>
						</tr>
					`;

					countriesTable.innerHTML += htmlContent;
					currentTableList.push([country, languages[country].language, languages[country].iso639_1, continent]);
					downloadsList.push([
						country,
						languages[country].language.map(lang => `${lang}`).join('|'),
						languages[country].iso639_1.map(code => `${code}`).join('|')
					]);
				});
			});
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