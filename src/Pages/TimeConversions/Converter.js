/*
	Get crucial data ready
*/

let countryList = [];
let timeZoneList = [];

fetch(countriesJsonFileLocation)
.then(response => response.json())
.then(continentsData => {
	continents.forEach(continent => {
		continentsData[continent].forEach(country => {
			countryList.push(country);
		})
	})

	fetch(jsonFileLocation)
	.then(response => response.json())
	.then(timeZones => {
		countryList.forEach(country => {
			timeZoneList.push([country, timeZones[country]]);
		})
	})
	.catch(error => {	
		console.error(error);
	})
})
.catch(error => {
	console.error(error);
});

/*
	Return time zones for the dropdown selector
*/

function returnTimeZones(input, country){
	if(input)
		inputCountriesDropDown.innerHTML = "";
	else
		outputCountriesDropDown.innerHTML = "";

	let found = true;
	let noZonesFound = true;
	for(let x = 0; x < countryList.length; x++)
	{
		for(let i = 0; i < country.length; i++)
		{
			if(country[i].toLowerCase() != countryList[x][i].toLowerCase())
			{
				found = false;
				break;
			}
		}

		if(found) // country found
		{
			if(timeZoneList[x][1] != undefined) // time zone exsists in the json file for the country
			{
				let timeZoneStr = `${countryList[x]} (${timeZoneList[x][1]})`

				if(input) // If it is in the input section
				{
					inputCountriesDropDown.innerHTML += `
						<li><button class="dropdown-item input-country-btn" type="button" value="${timeZoneStr}">${timeZoneStr}</button></li>
					`

					
					inputTimeZone = timeZoneList[x][1];
				}
				else  // If it is in the output section
				{
					outputCountriesDropDown.innerHTML += `
						<li><button class="dropdown-item output-country-btn" type="button")" value="${timeZoneStr}">${timeZoneStr}</button></li>
					`

					outputTimeZone = timeZoneList[x][1];
				}

				noZonesFound = false; // zone was found
			}
		}

		found = true; // reset found value
	}

	if(noZonesFound) // tell user if no zone was found
	{
		if(input)
			inputCountriesDropDown.innerHTML = "<small>Could not find country (check spellings)</small>";
		else
			outputCountriesDropDown.innerHTML = "<small>Could not find country (check spellings)</small>";
	}
}

/*
	For the default
*/

function currentTime12HourFormat() {
  const now = new Date();
  const hours = now.getHours() % 12 || 12;
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const period = now.getHours() >= 12 ? 'PM' : 'AM';

  return [hours.toString().padStart(2, '0'), minutes, period];
}

/*
	For the default
*/

function getUserCountry() {
  fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(data => {
      const ip = data.ip;
      // Use the fetched IP to construct the URL for country data
      const countryDataURL = `https://ipinfo.io/${ip}/json`;
      fetch(countryDataURL)
        // Handle the response from the country data service
        .then(response => response.json())
        .then(countryData => {
          const code = countryData.country;

		  fetch(countryCodesJsonFileLocation)
		  .then(response => response.json())
		  .then(countryCodes => {
		    	for(let i = 0; i < timeZoneList.length; i++)
				{
					if(timeZoneList[i][0] == countryCodes[code])
					{
						inputTimeZoneLabel.innerHTML = `${countryList[i]} (${timeZoneList[i][1]})`;
						outputTimeZoneLabel.innerHTML = `${countryList[i]} (${timeZoneList[i][1]})`;

						inputTimeZone = timeZoneList[i][1];
						outputTimeZone = timeZoneList[i][1];

						const currentTime = currentTime12HourFormat();

						inputHourBox.value = currentTime[0];
						inputMinuteBox.value = currentTime[1];
						inputTimeFormatLabel.innerHTML = currentTime[2];

						outputHourBox.value = currentTime[0];
						outputMinuteBox.value = currentTime[1];
						outputTimeFormatLabel.innerHTML = currentTime[2];

						break;
					}
				}
		  })
        })
        .catch(error => console.error("Error fetching country data:", error));
    })
    .catch(error => console.error("Error fetching IP:", error));
}

/*
	Time conversion between countries
*/

function convertTime() {
	if(amPmFormat)
	{
		inputTime = `${inputHour.value}:${inputMinute.value} ${inputTimeFormat.innerHTML}`;

		const timeMoment = moment(inputTime, 'hh:mm A');
		const convertedTime = timeMoment.tz(outputTimeZone).format('hh:mm A');

		outputHour.value = `${convertedTime[0]}${convertedTime[1]}`;
		outputMinute.value = `${convertedTime[3]}${convertedTime[4]}`;

		outputTimeFormat.innerHTML = `${convertedTime[6]}${convertedTime[7]}`;
		console.log(`${convertedTime[6]}${convertedTime[7]}`);
	}
	else
	{
		inputTime = `${inputHour.value}:${inputMinute.value}`;

		const timeMoment = moment(inputTime, 'HH:mm');
		const convertedTime = timeMoment.tz(outputTimeZone).format('HH:mm');

		outputHour.value = `${convertedTime[0]}${convertedTime[1]}`;
		outputMinute.value = `${convertedTime[3]}${convertedTime[4]}`;
	}
}