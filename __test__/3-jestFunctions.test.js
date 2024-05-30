// Jest functions
// https://jestjs.io/docs/en/api

// write a test to check if jest is called 3 times and returs 1

// const jestFn = jest.fn(() => {
//     console.log("jest function called");
//     return 1;
// })

// test("jest function should be called 3 times and return 1", () => {
//     jestFn();
//     jestFn();

//     const result = jestFn();
//     console.log(result);

//     // assertions
//     expect(result).toBe(1);
//     expect(jestFn).toHaveBeenCalledTimes(3);

// });

// jest functions with arguements

const jestFnWithArguements = jest.fn((a, b) => {
  console.log("jest function called");
  return a + b;
});

test("jest function should be called 3 times and return 1", () => {
  const result1 = jestFnWithArguements(1, 2);
  const result2 = jestFnWithArguements(2, 3);
  const result3 = jestFnWithArguements(3, 4);
  // console.log(result1);

  //   assertions
  expect(result1).toBe(3);
  expect(result2).toBe(5);
  expect(result3).toBe(7);
  expect(jestFnWithArguements).toHaveBeenCalledTimes(3);
});

// toHaveBeen CalledWith
// expect(jestFnWithArguements).toHaveBeenNthCalledWith(1, 2);
