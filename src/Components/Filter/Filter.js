/* Filtering section effects */
filterControls = false;
filterBtn = document.querySelector("#filter-btn");

filterBtn.addEventListener("click", function(){
	filterControls = !filterControls;
	if(filterControls)
	{
		document.querySelector("#filter-options-section").classList.remove("hidden");
	}
	else
	{
		document.querySelector("#filter-options-section").classList.add("hidden");
	}
});