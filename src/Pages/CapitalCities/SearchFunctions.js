function searchName(text){
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
				<td>${currentTableList[i][tableColumns.city]}</td>
				<td>${currentTableList[i][tableColumns.lat]}</td>
				<td>${currentTableList[i][tableColumns.lng]}</td>
				<td class="map-cell">
					<button class="map-btn" value="${currentTableList[i][tableColumns.lat]},${currentTableList[i][tableColumns.lng]}"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
						<path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/>
						<path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/></svg>
					</button>
				</td>
				<td>${currentTableList[i][4]}</td>
				</tr>
			`;

			addMapBtnFunctionality();	
		}
	}

	if(nothingFound)
	{
		searchTable.innerHTML = "";
		searchNotifier.innerHTML = "<small>Could not find search results (check spellings or filter options)</small>";
	}
	else
	{
		searchNotifier.innerHTML = "<small>* Filter options affect the results *</small>";
	}
}

function searchCity(text){
	searchTable.innerHTML = ""; // Clear the table

	let counter = 0;
	let nothingFound = true;

	searchSection.classList.remove("hidden");

	for(let i = 0; i < currentTableList.length; i++){ // Iterate through the current elements
		let found = false;
		if(currentTableList[i][tableColumns.city].length >= text.length){
			for(let j = 0; j < text.length; j++) // Iterate through the search box value
			{
				/* Check if search results are similar */
					if(text[j].toLowerCase() === currentTableList[i][tableColumns.city][j].toLowerCase())
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
				<td>${currentTableList[i][tableColumns.city]}</td>
				<td>${currentTableList[i][tableColumns.lat]}</td>
				<td>${currentTableList[i][tableColumns.lng]}</td>
				<td class="map-cell">
					<button class="map-btn" value="${currentTableList[i][tableColumns.lat]},${currentTableList[i][tableColumns.lng]}"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
						<path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/>
						<path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/></svg>
					</button>
				</td>
				<td>${currentTableList[i][4]}</td>
				</tr>
			`;

			addMapBtnFunctionality();
		}
	}

	if(nothingFound)
	{
		searchTable.innerHTML = "";
		searchNotifier.innerHTML = "<small>Could not find search results (check spellings or filter options)</small>";
	}
	else
	{
		searchNotifier.innerHTML = "<small>* Filter options affect the results *</small>";
	}
}

let searchOption = 0;

function search(text){
	if(searchOption === 0) searchName(text);
	else if(searchOption === 1) searchCity(text);
	else console.log("Search Option: ", searchOption);
}