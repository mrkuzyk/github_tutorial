const scores = [89, 64, 42, 17, 93, 51, 26];
// Change code below this line

// const bestScore = scores;
// const worstScore = scores;

const bestScore = Math.max(...scores);
const worstScore = Math.min(...scores);


// розпилюємо масив чисел через "...спред" і визначаємо математичний 
// максимум і мінімум