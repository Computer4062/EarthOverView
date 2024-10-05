import express from "express"
import demonymsJSON from  "../models/Demonyms.js"

const router = express.Router();

// Return all demonyms
router.get("/all", (req, res) => {
	try
	{
		const allDemonyms = demonymsJSON;
		res.status(200).json({error: "false", msg: "Successfull", data: [allDemonyms]});
	}catch(err){
		res.status(500).json({error: "true", msg: "Something went wrong..."});
	}
});

// Return single country or demonym
router.get("/find", (req, res) => {
	const {country, demonym} = req.query;
	let data;

	// Find the country code for a country
	if(country){
		data = {error: "false", msg: "Successfull", data: {demonym: demonymsJSON[decodeURIComponent(country)]}};

		// Assuming that lower upper case errors have been made
		let nothingFound = false;
		if(data.data.demonym === undefined)
		{
			nothingFound = true;

			const searchItem = decodeURIComponent(country).replace(/\s/g, '').toLowerCase();
			for(const countryName in demonymsJSON){
				if(countryName.replace(/\s/g, '').toLowerCase() === searchItem)
				{
					data = {error: "false", msg: "Successfull", data: {demonym: demonymsJSON[countryName]}};
					nothingFound = false;
					break;
				}
			}
		}

		if(nothingFound) res.status(404).json({error: "true", msg: "country name is incorrect"});
		else res.status(200).json(data)

	// Find the country name for a demonym
	} else if(demonym) {
		const searchItem = decodeURIComponent(demonym).toLowerCase();
		let nothingFound = true;
		for(const countryName in demonymsJSON){
			if(demonymsJSON[countryName].toLowerCase() == searchItem)
			{
				data = {error: "false", msg: "Successfull", data: {country: countryName}};
				nothingFound = false;
				break;
			}
		}

		if(nothingFound) res.status(404).json({error: "true", msg: "Incorrect demonym"});
		else res.status(200).json(data);
	}
});

export default router;