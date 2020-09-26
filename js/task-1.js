const getItemsString = function (array = ' ') {
  let totalResults = '';

  for (let i = 0; i < array.length; i += 1) {
    const item = array[i];
    const number = [i + 1];

    const result = `${number} - ${item}\n`;
    totalResults += result;
  }

  return totalResults;
};

console.log(getItemsString(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']));
