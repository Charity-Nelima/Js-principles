// An API (Application Programming Interface) is a set of rules and protocols that allows different software applications to communicate and interact with each other
// Endpoint: An endpoint is a specific URL that an API exposes for accessing its resources. 
// Each endpoint corresponds to a specific function or data set that the API provides.

// Example using the OpenWeatherMap API
const apiKey = "YOUR_API_KEY";
const city = "New York";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    console.log(`Current temperature in ${city}: ${data.main.temp}°C`);
  })
  .catch(error => {
    console.error("Error fetching weather data:", error);
  });

  // a simple way of implementinng Api on javascript

  // Define the API URL
const apiUUrl = "https://jsonplaceholder.typicode.com/users";

// Make the API request using fetch
fetch(apiUUrl)
  .then(response => {
    // Check if the response status is OK (200)
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json(); // Parse the response body as JSON
  })
  .then(data => {
    // Process the data
    console.log("API response:", data);
  })
  .catch(error => {
    // Handle errors
    console.error("Error fetching data:", error);
  });

//   In this example:

// We define the apiUrl variable with the URL of the API endpoint.
// We use the fetch function to make an HTTP GET request to the API URL.
// We use the first .then() block to check if the response is OK (status code 200). If the response is not OK, we throw an error.
// We use the .json() method on the response object to parse the JSON response body.
// We use the second .then() block to process the parsed JSON data.
// We use the .catch() block to handle errors, both network-related errors and parsing errors.
