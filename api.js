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
