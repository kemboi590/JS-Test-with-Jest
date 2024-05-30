// Class to get a random number

const getRandomNumber = require("./getRandomNumber");

class Generator {
  /** Generate an array of random numbers
   * @param {number} arguement, The number of random numbers to generate
   * @returns {array} An array of random numbers
   */

  generateRandomNumbers(arguement) {
    if (!Number.isInteger(arguement) || arguement < 1) throw new Error("Must be a positive integer");
    const randomNumbers = [];
    for (let i = 0; i < arguement; i++) {
      randomNumbers.push(getRandomNumber());
    }
    return randomNumbers;
  }
}

module.exports = Generator;
