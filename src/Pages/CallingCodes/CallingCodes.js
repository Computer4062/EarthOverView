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

searchBox.addEventListener("keyup", (event) => {
	if(event.keyCode === 13)
		search(searchBox.value);
});

/*
	Sorting
*/

const ascendingNamesBtn = document.querySelector("#ascendingNamesBtn");
const descendingNamesBtn = document.querySelector("#descendingNamesBtn");
const ascendingCodesBtn = document.querySelector("#ascendingCodesBtn");
const descendingCodesBtn = document.querySelector("#descendingCodesBtn");

ascendingNamesBtn.addEventListener('change', function(){
	if(ascendingNamesBtn.checked)
	{
		ascendingCodeMode = false;
		descendingCodeMode = false;
		ascendingNamesMode = true;
		descendingNamesMode = false;

		render();
	}
});

descendingNamesBtn.addEventListener('change', function(){
	if(descendingNamesBtn.checked)
	{
		ascendingCodeMode = false;
		descendingCodeMode = false;
		ascendingNamesMode = false;
		descendingNamesMode = true;

		render();
	}
});

ascendingCodesBtn.addEventListener('change', function(){
	if(ascendingCodesBtn.checked)
	{
		ascendingCodeMode = true;
		descendingCodeMode = false;
		ascendingNamesMode = false;
		descendingNamesMode = false;

		render();
	}
});

descendingCodesBtn.addEventListener('change', function(){
	if(descendingCodesBtn.checked)
	{
		ascendingCodeMode = false;
		descendingCodeMode = true;
		ascendingNamesMode = false;
		descendingNamesMode = false;

		render();
	}
});

/*
	Filtering
*/

/*
	Filtering calling code digits
*/

const filterHundredsDigitBox = document.querySelector(".filterHundredsDigit");
const filterTensDigitBox = document.querySelector(".filterTensDigit");
const filterOnesDigitBox = document.querySelector(".filterOnesDigit");

function filterDigitsCaller(){
	let hundredsValue = (filterHundredsDigitBox.value === "") ? -1 : filterHundredsDigitBox.value;
	let tensValue = (filterTensDigitBox.value === "") ? -1 : filterTensDigitBox.value;
	let onesValue = (filterOnesDigitBox.value === "") ? -1 : filterOnesDigitBox.value;

	if(hundredsValue === -1 && tensValue === -1 && onesValue === -1)
	{
		filterToCallingCodes = false;
		renderContinent();
	}
	else
		filterToDigits(hundredsValue, tensValue, onesValue);
}

for(let i = 0; i < 3; i++)
{
	document.querySelectorAll(".digit-filter")[i].addEventListener("input", () => {
		filterToCallingCodes = true;
		render();
	});
}

defaultRender();     // Write the table