const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

function getProductPrice(productName) {
  // Change code below this line
for (product of products){
  if (product.name === productName){
    return product.price;
  } 
}
return null

  // Change code above this line
}

console.log(getProductPrice("Radar"));
console.log(getProductPrice("Grip"));
console.log(getProductPrice("Scanner"));
console.log(getProductPrice("Droid"));
console.log(getProductPrice("Engine"));

// функція шукає продукт за ім'ям і вертає ціну того продукта.
// а коли немає, то вертає null