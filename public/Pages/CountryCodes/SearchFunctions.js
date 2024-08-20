function searchName(text){
	searchTable.innerHTML = ""; // Clear the table

	let counter = 0;
	let nothingFound = true;

	searchSection.classList.remove("hidden");

	for(let i = 0; i < currentTableList.length; i++){ // Iterate through the current elements
		let found = false;

		let listItem = currentTableList[i][tableColumns.country].replace(/\s/g, '').toLowerCase();
		let searchItem = text.replace(/\s/g, '').toLowerCase();

		if(listItem.length >= searchItem.length)
		{
			for(let j = 0; j < searchItem.length; j++) // Iterate through the search box value
			{
				/* Check if search results are similar */
				if(searchItem[j] === listItem[j])
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
			searchTable.innerHTML += `
				<tr>
				<th scope="row">${counter}</th>
				<td>${currentTableList[i][tableColumns.country]}</td>
				<td>${currentTableList[i][tableColumns.code]}</td>
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

function searchCodes(text){
	searchTable.innerHTML = ""; // Clear the table

	let counter = 0;
	let nothingFound = true;

	searchSection.classList.remove("hidden");

	for(let i = 0; i < currentTableList.length; i++){ // Iterate through the current elements
		let found = false;
		if((currentTableList[i][tableColumns.code]).toString().length >= text.length)
		{
			for(let j = 0; j < text.length; j++) // Iterate through the search box value
			{
				/* Check if search results are similar */
				if(text.toString()[j] === currentTableList[i][tableColumns.code].toString()[j])
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
			searchTable.innerHTML += `
				<tr>
				<th scope="row">${counter}</th>
				<td>${currentTableList[i][tableColumns.country]}</td>
				<td>${currentTableList[i][tableColumns.code]}</td>
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
		searchCodes(text.toString());
	else
		searchName(text);
}