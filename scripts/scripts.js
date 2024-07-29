const url = 'https://aa.usno.navy.mil/api/moon/phases/date?date=2024-05-03&nump=48';

fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data); // This will contain the response from the API
    // Process the data as needed (e.g., extract moon phases)
  })
  .catch(error => {
    console.error('Error fetching moon phases:', error);
  });