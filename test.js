// Change code below this line

// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;

//   orderedItems.forEach(function (item) {
//     totalPrice += item;
//   });

//   return totalPrice;
// }

const calculateTotalPrice = orderedItems => {
  let totalPrice = 0;

  orderedItems.forEach((item) => totalPrice += item);
  return totalPrice;
}
// Change code above this line


// СЛІДКУВАТИ ЗА ДУЖКАМИ!