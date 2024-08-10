/*
	Time Conversions
*/

const timeFormatValues = ["AM", "PM", "24-hour"];

const inputTimeZoneLabel = document.querySelector(".input-timezone-label");
const inputTimeZoneSearch = document.querySelector(".input-time-zone-search");
const inputCountriesDropDown = document.querySelector(".input-countries-dropdown");
const inputHourBox = document.querySelector("#input-hour");
const inputMinuteBox = document.querySelector("#input-minute");
const timeFormatBtns = document.querySelectorAll(".input-time-format-btn");

const outputTimeZoneLabel = document.querySelector(".input-timezone-label");
const outputTimeZoneSearch = document.querySelector(".input-time-zone-search");
const outputCountriesDropDown = document.querySelector(".input-countries-dropdown");
const outputHourBox = document.querySelector("#input-hour");
const outputMinuteBox = document.querySelector("#input-minute");

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

const ascendingNamesBtn = document.querySelector("#ascendingNamesBtn");
const descendingNamesBtn = document.querySelector("#descendingNamesBtn");
const ascendingCodesBtn = document.querySelector("#ascendingCodesBtn");
const descendingCodesBtn = document.querySelector("#descendingCodesBtn");

ascendingNamesBtn.addEventListener('change', function(){
	if(ascendingNamesBtn.checked)
	{
		ascendingCodeMode = false;
		descendingCodeMode = false;
		ascendingNamesMode = true;
		descendingNamesMode = false;

		render();
	}
});

descendingNamesBtn.addEventListener('change', function(){
	if(descendingNamesBtn.checked)
	{
		ascendingCodeMode = false;
		descendingCodeMode = false;
		ascendingNamesMode = false;
		descendingNamesMode = true;

		render();
	}
});

ascendingCodesBtn.addEventListener('change', function(){
	if(ascendingCodesBtn.checked)
	{
		ascendingCodeMode = true;
		descendingCodeMode = false;
		ascendingNamesMode = false;
		descendingNamesMode = false;

		render();
	}
});

descendingCodesBtn.addEventListener('change', function(){
	if(descendingCodesBtn.checked)
	{
		ascendingCodeMode = false;
		descendingCodeMode = true;
		ascendingNamesMode = false;
		descendingNamesMode = false;

		render();
	}
});

*/

/*
	Filtering
*/

/*
	Filter time
*/

const filterHoursBox = document.querySelector("#filter-hours-value");
const filterMinutesBox = document.querySelector("#filter-minutes-value");

filterHoursBox.addEventListener("input", (event) => {
	const hour = (event.target.value === "") ? -1 : event.target.value;
	const minute = (filterMinutesBox.value === "") ? -1 : filterMinutesBox.value;
	filterToTime(hour, minute);
});

filterMinutesBox.addEventListener("input", (event) => {
	const hour = (filterHoursBox.value === "") ? -1 : filterHoursBox.value;
	const minute = (event.target.value === "") ? -1 : event.target.value;
	filterToTime(hour, minute);
});

defaultRender();     // Write the table