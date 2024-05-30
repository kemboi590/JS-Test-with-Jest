const { default: expect } = require("expect");

const API = require("../src/API");
const api = new API();

// fetchProductsAfter20Sec should return an array of products

// it fails after 5 seconds

// test("fetchProductsAfter20Sec should return an array of products", async () => {
//   // test code
//   const res = await api.fetchProductsAfter20Sec();

//   expect(res).toBeInstanceOf(Array); // will fail because the test will take 20 seconds to run

// });

// jest fake timers
test("fetchProductsAfter20Sec should return an array of products", async () => {
  // test code
  jest.useFakeTimers(); // creates a fake timer
  const promise = api.fetchProductsAfter20Sec();
  jest.advanceTimersByTime(20000); // advance the timer by 20 seconds
  const res = await promise;
  console.log(res);

  expect(res).toBeInstanceOf(Array); // will fail because the test will take 20 seconds to run
});
