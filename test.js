// Change code below this line
const isEveryUserActive = (users) => {
   const activeUsers = users.every(user => user.isActive === true);
   return activeUsers;
};
// Change code above this line


// перевірка користувачів на активність (впринципі можна було це робити і через фільтер)