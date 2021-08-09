var inputs = readline().split(' ');
const lightX = parseInt(inputs[0]); // the X position of the light of power
const lightY = parseInt(inputs[1]); // the Y position of the light of power
const initialTx = parseInt(inputs[2]); // Thor's starting X position
const initialTy = parseInt(inputs[3]); // Thor's starting Y position

let diffX = lightX - initialTx;
let diffY = lightY - initialTy;

// game loop
while (true) {
  const remainingTurns = parseInt(readline()); // The remaining amount of turns Thor can move. Do not remove this line.

  let direction = '';

  if (diffY > 0) {
    direction += 'S';
    diffY--;
  } else if (diffY < 0) {
    direction += 'N';
    diffY++;
  }

  if (diffX > 0) {
    direction += 'E';
    diffX--;
  } else if (diffX < 0) {
    direction += 'W';
    diffX++;
  }

  console.log(direction);
}
