const n = parseInt(readline()); // the number of temperatures to analyse
const temperatures = readline().split(' ').map(Number);

const result = temperatures.reduce((closestTemperature, currentTemperature) => {
  const isCloser =
    -Math.abs(closestTemperature) < currentTemperature &&
    currentTemperature <= Math.abs(closestTemperature);
  return isCloser ? currentTemperature : closestTemperature;
});

console.log(result);
