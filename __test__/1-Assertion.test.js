const { default: expect } = require("expect");

const getRandomNumber = () => Math.floor(Math.random() * 100);

// ToBe - used to compare primitive data types ===
// expect to get a number

// test("expect to get a number", () => {
//   console.log(getRandomNumber());
//   expect(typeof getRandomNumber()).toBe("number");
// });



// expect getRandomNumber to be greater than 0


// test("expect getRandomNumber to be greater than 0", () => {
//   console.log(getRandomNumber());
//   expect(getRandomNumber()).toBeGreaterThan(0);
// });

// // expect getRandomNumber to be less than 100
// test("expect getRandomNumber to be less than 100", () => {
//   console.log(getRandomNumber());
//   expect(getRandomNumber()).toBeLessThan(100);
// });

// // expect getRandomNumber to be greater than or equal to 0
// test("expect getRandomNumber to be greater than or equal to 0", () => {
//   console.log(getRandomNumber());
//   expect(getRandomNumber()).toBeGreaterThanOrEqual(0);
// });

// // expect -1 to be less than or equal to 0
// test("expect -1 to be less than or equal to 0", () => {
//   expect(-1).toBeLessThanOrEqual(getRandomNumber());
// });

// ToEqual - used to compare objects and arrays

// test('expect(value).toEqual(value)', () => {
//     // test code
//     const object1 = { name: 'John', age: 30 };
//     const object2 = { name: 'John', age: 30 };

//     expect(object1).toEqual(object2); // pass
// })

// toThrow - used to test if a function throws an error
// test("expect(function).toThrow()", () => {
//   // test code
//   const throwError = () => {
//     throw new Error("hello");
//   };

//   expect(throwError).toThrow(); // pass
//   expect(throwError).toThrow("Kemboi"); // fail
// });
