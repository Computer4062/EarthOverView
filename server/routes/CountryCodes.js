import express from "express"
import countryCodesJSON from  "../models/CountryCodes.js"

const router = express.Router();

// Return all country codes
router.get("/all", (req, res) => {
	try
	{
		const allcountryCodesJSON = countryCodesJSON;
		res.status(200).json({error: "false", msg: "Successful", data: [allcountryCodesJSON]});
	}catch(err){
		res.status(500).json({error: "true", msg: "Something went wrong on our side..."});
	}
});

// Return single country or country code
router.get("/find", (req, res) => {
	const {country, code} = req.query;
	let data;

	// Find the country code for a country
	if(country){
		data = {error: "false", msg: "Successfull", data: {code: countryCodesJSON[decodeURIComponent(country)]}};

		// Assuming that lower upper case errors have been made
		let nothingFound = false;
		if(data.data.code === undefined)
		{
			nothingFound = true;

			const searchItem = decodeURIComponent(country).replace(/\s/g, '').toLowerCase();
			for(const countryName in countryCodesJSON){
				if(countryName.replace(/\s/g, '').toLowerCase() === searchItem)
				{
					data = {error: "false", msg: "Successfull", data: {code: countryCodesJSON[countryName]}};
					nothingFound = false;
					break;
				}
			}
		}
		
		if(!nothingFound) res.status(200).json(data);
		else res.status(404).json({error: "true", msg: "country name is incorrect"});

	// Find the country name for a country code
	} else if(code) {
		let countriesList = [];
		let nothingFound = true;
		for(const countryName in countryCodesJSON){
			if(countryCodesJSON[countryName] == code)
			{
				nothingFound = false;
				countriesList.push(countryName);
			}
		}

		if(!nothingFound) res.status(200).json({error: "false", msg: "Successfull", data: {countries: countriesList}});
		else data = res.status(404).json({error: "true", msg: "Incorrect country code"});
	}
});

export default router;