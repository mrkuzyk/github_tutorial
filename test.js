function countTotalSalary(salaries) {
  let totalSalary = 0;
  // Change code below this line
const values = Object.values(salaries);

for (value of values){
  totalSalary += value;
}
  // Change code above this line
  return totalSalary;
}

console.log(countTotalSalary({}));
console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));
console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }));

// через "обжект.велю" ми отирмали всі значення зарплати
// після чого перебрали всі дані і зробили їхню суму