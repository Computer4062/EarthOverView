var continents = ["East Asia", "South Asia", "Southeast Asia", "Central Asia", "Western Asia", "Northern Africa", "Western Africa", "Eastern Africa", "Southern Africa", "Central Africa", "Europe", "Southern America", "Northern America", "Oceania"];

const ascendingNamesBtn = document.querySelector("#ascendingNamesBtn");
const descendingNamesBtn = document.querySelector("#descendingNamesBtn");
const ascendingCodesBtn = document.querySelector("#ascendingCodesBtn");
const descendingCodesBtn = document.querySelector("#descendingCodesBtn");

ascendingNamesBtn.addEventListener('change', function(){
	if(ascendingNamesBtn.checked)
	{
		var countriesList = [];
		/* Obtain a list of all of the countries and their continents */
		fetch("../../Assets/Json/Countries.json")
			.then(response => response.json())
			.then(countries => {
				continents.forEach(continent => {
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
		fetch("../../Assets/Json/CallingCodes.json")
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
});

descendingNamesBtn.addEventListener('change', function(){
	if(descendingNamesBtn.checked)
	{
		var countriesList = [];
		/* Obtain a list of all of the countries and their continents */
		fetch("../../Assets/Json/Countries.json")
			.then(response => response.json())
			.then(countries => {
				continents.forEach(continent => {
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
		fetch("../../Assets/Json/CallingCodes.json")
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
});

ascendingCodesBtn.addEventListener('change', function(){
	if(ascendingCodesBtn.checked)
	{
		var countriesList = [];
		/* Obtain a list of all of the countries and their continents */
		fetch("../../Assets/Json/Countries.json")
			.then(response => response.json())
			.then(countries => {
				continents.forEach(continent => {
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
		fetch("../../Assets/Json/CallingCodes.json")
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
});

descendingCodesBtn.addEventListener('change', function(){
	if(descendingCodesBtn.checked)
	{
		var countriesList = [];
		/* Obtain a list of all of the countries and their continents */
		fetch("../../Assets/Json/Countries.json")
			.then(response => response.json())
			.then(countries => {
				continents.forEach(continent => {
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
		fetch("../../Assets/Json/CallingCodes.json")
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
});

var i = 0;
fetch("../../Assets/Json/Countries.json")
  .then(response => response.json())
  .then(countries => {
	continents.forEach(continent => {
		countries[continent].forEach(country => {
			fetch("../../Assets/Json/CallingCodes.json")
				.then(response => response.json())
				.then(code => {
					i++;
					let htmlContent = `
						<tr>
						<th scope="row">${i}</th>
						<td>${country}</td>
						<td>${continent}</td>
						<td>${code[country]}</td>
						</tr>
					`;

					document.querySelector("tbody").innerHTML += htmlContent;
				})
				.catch(error => {
					console.error('Error:', error);
				});
		});
	});
  })
  .catch(error => {
    console.error("Error:", error);
});