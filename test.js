// Change code below this line
const isAnyUserActive = users => {
   const activeUser = users.some(user => user.isActive === true);
   return activeUser;
};
// Change code above this line

// перевіряє чи хоч хтось активний