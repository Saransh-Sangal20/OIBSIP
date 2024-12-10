document.getElementById("convertButton").addEventListener("click", function () {
    const temperatureInput = document.getElementById("temperatureInput").value;
    const unitInput = document.getElementById("unitInput").value;
    if (isNaN(temperatureInput) || temperatureInput.trim() === "") {
        document.getElementById("result").innerText = "Please enter a valid number.";
        return;
    }
    const temperature = parseFloat(temperatureInput);
    let result = "";
    if (unitInput === "Celsius") {
        const fahrenheit = (temperature * 9/5) + 32;
        const kelvin = temperature + 273.15;
        result = `${temperature}°C = ${fahrenheit.toFixed(2)}°F, ${kelvin.toFixed(2)}K`;
    } else if (unitInput === "Fahrenheit") {
        const celsius = (temperature - 32) * 5/9;
        const kelvin = celsius + 273.15;
        result = `${temperature}°F = ${celsius.toFixed(2)}°C, ${kelvin.toFixed(2)}K`;
    } else if (unitInput === "Kelvin") {
        const celsius = temperature - 273.15;
        const fahrenheit = (celsius * 9/5) + 32;
        result = `${temperature}K = ${celsius.toFixed(2)}°C, ${fahrenheit.toFixed(2)}°F`;
    }
    document.getElementById("result").innerText = result;
});