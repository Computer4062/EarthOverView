function searchName(text){
	searchTable.innerHTML = ""; // Clear the table

	let counter = 0;
	let nothingFound = true;

	searchSection.classList.remove("hidden");

	for(let i = 0; i < currentTableList.length; i++){ // Iterate through the current elements
		let found = false;
		if(currentTableList[i][tableColumns.timezone].length >= text.length){
			for(let j = 0; j < text.length; j++) // Iterate through the search box value
			{
				/* Check if search results are similar */
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

			const timeAndDate = getTimeAndDate(currentTableList[i][tableColumns.timezone]);

			counter++;
			searchTable.innerHTML += `
				<tr>
				<th scope="row">${counter}</th>
				<td>${currentTableList[i][tableColumns.country]}</td>
				<td>${timeAndDate[0]}</td>
				<td>${timeAndDate[1]}</td>
				<td>${currentTableList[i][tableColumns.timezone]}</td>
				<td>${currentTableList[i][tableColumns.continent]}</td>
				</tr>
				`

			searchNotifier.innerHTML = "<small>* Filter options affect the results *</small>";
		}
	}

	if(nothingFound)
	{
		searchZone(text);
	}
}

function searchZone(text){
	searchTable.innerHTML = ""; // Clear the table

	let counter = 0;
	let nothingFound = true;

	searchSection.classList.remove("hidden");

	for(let i = 0; i < currentTableList.length; i++){ // Iterate through the current elements
		let found = false;
		if(currentTableList[i][tableColumns.timezone].length >= text.length){
			for(let j = 0; j < text.length; j++) // Iterate through the search box value
			{
				/* Check if search results are similar */
				if(text[j].toLowerCase() === currentTableList[i][tableColumns.timezone][j].toLowerCase())
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

			const timeAndDate = getTimeAndDate(currentTableList[i][tableColumns.timezone]);

			counter++;
			searchTable.innerHTML += `
				<tr>
				<th scope="row">${counter}</th>
				<td>${currentTableList[i][tableColumns.country]}</td>
				<td>${timeAndDate[0]}</td>
				<td>${timeAndDate[1]}</td>
				<td>${currentTableList[i][tableColumns.timezone]}</td>
				<td>${currentTableList[i][tableColumns.continent]}</td>
				</tr>
			`;

			searchNotifier.innerHTML = "<small>* Filter options affect the results *</small>";
		}
	}

	if(nothingFound)
	{
		searchTable.innerHTML = "";
		searchNotifier.innerHTML = "<small>Could not find search results (check spellings or filter options)</small>";
	}
}

function searchDate(text){
	searchTable.innerHTML = ""; // Clear the table

	let counter = 0;
	let nothingFound = true;

	searchSection.classList.remove("hidden");

	for(let i = 0; i < currentTableList.length; i++){ // Iterate through the current elements
		let found = false;
		if(currentTableList[i][tableColumns.date].length >= text.length){
			for(let j = 0; j < text.length; j++) // Iterate through the search box value
			{
				/* Check if search results are similar */
				if(text[j] === currentTableList[i][tableColumns.date][j])
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

			const timeAndDate = getTimeAndDate(currentTableList[i][tableColumns.timezone]);

			counter++;
			searchTable.innerHTML += `
				<tr>
				<th scope="row">${counter}</th>
				<td>${currentTableList[i][tableColumns.country]}</td>
				<td>${timeAndDate[0]}</td>
				<td>${timeAndDate[1]}</td>
				<td>${currentTableList[i][tableColumns.timezone]}</td>
				<td>${currentTableList[i][tableColumns.continent]}</td>
				</tr>
			`;

			searchNotifier.innerHTML = "<small>* Filter options affect the results *</small>";
		}
	}

	if(nothingFound)
	{
		searchTable.innerHTML = "";
		searchNotifier.innerHTML = "<small>Could not find search results (check spellings or filter options)</small>";
	}
}

function search(text){
	if(/\d/.test(text))
		searchDate(text);
	else
		searchName(text);
}