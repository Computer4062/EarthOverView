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
const asiaCheckBox = document.querySelectorAll(".asiaCheckBox");
const africaCheckBox = document.querySelectorAll(".africaCheckBox");
const europeCheckBox = document.querySelectorAll(".europeCheckBox");
const americaCheckBox = document.querySelectorAll(".americaCheckBox");
const oceaniaCheckBox = document.querySelectorAll(".oceaniaCheckBox");

/* Region check boxes */
const eastAsiaCheckBox = document.querySelectorAll(".eastAsiaCheckBox");
const southEastAsiaCheckBox = document.querySelectorAll(".southEastAsiaCheckBox");
const southAsiaCheckBox = document.querySelectorAll(".southAsiaCheckBox");
const westernAsiaCheckBox = document.querySelectorAll(".westernAsiaCheckBox");
const centralAsiaCheckBox = document.querySelectorAll(".centralAsiaCheckBox");

const northernAfricaCheckBox = document.querySelectorAll(".northernAfricaCheckBox");
const easternAfricaCheckBox = document.querySelectorAll(".easternAfricaCheckBox");
const westernAfricaCheckBox = document.querySelectorAll(".westernAfricaCheckBox");

const southernAfricaCheckBox = document.querySelectorAll(".southernAfricaCheckBox");
const centralAfricaCheckBox = document.querySelectorAll(".centralAfricaCheckBox");

const northernAmericaCheckBox = document.querySelectorAll(".northernAmericaCheckBox");
const southernAmericaCheckBox = document.querySelectorAll(".southernAmericaCheckBox");

/* Continent classes */
const asiaCheckBoxes = document.querySelectorAll(".Asia");
const africaCheckBoxes = document.querySelectorAll(".Africa");
const americaCheckBoxes = document.querySelectorAll(".America");

