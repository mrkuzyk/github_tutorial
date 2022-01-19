// Change code below this line
const sortByAscendingBalance = users => {
    const usersBalance = [...users].sort((a,b) => a.balance - b.balance)
    return usersBalance
};
// Change code above this line