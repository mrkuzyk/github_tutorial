// Change code below this line
function findMatches(first, ...args) {
  const matches = []; // Don't change this line

  for (const element of args){
    if (first.includes(element)){
      matches.push(element);
    }
  }
  // Change code above this line
  return matches;
}

console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7));
console.log(findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2));
console.log(findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41));
console.log(findMatches([63, 11, 8, 29], 4, 7, 16));


// приймаєсо масив даних і інші дані (через "рест"). Потім перевіряємо
// чи є в інших даних такі ж цифри. Якщо є, то "пушимо" дані в нову
// констанку "матчес" і вертаємо тільки спільні