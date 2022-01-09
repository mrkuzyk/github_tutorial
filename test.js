function getCommonElements(array1, array2) {
  // Change code below this line
    let commonNumbers = [];
    for (let number of array1) {
        if (array2.includes(number)) {
            commonNumbers.push(number)
        }
    }
return commonNumbers;
 // Change code above this line
}

console.log(getCommonElements([1, 2, 3], [2, 4]));
console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]))
console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
console.log(getCommonElements([1, 2, 3], [10, 20, 30]));


// перевіряємо аррай1 на всі цифри. тоді, якщо аарай2 має в собі цифри з аррай 1, то ми до спільних додаємо ці цифри!