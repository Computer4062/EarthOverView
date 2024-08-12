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
			<td>${countryData[3]}</td>
			<td>${countryData[4]}</td>
			<td>${countryData[5]}</td>
			</tr>
		`;

		searchNotifier.innerHTML = "<small>* Filter options affect the results *</small>";
	}
	else
	{
		searchCode(text);
	}
}

function searchCode(text){
	let countriesData = [];

	for(let i = 0; i < currentTableList.length; i++)
	{
		if(text.toLowerCase() == currentTableList[i][5].toLowerCase())
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
				<td>${country[3]}</td>
				<td>${country[4]}</td>
				<td>${country[5]}</td>
				</tr>
			`;
		});

		searchNotifier.innerHTML = "<small>* Filter options affect the results *</small>";
	}
	else
	{
		searchUnit(text);
	}
}

function searchUnit(text){
	let countriesData = [];

	for(let i = 0; i < currentTableList.length; i++)
	{
		if(text.toLowerCase() == currentTableList[i][3].toLowerCase())
		{
			countriesData.push(currentTableList[i]);
		}
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
				<td>${country[3]}</td>
				<td>${country[4]}</td>
				<td>${country[5]}</td>
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
	searchName(text);
}