// import { users } from "./users.js";

// This is a test file to practice handling an array data

const orders = [
  {
    orderId: "ORD001",
    userId: 3,
    items: [
      { productId: 1, quantity: 3, price: 150 },
      { productId: 3, quantity: 6, price: 60 },
    ],
    status: "delivered",
    orderDate: "2025-06-26",
  },
  {
    orderId: "ORD002",
    userId: 1,
    items: [
      { productId: 5, quantity: 2, price: 100 },
      { productId: 6, quantity: 3, price: 58 },
    ],
    status: "shipped",
    orderDate: "2025-10-26",
  },
  {
    orderId: "ORD003",
    userId: 1,
    items: [
      { productId: 2, quantity: 8, price: 15 },
      { productId: 3, quantity: 3, price: 60 },
    ],
    status: "shipped",
    orderDate: "2025-10-26",
  },
  {
    orderId: "ORD004",
    userId: 6,
    items: [
      { productId: 1, quantity: 1, price: 150 },
      { productId: 5, quantity: 7, price: 100 },
    ],
    status: "processing",
    orderDate: "2025-10-27",
  },
];

// ------------------------------------------------------------
//
//  Practice
//
// ------------------------------------------------------------

// 1, Create an array of all orderIds from the orders array.
//    Extract all orderIds using map()
const result1 = orders.map((order) => order.orderId);

console.log(result1);

// 2, Use destructuring to extract status and orderDate from each order.
const result2 = orders.map((order) => {
  const { status, orderDate } = order;
  return { status, orderDate };
});

console.log(result2);

// 3, Use destructuring to extract only the first item from items of each order.
const result3 = orders.map(({ items: [firstItem] }) => firstItem);

console.log(result3);

// 4, Map over the orders to create an array of userIds.
const result4 = orders.map((order) => order.userId);

console.log(result4);

// 5, Destructure to get the first item and calculate the total quantity for it.
//    (Calculate total quantity of the first item in each order)
const result5 = orders.map(({ items: [firstItem] }) => firstItem.quantity);

console.log(result5);
// 6, Use destructuring to get productId and price of the second item in items.
//    Extract productId and price of the second item in each order
const result6 = orders.map((order) => {
  const secondItem = order.items[1];
  return {
    productId: secondItem.productId,
    price: secondItem.price,
  };
});

console.log(result6);
// 7, Map orders into objects like {orderId, userId, status}.
//    Create an array of order summaries
const result7 = orders.map((order) => {
  return {
    orderId: order.orderId,
    userId: order.userId,
    status: order.status,
  };
});

console.log(result7);

// 8, Map orders to objects {orderId, firstItemQuantity}.
//    Extract orderId and the first item’s quantity
const result8 = orders.map((order) => {
  const firstItem = order.items[0];
  return {
    orderId: order.orderId,
    firstItemQuantity: firstItem.quantity,
  };
});

console.log(result8);

// 9, Use destructuring and map() to create an array of total prices for each order.
const totalPrices = orders.map(({ items }) => {
  let total = 0;
  items.forEach(({ price }) => {
    total += price;
  });
  return total;
});

console.log(totalPrices);

// 10, Only include orders with status: "shipped" and map to {orderId, userId}.
const mappedByStatus = orders
  .filter(({ status }) => status === "shipped")
  .map(({ orderId, userId }) => {
    return {
      orderId,
      userId,
    };
  });

console.log(mappedByStatus);
// 11, Map through all orders and flatten to get a single array of all productIds.
const allProductIds = [];

orders.forEach(({ items }) => {
  items.forEach(({ productId }) => {
    allProductIds.push(productId);
  });
});

console.log(allProductIds);

// Use 'reduce'
const allProduct = orders.reduce((acc, { items }) => {
  items.forEach(({ productId }) => {
    acc.push(productId);
  });
  return acc;
}, []);

console.log(allProduct);

// 12, Map each order to {orderId, quantities: [ ... ] }
//     Extract orderId and all quantities in one array
const result12 = orders.map(({ orderId, items }) => {
  const quantities = items.map(({ quantity }) => quantity);
  return {
    orderId,
    quantities,
  };
});

console.log(result12);

// 13, Suppose we have users array; map userId from orders to users array to get first names.
//     Extract firstName of users from orders

// 14, Map orders to {orderId, itemCount} where itemCount is the number of items in that order.
//     Create an array of objects showing orderId and item count
const result14 = orders.map(({ orderId, items }) => {
  let itemCount = 0;
  items.forEach(({ quantity }) => {
    itemCount += quantity;
  });
  return {
    orderId,
    itemCount,
  };
});

console.log(result14);

// 15, Map orders to {orderId, totalValue} where totalValue = sum of (quantity * price)
//     Create array of objects with orderId and total value
const result15 = orders.map(({ orderId, items }) => {
  let totalValue = items.reduce(
    (result1, { quantity, price }) => result1 + quantity * price,
    0,
  );

  return {
    orderId,
    totalValue,
  };
});

console.log(result15);
