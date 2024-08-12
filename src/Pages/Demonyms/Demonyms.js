/*
	Searching
*/

const searchBtn = document.querySelector("#search-btn");
const searchBox = document.querySelector("#search-box");
const searchSection = document.querySelector("#search-section");
const closeBtn = document.querySelector("#close-button");

closeBtn.addEventListener("click", () => {
	searchSection.classList.add("hidden");
});

searchBtn.addEventListener("click", () => {
	search(searchBox.value);
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
	Sorting
*/

const ascendingNamesBtn = document.querySelector("#ascending-names-btn");
const descendingNamesBtn = document.querySelector("#descending-names-btn");
const ascendingDemonymsBtn = document.querySelector("#ascending-demonyms-btn");
const descendingDemonymsBtn = document.querySelector("#descending-demonyms-btn");

ascendingNamesBtn.addEventListener('change', function(event){
	if(event.target.checked)
	{
		ascendingDemonymsMode = false;
		descendingDemonymsMode = false;
		ascendingNamesMode = true;
		descendingNamesMode = false;

		render();
	}
});

descendingNamesBtn.addEventListener('change', function(event){
	if(event.target.checked)
	{
		ascendingDemonymsMode = false;
		descendingDemonymsMode = false;
		ascendingNamesMode = false;
		descendingNamesMode = true;

		render();
	}
});

ascendingDemonymsBtn.addEventListener('change', function(event){
	if(event.target.checked)
	{
		ascendingDemonymsMode = true;
		descendingDemonymsMode = false;
		ascendingNamesMode = false;
		descendingNamesMode = false;

		render();
	}
});

descendingDemonymsBtn.addEventListener('change', function(event){
	if(event.target.checked)
	{
		ascendingDemonymsMode = false;
		descendingDemonymsMode = true;
		ascendingNamesMode = false;
		descendingNamesMode = false;

		render();
	}
});

defaultRender();     // Write the table