function searchCountryName(text){
	searchTable.innerHTML = ""; // Clear the table

	let counter = 0;
	let nothingFound = true;

	searchSection.classList.remove("hidden");

	for(let i = 0; i < currentTableList.length; i++){ // Iterate through the current elements
		let found = false;
			if(currentTableList[i][tableColumns.country].length >= text.length)
			{
				for(let j = 0; j < text.length; j++) // Iterate through the search box value
				{
					if(text[j].toLowerCase() === currentTableList[i][tableColumns.country][j].toLowerCase())
					{
						found = true;
					}
					else
					{
						found = false;
						break;
					}
				}
			}
			else
			{
				found = false;
			}

		if(found) // Search results found
		{
			nothingFound = false;
			counter++;
			searchTable.innerHTML += `
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
				`

			searchNotifier.innerHTML = "<small>* Filter options affect the results *</small>";
		}
	}

	if(nothingFound)
	{
		searchTable.innerHTML = "";
		searchNotifier.innerHTML = "<small>Could not find search results (check spellings or filter options)</small>";
	}
}


function searchLanguageName(text){
	searchTable.innerHTML = ""; // Clear the table

	let counter = 0;
	let nothingFound = true;

	searchSection.classList.remove("hidden");

	for(let i = 0; i < currentTableList.length; i++){ // Iterate through the current elements
		let found = false;
		for(let x = 0; x < currentTableList[i][tableColumns.lang].length; x++){ // Iterate through the language names
			if(currentTableList[i][tableColumns.lang][x].length >= text.length)
			{
				for(let j = 0; j < text.length; j++) // Iterate through the search box value
				{
					if(text[j].toLowerCase() === currentTableList[i][tableColumns.lang][x][j].toLowerCase())
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
			searchTable.innerHTML += `
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
				`

			searchNotifier.innerHTML = "<small>* Filter options affect the results *</small>";
		}
	}

	if(nothingFound)
	{
		searchTable.innerHTML = "";
		searchNotifier.innerHTML = "<small>Could not find search results (check spellings or filter options)</small>";
	}
}

function searchCodes(text){
	searchTable.innerHTML = ""; // Clear the table

	let counter = 0;
	let nothingFound = true;

	searchSection.classList.remove("hidden");

	for(let i = 0; i < currentTableList.length; i++){ // Iterate through the current elements
		let found = false;
		for(let x = 0; x < currentTableList[i][tableColumns.code].length; x++){ // Iterate through the language codes
			if(currentTableList[i][tableColumns.code][x].length >= text.length)
			{
				for(let j = 0; j < text.length; j++) // Iterate through the search box value
				{
					/* Check if search results are similar */
					if(text[j].toLowerCase() ===  currentTableList[i][tableColumns.code][x][j].toLowerCase())
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
		};

		if(found) // Search results found
		{
			nothingFound = false;
			counter++;
			searchTable.innerHTML += `
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
				`

			searchNotifier.innerHTML = "<small>* Filter options affect the results *</small>";
		}
	}

	if(nothingFound)
	{
		searchTable.innerHTML = "";
		searchNotifier.innerHTML = "<small>Could not find search results (check spellings or filter options)</small>";
	}
}

let searchOption = 0;

function search(text){
	if(searchOption == 0) searchCountryName(text);
	else if(searchOption == 1) searchLanguageName(text);
	else if(searchOption == 2) searchCodes(text);
	else console.log("Search Option:", searchOption);
}