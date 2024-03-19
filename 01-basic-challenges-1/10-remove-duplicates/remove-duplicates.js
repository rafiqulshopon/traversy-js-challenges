function removeDuplicates(arr) {
  const finalOutput = [];

  for (let i = 0; i < arr.length; i++) {
    if (!finalOutput.includes(arr[i])) {
      finalOutput.push(arr[i]);
    }
  }

  return finalOutput;
}

module.exports = removeDuplicates;
