// https://www.codingame.com/training/easy/power-of-thor-episode-1

var inputs = readline().split(' ');
const lightX = parseInt(inputs[0]); // the X position of the light of power
const lightY = parseInt(inputs[1]); // the Y position of the light of power
const initialTx = parseInt(inputs[2]); // Thor's starting X position
const initialTy = parseInt(inputs[3]); // Thor's starting Y position

// Initialize variables to hold the current steps between thor and light
let diffX = lightX - initialTx;
let diffY = lightY - initialTy;

// game loop
while (true) {
  const remainingTurns = parseInt(readline()); // The remaining amount of turns Thor can move. Do not remove this line.

  // Variable to hold the next direction to walk to.
  let direction = '';

  // If thor is below or above the light, update direction and diffY accordingly
  if (diffY > 0) {
    direction += 'S';
    diffY--;
  } else if (diffY < 0) {
    direction += 'N';
    diffY++;
  }

  // If thor is left or right of the light, update direction and diffX accorfindly
  if (diffX > 0) {
    direction += 'E';
    diffX--;
  } else if (diffX < 0) {
    direction += 'W';
    diffX++;
  }

  console.log(direction);
}
