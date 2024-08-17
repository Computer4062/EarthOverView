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

export default async function handler(request, response) {
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

		res.send(formatNumber(populationCount));
	} catch (error) {
		console.error(error);
		res.send("Sorry... We are facing a problem");
	}
}