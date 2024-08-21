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
								currentTableList.push([country,  timeAndDate[0], timeAndDate[1], timeData[country], continent]);
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

function AddToTable(condition, countryData, i)
{
	if(condition){
		i++;
		const htmlContent = `
			<tr>
			<th scope="row">${i}</th>
			<td>${countryData[tableColumns.country]}</td>
			<td>${countryData[tableColumns.time]}</td>
			<td>${countryData[tableColumns.date]}</td>
			<td>${countryData[tableColumns.timezone]}</td>
			<td>${countryData[tableColumns.continent]}</td>
			</tr>
		`;

		countriesTable.innerHTML += htmlContent;
		downloadsList.push([countryData[tableColumns.country], countryData[tableColumns.timezone]]);
	}
}

function filterToTime(hDigits, mDigits, dayTime)
{
	countriesTable.innerHTML = "";
	downloadsList = [];

	let findId = -1;

	if((hDigits != -1) && (mDigits != -1)) findId = 0;
	else if((hDigits != -1) && (mDigits == -1)) findId = 1;
	else if((hDigits == -1) && (mDigits != -1)) findId = 2;
	else if((hDigits == -1) && (mDigits == -1) && (dayTime === "A")) findId = 3;
	else if((hDigits == -1) && (mDigits == -1) && (dayTime === "P")) findId = 4;
	else if((hDigits == -1) && (mDigits == -1) && (dayTime === "ANY")) findId = 5;

	let i = 0;

	switch(findId)
	{
	case 0:
	{
		currentTableList.forEach(countryData => {
			i++;
			AddToTable(`${countryData[tableColumns.time][0]}${countryData[tableColumns.time][1]}` == hDigits.padStart(2, '0') &&
					   `${countryData[tableColumns.time][3]}${countryData[tableColumns.time][4]}` == mDigits.padStart(2, '0') &&
						(countryData[tableColumns.time][6] === dayTime || dayTime == "ANY"), countryData, i);
		});
	}
	break;

	case 1:
	{
		currentTableList.forEach(countryData => {
			i++;
			AddToTable(`${countryData[tableColumns.time][0]}${countryData[tableColumns.time][1]}` == hDigits.padStart(2, '0') && 
						(countryData[tableColumns.time][6] === dayTime || dayTime == "ANY"), countryData, i);
		});
	}
	break;

	case 2:
	{
		currentTableList.forEach(countryData => {
			i++;
			AddToTable(`${countryData[tableColumns.time][3]}${countryData[tableColumns.time][4]}` == mDigits.padStart(2, '0') &&
						(countryData[tableColumns.time][6] === dayTime || dayTime === "ANY"), countryData, i);
		});
	}
	break;

	case 3:
	{
		currentTableList.forEach(countryData => {
			i++;
			AddToTable(countryData[tableColumns.time][6] === dayTime, countryData, i);
		});
	}
	break;

	case 4:
	{
		currentTableList.forEach(countryData => {
			i++;
			AddToTable(countryData[tableColumns.time][6] === dayTime, countryData, i);
		});
	}
	break;

	case 5:
	{
		filterTimeMode = false;
		renderContinent();
	}
	break;
	}
}