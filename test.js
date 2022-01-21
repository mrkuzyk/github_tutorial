// Change code below this line
const sortByName = users => {
   const userName = [...users].sort((a, b) => a.name.localeCompare(b.name));
   return userName;
};
// Change code above this line