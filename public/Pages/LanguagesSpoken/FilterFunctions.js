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
				.then(language => {
					continentsList.forEach(continent => {
						region[continent].forEach(country => {
							currentTableList.push([country, language[country].language, language[country].iso639_1, continent]);
						});
					});

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

function filterToLanguageName(languageName){
	countriesTable.innerHTML = ""; // Clear the table
	downloadsList = [];

	let counter = 0;
	for(let i = 0; i < currentTableList.length; i++){ // Iterate through the current elements
		let found = false;
		for(let x = 0; x < currentTableList[i][tableColumns.lang].length; x++){ // Iterate through the language names
			if(currentTableList[i][tableColumns.lang][x].length >= languageName.length)
			{
				for(let j = 0; j < languageName.length; j++) // Iterate through the search box value
				{
					/* Check if search results are similar */
					if(languageName[j].toLowerCase() === currentTableList[i][tableColumns.lang][x][j].toLowerCase())
					{
						found = true;
					}
					else
					{
						found = false;
						break;
					}
				}

				if(found)
					break;
			}
			else
			{
				found = false;
			}
		}

		if(found) // Search results found
		{
			nothingFound = false;
			counter++;
			countriesTable.innerHTML += `
				<tr>
				<th scope="row">${counter}</th>
				<td>${currentTableList[i][tableColumns.country]}</td>
				<td>
					<ul>
						${currentTableList[i][tableColumns.lang].map(lang => `<li>${lang}</li>`).join('')}
					</ul>					
					</td>
				<td>
					<ul>
						${currentTableList[i][tableColumns.code].map(code => `<li>${code}</li>`).join('')}
					</ul>
				</td>
				<td>${currentTableList[i][tableColumns.continent]}</td>
				</tr>
			`;

			downloadsList.push([
				currentTableList[i][tableColumns.country],
				currentTableList[i][tableColumns.lang].map(lang => `${lang}`).join('|'),
				currentTableList[i][tableColumns.code].map(code => `${code}`).join('|')
			]);
		}
	}
}