function convertTemperature() {
    const celsiusInput = document.getElementById("celsiusInput");
    const fahrenheitResult = document.getElementById("fahrenheitResult");

    const celsius = parseFloat(celsiusInput.value);

    if (isNaN(celsius)) {
        fahrenheitResult.value = "Invalid input";
    } else {
        const fahrenheit = (celsius * 9/5) + 32;
        fahrenheitResult.value = fahrenheit.toFixed(2) + "°F";
    }
}
