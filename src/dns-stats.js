const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let arr = domains.map(item => item.split('.').reverse().map(i => '.' + i))
  let obj = {};
  arr.map(item => {
     item.map((el, index) => obj[item.slice(0, index + 1).join('')] = obj[item.slice(0, index + 1).join('')] + 1 || 1)
    })
  
  return obj
}

module.exports = {
  getDNSStats
};
