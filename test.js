// Change code below this line
const getActiveUsers = (users) => {
   const activeUsers = users.filter(user => user.isActive === true);
   return activeUsers;
};
// Change code above this line

// функція повертає тільки активних користувачів