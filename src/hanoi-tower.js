const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(disksNumber, turnsSpeed) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let num;
  let speed;
  
  let turnsNum = function(disksNumber) {
    let num;
       if (disksNumber == 0) {return num = 0} 
      return num = 2 * turnsNum(disksNumber - 1) + 1;
  } 
  
  let turnsSec = function(turnsSpeed) {
    return speed =  Math.floor(turnsNum(disksNumber) / (turnsSpeed / 60 / 60));
  }
  
return {"turns": turnsNum(disksNumber), "seconds": turnsSec(turnsSpeed)};
}

module.exports = {
  calculateHanoi
};
