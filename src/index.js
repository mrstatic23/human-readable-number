module.exports = function toReadable (number) {
  const digits = {
    top29: {
      0: '',
      1: 'one',
      2: 'two',
      3: 'three',
      4: 'four',
      5: 'five',
      6: 'six',
      7: 'seven',
      8: 'eight',
      9: 'nine',
      10: 'ten',
      11: 'eleven',
      12: 'twelve',
      13: 'thirteen',
      14: 'fourteen',
      15: 'fifteen',
      16: 'sixteen',
      17: 'seventeen',
      18: 'eighteen',
      19: 'nineteen',
    },
    dozens: {
      2: 'twenty',
      3: 'thirty',
      4: 'forty',
      5: 'fifty',
      6: 'sixty',
      7: 'seventy',
      8: 'eighty',
      9: 'ninety',
    }
}

let readableNumber = '';


if (number === 0) {
    return 'zero';
}

if (number >= 100) {
  readableNumber += `${digits.top29[Math.trunc(number / 100)]} hundred|`;
}

if (number % 100 < 20) {
  readableNumber += `${digits.top29[Math.trunc(number % 100)]}|`;
} else {
  readableNumber += `${digits.dozens[Math.trunc((number % 100) / 10)]}|`;
  if (number % 10) {
    console.log(number % 10);
    readableNumber += `${digits.top29[number % 10]}|`
  }
}

return readableNumber.replace(/\|/g,' ').trim();
}
