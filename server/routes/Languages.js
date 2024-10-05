import express from "express"
import countryLanguagesJSON from "../models/CountryLanguages.js"
import languagesJSON from "../models/Languages.js"

const router = express.Router();

// Get Language information relating to countries

// Get all info about languages of all countries
router.get("/countries/all", (req, res) => {
	try
	{
		const { type, country } = req.query;
		// If no type is mentioned return all		
		if(!type) res.status(200).json({error: "false", msg: "Successful", data: {languages: countryLanguagesJSON}});

		// Return only language names
		if(type === "name" && !country)
		{
			let langNamesObj = {};
			for(const countryName in countryLanguagesJSON)
				langNamesObj[countryName] = countryLanguagesJSON[countryName]["language"];

			res.status(200).json({error: "false", msg: "Successful", data: {languages: langNamesObj}});
		}
		else if(type === "code" && !country)
		{
			let langCodesObj = {};
			for(const countryName in countryLanguagesJSON)
				langCodesObj[countryName] = countryLanguagesJSON[countryName]["iso639_1"];

			res.status(200).json({error: "false", msg: "Successful", data: {languages: langCodesObj}});
		}

	} catch(error) {
		console.error(error);
		res.status(500).json({error: "true", msg: "Internal Server Error... Something wrong on our side"});
	}
});

router.get("/countries/find", (req, res) => {
	const { type, country } = req.query;
	if(country)
	{
		// Check if country name is valid
		const name = decodeURIComponent(country).replace(/\s/g, '').toLowerCase();
		let isValid = false;
		let actualName = "";

		for(const countryName in countryLanguagesJSON){
			if(countryName.replace(/\s/g, '').toLowerCase() === name)
			{
				isValid = true;
				actualName = countryName;
				break;
			}
		}

		if(isValid)
		{
			if(!type)
			{
				res.status(200).json({
					error: "false", 
					msg: "Successful", 
					data: {
						name: countryLanguagesJSON[actualName].language,
						code: countryLanguagesJSON[actualName].iso639_1
					}
				})
			} else if(type === "name") {
				res.status(200).json({
					error: "false", 
					msg: "Successful", 
					data: {
						name: countryLanguagesJSON[actualName].language,
					}
				})
			} else if(type === "code") {
				res.status(200).json({
					error: "false", 
					msg: "Successful", 
					data: {
						code: countryLanguagesJSON[actualName].iso639_1
					}
				})
			}
		} else {
			res.status(404).json({error: "true", msg: "Invalid country name..."});
		}
	} else {
		res.status(404).json({error: "true", msg: "Enter the country name query parameter ex:`?country=United States`"});
	}
})

// Endpoints on language codes and names

// Get all language names and their codes
router.get("/lang/all", (req, res) => {
	try
	{
		res.status(200).json({error: "false", msg: "Successful", data: {languages: languagesJSON}});

	} catch(error) {
		console.error(error);
		res.status(500).json({error: "true", msg: "Internal Server Error... Something wrong on our side"});
	}
});

router.get("/lang/find", (req, res) => {
	try
	{
		const { lang, code } = req.query;

		// Get the language code for a language
		if(lang){
			const name = decodeURIComponent(lang).replace(/\s/g, '').toLowerCase();

			// Check if name is valid
			let isValid = false;
			let actualName = "";
			for(const langName in languagesJSON){
				if(langName.replace(/\s/g, '').toLowerCase() === name)
				{
					isValid = true;
					actualName = langName;
					break;
				}
			}

			if(isValid)
			{
				res.status(200).json({
					error: "false", 
					msg: "Successful", 
					data: {
						code: languagesJSON[actualName]
					}
				});
			} else {
				res.status(404).json({
					error: "true",
					msg: "Invalid language name"
				});
			}

		// Get the language for a language code
		} else if(code) {
			const editedCode = code.replace(/\s/g, '').toLowerCase();

			// Obtain language for language code
			let language = "";
			for(const langName in languagesJSON)
			{
				if(languagesJSON[langName] === editedCode)
				{
					language = langName;
					break;
				}
			}

			if(language !== "") res.status(200).json({error: "false", msg: "Successful", data: {language: language}});
			else res.status(404).json({error: "true", msg: "Invalid language code!... Couldn't find language"});
		}
	}
	catch(error){
		console.error(error);
		res.status(500).json({error: "true", msg: "Internal Server Error!... Something went wrong on our side"});
	}
});

export default router;