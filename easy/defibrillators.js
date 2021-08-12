// https://www.codingame.com/training/easy/defibrillators

// Convert decimal string to float number
const parseDecimalFloat = (str) => parseFloat(str.replace(',', '.'));
// Convert degrees to radians
const degToRad = (deg) => Math.PI * (deg / 180);

// Calculate distance in km's between two positions on earth
function distance(lonA, latA, lonB, latB) {
  const x = (lonB - lonA) * Math.cos((latA + latB) / 2);
  const y = latB - latA;
  return Math.sqrt(x ** 2 + y ** 2) * 6371;
}

const LON = degToRad(parseDecimalFloat(readline())); // Longitude of current location
const LAT = degToRad(parseDecimalFloat(readline())); // Latitude of current location
const N = parseInt(readline()); // Number of defibrillators

// Convert defibrillator info to array of debib objects with name and distance to current location
const defibs = [...Array(N)].map(() => {
  const input = readline().split(';');
  const lon = degToRad(parseDecimalFloat(input[4]));
  const lat = degToRad(parseDecimalFloat(input[5]));

  return {
    name: input[1],
    dist: distance(LON, LAT, lon, lat),
  };
});

// Find the closest defibrillator
const closestDefib = defibs.reduce((closestDefib, currDefib) =>
  closestDefib.dist <= currDefib.dist ? closestDefib : currDefib
);

// Log the name of the closest defib
console.log(closestDefib.name);
