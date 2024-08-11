/*
	Time conversions
*/

getUserCountry();

const inputTimeZoneDropDownList = document.querySelector(".input-countries-dropdown");
const inputTimeZoneSearch = document.querySelector(".input-time-zone-search");
const inputTimeZoneLabel = document.querySelector(".input-timezone-label");
const countryBtns = document.getElementsByClassName("input-country-btn");

inputTimeZoneSearch.addEventListener("input", (timeZoneEvent) => {
	if(timeZoneEvent.target.value !== "")
	{
		returnTimeZones(true, timeZoneEvent.target.value);

		for(let i = 0; i < countryBtns.length; i++)
		{
			countryBtns[i].addEventListener("click", () => {
				inputTimeZoneLabel.innerHTML = countryBtns[i].innerHTML;
			});
		}
	}
	else
		inputTimeZoneDropDownList.innerHTML = "";
});

const outputTimeZoneDropDownList = document.querySelector(".output-countries-dropdown");
const outputTimeZoneLabel = document.querySelector(".output-timezone-label");
const outputTimeZoneSearch = document.querySelector(".output-time-zone-search");

outputTimeZoneSearch.addEventListener("input", (timeZoneEvent) => {
	if(timeZoneEvent.target.value !== "")
	{
		returnTimeZones(false, timeZoneEvent.target.value);

		for(let i = 0; i < countryBtns.length; i++)
		{
			countryBtns[i].addEventListener("click", () => {
				outputTimeZoneLabel.innerHTML = countryBtns[i].innerHTML;

				convertTimeToTimezone();
			});
		}
	}
	else
		outputTimeZoneDropDownList.innerHTML = "";
});

const inputTimeFormatBtn = document.querySelectorAll(".input-time-format-btn");
const inputTimeFormat = document.querySelector("#input-time-format");

for(let i = 0; i < inputTimeFormatBtn.length; i++)
{
	inputTimeFormatBtn[i].addEventListener("click", () => {
		inputTimeFormat.innerHTML = inputTimeFormatBtn[i].innerHTML;

		if(inputTimeFormatBtn[i].innerHTML === "24-hour")
		{
			outputTimeFormat.innerHTML = "24-hour";
			amPmFormat = false;
		}
		else
			amPmFormat = true;

		convertTimeToTimezone();
	});
}

const outputTimeFormatBtn = document.querySelectorAll(".output-time-format-btn");
const outputTimeFormat = document.querySelector("#output-time-format");

const inputHour = document.querySelector("#input-hour");
const inputMinute = document.querySelector("#input-minute");
const outputHour = document.querySelector("#output-hour");
const outputMinute = document.querySelector("#output-minute");

inputHour.addEventListener("input", (event) => {	
	if(event.target.value !== "")
		convertTimeToTimezone();
});

inputMinute.addEventListener("input", (event) => {	
	if(event.target.value !== "")
		convertTimeToTimezone();
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
		ascendingTimesMode = false;
		descendingTimesMode = false;
		ascendingDatesMode = false;
		descendingDatesMode = false;

		render();
	}
});

descendingNamesBtn.addEventListener('change', function(event){
	if(event.target.checked)
	{
		ascendingNamesMode = false;
		descendingNamesMode = true;
		ascendingTimesMode = false;
		descendingTimesMode = false;
		ascendingDatesMode = false;
		descendingDatesMode = false;

		render();
	}
});

ascendingTimesBtn.addEventListener('change', function(event){
	if(event.target.checked)
	{
		ascendingNamesMode = false;
		descendingNamesMode = false;
		ascendingTimesMode = true;
		descendingTimesMode = false;
		ascendingDatesMode = false;
		descendingDatesMode = false;

		render();
	}
});

descendingTimesBtn.addEventListener('change', function(event){
	if(event.target.checked)
	{
		ascendingNamesMode = false;
		descendingNamesMode = false;
		ascendingTimesMode = false;
		descendingTimesMode = true;
		ascendingDatesMode = false;
		descendingDatesMode = false;

		render();
	}
});

ascendingDatesBtn.addEventListener('change', function(event){
	if(event.target.checked)
	{
		ascendingNamesMode = false;
		descendingNamesMode = false;
		ascendingTimesMode = false;
		descendingTimesMode = false;
		ascendingDatesMode = true;
		descendingDatesMode = false;

		render();
	}
});

descendingDatesBtn.addEventListener('change', function(event){
	if(event.target.checked)
	{
		ascendingNamesMode = false;
		descendingNamesMode = false;
		ascendingTimesMode = false;
		descendingTimesMode = false;
		ascendingDatesMode = false;
		descendingDatesMode = true;

		render();
	}
});

/*
	Filtering
*/

const filterHoursValue = document.querySelector("#filterHoursValue");
const filterMinutesValue = document.querySelector("#filterMinutesValue");
const filterTimeValues = document.querySelectorAll(".time-filter");

for(let i = 0; i < 2; i++)
{
	filterTimeValues[i].addEventListener("input", () => {
		if(filterHoursValue.value == "" && filterMinutesValue.value == "")
		{
			renderContinent();
		}
		else
		{
			hourDigits = (filterHoursValue.value == "") ? -1 : filterHoursValue.value.padStart(2, '0');
			minuteDigits = (filterMinutesValue.value == "") ? -1 : filterMinutesValue.value.padStart(2, '0');
			dayTime = filterDayTime.textContent[0];
			filterToTime();
		}
	});
}

/*
	Write the table
*/

defaultRender();