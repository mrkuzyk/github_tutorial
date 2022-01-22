// Change code below this line
const getTotalBalanceByGender = (users, gender) => {
   const genderSum = users
    .filter(user => user.gender === gender)
    .reduce((total, user) => total += user.balance, 0);
    return genderSum;
};
// Change code above this line

// спочатку фільтруємо по гендері, а далі з тих хто лишився робимо суму балансу