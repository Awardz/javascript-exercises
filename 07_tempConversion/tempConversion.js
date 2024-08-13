const convertToCelsius = function(num) {
  let celsius = num - 32;
  celsius *= (5/9);
  return parseFloat(celsius.toFixed(1));
};

const convertToFahrenheit = function(num) {
  let fahr = num * (9/5) + 32;
  return parseFloat(fahr.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
