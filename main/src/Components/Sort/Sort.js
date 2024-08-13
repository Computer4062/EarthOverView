sortControls = false;
sortBtn = document.querySelector("#sort-btn");

sortBtn.addEventListener("click", function(){
	sortControls = !sortControls;
	if(sortControls)
	{
		document.querySelector("#sort-options-section").classList.remove("hidden");
	}
	else
	{
		document.querySelector("#sort-options-section").classList.add("hidden");
	}
});