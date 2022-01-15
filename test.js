function countProps(object) {
  // Change code below this line
  let propCount = Object.keys(object).length;


//   for (const key in object) {
//     if (object.hasOwnProperty(key)) {
//       propCount += 1;
//     }
//   }
  return propCount;
  // Change code above this line
}

console.log(countProps({}));
console.log(countProps({ name: "Mango", age: 2 }));
console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));


// переформатував код через "обжект.кейс"