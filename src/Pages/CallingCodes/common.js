let continents = ["East Asia", "South Asia", "South East Asia", "Central Asia", "Western Asia", "Northern Africa", "Western Africa", "Eastern Africa", "Southern Africa", "Central Africa", "Europe", "Southern America", "Northern America", "Oceania"];
let continentsToRender = [];
let currentTableList = [];

const countriesJsonFileLocation = "../../Assets/Json/Countries.json";
const codesJsonFileLocation = "../../Assets/Json/CallingCodes.json";

const searchTable = document.querySelector("#search-table");

/* modes */
let ascendingCodeMode = false;
let descendingCodeMode = false;
let ascendingNamesMode = false;
let descendingNamesMode = false;

/* Renderer */
function render()
{
	if(ascendingNamesMode) sortAscendingNames();
	else if(descendingNamesMode) sortDescendingNames();
	else if(ascendingCodeMode) sortAscendingCodes();
	else if(descendingCodeMode) sortDescendingCodes();

	document.querySelector("tbody").innerHTML = "";

	var i = 0;
	currentTableList.forEach(countryData => {
		i++;
		let htmlContent = `
			<tr>
			<th scope="row">${i}</th>
			<td>${countryData[0]}</td>
			<td>${countryData[1]}</td>
			<td>${countryData[2]}</td>
			</tr>
		`;

		document.querySelector("tbody").innerHTML += htmlContent;
	});
}

/* Default renderer - played at the beginning */
function defaultRender(){
	document.querySelector("tbody").innerHTML = "";
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
	fetch(codesJsonFileLocation)
		.then(response => response.json())
		.then(code => {
			document.querySelector("tbody").innerHTML = "";

			listOfCountries.forEach(countryData => {
				i++;
				let htmlContent = `
					<tr>
					<th scope="row">${i}</th>
					<td>${countryData[0]}</td>
					<td>${countryData[1]}</td>
					<td>${code[countryData[0]]}</td>
					</tr>
				`;

				document.querySelector("tbody").innerHTML += htmlContent;
				currentTableList.push([countryData[0], countryData[1], code[countryData[0]]]);
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