// https://www.codingame.com/training/easy/equivalent-resistance-circuit-building

const N = parseInt(readline()); // Number of resistors
// Table of resistor resistances
const R = Object.fromEntries(
  [...Array(N)].map(() => {
    const [resistor, resistance] = readline().split(' ');
    return [resistor, parseInt(resistance)];
  })
);

// Circuit as a string
let circuit = readline();

// Regular expression to find subcircuits
const re = /([[(]) ([ .\w]+) [\])]/;

// While there is a subcircuit, calculate equivalent resistance
// and replace subcircuit in the circuit with the calculated value
while (re.test(circuit)) {
  const [_, bracket, resistors] = circuit.match(re);
  const subResistance = eqResistance(resistors.split(' '), bracket == '[');
  R[subResistance] = subResistance;
  circuit = circuit.replace(re, subResistance);
}

// Log the result with 0.1 presicion
console.log(parseFloat(circuit).toFixed(1));

// Calculates equivalent resistance of some resistors
function eqResistance(resistors, parallel) {
  return parallel
    ? 1 / resistors.reduce((sum, resistor) => sum + 1 / R[resistor], 0)
    : resistors.reduce((sum, resistor) => sum + R[resistor], 0);
}
