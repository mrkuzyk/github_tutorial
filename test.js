function getEvenNumbers(start, end) {
   // Change code below this line
let evenNumber = [];

for (let i = start; i <= end; i+=1){
  if ((i) % 2 ===0){
    evenNumber.push(i);
  }
}

return evenNumber;

    // Change code above this line
  }

  console.log(getEvenNumbers(2, 5));
  console.log(getEvenNumbers(3, 11));
  console.log(getEvenNumbers(6, 12));
  console.log(getEvenNumbers(8, 8));
  console.log(getEvenNumbers(7, 7));


//   функція приймає два числа: початок і кінец. Вона перевіряє кожне число від старт +1 на те чи є воно парне. якщо це число парне, то воно добавляється в новий лет і повертається!