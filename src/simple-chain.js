const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  getLength() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return this.chain.length
  },
  addLink(value) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    this.chain.push(`( ${value} )`);
    return this;
  },
  removeLink(position ) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (position < 1 || position > this.getLength() || !Number.isInteger(position)) {
      this.chain = [];
      throw new Error('You can\'t remove incorrect link!');
  }
  this.chain.splice(position - 1, 1);
  return this;
  },
  reverseChain() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return this.chain.reverse();
  },
  finishChain() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let connected = this.chain.join("~~");
    this.chain = [];
    return connected;
  }
};

module.exports = {
  chainMaker
};
