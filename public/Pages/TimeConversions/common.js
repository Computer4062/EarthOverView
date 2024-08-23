let continents = ["East Asia", "South Asia", "South East Asia", "Central Asia", "Western Asia", "Northern Africa", "Western Africa", "Eastern Africa", "Southern Africa", "Central Africa", "Europe", "Southern America", "Northern America", "Oceania"];
let continentsToRender = [];
let currentTableList = [];
let downloadsList = [];

const countriesJsonFileLocation = "/public/Assets/Json/Countries.json";
const countryCodesJsonFileLocation = "/public/Assets/Json/CountryCodes.json";
const jsonFileLocation = "/public/Assets/Json/TimeZones.json";

const searchTable = document.querySelector("#search-table-body");
const searchNotifier = document.querySelector("#search-section-notifier");

const countriesTable = document.querySelector("#countries-list-table-body");
const tableColumns = {"country": 0, "time": 1, "date": 2, "timezone": 3, "continent": 4};

/* modes */
let ascendingNamesMode = false;
let descendingNamesMode = false;
let ascendingTimeMode = false;
let descendingTimeMode = false;
let ascendingDateMode = false;
let descendingDateMode = false;

let filterTimeMode = false;

/* Renderer */
function render()
{
	/* Do the sorting */
	if(ascendingNamesMode) sortAscendingNames();
	else if(descendingNamesMode) sortDescendingNames();
	else if(ascendingTimeMode) sortAscendingTimes();
	else if(descendingTimeMode) sortDescendingTimes();
	else if(ascendingDateMode) sortAscendingDates();
	else if(descendingDateMode) sortDescendingDates();
	
	/* Do the filtering */
	if(filterTimeMode)
	{
		callTimeFilter(filterHoursBox.value, filterMinutesBox.value, dayTimeSelector.value);
	} /* If there is no filtering */
	else
	{
		countriesTable.innerHTML = "";
		downloadsList = [];

		let i = 0;

		currentTableList.forEach(countryData => {
			i++;
			let htmlContent = `
				<tr>
				<th scope="row">${i}</th>
				<td>${countryData[tableColumns.country]}</td>
				<td>${countryData[tableColumns.time]}</td>
				<td>${countryData[tableColumns.date]}</td>
				<td>${countryData[tableColumns.timezone]}</td>
				<td>${countryData[tableColumns.continent]}</td>
				</tr>
			`;

			countriesTable.innerHTML += htmlContent;
			downloadsList.push([countryData[tableColumns.country], countryData[tableColumns.timezone]]);
		});
	}

	/* Reload the search section if it is activated so that it will also be sorted or filtered */
	if(!searchSection.classList.contains("hidden"))
		searchCaller();
}

/* Default renderer - played at the beginning */
function defaultRender(){
	showLoadingBar();

	countriesTable.innerHTML = "";
	currentTableList = [];

	let i = 0;
	fetch(jsonFileLocation)
		.then(response => response.json())
		.then(timeData => {			
			fetch(countriesJsonFileLocation)
				.then(response => response.json())
				.then(countries => {
					// Put user country and time data to time conversion boxes
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
								<td>${timeAndDate[0]}</td>
								<td>${timeAndDate[1]}</td>
								<td>${timeData[country]}</td>
								<td>${continent}</td>
								</tr>
							`;

							countriesTable.innerHTML += htmlContent;
							currentTableList.push([country, timeAndDate[0], timeAndDate[1], timeData[country], continent]);
							downloadsList.push([country, timeData[country]]);
						}
					});
				});
			})
			.catch(error => {
				console.error("Error:", error);
			})
			.finally(() => getUserCountry());
		})
	.catch(error => {
		console.error('Error:', error);
	})
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