// Change code below this line
const getUserWithEmail = (users, email) => {
   const uniqueUser = users.find(user => user.email === email);
   return uniqueUser;
};
// Change code above this line


// функція шукає і віддає користувача за емайлом конкретним