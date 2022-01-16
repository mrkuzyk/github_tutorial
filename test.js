// Change code below this line
function add(...args) {
  let sum = 0;
  for (element of args)
    sum += element;
    return sum;

  // Change code above this line
}

console.log(add(15, 27));
console.log(add(12, 4, 11, 48));
console.log(add(32, 6, 13, 19, 8));
console.log(add(74, 11, 62, 46, 12, 36));


// використовуючи "рест" ми прийняли числа і зробили з них масив. Далі 
// ми перебрали масив і повернули суму всіх чисел.