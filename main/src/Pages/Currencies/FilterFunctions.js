function renderContinent(){	
	let continentsList = []
	if(continentsToRender.length === 0)
		continentsList = continents;
	else
		continentsList = continentsToRender;

	fetch(countriesJsonFileLocation)
		.then(response => response.json())
		.then(region => {
			currentTableList = [];

			fetch(jsonFileLocation)
				.then(response => response.json())
				.then(currencies => {
					continentsList.forEach(continent => {
						region[continent].forEach(country => {
							currentTableList.push([country, currencies[country].unit, currencies[country].currency, currencies[country].symbol, currencies[country].code, continent]);
						})
					})

					render();
				})
			.catch(error => {
				console.error("Error: ", error);
			});
		})
	.catch(error => {
		console.error("Error: ", error);
	});
}

function filterToUnits(currencyUnit){
	countriesTable.innerHTML = ""; // Clear the table

	let counter = 0;
	let nothingFound = true;

	for(let i = 0; i < currentTableList.length; i++){ // Iterate through the current elements
		let found = false;
		if(currentTableList[i][tableColumns.unit].length >= currencyUnit.length){
			for(let j = 0; j < currencyUnit.length; j++) // Iterate through the search box value
			{
				/* Check if search results are similar */
					if(currencyUnit[j].toLowerCase() === currentTableList[i][tableColumns.unit][j].toLowerCase())
					{
						found = true;
					}
					else
					{
						found = false;
						break;
					}
			}
		} else {
			found = false;
		}

		if(found) // Search results found
		{
			nothingFound = false;
			counter++;
			countriesTable.innerHTML += `
				<tr>
				<th scope="row">${counter}</th>
				<td>${currentTableList[i][tableColumns.country]}</td>
				<td>${currentTableList[i][tableColumns.unit]}</td>
				<td>${currentTableList[i][tableColumns.name]}</td>
				<td>${currentTableList[i][tableColumns.symbol]}</td>
				<td>${currentTableList[i][tableColumns.code]}</td>
				<td>${currentTableList[i][tableColumns.continent]}</td>
				</tr>
			`;

			searchNotifier.innerHTML = "<small>* Filter options affect the results *</small>";
		}
	}
}