/* modes */
let ascendingCodeMode = false;
let descendingCodeMode = false;
let ascendingNamesMode = false;
let descendingNamesMode = false;

/* Renderer */
function render()
{
	/* Sorting modes */
	if(ascendingNamesMode) sortAscendingNames();
	else if(descendingNamesMode) sortDescendingNames();
	else if(ascendingCodeMode) sortAscendingCodes();
	else if(descendingCodeMode) sortDescendingCodes();
	else defaultRender();
}

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

filterHundredsDigitBox.addEventListener('input', (event) => {
	if(event.target.value !== "")
	{
		console.log("picked");
		filterToHundreds(event.target.value);
	}
});

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

	render();
});

eastAsiaCheckBox.addEventListener('change', (event) => {
	if(asiaCheckBox.checked) asiaCheckBox.checked = false;

	if(event.target.checked)
		continentsToRender.push("East Asia");
	else
		continentsToRender = removeItem(continentsToRender, "East Asia");

	render();
});

southAsiaCheckBox.addEventListener('change', (event) => {
	if(asiaCheckBox.checked) asiaCheckBox.checked = false;

	if(event.target.checked)
		continentsToRender.push("South Asia");
	else
		continentsToRender = removeItem(continentsToRender, "South Asia");

	render();
});

southEastAsiaCheckBox.addEventListener('change', (event) => {
	if(asiaCheckBox.checked) asiaCheckBox.checked = false;

	if(event.target.checked)
		continentsToRender.push("South East Asia");
	else
		continentsToRender = removeItem(continentsToRender, "South East Asia");

	render();
});

westernAsiaCheckBox.addEventListener('change', (event) => {
	if(asiaCheckBox.checked) asiaCheckBox.checked = false;

	if(event.target.checked)
		continentsToRender.push("Western Asia");
	else
		continentsToRender = removeItem(continentsToRender, "Western Asia");

	render();
});

centralAsiaCheckBox.addEventListener('change', (event) => {
	if(asiaCheckBox.checked) asiaCheckBox.checked = false;

	if(event.target.checked)
		continentsToRender.push("Central Asia");
	else
		continentsToRender = removeItem(continentsToRender, "Central Asia");

	render();
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

	render();
});

northernAfricaCheckBox.addEventListener('change', (event) => {
	if(africaCheckBox.checked) africaCheckBox.checked = false;

	if(event.target.checked)
		continentsToRender.push("Northern Africa");
	else
		continentsToRender = removeItem(continentsToRender, "Northern Africa");

	render();
});

easternAfricaCheckBox.addEventListener('change', (event) => {
	if(africaCheckBox.checked) africaCheckBox.checked = false;

	if(event.target.checked)
		continentsToRender.push("Eastern Africa");
	else
		continentsToRender = removeItem(continentsToRender, "Eastern Africa");

	render();
});

southernAfricaCheckBox.addEventListener('change', (event) => {
	if(africaCheckBox.checked) africaCheckBox.checked = false;

	if(event.target.checked)
		continentsToRender.push("Southern Africa");
	else
		continentsToRender = removeItem(continentsToRender, "Southern Africa");

	render();
});

westernAfricaCheckBox.addEventListener('change', (event) => {
	if(africaCheckBox.checked) africaCheckBox.checked = false;

	if(event.target.checked)
		continentsToRender.push("Western Africa");
	else
		continentsToRender = removeItem(continentsToRender, "Western Africa");

	render();
});

centralAfricaCheckBox.addEventListener('change', (event) => {
	if(africaCheckBox.checked) africaCheckBox.checked = false;

	if(event.target.checked)
		continentsToRender.push("Central Africa");
	else
		continentsToRender = removeItem(continentsToRender, "Central Africa");

	render();
});

europeCheckBox.addEventListener('change', (event)=>{
	if(event.target.checked)
		continentsToRender.push("Europe");
	else
		continentsToRender = removeItem(continentsToRender, "Europe");

	render();
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

	render();
});

northernAmericaCheckBox.addEventListener('change', (event) => {
	if(americaCheckBox.checked) americaCheckBox.checked = false;

	if(event.target.checked)
		continentsToRender.push("Northern America");
	else
		continentsToRender = removeItem(continentsToRender, "Northern America");

	render();
});

southernAmericaCheckBox.addEventListener('change', (event) => {
	if(americaCheckBox.checked) americaCheckBox.checked = false;

	if(event.target.checked)
		continentsToRender.push("Southern America");
	else
		continentsToRender = removeItem(continentsToRender, "Southern America");

	render();
});

oceaniaCheckBox.addEventListener('change', (event)=>{
	if(event.target.checked)
		continentsToRender.push("Oceania");
	else
		continentsToRender = removeItem(continentsToRender, "Oceania");

	render();
});

defaultRender();     // Write the table