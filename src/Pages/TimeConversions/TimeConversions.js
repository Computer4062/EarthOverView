/*
	Time Conversions
*/

const inputTimeZoneLabel = document.querySelector(".input-time-zone-label");
const inputTimeZoneSearch = document.querySelector(".input-time-zone-search");
const inputCountriesDropDown = document.querySelector(".input-countries-dropdown");
const inputHourBox = document.querySelector("#input-hour");
const inputMinuteBox = document.querySelector("#input-minute");
const inputTimeFormatsBtns = document.querySelectorAll(".input-time-format-btn");
const inputTimeFormatLabel = document.querySelector("#input-time-format-label");

const outputTimeZoneLabel = document.querySelector(".output-time-zone-label");
const outputTimeZoneSearch = document.querySelector(".output-time-zone-search");
const outputCountriesDropDown = document.querySelector(".output-countries-dropdown");
const outputHourBox = document.querySelector("#output-hour");
const outputMinuteBox = document.querySelector("#output-minute");
const outputTimeFormatsBtns = document.querySelectorAll(".output-time-format-btn");
const outputTimeFormatLabel = document.querySelector("#output-time-format-label");

/* Input time zone find */
inputTimeZoneSearch.addEventListener("input", (event) => {
	if(event.target.value !== "")
	{
		returnTimeZones(true, event.target.value);

		const inputCountryBtns = document.querySelectorAll(".input-country-btn");
		for(let i = 0; i < inputCountryBtns.length; i++)
		{
			inputCountryBtns[i].addEventListener("click", () => {
				inputTimeZoneLabel.innerHTML = inputCountryBtns[i].innerHTML;
				inputTimeZoneLabel.value = inputCountryBtns[i].value;

				console.log("OUTPUT:", outputTimeZoneLabel.value);
				console.log("INPUT:", inputTimeZoneLabel.value);

				convertTime();
			});
		}
	}
	else
		inputCountriesDropDown.innerHTML = "";
});

/* Output time zone find */
outputTimeZoneSearch.addEventListener("input", (event) => {
	if(event.target.value !== "")
	{
		returnTimeZones(false, event.target.value);

		const outputCountryBtns = document.querySelectorAll(".output-country-btn");
		for(let i = 0; i < outputCountryBtns.length; i++)
		{
			outputCountryBtns[i].addEventListener("click", () => {
				outputTimeZoneLabel.innerHTML = outputCountryBtns[i].innerHTML;
				outputTimeZoneLabel.value = outputCountryBtns[i].value;

				console.log("OUTPUT:", outputTimeZoneLabel.value);
				console.log("INPUT:", inputTimeZoneLabel.value);

				convertTime();
			});
		}
	}
	else
		outputCountriesDropDown.innerHTML = "";
});

/* Input time format button pressed */
for(let i = 0; i < inputTimeFormatsBtns.length; i++)
{
	inputTimeFormatsBtns[i].addEventListener("click", () => {	
		inputTimeFormatLabel.innerHTML = inputTimeFormatsBtns[i].innerHTML;

		if(inputTimeFormatLabel.innerHTML === "24-hour")
			outputTimeFormatLabel.innerHTML = "24-hour";

		convertTime();
	});
}

/* Input time boxes content changed */
inputHourBox.addEventListener("input", (event) => {
	if(event.target.value !== "")
		convertTime();
});

inputMinuteBox.addEventListener("input", (event) => {
	if(event.target.value !== "")
		convertTime();
});

/*
	Searching
*/

const searchBtn = document.querySelector("#search-btn");
const searchBox = document.querySelector("#search-box");
const searchSection = document.querySelector("#search-section");
const closeBtn = document.querySelector("#close-button");

let displaySearchSection = false;

closeBtn.addEventListener("click", () => {
	searchSection.classList.add("hidden");
});

searchBtn.addEventListener("click", () => {
	search(searchBox.value);
});

searchBox.addEventListener("keyup", (event) => {
	if(event.keyCode === 13)
		search(searchBox.value);
});

