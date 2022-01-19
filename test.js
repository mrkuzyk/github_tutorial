const players = {
  mango: 1270,
  poly: 468,
  ajax: 710,
  kiwi: 244
};
const playtimes = Object.values(players); // [1270, 468, 710, 244]
// Change code below this line

const totalPlayTime = playtimes.reduce((total, playtime) => (total += playtime), 0);

// Change code above this line
const averagePlayTime = totalPlayTime / playtimes.length;

// отримуємо загальний час в іграх і потім середній час