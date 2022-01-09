function filterArray(numbers, value) {
  // Change code below this line
  const filteredNumbers = [];

  
  for (const number of numbers){
    if (number > value) {
      filteredNumbers.push(number);
    }
  }

  return filteredNumbers;
  // Change code above this line
}

console.log(filterArray([1, 2, 3, 4, 5], 3));
console.log(filterArray([1, 2, 3, 4, 5], 4));
console.log(filterArray([1, 2, 3, 4, 5], 5));
console.log(filterArray([12, 24, 8, 41, 76], 38));
console.log(filterArray([12, 24, 8, 41, 76], 20));

// функція вибирає методом перевірки числа більші за "валує" і добавляє ці числа до нової константи