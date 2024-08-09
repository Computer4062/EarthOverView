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
				.then(demoynms => {
					continentsList.forEach(continent => {
						region[continent].forEach(country => {
							/*
								Write the time data
							*/
							currentTableList.push([country, continent, ]);
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

function filterToTime(hourDigits, minuteDigits){
	countriesTable.innerHTML = "";

	let findId = -1;

	if((hourDigits != - 1) && (minuteDigits == -1)) findId = 0;
	else if((hourDigits == -1) && (minuteDigits != -1)) findId = 1;
	else if((hourDigits != -1) && (minuteDigits != -1)) findId = 2;

	var i = 0;
	currentTableList.forEach(countryData => {
		// Check if the digits are the same
		switch(findId)
		{
		case 0:
		{
			if(`${countryData[3][0]}${countryData[3][1]}` == hourDigits)
			{
				i++;
				let htmlContent = `
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
		}
		break;

		case 1:
		{
			if(`${countryData[3][3]}${countryData[3][4]}` == minuteDigits)
			{
				i++;
				let htmlContent = `
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
		}
		break;

		case 2:
		{
			if((`${countryData[3][0]}${countryData[3][1]}` == hourDigits) && (`${countryData[3][3]}${countryData[3][4]}` == minuteDigits))
			{
				i++;
				let htmlContent = `
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
		}
		break;

		default:
			console.error(`Unidentified find ID: ${findId} \n`, error);
		}
	});
}