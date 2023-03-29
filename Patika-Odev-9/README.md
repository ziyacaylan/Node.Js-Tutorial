## CLEAN Blog Projesi

### Clean Blog Projesi 3. Bölüm

Clean Blog projemizin bu 3. bölümünde aşağıdaki işlemleri yapalım.

- cleanblog-test-db adında bir veri tabanı için mongoose ile gerekli bağlantı bilgilerini yazalım.
- "Add New Post" sayfamızdan göndericeğimiz veriler req.body ile yakalayalım, gerekli middleware fonksiyonarını kullanalım.
- title:String, detail:String, dateCreated:Date(default now) özelliklerine sahip Post modelini oluşturalım.
- Veri tabanımızda 3 adet pos dökümanı oluşturalım.
- Oluşturduğumuz post dökümanlarını Blog sitemizin anasayfasında gösterelim.

### Ödev 9 - CLEAN Blog Projesi

<details>  
  <summary>Details</summary>
  ### package.json

```json
{
  "name": "patika-odev-8",
  "version": "1.0.0",
  "description": "Clean Blog Project",
  "main": "app.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "nodemon app.js"
  },
  "author": "ziyacaylan",
  "license": "ISC",
  "dependencies": {
    "ejs": "^3.1.9",
    "express": "^4.18.2",
    "mongoose": "^7.0.3",
    "nodemon": "^2.0.22"
  }
}
```

### app.js

```js
const express = require("express");
const ejs = require("ejs");

const app = express();

//TEMPLATE ENGINE
app.set("view engine", "ejs");

// MIDDLEWARE
app.use(express.static("public"));

//ROUTES
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/add_post", (req, res) => {
  res.render("add_post");
});

app.get("/post", (req, res) => {
  res.render("post");
});

const port = 3000;

app.listen(port, () => {
  console.log(`Sunucu ${port} portunda başlatıldı..`);
});
```

## <a href="./Patika-Odev-8">Ödev Linki <<<---<a/>

</details>
