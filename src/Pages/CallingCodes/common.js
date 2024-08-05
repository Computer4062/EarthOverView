let continents = ["East Asia", "South Asia", "South East Asia", "Central Asia", "Western Asia", "Northern Africa", "Western Africa", "Eastern Africa", "Southern Africa", "Central Africa", "Europe", "Southern America", "Northern America", "Oceania"];
let continentsToRender = [];

const countriesJsonFileLocation = "../../Assets/Json/Countries.json";
const codesJsonFileLocation = "../../Assets/Json/CallingCodes.json";

/* Functions */
function removeItem(list, itemToRemove) {
  const index = list.indexOf(itemToRemove);
  if (index !== -1) {
    list.splice(index, 1);
  }
  return list;
}

function defaultRender(){
	let continentsList = [];
	if(continentsToRender.length === 0)
		continentsList = continents;
	else
		continentsList = continentsToRender;

	document.querySelector("tbody").innerHTML = "";

	let listOfCountries = [];
	fetch(countriesJsonFileLocation)
	.then(response => response.json())
	.then(countries => {
		continentsList.forEach(continent => {
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
			});
		})
	.catch(error => {
		console.error('Error:', error);
	});
}