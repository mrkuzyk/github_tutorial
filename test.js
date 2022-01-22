// Change code below this line
const getSortedFriends = users => {
   const uniqFriends = [...users]
    .flatMap(user => user.friends)
    .filter((user, index, array) => array.indexOf(user) === index)
    .sort((a, b) => a.localeCompare(b));
    return uniqFriends;
};
// Change code above this line

// спочатку робимо масив всіх друзів, і далі відсіюємо до унікальних,
// після чого робимо їх по алфавіту