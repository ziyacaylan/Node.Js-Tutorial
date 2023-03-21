// const promise1 = new Promise((resolve, reject) => {
//   resolve("Veriler Alındı...");
//   reject("Bağlantı hatası oluştu");
// });

// //console.log(promise1);

// promise1
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((error) => console.log(error));

console.log("***************************************");

const books = [
  { name: "Kitap 1", yazar: "Yazar 1" },
  { name: "Kitap 2", yazar: "Yazar 2" },
  { name: "Kitap 3", yazar: "Yazar 3" },
];

const listBooks = () => {
  books.map((book) => console.log(book.name));
};

const addBook = (newBook) => {
  const promise1 = new Promise((resolve, reject) => {
    books.push(newBook);
    resolve(books);
    reject("Bir Hata Oluştu....");
  });
  return promise1;
};

addBook({ name: "Kitap 4", yazar: "Yazar 4" })
  .then((res) => {
    console.log("YENİ LİSTE : ");
    listBooks();
  })
  .catch((err) => {
    console.log(err);
  });
