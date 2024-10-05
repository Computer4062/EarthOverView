import express from "express"
import currenciesJSON from "../models/Currencies.js"

const router = express.Router();

/*
	Country based routes
*/

// Get currency information about all or 1 country
router.get("/countries/all", (req, res) => {
	try
	{
		const {country} = req.query;
		if(country === undefined)
			res.status(200).json({error: "false", msg: "Successful", data: {currencies: currenciesJSON}});
		else
		{
			const searchItem = decodeURIComponent(country).replace(/\s/g, '').toLowerCase();
			const found = false;
			for(const countryNames in currenciesJSON)
			{
				if(countryNames.replace(/\s/g, '').toLowerCase() === searchItem)
				{
					res.status(200).json({
						error: "false", 
						msg: "Successful", 
						data: {
							name: currenciesJSON[countryNames].currency,
							unit: currenciesJSON[countryNames].unit,
							code: currenciesJSON[countryNames].code,
							symbol: currenciesJSON[countryNames].symbol
						}
					});

					found = true;
					break;
				}
			}

			if(!found) res.status(404).json({error: "true", msg: "Country name is incorrect... nothing found"});
		}
	}catch(error){
		console.error(error);
		res.status(500).json({error: "true", msg: "Something went wrong!"});
	}
});

// Get single currency information
router.get("/countries/find/:country", (req, res) => {
	try
	{
		const country = req.params["country"];
		const {type} = req.query;

		const searchItem = decodeURIComponent(country).replace(/\s/g, '').toLowerCase();

		// Find the unit for a specific country's currency
		if(type === "unit"){
			let found = false;
			for(const countryName in currenciesJSON){
				if(countryName.replace(/\s/g, '').toLowerCase() === searchItem)
				{
					const data = currenciesJSON[countryName].unit;
					res.status(200).json({error: "false", msg: "Successful", data: {unit: data}});
					found = true;
					break;
				}
			}

			if(!found) res.status(404).json({error: "true", msg: "Incorrect country name... nothing found"});
		}
		// Find the name for a specific country's currency
		else if(type === "name"){
			let found = false;
			for(const countryName in currenciesJSON){
				if(countryName.replace(/\s/g, '').toLowerCase() === searchItem)
				{
					const data = currenciesJSON[countryName].currency;
					res.status(200).json({error: "false", msg: "Successful", data: {name: data}});
					found = true;
					break;
				}
			}

			if(!found) res.status(404).json({error: "true", msg: "Incorrect country name... nothing found"});
		}
		// Find the code for a specific country's currency
		else if(type === "code"){
			let found = false;
			for(const countryName in currenciesJSON){
				if(countryName.replace(/\s/g, '').toLowerCase() === searchItem)
				{
					const data = currenciesJSON[countryName].code;
					res.status(200).json({error: "false", msg: "Successful", data: {code: data}});
					found = true;
					break;
				}
			}

			if(!found) res.status(404).json({error: "true", msg: "Incorrect country name... nothing found"});
		}
		// Find the symbol for a specific country's currency
		else if(type === "symbol"){
			let found = false;
			for(const countryName in currenciesJSON){
				if(countryName.replace(/\s/g, '').toLowerCase() === searchItem)
				{
					const data = currenciesJSON[countryName].symbol;
					res.status(200).json({error: "false", msg: "Successful", data: {symbol: data}});
					found = true;
					break;
				}
			}

			if(!found) res.status(404).json({error: "true", msg: "Incorrect country name... nothing found"});
		}
	}catch(error){
		console.error(error);
		res.status(500).json({error: "true", msg: "Something went wrong..."});
	}
});

// Find the countries that have specific currency information
router.get("/countries/find", (req, res) => {
	try{
		const { name, unit, code, symbol } = req.query;

		// Find the country with a specific currency name
		if(name)
		{
			const searchItem = decodeURIComponent(name).replace(/\s/g, '').toLowerCase();
			let found = false;
			for(const countryName in currenciesJSON){
				if(currenciesJSON[countryName]["currency"].replace(/\s/g, '').toLowerCase() === searchItem){

					found = true;
					res.status(200).json({error: "false", msg: "Successful", data: {country: countryName}});

					break;
				}
			}

			if(!found) res.status(404).json({error: "true", msg: "Incorrect currency name... nothing found"});
		}
		// Find the countries with a specific currency code
		else if(code)
		{
			const searchItem = decodeURIComponent(code).toLowerCase();
			let found = false;
			let countriesList = [];

			for(const countryName in currenciesJSON){
				if(currenciesJSON[countryName]["code"].toLowerCase() === searchItem){
					found = true;
					countriesList.push(countryName);
				}
			}

			if(!found) res.status(404).json({error: "true", msg: "Incorrect currency code... nothing found"});
			else res.status(200).json({error: "false", msg: "Successful", data: {countries: countriesList}});
		}
		// Find the countries with a specific currency unit
		else if(unit)
		{
			const searchItem = decodeURIComponent(unit).replace(/\s/g, '').toLowerCase();
			let found = false;
			let countriesList = [];

			for(const countryName in currenciesJSON){
				if(currenciesJSON[countryName]["unit"].replace(/\s/g, '').toLowerCase() === searchItem){
					found = true;
					countriesList.push(countryName);
				}
			}

			if(!found) res.status(404).json({error: "true", msg: "Incorrect currency unit... nothing found"});
			else res.status(200).json({error: "false", msg: "Successful", data: {countries: countriesList}});
		}
		// Find the countries with a specific currency symbol
		else if(symbol)
		{
			const searchItem = decodeURIComponent(symbol).toLowerCase();
			let found = false;
			let countriesList = [];

			for(const countryName in currenciesJSON){
				if(currenciesJSON[countryName]["symbol"].toLowerCase() === searchItem){
					found = true;
					countriesList.push(countryName);
				}
			}

			if(!found) res.status(404).json({error: "true", msg: "Incorrect currency symbol... nothing found"});
			else res.status(200).json({error: "false", msg: "Successful", data: {countries: countriesList}});
		}

	}catch(error){
		console.error(error);
		res.status(500).json({error: "true", msg: "Something went wrong..."});
	}
});

/*
	Pure currency based API endpoints
*/

// ... 

export default router;