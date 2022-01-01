import faker from "faker";

let products = "";

for (let i = 0; i < 5; i++) {
  const name = faker.commerce.productName();
  products += `<div>${name}</div>`;
}

document.querySelector("#dev-products").innerHTML = products;

// Context/Situation #1
// We are running this file in development in isolation
// We are using our local index.html file
// which definitely has an element with an id of 'dev-products'
// We want to inmediately render our app into that element

// Context/Situation #2
// We are running this file in development or production
// through the CONTAINER app
// and there is NO GUARANTEE that an element with and id of 'dev-products' exists
// WE DO NOT WANT TO try to inmediately render the app
