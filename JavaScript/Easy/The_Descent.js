// game loop
while (true) {
  const heights = [...Array(8)].map((_) => parseInt(readline()));

  const highestIdx = heights.reduce((highestIdx, currHeight, idx, heights) => {
    return currHeight > heights[highestIdx] ? idx : highestIdx;
  }, 0);

  console.log(highestIdx);
}
