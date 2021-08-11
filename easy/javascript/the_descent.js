// https://www.codingame.com/training/easy/the-descent

// game loop
while (true) {
  // Read all the heights to an array
  const heights = [...Array(8)].map((_) => parseInt(readline()));

  // Find the index of the heighest number on the array
  const result = heights.reduce((highestIdx, currHeight, idx, heights) => {
    return currHeight > heights[highestIdx] ? idx : highestIdx;
  }, 0);

  // Log the result
  console.log(result);
}
