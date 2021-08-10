const L = parseInt(readline());
const H = parseInt(readline());
const T = readline().toUpperCase().split('');

const charToIndex = (c) =>
  c < 'A' || c > 'Z' ? 26 : c.charCodeAt(0) - 'A'.charCodeAt(0);

const charToAsciiArtRow = (c, row) => row.substr(L * charToIndex(c), L);

const asciiArtText = [...Array(H)].map((_) => {
  const row = readline();
  return T.map((c) => charToAsciiArtRow(c, row)).join('');
});

console.log(asciiArtText.join('\n'));
