// Change code below this line
const getUsersWithFriend = (users, friendName) => {
 const userFriend = users.filter(user => user.friends.includes(friendName))  
 return userFriend
};
// Change code above this line

// функція повертає тільки тих користувачів, у яких в друзях є "фріендНейм"