// https://www.codingame.com/training/medium/folding-a-note

const N = parseInt(readline()); // Number of lines in the note
let note = [...Array(N)].map((_) => readline().split('')); // Note as a grid

// Fold from right to left and rotate anticlockwise until cannot fold anymore
while (note[0].length > 1) {
  note = rotate(fold(note));
}

// Log the result
console.log(note[0][0]);

// Folds a note by concatenating corresponding parts of the note in correct order
function fold(note) {
  return note.map((row) => {
    const newRow = [];
    for (let i = 0; i < row.length / 2; i++) {
      const leftPart = row[i];
      const rightPart = row[row.length - 1 - i].split('').reverse().join('');
      newRow.push(rightPart + leftPart);
    }
    return newRow;
  });
}

// Rotates a note anticlockwise direction
function rotate(note) {
  const rotatedNote = [];
  for (let col = note[0].length - 1; col >= 0; col--) {
    const newRow = [];
    for (let row = 0; row < note.length; row++) {
      newRow.push(note[row][col]);
    }
    rotatedNote.push(newRow);
  }
  return rotatedNote;
}
