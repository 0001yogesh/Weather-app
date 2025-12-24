const weatherData = {
    delhi: {
        temp: "32°C",
        condition: "Sunny",
        humidity: "40%"
    },
    mumbai: {
        temp: "30°C",
        condition: "Humid",
        humidity: "70%"
    },
    jaipur: {
        temp: "35°C",
        condition: "Hot",
        humidity: "30%"
    },
    london: {
        temp: "18°C",
        condition: "Cloudy",
        humidity: "60%"
    }
};

function getWeather() {
    const cityInput = document.getElementById("cityInput").value.toLowerCase();
    const result = document.getElementById("weatherResult");

    if (cityInput === "") {
        result.innerHTML = "❌ Please enter a city name";
        return;
    }

    if (weatherData[cityInput]) {
        result.innerHTML = `
            <h3>${cityInput.toUpperCase()}</h3>
            <p>🌡 Temperature: ${weatherData[cityInput].temp}</p>
            <p>☁ Condition: ${weatherData[cityInput].condition}</p>
            <p>💧 Humidity: ${weatherData[cityInput].humidity}</p>
        `;
    } else {
        result.innerHTML = "⚠️ City not found in database";
    }
}
