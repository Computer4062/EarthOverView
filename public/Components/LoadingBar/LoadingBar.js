const loadingBar = document.querySelector(".loader-symbol");

function showLoadingBar(){
	loadingBar.classList.remove("hidden");
}
function hideLoadingBar(){
	loadingBar.classList.add("hidden");
}