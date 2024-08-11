function searchName(name){
	let countryData = "";
	for(let i = 0; i < currentTableList.length; i++)
	{
		if(name.toLowerCase() == currentTableList[i][0].toLowerCase())
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

function searchCodes(code){
	let countriesData = [];

	for(let i = 0; i < currentTableList.length; i++)
	{
		if(code == currentTableList[i][2])
			countriesData.push(currentTableList[i]);
	}

	searchSection.classList.remove("hidden");

	if(countriesData.length !== 0)
	{
		searchTable.innerHTML = "";

		var i = 0;
		countriesData.forEach(country => {
			i++;
			searchTable.innerHTML += `
				<tr>
				<th scope="row">${i}</th>
				<td>${country[0]}</td>
				<td>${country[1]}</td>
				<td>${country[2]}</td>
				</tr>
			`;
		});

		searchNotifier.innerHTML = "<small>* Filter options affect the results *</small>";
	}
	else
	{
		searchTable.innerHTML = "";
		searchNotifier.innerHTML = "<small>Could not find search results (check spellings or filter options)</small>";
	}
}

function search(text){
	if(/\d/.test(text))
		searchCodes(text);
	else
		searchName(text);
}