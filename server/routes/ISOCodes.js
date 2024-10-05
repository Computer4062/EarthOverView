import express from "express"
import isoCodesJSON from "../models/ISOCodes.js"

const router = express.Router();

// Return all ISO country codes
router.get("/all", (req, res) => {
	try
	{
		const allISOCodes = isoCodesJSON;
		res.status(200).json({error: "false", msg: "Successful", data: [allISOCodes]});
	}catch(err){
		res.status(500).json({error: "true", msg: "Something went wrong on our side..."});
	}
});

// Return single country or ISO country code
router.get("/find", (req, res) => {
	const {country, code} = req.query;
	let data;

	// Find country for a given ISO country code
	if(code){
		try
		{
			data = {
				error: "false", 
				msg: "Successful", 
				data: {country: isoCodesJSON[decodeURIComponent(code).toUpperCase()]
			}};

			if(data.data.country === undefined)
			{
				data = {error: "true", msg: "incorrect ISO code!"};
				res.status(404).json(data);
			}
			else res.status(200).json(data);

		} catch(error) {
			data = {error: "true", msg: "Something went wrong..."};
			res.status(404).json(data);
		}
	}
	// Find the ISO country code for a given country
	else if(country) {
		const searchItem = decodeURIComponent(country).replace(/\s/g, '').toLowerCase();
		let notFound = true;
		for(const isoCode in isoCodesJSON){
			if(isoCodesJSON[isoCode].replace(/\s/g, '').toLowerCase() === searchItem)
			{
				data = {error: "false", msg: "Successful", data: {code: isoCode}};
				notFound = false;
				break;
			}
		}

		if(notFound)
		{
			data = {error: "true", msg: "country name is incorrect"}
			res.status(404).json(data);
		}
		else res.status(200).json(data);
	}
});

export default router;