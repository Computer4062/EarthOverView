const defaultLoadingBar = document.querySelector(".default-progress");
const filterLoadingBar = document.querySelector(".filter-progress");
const sortLoadingBar = document.querySelector(".sort-progress");
const searchLoadingBar = document.querySelector(".search-progress");

function showDefaultLoadingBar(){
	defaultLoadingBar.classList.remove("hidden");
}
function hideDefaultLoadingBar(){
	defaultLoadingBar.classList.add("hidden");
}

function showFilterLoadingBar(){
	filterLoadingBar.classList.remove("hidden");
}
function hideFilterLoadingBar(){
	filterLoadingBar.classList.add("hidden");
}

function showSortLoadingBar(){
	sortLoadingBar.classList.remove("hidden");
}
function hideSortLoadingBar(){
	sortLoadingBar.classList.add("hidden");
}

function showSearchLoadingBar(){
	searchLoadingBar.classList.remove("hidden");
}
function hideSearchLoadingBar(){
	searchLoadingBar.classList.add("hidden");
}