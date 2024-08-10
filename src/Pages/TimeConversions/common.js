let continents = ["East Asia", "South Asia", "South East Asia", "Central Asia", "Western Asia", "Northern Africa", "Western Africa", "Eastern Africa", "Southern Africa", "Central Africa", "Europe", "Southern America", "Northern America", "Oceania"];
let continentsToRender = [];
let currentTableList = [];

const countriesJsonFileLocation = "../../Assets/Json/Countries.json";
const jsonFileLocation = "../../Assets/Json/TimeZones.json";

const searchTable = document.querySelector("#search-table-body");
const searchNotifier = document.querySelector("#search-section-notifier");

const countriesTable = document.querySelector("#countries-list-table-body");

/* modes */
let ascendingCodeMode = false;
let descendingCodeMode = false;
let ascendingNamesMode = false;
let descendingNamesMode = false;

/* Renderer */
function render()
{
	/*
	if(ascendingNamesMode) sortAscendingNames();
	else if(descendingNamesMode) sortDescendingNames();
	else if(ascendingCodeMode) sortAscendingCodes();
	else if(descendingCodeMode) sortDescendingCodes();
	*/

	countriesTable.innerHTML = "";
	var i = 0;

	// Clean the list
	currentTableList = removeDuplicateElements(currentTableList);

	currentTableList.forEach(countryData => {
		i++;
		let htmlContent = `
			<tr>
			<th scope="row">${i}</th>
			<td>${countryData[0]}</td>
			<td>${countryData[1]}</td>
			<td>${countryData[2]}</td>
			<td>${countryData[3]}</td>
			<td>${countryData[4]}</td>
			</tr>
		`;

		countriesTable.innerHTML += htmlContent;
	});

	/* Reload the search section if it is activated so that it will also be sorted or filtered */
	if(!searchSection.classList.contains("hidden"))
		search(searchBox.value);
}

/* Default renderer - played at the beginning */
function defaultRender(){
	countriesTable.innerHTML = "";
	currentTableList = [];

	// Clean the list
	currentTableList = removeDuplicateElements(currentTableList);

	let i = 0;
	fetch(jsonFileLocation)
		.then(response => response.json())
		.then(timeData => {			
			fetch(countriesJsonFileLocation)
				.then(response => response.json())
				.then(countries => {

					continents.forEach(continent => {
					countries[continent].forEach(country => {

						const timeAndDate = getTimeAndDate(timeData[country]);

						if(timeAndDate !== undefined)
						{
							i++;
							htmlContent = `
								<tr>
								<td>${i}</td>
								<td>${country}</td>
								<td>${continent}</td>
								<td>${timeData[country]}</td>
								<td>${timeAndDate[0]}</td>
								<td>${timeAndDate[1]}</td>
								</tr>
							`;

							countriesTable.innerHTML += htmlContent;
							currentTableList.push([country, continent, timeData[country], timeAndDate[0], timeAndDate[1]]);
						}
					});
				});
			})
			.catch(error => {
				console.error("Error:", error);
			});
		})
	.catch(error => {
		console.error('Error:', error);
	});
}

/* 
	Functions 
*/

function getTimeAndDate(timezone)
{
  try
  {
  const now = moment().tz(timezone);
  const formattedDate = now.format('DD/MM');
  const formattedTime = now.format('hh:mm A');

  return [formattedTime, formattedDate];
  }
  catch(error)
  {
	return undefined;
  }
}

function removeDuplicateElements(array) {
  const elementCounts = new Map();
  const result = [];

  for (const subArray of array) {
    const firstElement = subArray[0];
    elementCounts.set(firstElement, (elementCounts.get(firstElement) || 0) + 1);

    if (elementCounts.get(firstElement) <= 2) {
      result.push(subArray);
    }
  }

  return result;
}