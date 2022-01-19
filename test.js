// Change code below this line
const getFriends = (users) => {
    const allFriends = users.flatMap(user => user.friends);
    const mutualFriends = allFriends.filter((user, index, array) => array.indexOf(user) === index);
    return mutualFriends;
};
// Change code above this line

// функція спочатку створює масив всіх друзів, а потім залишає
// тільки різних ім'я (не повторюються)