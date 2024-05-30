class API {
  fetchUsers() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { name: "John", age: 25 },
          { name: "Jane", age: 23 },
          { name: "Jim", age: 27 },
          { name: "Jill", age: 22 },
        ]);
      }, 1000);
    });
  }

  fetchProducts() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { name: "Apple", price: 1.0 },
          { name: "Banana", price: 0.5 },
          { name: "Cherry", price: 2.0 },
          { name: "Date", price: 3.0 },
        ]);
      }, 1000);
    });
  }

  fetchProductsAfter20Sec() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { name: "Apple", price: 1.0 },
          { name: "Banana", price: 0.5 },
          { name: "Cherry", price: 2.0 },
          { name: "Date", price: 3.0 },
        ]);
      }, 20000);
    });
  }
}

module.exports = API;
