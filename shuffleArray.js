/**
 * How would you implement a shuffle() ?
 * When passed with an array, it should modify the array
 * inline to generate a randomly picked permutation at the same probability.
 *
 * solutio Fisher yates solution
 */

function shuffleArray(arr) {
  let length = arr.length - 1;
  for (let i = length; i > 0; i--) {
    let randomVal = Math.floor(Math.random() * (length - 1));
    [arr[length], arr[randomVal]] = [arr[randomVal], arr[length]];
  }
  return arr;
}
