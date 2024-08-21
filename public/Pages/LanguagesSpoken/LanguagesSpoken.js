/*
	Searching
*/

const searchBtn = document.querySelector("#search-btn");
const searchBox = document.querySelector("#search-box");
const searchSection = document.querySelector("#search-section");
const closeBtn = document.querySelector("#close-button");
const searchOptionLabel = document.querySelector("#search-option-label")
const searchOptions = document.querySelectorAll(".search-options");

const searchOptionPlaceHolders = ["Country Name", "Language Name", "Language Code"];

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

searchBox.addEventListener('input', () => {
	searchCaller();
});

function searchCaller()
{
	if(searchBox.value !== "")
		search(searchBox.value);
	else
	{
		searchTable.innerHTML = "";
		searchSection.classList.add("hidden");
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
	CallDownloader("languages");
});

/*
	Sorting
*/

const ascendingCountryNamesBtn = document.querySelector("#ascending-country-names-btn");
const descendingCountryNamesBtn = document.querySelector("#descending-country-names-btn");

 ascendingCountryNamesBtn.addEventListener('change', function(event){
	if(event.target.checked)
	{
		ascendingCountryNamesMode = true;
		descendingCountryNamesMode = false;

		render();
	}
});

descendingCountryNamesBtn.addEventListener('change', function(event){
	if(event.target.checked)
	{
		ascendingCountryNamesMode = false;
		descendingCountryNamesMode = true;

		render();
	}
});

/*
	Filtering
*/

/*
	Filtering units
*/

const languageNameFilter = document.querySelector("#language-name-filter");

function filterLanguageNameCaller(){
	if(languageNameFilter.value !== "")
	{
		filterToLanguageName(languageNameFilter.value);
	}
	else
	{
		filterToLanguageNameFlag = false;
		renderContinent();
	}
}

languageNameFilter.addEventListener('input', function(){
	filterToLanguageNameFlag = true;
	render();
});

defaultRender();     // Write the table