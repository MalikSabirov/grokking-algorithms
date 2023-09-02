const testArr = [1, 2, 3, 4];

const sumArrayWithCycle = (array) => {
  let result = 0;

  for (let i = 0; i < array.length; i++) {
    result += array[i];
  }

  return result;
};

// console.log(sumArrayWithCycle(testArr));

const sumWithReduce = (array) => array.reduce((acc, cur) => acc + cur, 0);

// console.log(sumWithReduce(testArr));

const sumArrayWithRecursion = (array) => {
  // base
  if (array.length === 0) return 0;

  const firstElement = array[0];

  return firstElement + sumArrayWithRecursion(array.slice(1));
};

// console.log(sumArrayWithRecursion(testArr));
