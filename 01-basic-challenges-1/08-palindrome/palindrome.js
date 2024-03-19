function isPalindrome(str) {
  const cleanedStr = str.toLowerCase().replace(/[\W_]/g, '');
  const len = cleanedStr.length;

  for (let i = 0; i < len / 2; i++) {
    if (cleanedStr[i] !== cleanedStr[len - 1 - i]) {
      return false;
    }
  }
  return true;
}

module.exports = isPalindrome;
