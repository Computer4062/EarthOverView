/*
	Create 2 more parameters for tens and ones and continue
*/

function filterToHundreds(digit){
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
				if(Math.floor(code[countryData[0]] / 100) % 10 == digit)            // Check if the hundreds digit is the same
				{
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
				}
			});
		})
	.catch(error => {
		console.error('Error:', error);
	});
}