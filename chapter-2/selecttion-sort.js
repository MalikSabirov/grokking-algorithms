const findSmallest = (array) => {
  let smallestElement = array[0];
  let smallestIndex = 0;

  for (let i = 1; i < array.length; i++) {
    if (array[i] < smallestElement) {
      smallestElement = array[i];
      smallestIndex = i;
    }
  }

  return smallestIndex;
};

const selectionSort = (array) => {
  const sortedArray = [];
  const copyArray = [...array];

  for (let i = 0; i < array.length; i++) {
    const smallestIndex = findSmallest(copyArray);

    // remove smallestElement from initial array
    const [smallestItem] = copyArray.splice(smallestIndex, 1);

    sortedArray.push(smallestItem);
  }

  return sortedArray;
};

console.log("Selection sort: ", selectionSort([5, 3, 6, 2, 10]));
