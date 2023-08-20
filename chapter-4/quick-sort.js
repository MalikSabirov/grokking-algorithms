const quickSort = (arr) => {
  if (arr.length < 2) {
    return arr;
  }

  const pivot = arr[0];

  arr.splice(0, 1);

  const less = [];
  const greater = [];

  arr.map((item) => {
    if (item <= pivot) {
      less.push(item);
      return;
    }

    greater.push(item);
  });

  return quickSort(less).concat([pivot], quickSort(greater));
};

console.log(quickSort([5, 6, 1, 2, 9, 7, 4, 3, 8]));
