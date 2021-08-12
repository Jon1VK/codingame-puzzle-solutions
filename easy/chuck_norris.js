// https://www.codingame.com/training/easy/chuck-norris

// Read the message and convert characters to 7 bit ascii
const MESSAGE = readline()
  .split('')
  .map((c) => c.codePointAt(0).toString(2).padStart(7, '0'))
  .join('')
  .split('');

// Encode the message
const encodedMsg = MESSAGE.reduce(
  (encodedMsg, currBit, currIdx, msg) => {
    if (currIdx == 0 || msg[currIdx - 1] == currBit) {
      return encodedMsg + '0';
    } else {
      return encodedMsg + (currBit == '1' ? ' 0 0' : ' 00 0');
    }
  },
  MESSAGE[0] === '1' ? '0 ' : '00 '
);

// Output the result
console.log(encodedMsg);
