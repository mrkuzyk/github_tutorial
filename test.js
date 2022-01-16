const firstGroupScores = [64, 42, 93];
const secondGroupScores = [89, 14, 51, 26];
const thirdGroupScores = [29, 47, 18, 97, 81];
// Change code below this line

// const allScores = [];
// const bestScore = allScores;
// const worstScore = allScores;


const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
const bestScore = Math.max(...allScores);
const worstScore = Math.min(...allScores);

// спочатку ми розпиляли точні копії трьох масивів даних і 
// додади по черзі. Після того, ми знайшли найбільше 
// число і найменше число.