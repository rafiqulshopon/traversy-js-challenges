function countVowels(str) {
  const formattedString = str.toLowerCase();
  let count = 0;

  const vowels = 'aeiou';

  for (let char of formattedString) {
    if (vowels.includes(char)) {
      count++;
    }
  }

  return count;
}

module.exports = countVowels;
