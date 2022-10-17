const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let additionFinal = '';
  let strFinal = String(str);

  if (options.addition) {
    if (options.additionRepeatTimes) {
      if (options.additionSeparator) {
        additionFinal = (String(options.addition) + String(options.additionSeparator)).repeat(+options.additionRepeatTimes).slice(0, -String(options.additionSeparator).length);
      } else {
        additionFinal = (String(options.addition) + '|').repeat(+options.additionRepeatTimes).slice(0, -1);
      }
    } else {
      additionFinal = String(options.addition);
    }
  }
  
  
  if (options.repeatTimes) {
    if(options.separator) {
      strFinal = (String(str) + additionFinal + String(options.separator)).repeat(+options.repeatTimes).slice(0, -String(options.separator).length);
    } else {
      strFinal = (String(str) + additionFinal + '+').repeat(+options.repeatTimes).slice(0, -1);
    }
  }
  
  return strFinal;

}

module.exports = {
  repeater
};
