const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    genres: ["adventure", "history"],
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    genres: ["fiction", "mysticism"],
  },
  {
    title: "Redder Than Blood",
    author: "Tanith Lee",
    genres: ["horror", "mysticism", "adventure"],
  },
];
// Change code below this line
// const allGenres = books;
// const uniqueGenres = allGenres;

const allGenres = books.flatMap(book => book.genres);
const uniqueGenres = allGenres.filter((book, index, array) => array.indexOf(book) === index);

// в "аллЖанр" ми отримали розгладжені всі жанри з повторами.
// в "юнікю" ми отримали унікальні жанри. "аррайІндексОф" шукає перше
// співпадіння і отримує йогоіндекс. В параметрі індекс зберігається
// індекс теперішнього елемента "бук" при переборі через "фільтер"

// якщо результат "індексОф" і значеня "індекс" рівні то це унікальний елемент
