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

function AddToTable(condition, countryData, i)
{
	if(condition){
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
}

function filterToTime(hDigits, mDigits, dayTime)
{
	countriesTable.innerHTML = "";
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
			AddToTable(`${countryData[3][0]}${countryData[3][1]}` == hDigits.padStart(2, '0') &&
					   `${countryData[3][3]}${countryData[3][4]}` == mDigits.padStart(2, '0') &&
						(countryData[3][6] === dayTime || dayTime == "ANY"), countryData, i);
		});
	}
	break;

	case 1:
	{
		currentTableList.forEach(countryData => {
			i++;
			AddToTable(`${countryData[3][0]}${countryData[3][1]}` == hDigits.padStart(2, '0') && 
						(countryData[3][6] === dayTime || dayTime == "ANY"), countryData, i);
		});
	}
	break;

	case 2:
	{
		currentTableList.forEach(countryData => {
			i++;
			AddToTable(`${countryData[3][3]}${countryData[3][4]}` == mDigits.padStart(2, '0') &&
						(countryData[3][6] === dayTime || dayTime === "ANY"), countryData, i);
		});
	}
	break;

	case 3:
	{
		currentTableList.forEach(countryData => {
			i++;
			AddToTable(countryData[3][6] === dayTime, countryData, i);
		});
	}
	break;

	case 4:
	{
		currentTableList.forEach(countryData => {
			i++;
			AddToTable(countryData[3][6] === dayTime, countryData, i);
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