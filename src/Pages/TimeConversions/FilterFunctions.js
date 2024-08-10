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
				.then(timeData => {
					continentsList.forEach(continent => {
						region[continent].forEach(country => {
							const timeAndDate = getTimeAndDate(timeData[country])
							if(timeAndDate !== undefined)
								currentTableList.push([country, continent, timeData[country], timeAndDate[0], timeAndDate[1]]);
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

function filterToTime(hDigits, mDigits)
{
	countriesTable.innerHTML = "";
	let findId = -1;

	if((hDigits != -1) && (mDigits != -1)) findId = 0;
	else if((hDigits != -1) && (mDigits == -1)) findId = 1;
	else if((hDigits == -1) && (mDigits != -1)) findId = 2;
	else if((hDigits == -1) && (mDigits == -1)) findId = 3;

	let i = 0;

	switch(findId)
	{
	case 1:
	{
		currentTableList.forEach(countryData => {
			if(`${countryData[3][0]}${countryData[3][1]}` == hDigits.padStart(2, '0'))
			{
				i++;
				const htmlContent = `
					<tr>
					<th scope="row">${i}</th>
					<td>${countryData[0]}</td>
					<td>${countryData[1]}</td>
					<td>${countryData[2]}</td>
					<td>${countryData[3]}</td>
					<td>${countryData[4]}</td>
					</tr>
				`;

				countriesTable.innerHTML += htmlContent;
			}
		});
	}
	break;

	case 3:
	{
		renderContinent();
	}
	break;
	}
}