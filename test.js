// Change code below this line
const getTotalFriendCount = users => {
   const numberOfFriends = users.reduce((total, user) => total += user.friends.length, 0);
   return numberOfFriends;
};
// Change code above this line

// рахує і сумує кількість друзів в цифрах