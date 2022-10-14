const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  
  if (!Array.isArray(arr)) {return "'arr' parameter must be an instance of the Array!"}
  else {
    let newArr = arr.map( (item, index) => {
    if (item === "--discard-next") {if (index !== arr.length - 1) {delete arr[index + 1]}}
    if (item === "--discard-prev") {if (index !== 0) {delete arr[index - 1]}}
    if (item === "--double-prev") {if (index !== 0) {item = arr[index - 1];}}
    if (item === "--double-next") {if (index !== arr.length - 1) { item = arr[index + 1];}}
    return item;
    })
  
  return newArr.filter(item => isFinite(item) === true);
  }
}

module.exports = {
  transform
};
