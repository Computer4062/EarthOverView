import express from "express";
import countriesJSON from "../models/Countries.js";

const router = express.Router();

const continents = ["Asia", "Africa", "Europe", "America", "Oceania"];
const subContinents = [
	["East Asia", "South Asia", "South East Asia", "Central Asia", "Western Asia"], 
	["Northern Africa", "Western Africa", "Eastern Africa", "Southern Africa", "Central Africa"], 
	["Europe"], 
	["Southern America", "Northern America"], 
	["Oceania"]
];

// Get all the countries
router.get("/all", (req, res) => {
	const { type } = req.query;

	// Get all countries and there continents
	if(type === undefined)
	{
		// Arrange in the order: {continent:{ subcontinent: [countries] }}
		try
		{
			const countryData = {};
			for(let i = 0; i < continents.length; i++)
			{
				let continentData = {};
				let countriesList = [];
				for(let x = 0; x < subContinents[i].length; x++){
					countriesJSON[subContinents[i][x]].forEach(country => {
						countriesList.push(country);
					});

					continentData[subContinents[i][x]] = countriesList;
				}

				countryData[continents[i]] = continentData;
			}

			res.status(200).json({error: "false", msg: "Successful", data: countryData});
		}catch(error){
			console.error(error);
			res.status(500).json({error: "true", msg: "Something went wrong!"});
		}
	}
	// Get only the names of countries
	else if(type === "name")
	{
		try
		{
			let countries = [];
			subContinents.forEach(continentList => {
				continentList.forEach(continent => {
					countriesJSON[continent].forEach(country => {
						countries.push(country);
					});
				});
			});

			const data = {error: "false", msg: "Successful", data: {countries}};
			res.status(200).json(data);

		}catch(error){
			console.error(error);
			res.status(500).json({error: "true", msg: `Something went wrong!`});
		}
	}
});

router.get("/find", (req, res) => {
	const { continent, country } = req.query;

	// If get to continent
	if(continent){
		// If main continent
		const searchItem = decodeURIComponent(continent).replace(/\s/g, '').toLowerCase();

		// Search if it is a main continent
		let index = 0;
		let foundMainContinent = false;
		for(index; index < continents.length; index++)
		{
			// If it is a main continent
			if(continents[index].replace(/\s/g, '').toLowerCase() === searchItem)
			{
				foundMainContinent = true;
				try
				{
					let countries = [];
					// Add the countries of that subcontinent into countries array
					subContinents[index].forEach(cont => {
						countriesJSON[cont].forEach(country => {
							countries.push(country);
						});
					});

					res.status(200).json({error: "false", msg: "Successful", data: {countries}});
					break;

				} catch(error) {
					console.error(error);
					res.status(500).json({error: "true", msg: "Something went wrong!"});
					break;
				}
			}
		}

		// If it is a subcontinent
		let foundSubContinent = false;
		if(!foundMainContinent){
			for(let i = 0; i < subContinents.length; i++)
			{
				for(let x = 0; x < subContinents[i].length; x++)
				{
					if(subContinents[i][x].replace(/\s/g, '').toLowerCase() === searchItem)
					{
						try
						{
							foundSubContinent = true;

							let countries = [];
							countriesJSON[subContinents[i][x]].forEach(country => {
								countries.push(country);
							});

							res.status(200).json({error: "false", msg: "Successful", data: {countries}});

						}catch(error){
							console.error(error);
							res.status(500).json({error: "true", msg: "Something went wrong!"});
							break;
						}
					}
				}

				if(foundSubContinent) break;
			}
		}

		// If no continent or sub continent was detected then name was entered incorrectly
		if(!foundSubContinent) res.status(404).json({error: "true", msg: "Incorrect continent or subcontinent name!"});
	}
	// Get the continent of a specific country
	else if(country){
		const searchItem = decodeURIComponent(country).replace(/\s/g, '').toLowerCase();

		// Search all countries to their sub continents
		let found = false;
		for(let i = 0; i < subContinents.length; i++){
			for(let x = 0; x < subContinents[i].length; x++){
				for(let j = 0; j < countriesJSON[subContinents[i][x]].length; j++)
				{
					// If country is found
					if(countriesJSON[subContinents[i][x]][j].replace(/\s/g, '').toLowerCase() === searchItem)
					{
						found = true;
						res.status(200).json({
							error: "false", 
							msg: "Successful", 
							data: {continent: continents[i], sub_continent: subContinents[i][x]}
						});
						break;
					}
				}

				if(found) break;
			}

			if(found) break;
		}

		if(!found) res.status(404).json({error: "true", msg: "Incorrect country name!"});
	}
});

export default router;