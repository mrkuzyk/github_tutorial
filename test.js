const bookShelf = {
  books: ["The last kingdom", "Haze", "The guardian of dreams"],
  updateBook(oldName, newName) {
    // Change code below this line
  const indexOldElement = this.books.indexOf(oldName);
  // return indexOldElement;
  const addOldElement = this.books.splice(indexOldElement, 1, newName);
  return this.books;
    // Change code above this line
  },
};


// console.log(bookShelf.updateBook("Haze", "Dungeon chronicles"));
// console.log(bookShelf.updateBook("The last kingdom", "Dune"));