let array1 = [
  [0, 1],
  [2, 3],
  [4, 5],
];

const newArr = array1.reduceRight(
  (acc, curVal) => {
    return acc.concat(curVal);
  },
  [6, 7]
);

const newArrWithReduce = array1.reduce(
  (acc, curr) => {
    return acc.concat(curr);
  },
  [-1, -2]
);

console.log(newArr);
console.log(newArrWithReduce);
