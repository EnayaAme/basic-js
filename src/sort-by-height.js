const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (arr.indexOf(-1, 0) === -1) {return arr.sort((a, b) => a - b)}
  let indexArr = Array.from(arr.entries()).filter(i => i[1] === -1).map(i => i[0]);
  let sorted = arr.filter(item => item !== -1).sort((a, b) => a - b);
  for (i = 0; i < indexArr.length; i++) {
    sorted.splice(indexArr[i], 0, -1);
  }
 return sorted;
}

module.exports = {
  sortByHeight 
};
