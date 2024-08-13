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
				.then(demoynms => {
					continentsList.forEach(continent => {
						region[continent].forEach(country => {
							currentTableList.push([country, demoynms[country], continent]);
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