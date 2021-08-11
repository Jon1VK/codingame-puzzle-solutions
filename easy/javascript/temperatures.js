// https://www.codingame.com/training/easy/temperatures

const n = parseInt(readline()); // the number of temperatures to analyse
const temperatures = readline().split(' ').map(Number); // temperatures array

// Find the closest temperature
const result = temperatures.reduce((closestTemperature, currentTemperature) => {
  // Check if the current temperature is closer to zero than the currently closest one
  const isCloser =
    -Math.abs(closestTemperature) < currentTemperature &&
    currentTemperature <= Math.abs(closestTemperature);
  return isCloser ? currentTemperature : closestTemperature;
});

// Log the result
console.log(result);
