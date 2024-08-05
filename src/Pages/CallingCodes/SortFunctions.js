
function sortAscendingNames(){
		let continentsList = [];
		if(continentsToRender.length === 0)
			continentsList = continents;
		else
			continentsList = continentsToRender;

		var countriesList = [];
		/* Obtain a list of all of the countries and their continents */
		fetch(countriesJsonFileLocation)
			.then(response => response.json())
			.then(countries => {
				continentsList.forEach(continent => {
					countries[continent].forEach(country => {
						countriesList.push([country, continent]);
					});
				});
		
				/* Sort the list based on country names */
				countriesList.sort((a, b) => {
					if (a[0] < b[0]) {
						return -1;
					} else if (a[0] > b[0]) {
						return 1;
					} else {
						return 0;
					}
				});
			})
		.catch(error => {
			console.error("Error: ", error);
		});

		// Clear the html in the table
		document.querySelector("tbody").innerHTML = "";

		/* Find calling codes and write the table */
		var i = 0;
		fetch(codesJsonFileLocation)
			.then(response => response.json())
			.then(codes => {
				countriesList.forEach(country => {
					i++;
					let htmlContent = `
						<tr>
						<th scope="row">${i}</th>
						<td>${country[0]}</td>
						<td>${country[1]}</td>
						<td>${codes[country[0]]}</td>
						</tr>
					`;

					document.querySelector("tbody").innerHTML += htmlContent;
				});
			})
		.catch(error => {
			console.error("Error: ", error);
		});
}

function sortDescendingNames(){
		let continentsList = [];
		if(continentsToRender.length === 0)
			continentsList = continents;
		else
			continentsList = continentsToRender;

		var countriesList = [];
		/* Obtain a list of all of the countries and their continents */
		fetch(countriesJsonFileLocation)
			.then(response => response.json())
			.then(countries => {
				continentsList.forEach(continent => {
					countries[continent].forEach(country => {
						countriesList.push([country, continent]);
					});
				});
		
				/* Sort the list */
				countriesList.sort((a, b) => {
					if (a[0] > b[0]) {
						return -1;
					} else if (a[0] < b[0]) {
						return 1;
					} else {
						return 0;
					}
				});
			})
		.catch(error => {
			console.error("Error: ", error);
		});

		// Clear the html in the table
		document.querySelector("tbody").innerHTML = "";

		/* Find calling codes and write the table */
		var i = 0;
		fetch(codesJsonFileLocation)
			.then(response => response.json())
			.then(codes => {
				countriesList.forEach(country => {
					i++;
					let htmlContent = `
						<tr>
						<th scope="row">${i}</th>
						<td>${country[0]}</td>
						<td>${country[1]}</td>
						<td>${codes[country[0]]}</td>
						</tr>
					`;

					document.querySelector("tbody").innerHTML += htmlContent;
				});
			})
		.catch(error => {
			console.error("Error: ", error);
		});
}

function sortAscendingCodes(){
		let continentsList = [];
		if(continentsToRender.length === 0)
			continentsList = continents;
		else
			continentsList = continentsToRender;

		var countriesList = [];
		/* Obtain a list of all of the countries and their continents */
		fetch(countriesJsonFileLocation)
			.then(response => response.json())
			.then(countries => {
				continentsList.forEach(continent => {
					countries[continent].forEach(country => {
						countriesList.push([country, continent]);
					});
				});
		
				/* Sort the list based on country names */
				countriesList.sort((a, b) => {
					if (a[0] > b[0]) {
						return -1;
					} else if (a[0] < b[0]) {
						return 1;
					} else {
						return 0;
					}
				});
			})
		.catch(error => {
			console.error("Error: ", error);
		});

		var addedCountriesList = [];

		/* Write calling codes */
		fetch(codesJsonFileLocation)
			.then(response => response.json())
			.then(codes => {
				countriesList.forEach(country => {
					country.push(codes[country[0]]);
					addedCountriesList.push(country);
				});

				/* Sort the list based on calling codes */
				addedCountriesList.sort((a, b) => {
					if(a[2] < b[2]) {
						return -1;
					} else if(a[2] < b[2]) {
						return 1;
					} else {
						return 0;
					}
				});

				document.querySelector("tbody").innerHTML = ""; // Clear the list

				/* Write the table */
				var i = 0;
				addedCountriesList.forEach(country => {
					i++;
					let htmlContent = `
						<tr>
						<th scope="row">${i}</th>
						<td>${country[0]}</td>
						<td>${country[1]}</td>
						<td>${country[2]}</td>
						</tr>
					`;

					document.querySelector("tbody").innerHTML += htmlContent;
				});
			})
		.catch(error => {
			console.error("Error: ", error);
		});
}

function sortDescendingCodes(){
		let continentsList = [];
		if(continentsToRender.length === 0)
			continentsList = continents;
		else
			continentsList = continentsToRender;

		var countriesList = [];
		/* Obtain a list of all of the countries and their continents */
		fetch(countriesJsonFileLocation)
			.then(response => response.json())
			.then(countries => {
				continentsList.forEach(continent => {
					countries[continent].forEach(country => {
						countriesList.push([country, continent]);
					});
				});
		
				/* Sort the list based on country names */
				countriesList.sort((a, b) => {
					if (a[0] > b[0]) {
						return -1;
					} else if (a[0] < b[0]) {
						return 1;
					} else {
						return 0;
					}
				});
			})
		.catch(error => {
			console.error("Error: ", error);
		});

		var addedCountriesList = [];

		/* Write calling codes */
		fetch(codesJsonFileLocation)
			.then(response => response.json())
			.then(codes => {
				countriesList.forEach(country => {
					country.push(codes[country[0]]);
					addedCountriesList.push(country);
				});

				/* Sort the list based on calling codes */
				addedCountriesList.sort((a, b) => {
					if(a[2] > b[2]) {
						return -1;
					} else if(a[2] < b[2]) {
						return 1;
					} else {
						return 0;
					}
				});

				document.querySelector("tbody").innerHTML = ""; // Clear the list

				/* Write the table */
				var i = 0;
				addedCountriesList.forEach(country => {
					i++;
					let htmlContent = `
						<tr>
						<th scope="row">${i}</th>
						<td>${country[0]}</td>
						<td>${country[1]}</td>
						<td>${country[2]}</td>
						</tr>
					`;

					document.querySelector("tbody").innerHTML += htmlContent;
				});
			})
		.catch(error => {
			console.error("Error: ", error);
		});
}