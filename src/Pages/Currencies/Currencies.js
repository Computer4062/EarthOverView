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

currencyUnitsFilter.addEventListener('input', function(event){
	if(event.target.value != "")
		filterToUnits(event.target.value);
	else
		render();
});

defaultRender();     // Write the table