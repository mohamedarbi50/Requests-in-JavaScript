const apiKey = "004090e4a9cf7f193813a3f280fa011d"; 
const searchBtn = document.getElementById('searchBtn');
const cityInput = document.getElementById('city');

searchBtn.addEventListener('click', () => {
  const city = cityInput.value;
  if (city) {
    fetchWeather(city);
  }
});

async function fetchWeather(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("City not found");
    const data = await response.json();
    displayWeather(data);
  } catch (error) {
    alert(error.message);
  }
}

function displayWeather(data) {
  const location = document.getElementById('location');
  const temperature = document.getElementById('temperature');
  const description = document.getElementById('description');

  location.textContent = `Location: ${data.name}, ${data.sys.country}`;
  temperature.textContent = `Temperature: ${data.main.temp}°C`;
  description.textContent = `Weather: ${data.weather[0].description}`;
}
