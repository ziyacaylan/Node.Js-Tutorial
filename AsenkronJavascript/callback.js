const func1 = () => {
  console.log("Func 1 Tamamlandı...!");
  func3();
};

const func2 = () => {
  console.log("Func 2 Tamamlandı...!");
};

const func3 = () => {
  console.log("Func 3 Tamamlandı...!");
  func2();
};

func1();

/************************* */

let x = 5;

console.log("1. gelen sayı: ", x);

setTimeout(() => {
  x = x + 5;
  console.log("2. gelen sayı: ", x);
}, 5000);

x = x + 5;
console.log("3. gelen sayı: ", x);

/************************* */

const books = [
  { name: "Kitap 1", yazar: "Yazar 1" },
  { name: "Kitap 2", yazar: "Yazar 2" },
  { name: "Kitap 3", yazar: "Yazar 3" },
];

const listBooks = () => {
  books.map((book) => console.log(book.name));
};

const addBook = (newBook, callback) => {
  books.push(newBook);
  callback();
};

addBook({ name: "Kitap 4", yazar: "Yazar 4" }, listBooks);
//listBooks();
