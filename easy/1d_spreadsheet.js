// https://www.codingame.com/training/easy/1d-spreadsheet

const N = parseInt(readline()); // Number or cells in spreadsheet
const spreadsheet = [...Array(N)].map(() => readline());

// Calculate all values in spreadsheet
for (let i = 0; i < N; i++) {
  console.log(calculateValueAt(i).toString());
}

// Calculates value at cell idx in the spreadsheet
function calculateValueAt(idx) {
  // If the value at cell is already a number, return it
  if (typeof spreadsheet[idx] == 'number') {
    return spreadsheet[idx];
  }

  // Otherwise the value at cell is an operation wiht arguments
  const [operation, arg1, arg2] = spreadsheet[idx].split(' ');

  // Calculate referenced values or parse the value in the argument
  const val1 = arg1.startsWith('$')
    ? calculateValueAt(parseInt(arg1.slice(1)))
    : parseInt(arg1);
  const val2 = arg2?.startsWith('$')
    ? calculateValueAt(parseInt(arg2.slice(1)))
    : parseInt(arg2);

  // Execute the operation and save the result to the index idx
  switch (operation) {
    case 'VALUE':
      spreadsheet[idx] = val1;
      break;
    case 'ADD':
      spreadsheet[idx] = val1 + val2;
      break;
    case 'SUB':
      spreadsheet[idx] = val1 - val2;
      break;
    case 'MULT':
      spreadsheet[idx] = val1 * val2;
      break;
  }

  // Return the value
  return spreadsheet[idx];
}
