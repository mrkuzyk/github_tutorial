function findNumber(start, end, divisor) {
  // Change code below this line
  let number;

  for (let i = start; i < end; i += 1) {
    if (i % divisor === 0) {
      return i;
//    break;
    }
    }
    // return number;
  // Change code above this line
}

console.log(findNumber(2, 6, 5));
console.log(findNumber(8, 17, 3));
console.log(findNumber(6, 9, 4));
console.log(findNumber(16, 35, 7));


// функція приймає три числа і перевіря від "старт" до "енд".
// далі шукає число яке ділиться на "дівісор" без залишку і повертає його

// ми відмовилися від брейка і ретурна бо знайшли коротший варіант