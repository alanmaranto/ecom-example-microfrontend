import faker from "faker";

const mount = (htmlElement) => {
  const cartText = `<div>You have ${faker.datatype.number()} items in your cart.</div>`;

  htmlElement.innerHTML = cartText;
};

// Context/Situation #1
// We are running this file in development in isolation
// We are using our local index.html file
// which definitely has an element with an id of 'dev-cart'
// We want to inmediately render our app into that element
if (process.env.NODE_ENV !== "production") {
  const htmlEl = document.querySelector("#dev-cart");

  // Assuming our container doesnt have an element
  if (htmlEl) {
    // We are probable running in isolation
    mount(htmlEl);
  }
}

// Context/Situation #2
// We are running this file in development or production
// through the CONTAINER app
// and there is NO GUARANTEE that an element with and id of 'dev-cart' exists
// WE DO NOT WANT TO try to inmediately render the app
export { mount };
