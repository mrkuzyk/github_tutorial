function changeEven(numbers, value) {
  // Change code below this line
    
//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] % 2 === 0) {
//       numbers[i] = numbers[i] + value;
//     }
//   }
    
    const newNumbers = [];

  numbers.forEach(number => {
    if (number % 2 === 0) {
      newNumbers.push(number + value);
    } else {
      newNumbers.push(number)
    }
    
  })
  return newNumbers
  // Change code above this line
}
