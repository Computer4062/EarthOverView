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

async function fetchPoppulation(){
	const url = 'https://get-population.p.rapidapi.com/population';
	const options = {
		method: 'GET',
		headers: {
			'x-rapidapi-key': 'f55092595bmsh899e920a2cd9347p168af2jsn30f8a0e6989a',
			'x-rapidapi-host': 'get-population.p.rapidapi.com'
		}
	};

	let result = {};

	try {
		const response = await fetch(url, options);
		result = await response.json();
		if(result.count !== undefined)
			populationCount = result.count;
		document.querySelector("#population").textContent = formatNumber(populationCount);
	} catch (error) {
		console.error(error);
		document.querySelector("#population").textContent = "Sorry... We are facing a problem";
	}
}

(function(){
	fetchPoppulation();
	document.querySelector(".current-year").innerHTML = new Date().getFullYear();
})();