/* Event listeners for continent checkboxes */
for(let i = 0; i < asiaCheckBox.length; i++)
{
	asiaCheckBox[i].addEventListener('change', (event)=>{
		asiaCheckBoxes.forEach(checkbox => {
			checkbox.checked = event.target.checked;
		});

		if(event.target.checked)
		{
			continentsToRender = removeItem(continentsToRender, "East Asia");
			continentsToRender = removeItem(continentsToRender, "South Asia");
			continentsToRender = removeItem(continentsToRender, "South East Asia");
			continentsToRender = removeItem(continentsToRender, "Western Asia");
			continentsToRender = removeItem(continentsToRender, "Central Asia");

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
}

for(let i = 0; i < eastAsiaCheckBox.length; i++)
{
	eastAsiaCheckBox[i].addEventListener('change', (event) => {
		if(asiaCheckBox[0].checked){
			asiaCheckBox[0].checked = false;
			asiaCheckBox[1].checked = false;
		}

		if(event.target.checked)
			continentsToRender.push("East Asia");
		else
			continentsToRender = removeItem(continentsToRender, "East Asia");

		renderContinent();
	});
}

for(let i = 0; i < southAsiaCheckBox.length; i++)
{
	southAsiaCheckBox[i].addEventListener('change', (event) => {
		if(asiaCheckBox[0].checked){
			asiaCheckBox[0].checked = false;
			asiaCheckBox[1].checked = false;
		}

		if(event.target.checked)
			continentsToRender.push("South Asia");
		else
			continentsToRender = removeItem(continentsToRender, "South Asia");

		console.log(continentsToRender);
		renderContinent();
	});
}

for(let i = 0; i < southEastAsiaCheckBox.length; i++)
{
	southEastAsiaCheckBox[i].addEventListener('change', (event) => {
		if(asiaCheckBox[0].checked){
			asiaCheckBox[0].checked = false;
			asiaCheckBox[1].checked = false;
		}

		if(event.target.checked)
			continentsToRender.push("South East Asia");
		else
			continentsToRender = removeItem(continentsToRender, "South East Asia");

		renderContinent();
	});
}

for(let i = 0; i < westernAsiaCheckBox.length; i++)
{
	westernAsiaCheckBox[i].addEventListener('change', (event) => {
		if(asiaCheckBox[0].checked){
			asiaCheckBox[0].checked = false;
			asiaCheckBox[1].checked = false;
		};

		if(event.target.checked)
			continentsToRender.push("Western Asia");
		else
			continentsToRender = removeItem(continentsToRender, "Western Asia");

		renderContinent();
	});
}

for(let i = 0; i < centralAsiaCheckBox.length; i++)
{
	centralAsiaCheckBox[i].addEventListener('change', (event) => {
		if(asiaCheckBox[0].checked){
			asiaCheckBox[0].checked = false;
			asiaCheckBox[1].checked = false;
		}

		if(event.target.checked)
			continentsToRender.push("Central Asia");
		else
			continentsToRender = removeItem(continentsToRender, "Central Asia");

		renderContinent();
	});
}


for(let i = 0; i < africaCheckBox.length; i++)
{
	africaCheckBox[i].addEventListener('change', (event)=>{
		africaCheckBoxes.forEach(checkbox => {
			checkbox.checked = event.target.checked;
		});

		if(event.target.checked)
		{
			continentsToRender = removeItem(continentsToRender, "Northern Africa");
			continentsToRender = removeItem(continentsToRender, "Eastern Africa");
			continentsToRender = removeItem(continentsToRender, "Southern Africa");
			continentsToRender = removeItem(continentsToRender, "Western Africa");
			continentsToRender = removeItem(continentsToRender, "Central Africa");

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
}

for(let i = 0; i < northernAfricaCheckBox.length; i++)
{
	northernAfricaCheckBox[i].addEventListener('change', (event) => {
		if(africaCheckBox[0].checked){
			africaCheckBox[0].checked = false;
			africaCheckBox[1].checked = false;
		}

		if(event.target.checked)
			continentsToRender.push("Northern Africa");
		else
			continentsToRender = removeItem(continentsToRender, "Northern Africa");

		renderContinent();
	});
}

for(let i = 0; i < easternAfricaCheckBox.length; i++)
{
	easternAfricaCheckBox[i].addEventListener('change', (event) => {
		if(africaCheckBox[0].checked){
			africaCheckBox[0].checked = false;
			africaCheckBox[1].checked = false;
		}

		if(event.target.checked)
			continentsToRender.push("Eastern Africa");
		else
			continentsToRender = removeItem(continentsToRender, "Eastern Africa");

		renderContinent();
	});
}

for(let i = 0; i < southernAfricaCheckBox.length; i++)
{
	southernAfricaCheckBox[i].addEventListener('change', (event) => {
		if(africaCheckBox[0].checked){
			africaCheckBox[0].checked = false;
			africaCheckBox[1].checked = false;
		}

		if(event.target.checked)
			continentsToRender.push("Southern Africa");
		else
			continentsToRender = removeItem(continentsToRender, "Southern Africa");

		renderContinent();
	});
}

for(let i = 0; i < westernAfricaCheckBox.length; i++)
{
	westernAfricaCheckBox[i].addEventListener('change', (event) => {
		if(africaCheckBox[0].checked){
			africaCheckBox[0].checked = false;
			africaCheckBox[1].checked = false;
		}

		if(event.target.checked)
			continentsToRender.push("Western Africa");
		else
			continentsToRender = removeItem(continentsToRender, "Western Africa");

		renderContinent();
	});
}

for(let i = 0; i < centralAfricaCheckBox.length; i++)
{
	centralAfricaCheckBox[i].addEventListener('change', (event) => {
		if(africaCheckBox[0].checked){
			africaCheckBox[0].checked = false;
			africaCheckBox[1].checked = false;
		}

		if(event.target.checked)
			continentsToRender.push("Central Africa");
		else
			continentsToRender = removeItem(continentsToRender, "Central Africa");

		renderContinent();
	});
}

for(let i = 0; i < europeCheckBox.length; i++)
{
	europeCheckBox[i].addEventListener('change', (event)=>{
		if(event.target.checked)
			continentsToRender.push("Europe");
		else
			continentsToRender = removeItem(continentsToRender, "Europe");

		renderContinent();
	});
}

for(let i = 0; i < americaCheckBox.length; i++)
{
	americaCheckBox[i].addEventListener('change', (event)=>{
		americaCheckBoxes.forEach(checkbox => {
			checkbox.checked = event.target.checked;
		});

		if(event.target.checked)
		{
			continentsToRender = removeItem(continentsToRender, "Northern America");
			continentsToRender = removeItem(continentsToRender, "Southern America");

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
}

for(let i = 0; i < northernAmericaCheckBox.length; i++)
{
	northernAmericaCheckBox[i].addEventListener('change', (event) => {
		if(americaCheckBox[0].checked){
			americaCheckBox[0].checked = false;
			americaCheckBox[1].checked = false;
		}

		if(event.target.checked)
			continentsToRender.push("Northern America");
		else
			continentsToRender = removeItem(continentsToRender, "Northern America");

		renderContinent();
	});
}

for(let i = 0; i < southernAmericaCheckBox.length; i++)
{
	southernAmericaCheckBox[i].addEventListener('change', (event) => {
		if(americaCheckBox[0].checked){
			americaCheckBox[0].checked = false;
			americaCheckBox[1].checked = false;
		}

		if(event.target.checked)
			continentsToRender.push("Southern America");
		else
			continentsToRender = removeItem(continentsToRender, "Southern America");

		renderContinent();
	});
}

for(let i = 0; i < oceaniaCheckBox.length; i++)
{
	oceaniaCheckBox[i].addEventListener('change', (event)=>{
		if(event.target.checked)
			continentsToRender.push("Oceania");
		else
			continentsToRender = removeItem(continentsToRender, "Oceania");

		renderContinent();
	});
}

function removeItem(list, itemToRemove) {
  const index = list.indexOf(itemToRemove);
  if (index !== -1) {
    list.splice(index, 1);
  }
  return list;
}