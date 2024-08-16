import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import dotenv from 'dotenv';

dotenv.config();

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = process.env.PORT || 3300;

let populationCount = 8000000000;

function formatNumber(number) {
	const numberString = number.toString();
	let commaAddedString = "";

	/* Add commas between each 3 numbers */
	let count = -1;
	for(let i = numberString.length - 1; i >= 0; i--)
	{
		count++;
		if((count + 1) % 3 === 0)
			commaAddedString += numberString[i] + " ";
		else
			commaAddedString += numberString[i];
	}

	/* Invert the list */
	let finalString = "";
	for(let i = commaAddedString.length - 1; i >= 0; i--)
		finalString += commaAddedString[i];

	return finalString;
}

app.use(express.static(__dirname + "/src"));
app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/src/Pages"));
app.use(express.static(__dirname + "/src/Assets/Json"));
app.use(express.static(__dirname + "/src/Assets/Images"));
app.use(express.static(__dirname + "/src/Assets/Logo"));
app.use(express.static(__dirname + "/src/Components"));

app.listen(port, () => {
	console.log(`Server listening on port ${port}`);
});

app.get("/", async(req, res) => {
	const url = 'https://get-population.p.rapidapi.com/population';
	const options = {
		method: 'GET',
		headers: {
			'x-rapidapi-key': process.env.POPPULATION_API_KEY,
			'x-rapidapi-host': 'get-population.p.rapidapi.com'
		}
	};

	let result = {};

	try {
		const response = await fetch(url, options);
		result = await response.json();
		if(result.count !== undefined)
			populationCount = result.count;
	} catch (error) {
		console.error(error);
	}

	res.render(__dirname + "/public/index.ejs", {population: formatNumber(populationCount)});
});

app.get("/Countries/CallingCodes", (req, res) => {
	res.sendFile(__dirname + "/src/Pages/CallingCodes/CallingCodes.html");
});

app.get("/Countries/Currencies", (req, res) => {
	res.sendFile(__dirname + "/src/Pages/Currencies/Currencies.html");
});

app.get("/Countries/Demonyms", (req, res) => {
	res.sendFile(__dirname + "/src/Pages/Demonyms/Demonyms.html");
});

app.get("/Countries/TimeConversions", (req, res) => {
	res.sendFile(__dirname + "/src/Pages/TimeConversions/TimeConversions.html");
});

app.get("/Countries/Languages", (req, res) => {
	res.sendFile(__dirname + "/src/Pages/LanguagesSpoken/LanguagesSpoken.html");
});

app.get("/Countries/Flags", (req, res) => {
	res.sendFile(__dirname + "/src/Pages/CountryFlags/CountryFlags.html");
});

app.get("/Countries/CapitalCities", (req, res) => {
	res.sendFile(__dirname + "/src/Pages/CapitalCities/CapitalCities.html");
});

app.get("/credits", (req, res) => {
	res.sendFile(__dirname + "/src/Pages/Credits/Credits.html");
});