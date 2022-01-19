// Change code below this line
const calculateTotalBalance = users => {
    const sumUsers = users.reduce((total, user) => total += user.balance, 0);
    return sumUsers;
};
// Change code above this line

// рахуємо суму всіх коштів користувачів