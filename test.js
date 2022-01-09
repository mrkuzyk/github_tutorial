function calculateTotalPrice(order) {
  let total = 0;
  // Change code below this line

  

  for (const price of order) {
    total += price;
  }

  // Change code above this line
  return total;
}

// Інструкція перебирає "прайс" в "ордері" і потім всі прайси додає докупи