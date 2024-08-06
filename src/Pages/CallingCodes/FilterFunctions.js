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

			fetch(codesJsonFileLocation)
				.then(response => response.json())
				.then(codes => {
					continentsList.forEach(continent => {
						region[continent].forEach(country => {
							currentTableList.push([country, continent, codes[country]]);
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

function filterToDigits(hDigit, tDigit, oDigit){
	document.querySelector("tbody").innerHTML = "";

	let findId = -1;

	if((hDigit != - 1) && (tDigit == -1) && (oDigit == -1)) findId = 0;
	else if((hDigit == -1) && (tDigit != -1) && (oDigit == -1)) findId = 1;
	else if((hDigit == -1) && (tDigit == -1) && (oDigit != -1)) findId = 2;
	else if((hDigit != -1) && (tDigit != -1) && (oDigit == -1)) findId = 3;
	else if((hDigit != -1) && (tDigit == -1) && (oDigit != -1)) findId = 4;
	else if((hDigit == -1) && (tDigit != -1) && (oDigit != -1)) findId = 5;

	var i = 0;
	currentTableList.forEach(countryData => {
		// Check if the digits are the same
		switch(findId)
		{
		case 0:
		{
			if(Math.floor(countryData[2] / 100) % 10 == hDigit)
			{
				i++;
				let htmlContent = `
					<tr>
					<th scope="row">${i}</th>
					<td>${countryData[0]}</td>
					<td>${countryData[1]}</td>
					<td>${countryData[2]}</td>
					</tr>
				`;

				//currentTableList.push([countryData[0], countryData[1], countryData[2]]);
				document.querySelector("tbody").innerHTML += htmlContent;
			}
		}
		break;

		case 1:
		{
			if(Math.floor(countryData[2] / 10) % 10 == tDigit)
			{
				i++;
				let htmlContent = `
					<tr>
					<th scope="row">${i}</th>
					<td>${countryData[0]}</td>
					<td>${countryData[1]}</td>
					<td>${countryData[2]}</td>
					</tr>
				`;

				//currentTableList.push([countryData[0], countryData[1], countryData[2]]);
				document.querySelector("tbody").innerHTML += htmlContent;
			}
		}
		break;

		case 2:
		{
			if(Math.floor(countryData[2]) % 10 == oDigit)
			{
				i++;
				let htmlContent = `
					<tr>
					<th scope="row">${i}</th>
					<td>${countryData[0]}</td>
					<td>${countryData[1]}</td>
					<td>${countryData[2]}</td>
					</tr>
				`;

				//currentTableList.push([countryData[0], countryData[1], countryData[2]]);
				document.querySelector("tbody").innerHTML += htmlContent;
			}
		}
		break;

		case 3:
		{
			if((Math.floor(countryData[2] / 100) % 10 == hDigit) && (Math.floor(countryData[2] / 10) % 10 == tDigit))
			{
				i++;
				let htmlContent = `
					<tr>
					<th scope="row">${i}</th>
					<td>${countryData[0]}</td>
					<td>${countryData[1]}</td>
					<td>${countryData[2]}</td>
					</tr>
				`;

				//currentTableList.push([countryData[0], countryData[1], countryData[2]]);
				document.querySelector("tbody").innerHTML += htmlContent;
			}
		}
		break;

		case 4:
		{
			if((Math.floor(countryData[2] / 100) % 10 == hDigit) && (Math.floor(countryData[2]) % 10 == oDigit))
			{
				i++;
				let htmlContent = `
					<tr>
					<th scope="row">${i}</th>
					<td>${countryData[0]}</td>
					<td>${countryData[1]}</td>
					<td>${countryData[2]}</td>
					</tr>
				`;

				//currentTableList.push([countryData[0], countryData[1], countryData[2]]);
				document.querySelector("tbody").innerHTML += htmlContent;
			}
		}
		break;

		case 5:
		{
			if((Math.floor(countryData[2] / 10) % 10 == tDigit) && (Math.floor(countryData[2]) % 10 == oDigit))
			{
				i++;
				let htmlContent = `
					<tr>
					<th scope="row">${i}</th>
					<td>${countryData[0]}</td>
					<td>${countryData[1]}</td>
					<td>${countryData[2]}</td>
					</tr>
				`;

				//currentTableList.push([countryData[0], countryData[1], countryData[2]]);
				document.querySelector("tbody").innerHTML += htmlContent;
			}
		}
		break;
		}
	});
}