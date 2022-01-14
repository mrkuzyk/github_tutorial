const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

function calculateTotalPrice(productName) {
  // Пиши код ниже этой строки

for (product of products){
  if (product.name === productName){
  return product.price * product.quantity
  }
}
return 0

  // Пиши код выше этой строки
}

console.log(calculateTotalPrice("Blaster"));
console.log(calculateTotalPrice("Radar"));
console.log(calculateTotalPrice("Droid"));
console.log(calculateTotalPrice("Grip"));
console.log(calculateTotalPrice("Scanner"));


// функція приймає назву "нейм" і порівнює чи є таке ім'я в масиві.
// Якщо є, то повертається результат множення ціни на кількість. В іншому
// разі повертається 0. 