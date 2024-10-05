import express from "express"
import capitalCitiesJSON from "../models/CapitalCities.js"

const router = express.Router();

// Get all the capital cities
router.get("/all", (req, res) => {
	try
	{
		const { type } = req.query;

		if(type === "city"){
			const capitalCitiesList = [];
			for(const countryName in capitalCitiesJSON)
				capitalCitiesList.push(capitalCitiesJSON[countryName].city);
			
			res.status(200).json({error: "false", msg: "Successful", data: {cities: capitalCitiesList}});

		}else if(type === undefined){
			res.status(200).json({error: "false", msg: "Successful", data: capitalCitiesJSON});
		}

	}catch(error){
		console.error(error);
		res.status(500).json({error: "true", msg: "Something went wrong..."});
	}
});

// Find the capital city of a single country
router.get("/find", (req, res) => {
	try{
		const { country, type, city } = req.query;

		// Return capital city name and location
		if(country && type===undefined){
			const searchItem = decodeURIComponent(country).replace(/\s/g, '').toLowerCase();
			let found = false;
			for(const countryName in capitalCitiesJSON){
				if(countryName.replace(/\s/g, '').toLowerCase() === searchItem)
				{
					found = true;
					res.status(200).json({
						error: "false", 
						msg: "Successful", 
						data: {
							city: capitalCitiesJSON[countryName].city,
							latitude: capitalCitiesJSON[countryName].latitude,
							longitude: capitalCitiesJSON[countryName].longitude
						}
					});
					break;
				}
			}

			if(!found) res.status(404).json({error: "true", msg: "Country name is incorrect... no results found"});
		
		// Return only capital city name
		}else if(country && type==="city"){
			const searchItem = decodeURIComponent(country).replace(/\s/g, '').toLowerCase();
			let found = false;
			for(const countryName in capitalCitiesJSON){
				if(countryName.replace(/\s/g, '').toLowerCase() === searchItem)
				{
					found = true;
					res.status(200).json({
						error: "false", 
						msg: "Successful", 
						data: {
							city: capitalCitiesJSON[countryName].city
						}
					});
					break;
				}
			}

			if(!found) res.status(404).json({error: "true", msg: "Country name is incorrect... no results found"});
		
		// Return country name to capital city and location
		}else if(city && type===undefined){
			const searchItem = decodeURIComponent(city).replace(/\s/g, '').toLowerCase();
			let found = false;
			for(const countryName in capitalCitiesJSON){
				if(capitalCitiesJSON[countryName]["city"].replace(/\s/g, '').toLowerCase() === searchItem)
				{
					found = true;
					res.status(200).json({
						error: "false", 
						msg: "Successful", 
						data: {
							country: countryName,
							latitude: capitalCitiesJSON[countryName].latitude,
							longitude: capitalCitiesJSON[countryName].longitude
						}
					});
					break;
				}
			}

			if(!found) res.status(404).json({error: "true", msg: "Country name is incorrect... no results found"});

		// Return country name to capital city and location
		}else if(city && type==="city"){
			const searchItem = decodeURIComponent(city).replace(/\s/g, '').toLowerCase();
			let found = false;
			for(const countryName in capitalCitiesJSON){
				if(capitalCitiesJSON[countryName]["city"].replace(/\s/g, '').toLowerCase() === searchItem)
				{
					found = true;
					res.status(200).json({
						error: "false", 
						msg: "Successful", 
						data: {
							country: countryName
						}
					});
					break;
				}
			}

			if(!found) res.status(404).json({error: "true", msg: "Country name is incorrect... no results found"});
		}
	}catch(error){
		console.error(error);
		res.status(500).json({error: "true", msg: "Something went wrong..."});
	}
});

export default router;