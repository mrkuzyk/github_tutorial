function filterArray(numbers, value) {
   // Change code below this line
let bigNumber = [];
    for (let i = 0; i < numbers.length; i += 1){
        if (numbers[i] > value) {
            bigNumber.push(numbers[i]);
        }
    }
    return bigNumber;

  // Change code above this line
}

console.log(filterArray([1, 2, 3, 4, 5], 3));
console.log(filterArray([12, 24, 8, 41, 76], 38));
console.log(filterArray([12, 24, 8, 41, 76], 20));