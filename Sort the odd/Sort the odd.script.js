function sortArray(array) {
  const oddArr = [];
  const evenArr = [];
  const result = [];

  array.forEach(element => {
    if (element % 2 == 0) {
      evenArr.push(element);
    } else {
      oddArr.push(element);
    }
  });

  oddArr.sort((a, b) => a - b);

  array.forEach(element => {
    if (element % 2 == 0) {
      result.push(evenArr.shift());
    } else {
      result.push(oddArr.shift());
    }
  });

  return console.log(result);
}
