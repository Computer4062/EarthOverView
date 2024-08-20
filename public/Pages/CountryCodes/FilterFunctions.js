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
				.then(codes => {
					continentsList.forEach(continent => {
						region[continent].forEach(country => {
							currentTableList.push([country, codes[country], continent]);
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
	})
}

function filterToDigits(hDigit, tDigit, oDigit){
	countriesTable.innerHTML = "";

	let findId = -1;

	if((hDigit != - 1) && (tDigit == -1) && (oDigit == -1)) findId = 0;
	else if((hDigit == -1) && (tDigit != -1) && (oDigit == -1)) findId = 1;
	else if((hDigit == -1) && (tDigit == -1) && (oDigit != -1)) findId = 2;
	else if((hDigit != -1) && (tDigit != -1) && (oDigit == -1)) findId = 3;
	else if((hDigit != -1) && (tDigit == -1) && (oDigit != -1)) findId = 4;
	else if((hDigit == -1) && (tDigit != -1) && (oDigit != -1)) findId = 5;
	else if((hDigit != -1) && (tDigit != -1) && (oDigit != -1)) findId = 6;

	var i = 0;
	currentTableList.forEach(countryData => {
		// Check if the digits are the same
		switch(findId)
		{
		case 0:
		{
			if(Math.floor(countryData[tableColumns.code] / 100) % 10 == hDigit)
			{
				i++;
				let htmlContent = `
					<tr>
					<th scope="row">${i}</th>
					<td>${countryData[tableColumns.country]}</td>
					<td>${countryData[tableColumns.code]}</td>
					<td>${countryData[tableColumns.continent]}</td>
					</tr>
				`;

				countriesTable.innerHTML += htmlContent;
			}
		}
		break;

		case 1:
		{
			if(Math.floor(countryData[tableColumns.code] / 10) % 10 == tDigit)
			{
				i++;
				let htmlContent = `
					<tr>
					<th scope="row">${i}</th>
					<td>${countryData[tableColumns.country]}</td>
					<td>${countryData[tableColumns.code]}</td>
					<td>${countryData[tableColumns.continent]}</td>
					</tr>
				`;

				countriesTable.innerHTML += htmlContent;
			}
		}
		break;

		case 2:
		{
			if(Math.floor(countryData[tableColumns.code]) % 10 == oDigit)
			{
				i++;
				let htmlContent = `
					<tr>
					<th scope="row">${i}</th>
					<td>${countryData[tableColumns.country]}</td>
					<td>${countryData[tableColumns.code]}</td>
					<td>${countryData[tableColumns.continent]}</td>
					</tr>
				`;

				countriesTable.innerHTML += htmlContent;
			}
		}
		break;

		case 3:
		{
			if((Math.floor(countryData[tableColumns.code] / 100) % 10 == hDigit) && (Math.floor(countryData[tableColumns.code] / 10) % 10 == tDigit))
			{
				i++;
				let htmlContent = `
					<tr>
					<th scope="row">${i}</th>
					<td>${countryData[tableColumns.country]}</td>
					<td>${countryData[tableColumns.code]}</td>
					<td>${countryData[tableColumns.continent]}</td>
					</tr>
				`;

				countriesTable.innerHTML += htmlContent;
			}
		}
		break;

		case 4:
		{
			if((Math.floor(countryData[tableColumns.code] / 100) % 10 == hDigit) && (Math.floor(countryData[tableColumns.code]) % 10 == oDigit))
			{
				i++;
				let htmlContent = `
					<tr>
					<th scope="row">${i}</th>
					<td>${countryData[tableColumns.country]}</td>
					<td>${countryData[tableColumns.code]}</td>
					<td>${countryData[tableColumns.continent]}</td>
					</tr>
				`;

				countriesTable.innerHTML += htmlContent;
			}
		}
		break;

		case 5:
		{
			if((Math.floor(countryData[tableColumns.code] / 10) % 10 == tDigit) && (Math.floor(countryData[tableColumns.code]) % 10 == oDigit))
			{
				i++;
				let htmlContent = `
					<tr>
					<th scope="row">${i}</th>
					<td>${countryData[tableColumns.country]}</td>
					<td>${countryData[tableColumns.code]}</td>
					<td>${countryData[tableColumns.continent]}</td>
					</tr>
				`;

				countriesTable.innerHTML += htmlContent;
			}
		}
		break;

		case 6:
		{
			if((Math.floor(countryData[tableColumns.code] / 100) % 10 == hDigit) && (Math.floor(countryData[tableColumns.code] / 10) % 10 == tDigit) && (Math.floor(countryData[tableColumns.code]) % 10 == oDigit))
			{
				i++;
				let htmlContent = `
					<tr>
					<th scope="row">${i}</th>
					<td>${countryData[tableColumns.country]}</td>
					<td>${countryData[tableColumns.code]}</td>
					<td>${countryData[tableColumns.continent]}</td>
					</tr>
				`;

				countriesTable.innerHTML += htmlContent;
			}
		}
		break;
		}
	});
}