// Change code below this line
const getNamesSortedByFriendCount = users => {
   const sortName = [...users]
    .sort((a, b) => a.friends.length - (b.friends.length))
    .map(user => user.name);
    return sortName;
};
// Change code above this line

// спочатку сортуємо по кількості друзів, а потім робимо з того масив ім'я