const convertToCelsius = function (numberF) {
  let tempC = (numberF - 32) * 5 / 9;
  return Math.round(tempC * 10) / 10;
};

const convertToFahrenheit = function (numberC) {
  let tempF = (numberC * 9 / 5) + 32;
  return Math.round(tempF * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

// From F to C:          x °F ≘ (x − 32) × 5/9 °C
// From C to F:          x °C ≘ (x × 9/5 + 32) °F