const order = "2 double shawarmas";
function processOrder(callback, callback1, callback2, callback3, callback4) {
  callback(callback1, callback2, callback3, callback4);
}
async function placeOrder(callback1, callback2, callback3, callback4) {
  console.log(`placing order for: ${order}`);
  const placeOrder = await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(order);

      console.log(`Order for ${order} has been placed`);
    }, 2000);
  });
  callback1(callback2, callback3, callback4);
}
async function prepareOrder(callback2, callback3, callback4) {
  console.log(`Preparing: ${order}`);
  const placeOrder = await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(order);
      console.log(`${order} is ready`);
    }, 3000);
  });
  callback2(callback3, callback4);
}
async function packageOrder(callback3, callback4) {
  console.log(`Packaging: ${order}`);
  const placeOrder = await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(order);
      console.log(`${order} has been packaged`);
    }, 2000);
  });
  callback3(callback4);
}
async function deliverOrder() {
  console.log(`Delivering: ${order}`);
  const placeOrder = await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(order);
      console.log(`${order} has been delivered`);
    }, 4000);
  });
}

processOrder(placeOrder, prepareOrder, packageOrder, deliverOrder);
