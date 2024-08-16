/*
	Searching
*/

const searchBox = document.querySelector("#search-box");
const searchSection = document.querySelector("#search-section");
const closeBtn = document.querySelector("#close-button");

closeBtn.addEventListener("click", () => {
	searchSection.classList.add("hidden");
});

searchBox.addEventListener("input", () => {
	searchCaller();
});

function searchCaller(){
	if(searchBox.value != "")
		search(searchBox.value);
	else
	{
		searchSection.classList.add("hidden");
		searchTable.innerHTML = "";
	}
}

/*
	Sorting
*/

const ascendingNamesBtn = document.querySelector("#ascending-names-btn");
const descendingNamesBtn = document.querySelector("#descending-names-btn");

ascendingNamesBtn.addEventListener('change', function(event){
	if(event.target.checked)
	{
		ascendingNamesMode = true;
		descendingNamesMode = false;
		render();
	}
});

descendingNamesBtn.addEventListener('change', function(event){
	if(event.target.checked)
	{
		ascendingNamesMode = false;
		descendingNamesMode = true;
		render();
	}
});

/*
	Filtering
*/

/*
	Filter time
*/

defaultRender();     // Write the table