const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let sum = matrix[0].reduce((acc, i) => {return acc + i}, 0)
  for (i = 0; i<matrix.length-1;i++) {
    for (k = 0; k<matrix[i].length; k++) {
      if(matrix[i][k] !== 0) {
        sum+= matrix[i+1][k]
      }
    }
  }
  return sum
}

module.exports = {
  getMatrixElementsSum
};
