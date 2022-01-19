// Change code below this line
const getInactiveUsers = (users) => {
   const activeUsers = users.filter(user => user.isActive !== true);
   return activeUsers;
};
// Change code above this line

// функція повертає тільки неактивних користувачів