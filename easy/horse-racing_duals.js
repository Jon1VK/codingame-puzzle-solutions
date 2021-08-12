// https://www.codingame.com/training/easy/horse-racing-duals

const N = parseInt(readline()); // Number of horses
const strengths = [...Array(N)].map(() => parseInt(readline())); // Strengths of horses

// Find the smallest difference of strengths
const result = strengths
  .sort((a, b) => a - b) // Sort to ascending order
  .reduce((smallestDiff, currStr, currIdx, strengths) => {
    const currDiff = strengths[currIdx + 1] - currStr;
    return currDiff < smallestDiff ? currDiff : smallestDiff;
  }, Infinity);

console.log(result);
