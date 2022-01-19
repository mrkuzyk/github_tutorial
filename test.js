// Change code below this line
const getUsersWithAge = (users, minAge, maxAge) => {
 const ageFilter = users.filter(user => user.age >= minAge && user.age <= maxAge);
 return ageFilter;

};
// Change code above this line

// функція повертає користувачів вік яких між мінімальним і максимальним.