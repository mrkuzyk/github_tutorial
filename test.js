const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

function getAllPropValues(propName) {
  // Change code below this line
const unknownProp = [];

for (product of products){
  if(product[propName]){
    unknownProp.push(product[propName]);
  }
}
return unknownProp;
  // Change code above this line
}

console.log(getAllPropValues("name"));
console.log(getAllPropValues("quantity"));
console.log(getAllPropValues("price"));
console.log(getAllPropValues("category"))

// функція приймає параметр "пропНейм" і перевіряє чи такий параметр є
// взагалі. Далі якщо є, то після проганяє через "фор...оф" і повертає
// значення властивостей. А якщо немає то нічого не вертає