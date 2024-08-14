/*
Get current population
*/
const populationElement = document.getElementById("population");

(async function(){
try {
  const response = await fetch(url, options);
  // Check for successful response status:
  if (!response.ok) {
    throw new Error(`Error fetching data: ${response.status}`);
  }

  const jsonData = await response.json(); // Parse as JSON
  const readableFormat = jsonData.readable_format; // Extract "readable_format"
  populationElement.textContent = readableFormat;
} catch (error) {
  console.error("Error:", error);
}
}());
/*
1. Get the API key from the .env file
2. Use Express to store the value of the population in the server it self
*/

/*
Navigation links
*/
function NavigateToCallingCodes(){
  window.location.href = "../src/Pages/CallingCodes.html";
}