/*
	Sorting
*/

const ascendingNamesBtn = document.querySelector("#ascending-names-btn");
const descendingNamesBtn = document.querySelector("#descending-names-btn");
const ascendingTimesBtn = document.querySelector("#ascending-times-btn");
const descendingTimesBtn = document.querySelector("#descending-times-btn");
const ascendingDatesBtn = document.querySelector("#ascending-dates-btn");
const descendingDatesBtn = document.querySelector("#descending-dates-btn");

ascendingNamesBtn.addEventListener('change', function(event){
	if(event.target.checked)
	{
		ascendingNamesMode = true;
		descendingNamesMode = false;
		ascendingTimeMode = false;
		descendingTimeMode = false;
		ascendingDateMode = false;
		descendingDateMode = false;

		render();
	}
});

descendingNamesBtn.addEventListener('change', function(event){
	if(event.target.checked)
	{
		ascendingNamesMode = false;
		descendingNamesMode = true;
		ascendingTimeMode = false;
		descendingTimeMode = false;
		ascendingDateMode = false;
		descendingDateMode = false;

		render();
	}
});

ascendingTimesBtn.addEventListener('change', function(event){
	if(event.target.checked)
	{
		ascendingNamesMode = false;
		descendingNamesMode = false;
		ascendingTimeMode = true;
		descendingTimeMode = false;
		ascendingDateMode = false;
		descendingDateMode = false;

		render();
	}
});

descendingTimesBtn.addEventListener('change', function(event){
	if(event.target.checked)
	{
		ascendingNamesMode = false;
		descendingNamesMode = false;
		ascendingTimeMode = false;
		descendingTimeMode = true;
		ascendingDateMode = false;
		descendingDateMode = false;

		render();
	}
});

ascendingDatesBtn.addEventListener('change', function(event){
	if(event.target.checked)
	{
		ascendingNamesMode = false;
		descendingNamesMode = false;
		ascendingTimeMode = false;
		descendingTimeMode = false;
		ascendingDateMode = true;
		descendingDateMode = false;

		render();
	}
});

descendingDatesBtn.addEventListener('change', function(event){
	if(event.target.checked)
	{
		ascendingNamesMode = false;
		descendingNamesMode = false;
		ascendingTimeMode = false;
		descendingTimeMode = false;
		ascendingDateMode = false;
		descendingDateMode = true;

		render();
	}
});

/*
	Filtering
*/

/*
	Filter time
*/

const timeFilterBoxes = document.querySelectorAll(".time-filter");
const filterHoursBox = document.querySelector("#filter-hours-value");
const filterMinutesBox = document.querySelector("#filter-minutes-value");

const filterDayTimeSelector = document.querySelectorAll(".filter-day-time-selector");
const dayTimeSelector = document.querySelector("#day-time-selector");
const amOption = document.querySelector("#am-day-time-selector");
const pmOption = document.querySelector("#pm-day-time-selector");
const anyOption = document.querySelector("#any-day-time-selector");

function callTimeFilter(hourValue, minuteValue, dayTimeValue){
	const hour = (hourValue === "") ? -1 : hourValue;
	const minute = (minuteValue === "") ? -1 : minuteValue;
	filterToTime(hour, minute, dayTimeValue);
}

dayTimeSelector.value = anyOption.value;
dayTimeSelector.innerHTML = anyOption.innerHTML;

for(let i = 0; i < timeFilterBoxes.length; i++)
{
	timeFilterBoxes[i].addEventListener("input", () => {
		filterTimeMode = true;
		render();
	});
}

for(let i = 0; i < filterDayTimeSelector.length; i++)
{
	filterDayTimeSelector[i].addEventListener("click", (event) => {
		dayTimeSelector.value = event.target.value;
		dayTimeSelector.innerHTML = event.target.innerHTML;

		filterTimeMode = true;
		render();
	});
}

getUserCountry();    // Write time conversion values
defaultRender();     // Write the table