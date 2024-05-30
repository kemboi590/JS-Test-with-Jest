// Mocking - used to mock a fake function

// generate random numbers
const Generator = require("../src/Generator");

test("generateRandomNumbers should return an array of random numbers", () => {
// test code


// test result = [1,1,1]
const generate = new Generator();
const result = generate.generateRandomNumbers(3);
console.log(result);
});