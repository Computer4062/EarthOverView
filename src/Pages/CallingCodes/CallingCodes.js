/*
	Searching
*/

const searchBtn = document.querySelector("#search-btn");
const searchBox = document.querySelector("#search-box");
const searchSection = document.querySelector("#search-section");

const closeBtn = document.querySelector("");

let displaySearchSection = false;

searchBtn.addEventListener("click", () => {
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

for(let i = 0; i < 3; i++)
{
	document.querySelectorAll(".digit-filter")[i].addEventListener("input", () => {
		let hundredsValue = (filterHundredsDigitBox.value === "") ? -1 : filterHundredsDigitBox.value;
		let tensValue = (filterTensDigitBox.value === "") ? -1 : filterTensDigitBox.value;
		let onesValue = (filterOnesDigitBox.value === "") ? -1 : filterOnesDigitBox.value;

		if(hundredsValue === -1 && tensValue === -1 && onesValue === -1)
			renderContinent();
		else
			filterToDigits(hundredsValue, tensValue, onesValue);
	});
}

/*
	Filtering continents
*/

/* Continent check boxes */
const asiaCheckBox = document.querySelector(".asiaCheckBox");
const africaCheckBox = document.querySelector(".africaCheckBox");
const europeCheckBox = document.querySelector(".europeCheckBox");
const americaCheckBox = document.querySelector(".americaCheckBox");
const oceaniaCheckBox = document.querySelector(".oceaniaCheckBox");

/* Region check boxes */
const eastAsiaCheckBox = document.querySelector(".eastAsiaCheckBox");
const southEastAsiaCheckBox = document.querySelector(".southEastAsiaCheckBox");
const southAsiaCheckBox = document.querySelector(".southAsiaCheckBox");
const westernAsiaCheckBox = document.querySelector(".westernAsiaCheckBox");
const centralAsiaCheckBox = document.querySelector(".centralAsiaCheckBox");

const northernAfricaCheckBox = document.querySelector(".northernAfricaCheckBox");
const easternAfricaCheckBox = document.querySelector(".easternAfricaCheckBox");
const westernAfricaCheckBox = document.querySelector(".westernAfricaCheckBox");
const southernAfricaCheckBox = document.querySelector(".southernAfricaCheckBox");
const centralAfricaCheckBox = document.querySelector(".centralAfricaCheckBox");

const northernAmericaCheckBox = document.querySelector(".northernAmericaCheckBox");
const southernAmericaCheckBox = document.querySelector(".southernAmericaCheckBox");

/* Continent classes */
const asiaCheckBoxes = document.querySelectorAll(".Asia");
const africaCheckBoxes = document.querySelectorAll(".Africa");
const americaCheckBoxes = document.querySelectorAll(".America");

/* Event listeners for continent checkboxes */
asiaCheckBox.addEventListener('change', (event)=>{
	asiaCheckBoxes.forEach(checkbox => {
		checkbox.checked = event.target.checked;
	});

	if(event.target.checked)
	{
		continentsToRender.push("East Asia");
		continentsToRender.push("South Asia");
		continentsToRender.push("South East Asia");
		continentsToRender.push("Western Asia");
		continentsToRender.push("Central Asia");
	}
	else
	{
		continentsToRender = removeItem(continentsToRender, "East Asia");
		continentsToRender = removeItem(continentsToRender, "South Asia");
		continentsToRender = removeItem(continentsToRender, "South East Asia");
		continentsToRender = removeItem(continentsToRender, "Western Asia");
		continentsToRender = removeItem(continentsToRender, "Central Asia");
	}

	renderContinent();
});

eastAsiaCheckBox.addEventListener('change', (event) => {
	if(asiaCheckBox.checked) asiaCheckBox.checked = false;

	if(event.target.checked)
		continentsToRender.push("East Asia");
	else
		continentsToRender = removeItem(continentsToRender, "East Asia");

	renderContinent();
});

southAsiaCheckBox.addEventListener('change', (event) => {
	if(asiaCheckBox.checked) asiaCheckBox.checked = false;

	if(event.target.checked)
		continentsToRender.push("South Asia");
	else
		continentsToRender = removeItem(continentsToRender, "South Asia");

	console.log(continentsToRender);
	renderContinent();
});

southEastAsiaCheckBox.addEventListener('change', (event) => {
	if(asiaCheckBox.checked) asiaCheckBox.checked = false;

	if(event.target.checked)
		continentsToRender.push("South East Asia");
	else
		continentsToRender = removeItem(continentsToRender, "South East Asia");

	renderContinent();
});

westernAsiaCheckBox.addEventListener('change', (event) => {
	if(asiaCheckBox.checked) asiaCheckBox.checked = false;

	if(event.target.checked)
		continentsToRender.push("Western Asia");
	else
		continentsToRender = removeItem(continentsToRender, "Western Asia");

	renderContinent();
});

centralAsiaCheckBox.addEventListener('change', (event) => {
	if(asiaCheckBox.checked) asiaCheckBox.checked = false;

	if(event.target.checked)
		continentsToRender.push("Central Asia");
	else
		continentsToRender = removeItem(continentsToRender, "Central Asia");

	renderContinent();
});


africaCheckBox.addEventListener('change', (event)=>{
	africaCheckBoxes.forEach(checkbox => {
		checkbox.checked = event.target.checked;
	});

	if(event.target.checked)
	{
		continentsToRender.push("Northern Africa");
		continentsToRender.push("Eastern Africa");
		continentsToRender.push("Southern Africa");
		continentsToRender.push("Western Africa");
		continentsToRender.push("Central Africa");
	}
	else
	{
		continentsToRender = removeItem(continentsToRender, "Northern Africa");
		continentsToRender = removeItem(continentsToRender, "Eastern Africa");
		continentsToRender = removeItem(continentsToRender, "Southern Africa");
		continentsToRender = removeItem(continentsToRender, "Western Africa");
		continentsToRender = removeItem(continentsToRender, "Central Africa");
	}

	renderContinent();
});

northernAfricaCheckBox.addEventListener('change', (event) => {
	if(africaCheckBox.checked) africaCheckBox.checked = false;

	if(event.target.checked)
		continentsToRender.push("Northern Africa");
	else
		continentsToRender = removeItem(continentsToRender, "Northern Africa");

	renderContinent();
});

easternAfricaCheckBox.addEventListener('change', (event) => {
	if(africaCheckBox.checked) africaCheckBox.checked = false;

	if(event.target.checked)
		continentsToRender.push("Eastern Africa");
	else
		continentsToRender = removeItem(continentsToRender, "Eastern Africa");

	renderContinent();
});

southernAfricaCheckBox.addEventListener('change', (event) => {
	if(africaCheckBox.checked) africaCheckBox.checked = false;

	if(event.target.checked)
		continentsToRender.push("Southern Africa");
	else
		continentsToRender = removeItem(continentsToRender, "Southern Africa");

	renderContinent();
});

westernAfricaCheckBox.addEventListener('change', (event) => {
	if(africaCheckBox.checked) africaCheckBox.checked = false;

	if(event.target.checked)
		continentsToRender.push("Western Africa");
	else
		continentsToRender = removeItem(continentsToRender, "Western Africa");

	renderContinent();
});

centralAfricaCheckBox.addEventListener('change', (event) => {
	if(africaCheckBox.checked) africaCheckBox.checked = false;

	if(event.target.checked)
		continentsToRender.push("Central Africa");
	else
		continentsToRender = removeItem(continentsToRender, "Central Africa");

	renderContinent();
});

europeCheckBox.addEventListener('change', (event)=>{
	if(event.target.checked)
		continentsToRender.push("Europe");
	else
		continentsToRender = removeItem(continentsToRender, "Europe");

	renderContinent();
});

americaCheckBox.addEventListener('change', (event)=>{
	americaCheckBoxes.forEach(checkbox => {
		checkbox.checked = event.target.checked;
	});

	if(event.target.checked)
	{
		continentsToRender.push("Northern America");
		continentsToRender.push("Southern America");
	}
	else
	{
		continentsToRender = removeItem(continentsToRender, "Northern America");
		continentsToRender = removeItem(continentsToRender, "Southern America");
	}

	renderContinent();
});

northernAmericaCheckBox.addEventListener('change', (event) => {
	if(americaCheckBox.checked) americaCheckBox.checked = false;

	if(event.target.checked)
		continentsToRender.push("Northern America");
	else
		continentsToRender = removeItem(continentsToRender, "Northern America");

	renderContinent();
});

southernAmericaCheckBox.addEventListener('change', (event) => {
	if(americaCheckBox.checked) americaCheckBox.checked = false;

	if(event.target.checked)
		continentsToRender.push("Southern America");
	else
		continentsToRender = removeItem(continentsToRender, "Southern America");

	renderContinent();
});

oceaniaCheckBox.addEventListener('change', (event)=>{
	if(event.target.checked)
		continentsToRender.push("Oceania");
	else
		continentsToRender = removeItem(continentsToRender, "Oceania");

	renderContinent();
});

defaultRender();     // Write the table