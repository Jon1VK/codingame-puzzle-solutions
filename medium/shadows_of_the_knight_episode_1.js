// https://www.codingame.com/training/medium/shadows-of-the-knight-episode-1

var inputs = readline().split(' ');
const W = parseInt(inputs[0]); // width of the building.
const H = parseInt(inputs[1]); // height of the building.

const N = parseInt(readline()); // maximum number of turns before game over.

var inputs = readline().split(' ');
let X0 = parseInt(inputs[0]); // Initial vertical position of Batman
let Y0 = parseInt(inputs[1]); // Initial horizontal position of Batman

// Search are borders;
let leftIdx = 0;
let rightIdx = W - 1;
let upIdx = 0;
let downIdx = H - 1;

// game loop
while (true) {
  const bombDir = readline(); // the direction of the bombs from batman's current location (U, UR, R, DR, D, DL, L or UL)

  // If bomb is left from current position, move right border to the left column from current position
  if (bombDir.includes('L')) {
    rightIdx = X0 - 1;
    // And if left, then move left border to right column from current position
  } else if (bombDir.includes('R')) {
    leftIdx = X0 + 1;
  }

  // Update horizontal borders the same way as vertical position
  if (bombDir.includes('U')) {
    downIdx = Y0 - 1;
  } else if (bombDir.includes('D')) {
    upIdx = Y0 + 1;
  }

  // Update Batmans position to the middle of the updated search area
  X0 = Math.floor(leftIdx + (rightIdx - leftIdx) / 2);
  Y0 = Math.floor(upIdx + (downIdx - upIdx) / 2);

  // Log Batmans updated position
  console.log(`${X0} ${Y0}`);
}
