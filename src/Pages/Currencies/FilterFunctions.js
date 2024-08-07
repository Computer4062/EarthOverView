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
							currentTableList.push([country, continent, currencies[country].currency, currencies[country].unit, currencies[country].symbol, currencies[country].code]);
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
	countriesTable.innerHTML = "";

	let counter = 0;
	for(let i = 0; i < currentTableList.length; i++){
		if(currentTableList[i][3].toLowerCase() === currencyUnit.toLowerCase())
		{
			counter++;
			countriesTable.innerHTML += `
			<tr>
			<th scope="row">${counter}</th>
			<td>${currentTableList[i][0]}</td>
			<td>${currentTableList[i][1]}</td>
			<td>${currentTableList[i][2]}</td>
			<td>${currentTableList[i][3]}</td>
			<td>${currentTableList[i][4]}</td>
			<td>${currentTableList[i][5]}</td>
			</tr>
			`
		}
	};
}