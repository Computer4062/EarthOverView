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

	if(countryData !== undefined)
	{
		searchTable.innerHTML = `
			<tr>
			<th scope="row">${1}</th>
			<td>${countryData[0]}</td>
			<td>${countryData[1]}</td>
			<td>${countryData[2]}</td>
			</tr>
		`;
	}
}

function search(item){
	searchName(item);
}