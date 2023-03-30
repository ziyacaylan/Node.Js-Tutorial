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
const mongoose = require("mongoose");
const ejs = require("ejs");
const path = require("path");
const Post = require("./models/Post");

const app = express();

//connect DB
mongoose.connect("mongodb://localhost/cleanblog-test-db", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//TEMPLATE ENGINE
app.set("view engine", "ejs");

// MIDDLEWARE
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//ROUTES
app.get("/", async (req, res) => {
  const posts = await Post.find({});
  res.render("index", { posts });
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/add_post", (req, res) => {
  res.render("add_post");
});

app.post("/add", async (req, res) => {
  await Post.create(req.body);
  res.redirect("/");
});

const port = 3000;

app.listen(port, () => {
  console.log(`Sunucu ${port} portunda başlatıldı..`);
});
```

## <a href="./Patika-Odev-8">Ödev Linki <<<---<a/>

</details>
