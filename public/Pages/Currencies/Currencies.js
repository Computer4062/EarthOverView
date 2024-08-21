/*
	Searching
*/

const searchBtn = document.querySelector("#search-btn");
const searchBox = document.querySelector("#search-box");
const searchSection = document.querySelector("#search-section");
const closeBtn = document.querySelector("#close-button");
const searchOptionLabel = document.querySelector("#search-option-label")
const searchOptions = document.querySelectorAll(".search-options");

const searchOptionPlaceHolders = ["Country Name", "Currency Unit", "Currency Code"];

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
	Downloading
*/

const downloadSection = document.querySelector(".download-section");
const downloadSecBtn = document.querySelector(".download-sec-btn");
const downloadBtn = document.querySelector(".download-btn");

downloadSecBtn.addEventListener("click", () => {
	if(downloadSection.classList.contains("hidden"))
		downloadSection.classList.remove("hidden");
	else
		downloadSection.classList.add("hidden");
});

downloadBtn.addEventListener("click", () => {
	CallDownloader("currencies");
});

/*
	Sorting
*/

const ascendingNamesBtn = document.querySelector("#ascending-names-btn");
const descendingNamesBtn = document.querySelector("#descending-names-btn");
const ascendingUnitsBtn = document.querySelector("#ascending-units-btn");
const descendingUnitsBtn = document.querySelector("#descending-units-btn");
const ascendingCodesBtn = document.querySelector("#ascending-codes-btn");
const descendingCodesBtn = document.querySelector("#descending-codes-btn");

ascendingNamesBtn.addEventListener('change', function(event){
	if(event.target.checked)
	{
		ascendingCodesMode = false;
		descendingCodesMode = false;
		ascendingNamesMode = true;
		descendingNamesMode = false;
		ascendingUnitsMode = false;
		descendingUnitsMode = false;

		render();
	}
});

descendingNamesBtn.addEventListener('change', function(event){
	if(event.target.checked)
	{
		ascendingCodesMode = false;
		descendingCodesMode = false;
		ascendingNamesMode = false;
		descendingNamesMode = true;
		ascendingUnitsMode = false;
		descendingUnitsMode = false;

		render();
	}
});

ascendingUnitsBtn.addEventListener('change', function(event){
	if(event.target.checked)
	{
		ascendingCodesMode = false;
		descendingCodesMode = false;
		ascendingNamesMode = false;
		descendingNamesMode = false;
		ascendingUnitsMode = true;
		descendingUnitsMode = false;

		render();
	}
});

descendingUnitsBtn.addEventListener('change', function(event){
	if(event.target.checked)
	{
		ascendingCodesMode = false;
		descendingCodesMode = false;
		ascendingNamesMode = false;
		descendingNamesMode = false;
		ascendingUnitsMode = false;
		descendingUnitsMode = true;

		render();
	}
});

ascendingCodesBtn.addEventListener('change', function(event){
	if(event.target.checked)
	{
		ascendingCodesMode = true;
		descendingCodesMode = false;
		ascendingNamesMode = false
		descendingNamesMode = false;
		ascendingUnitsMode = false;
		descendingUnitsMode = false;

		render();
	}
});

descendingCodesBtn.addEventListener('change', function(event){
	if(event.target.checked)
	{
		ascendingCodesMode = false;
		descendingCodesMode = true;
		ascendingNamesMode = false;
		descendingNamesMode = false;
		ascendingUnitsMode = false;
		descendingUnitsMode = false;

		render();
	}
});
/*
	Filtering
*/

/*
	Filtering units
*/

const currencyUnitsFilter = document.querySelector("#currency-units-filter");

function filterUnitsCaller(){
	if(currencyUnitsFilter.value !== "")
	{
		filterToUnits(currencyUnitsFilter.value);
	}
	else
	{
		filterToUnitsFlag = false;
		renderContinent();
	}
}

currencyUnitsFilter.addEventListener('input', function(){
	filterToUnitsFlag = true;
	render();
});

defaultRender();     // Write the table