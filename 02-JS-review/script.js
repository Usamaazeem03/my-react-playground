const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: false,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    title: "A Game of Thrones",
    id: 5,
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}
////////////////////////////////////////////////////////
// Destrcucturing
const book = getBook(1); // Get the book with id ...
// Destructure properties from the book object
// const title = book.title;
// const author = book.author;

const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
  book;
console.log(title, author, genres);
// Destructure properties from the genres array
// const primaryGenre = genres[0];
// const secondaryGenre = genres[1]

// const [primaryGenre, secondaryGenre] = genres;
// console.log(primaryGenre, secondaryGenre);

////////////////////////////////////////////////////////
// REST/SPREAD OPERATORS
// with Array
// rest operator(...)
const [primaryGenre, secondaryGenre, ...otherGenre] = genres;
console.log(primaryGenre, secondaryGenre, otherGenre);

// spread operator (...)
const newGenres = ["epic fantasy", ...genres];
console.log(newGenres);
// with objects
// spread operator (...)
const updatedBook = {
  ...book,
  // Adding a new property
  movePublicationDate: "2001-12-19",
  // Overwriting an existing property
  pages: 1210,
};
console.log(updatedBook);
////////////////////////////////////////////////////////
// Template Literals
const bookInfo = `Title: ${title}, Author: ${author}, Pages: ${pages}, Publication Date: ${publicationDate}`;
console.log(bookInfo);
////////////////////////////////////////////////////////
// Ternary Operator(condition ? expressionIfTrue : expressionIfFalse)
const pagesRange = pages > 1000 ? "over thousand" : "less than 1000";
// condition ? expressionIfTrue : expressionIfFalse
console.log(`The book has ${pagesRange} pages.`);
////////////////////////////////////////////////////////
// ARROW FUNCTIONS
const bookTitles = data.map((book) => book.title);
console.log(bookTitles);
////////////////////////////////////////////////////////
// SHORT-CIRCUIT AND LOGICAL OPERATORS: &&,||, ??
// and operator (&&) first value is falsy, return the first value is short-circuiting
console.log(true && "NO short-circuiting");
console.log(false && "Is short-circuiting");
console.log(hasMovieAdaptation && "This book has a movie");

// falsy values: 0, "", null, undefined, NaN
console.log(0 && "Usama");
console.log(NaN && "1");

// or operator (||) first value is falsy, return the second value is no short-circuiting
console.log(false || "This is a truthy value");
console.log(true || "This is a falsy value");

const urduTranslation = book.translations.urdu || "NOT TRANSLATED";
console.log(urduTranslation);

const countWrong = book.reviews.librarything || "NO DATA";
console.log(countWrong);

// nullish coalescing operator (??) first value is null or undefined, return the second value
const count = book.reviews.librarything?.ratingsCount ?? "NO DATA";
console.log(count);
////////////////////////////////////////////////////////
// OPTIONAL CHAINING

function getTotalReviews(book) {
  // Using optional chaining (?.) to safely access nested properties
  const librarything = book.reviews.librarything?.reviewsCount ?? 0;
  const goodreads = book.reviews.goodreads?.reviewsCount;
  return librarything + goodreads;
}
console.log(getTotalReviews(book));

//////////////////////////////////////////////////////
// ARRAY METHODS
// Map
const x = [1, 2, 3, 4, 5].map((num) => num * 2);
console.log(x);

const titles = data.map((book) => book.title);
console.log(titles);

const essentialData = data.map((book) => ({
  title: book.title,
  author: book.author,
  reviewsCount: getTotalReviews(book),
}));
console.log(essentialData);

// Filter
const longBooks = data.filter((book) => book.pages > 500);
console.log(longBooks);

const hasMoviebooks = data
  .filter((book) => book.hasMovieAdaptation)
  .filter((book) => book.pages < 1000)
  .filter((book) => publicationDate < "1900-01-01"); // 😁
console.log(hasMoviebooks);

const adventureBooks = data
  .filter((book) => book.genres.includes("adventure"))
  .map((book) => book.title);
console.log(adventureBooks);

// Reduce
//---------------
// =data.reduce((accumulator, currentValue) => {
//   // logic to combine accumulator and currentValue
//   return accumulator;
// }, initialValue);
const allBooksPages = data.reduce((total, book) => total + book.pages, 0);
console.log(allBooksPages);

// Sort
const arr = [1, 2, 2, 3, 3, 4, 5, 2];
const sortesdArr = arr.slice().sort((a, b) => a - b);
console.log(sortesdArr);

// Sort books by publication date
const sortedBooks = data.sort((a, b) =>
  a.publicationDate.localeCompare(b.publicationDate)
);
console.log(sortedBooks);
// Sort by pages
const sortedByPages = data.sort((a, b) => a.pages - b.pages);
console.log(sortedByPages);

// working with immutable arrays
const newBook = {
  id: 6,
  title: "Harry potter and the Chamber of Secrets",
  author: "J. K. Rowling",
};
// add a new book to the data array
const booksAfterAdd = [...data, newBook];
console.log(booksAfterAdd);

// Delete a book by id
const booksAfterDelete = booksAfterAdd.filter((book) => book.id !== 3);
console.log(booksAfterDelete);

// Update a book by id
const bookAfterUpdate = booksAfterDelete.map(
  (book) => (book.id === 1 ? { ...book, pages: 1210 } : book) // update one property one object
);
console.log(bookAfterUpdate);

////////////////////////////////////////////////////////////
// Asynchronous JavaScript: Promises, Async/Await, Fetch API
// Fetch API to get data from a URL
fetch("https://jsonplaceholder.typicode.com/todos")
  .then((response) => response.json())
  .then((data) => console.log(data));

console.log("usama");
//Async/Await
async function getTodos() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    if (!response.ok) throw new Error("Network response was not ok");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
}
getTodos();
console.log("usama after async function call");
