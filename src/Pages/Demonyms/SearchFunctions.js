function searchName(text){
	searchTable.innerHTML = "";

	let countryData = "";
	for(let i = 0; i < currentTableList.length; i++)
	{
		if(text.toLowerCase() == currentTableList[i][0].toLowerCase())
		{
			countryData = currentTableList[i];
			break;
		}
	}

	searchSection.classList.remove("hidden");

	if(countryData)
	{
		searchTable.innerHTML = `
			<tr>
			<th scope="row">${1}</th>
			<td>${countryData[0]}</td>
			<td>${countryData[1]}</td>
			<td>${countryData[2]}</td>
			</tr>
		`;

		searchNotifier.innerHTML = "<small>* Filter options affect the results *</small>";
	}
	else
	{
		searchDemonym(text);
	}
}

function searchDemonym(text){
	searchTable.innerHTML = "";

	let countryData = "";
	for(let i = 0; i < currentTableList.length; i++)
	{
		if(text.toLowerCase() == currentTableList[i][0].toLowerCase())
		{
			countryData = currentTableList[i];
			break;
		}
	}

	searchSection.classList.remove("hidden");

	if(countryData)
	{
		searchTable.innerHTML = `
			<tr>
			<th scope="row">${1}</th>
			<td>${countryData[0]}</td>
			<td>${countryData[1]}</td>
			<td>${countryData[2]}</td>
			</tr>
		`;

		searchNotifier.innerHTML = "<small>* Filter options affect the results *</small>";
	}
	else
	{
		searchTable.innerHTML = "";
		searchNotifier.innerHTML = "<small>Could not find search results (check spellings or filter options)</small>";
	}
}

function search(text){
	searchName(text);
}