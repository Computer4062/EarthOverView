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