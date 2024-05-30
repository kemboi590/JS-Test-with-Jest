const { default: expect } = require("expect");

const API = require("../src/API");
const api = new API();

// es6 async/ await

// test("fetchUsers should return an array of users", async () => {
//   // test code
//   const res = await api.fetchUsers();
//   console.log(res);
//   expect(res).toBeInstanceOf(Array);

//   //   toEqual

//   expect(res).toEqual([
//     { name: "John", age: 25 },
//     { name: "Jane", age: 23 },
//     { name: "Jim", age: 27 },
//     { name: "Jill", age: 22 },
//   ]);
// });

// .then() syntax
test("fetchProducts should return an array of products", () => {
  return api
    .fetchProducts()
    .then((products) => {
      console.log(products);
      expect(products).toBeInstanceOf(Array);
    })
    .catch((err) => {
      console.log(err);
    });
});
