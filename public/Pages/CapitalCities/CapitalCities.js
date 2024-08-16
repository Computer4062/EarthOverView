/*
	Searching
*/

const searchBtn = document.querySelector("#search-btn");
const searchBox = document.querySelector("#search-box");
const searchSection = document.querySelector("#search-section");
const closeBtn = document.querySelector("#close-button");
const searchOptionLabel = document.querySelector("#search-option-label")
const searchOptions = document.querySelectorAll(".search-options");

const searchOptionPlaceHolders = ["Country Name", "Capital City"];

searchOptionLabel.innerHTML = searchOptions[0].value;
searchBox.placeholder = "Search by " + searchOptionPlaceHolders[0] + "...";
searchOption = 0;

for(let i = 0; i < searchOptions.length; i++)
{
	searchOptions[i].addEventListener("click", () => {
		searchOptionLabel.innerHTML = searchOptions[i].value;
		searchBox.placeholder = "Search by " + searchOptionPlaceHolders[i] + "...";
		searchOption = i;

		searchCaller();
	});
}

closeBtn.addEventListener("click", () => {
	searchSection.classList.add("hidden");
});

searchBox.addEventListener("input", () => {
	searchCaller();
});

function searchCaller(){
	if(searchBox.value !== ""){
		search(searchBox.value);
	}else{
		searchSection.classList.add("hidden");
		searchTable.innerHTML = "";
	}
}

/*
	Open in map
*/

function addMapBtnFunctionality(){
	const mapBtn = document.querySelectorAll(".map-btn");
	mapBtn.forEach(btn => {
		btn.addEventListener("click", () => {
			const url = `https://www.google.com/maps/search/?api=1&query=${btn.value}`;
			window.open(url, '_blank');
		});
	});
}

/*
	Sorting
*/

const ascendingCountriesBtn = document.querySelector("#ascending-countries-btn");
const descendingCountriesBtn = document.querySelector("#descending-countries-btn");
const ascendingCityBtn = document.querySelector("#ascending-city-btn");
const descendingCityBtn = document.querySelector("#descending-city-btn");
const ascendingLatitudeBtn = document.querySelector("#ascending-lat-btn");
const descendingLatitudeBtn = document.querySelector("#descending-lat-btn");
const ascendingLongitudeBtn = document.querySelector("#ascending-lng-btn");
const descendingLongitudeBtn = document.querySelector("#descending-lng-btn");

ascendingCountriesBtn.addEventListener('change', function(event){
	if(event.target.checked)
	{
		ascendingCountryNamesMode = true;
		descendingCountryNamesMode = false;
		ascendingCityNamesMode = false;
		descendingCityNamesMode = false;
		ascendingLatitudesMode = false;
		descendingLatitudesMode = false;
		ascendingLongitudesMode = false;
		descendingLongitudesMode = false;

		render();
	}
});
descendingCountriesBtn.addEventListener('change', function(event){
	if(event.target.checked)
	{
		ascendingCountryNamesMode = false;
		descendingCountryNamesMode = true;
		ascendingCityNamesMode = false;
		descendingCityNamesMode = false;
		ascendingLatitudesMode = false;
		descendingLatitudesMode = false;
		ascendingLongitudesMode = false;
		descendingLongitudesMode = false;

		render();
	}
});

ascendingCityBtn.addEventListener('change', function(event){
	if(event.target.checked)
	{
		ascendingCountryNamesMode = false;
		descendingCountryNamesMode = false;
		ascendingCityNamesMode = true;
		descendingCityNamesMode = false;
		ascendingLatitudesMode = false;
		descendingLatitudesMode = false;
		ascendingLongitudesMode = false;
		descendingLongitudesMode = false;

		render();
	}
});
descendingCityBtn.addEventListener('change', function(event){
	if(event.target.checked)
	{
		ascendingCountryNamesMode = false;
		descendingCountryNamesMode = false;
		ascendingCityNamesMode = false;
		descendingCityNamesMode = true;
		ascendingLatitudesMode = false;
		descendingLatitudesMode = false;
		ascendingLongitudesMode = false;
		descendingLongitudesMode = false;

		render();
	}
});

ascendingLatitudeBtn.addEventListener('change', function(event){
	if(event.target.checked)
	{
		ascendingCountryNamesMode = false;
		descendingCountryNamesMode = false;
		ascendingCityNamesMode = false;
		descendingCityNamesMode = false;
		ascendingLatitudesMode = true;
		descendingLatitudesMode = false;
		ascendingLongitudesMode = false;
		descendingLongitudesMode = false;

		render();
	}
});
descendingLatitudeBtn.addEventListener('change', function(event){
	if(event.target.checked)
	{
		ascendingCountryNamesMode = false;
		descendingCountryNamesMode = false;
		ascendingCityNamesMode = false;
		descendingCityNamesMode = false;
		ascendingLatitudesMode = false;
		descendingLatitudesMode = true;
		ascendingLongitudesMode = false;
		descendingLongitudesMode = false;

		render();
	}
});

ascendingLongitudeBtn.addEventListener('change', function(event){
	if(event.target.checked)
	{
		ascendingCountryNamesMode = false;
		descendingCountryNamesMode = false;
		ascendingCityNamesMode = false;
		descendingCityNamesMode = false;
		ascendingLatitudesMode = false;
		descendingLatitudesMode = false;
		ascendingLongitudesMode = true;
		descendingLongitudesMode = false;

		render();
	}
});
descendingLongitudeBtn.addEventListener('change', function(event){
	if(event.target.checked)
	{
		ascendingCountryNamesMode = false;
		descendingCountryNamesMode = false;
		ascendingCityNamesMode = false;
		descendingCityNamesMode = false;
		ascendingLatitudesMode = false;
		descendingLatitudesMode = false;
		ascendingLongitudesMode = false;
		descendingLongitudesMode = true;

		render();
	}
});

defaultRender();     // Write the table