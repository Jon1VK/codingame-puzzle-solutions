// https://www.codingame.com/training/easy/mime-type

const N = parseInt(readline()); // Number of elements which make up the association table.
const Q = parseInt(readline()); // Number Q of file names to be analyzed.

// Construct the association table from inputs
const MIME_TYPES = Object.fromEntries(
  [...Array(N)].map(() => {
    const entry = readline().split(' ');
    return [entry[0].toLowerCase(), entry[1]];
  })
);

// Log correct mime type or UNKNOWN for all file names
for (let i = 0; i < Q; i++) {
  const fileExt = readline()
    .match(/\.(\w+)$/)?.[1] // extract the file extension if there is one
    .toLowerCase();
  console.log(MIME_TYPES[fileExt] ?? 'UNKNOWN');
}
