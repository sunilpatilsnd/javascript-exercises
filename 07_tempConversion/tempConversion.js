const convertToCelsius = function(tempInFarenheit) {
    let tempInCelsius = 0.0;
    tempInCelsius = (tempInFarenheit - 32) / 1.8; 
    return Number(tempInCelsius.toFixed(1)); 
};

const convertToFahrenheit = function(tempInCelsius) {
    let tempInFarenheit = 0.0;
    tempInFarenheit = (tempInCelsius * 1.8) + 32;
    return Number(tempInFarenheit.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
