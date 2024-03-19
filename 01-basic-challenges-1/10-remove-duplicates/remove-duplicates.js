function removeDuplicates(arr) {
  const finalOutput = [];

  for (let i = 0; i < arr.length; i++) {
    let isDuplicate = false;

    for (let j = 0; j < finalOutput.length; j++) {
      if (arr[i] === finalOutput[j]) {
        isDuplicate = true;
        break;
      }
    }

    if (!isDuplicate) {
      finalOutput.push(arr[i]);
    }
  }

  return finalOutput;
}

module.exports = removeDuplicates;
