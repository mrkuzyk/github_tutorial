// Change code below this line
const sortByDescendingFriendCount = users => {
   const numbFriends = [...users].sort((a, b) => b.friends.length - a.friends.length);
   return numbFriends;
};
// Change code above this line

// кількість друзів по зменшенні