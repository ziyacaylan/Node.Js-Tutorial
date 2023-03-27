## CLEAN Blog Projesi

### Clean Blog projemizin bu 2. bölümünde aşağıdaki işlemleri yapalım.

- Public klasörü oluşturup statik dosyalarımızı içerisine yerleştirelim.
- İlgili middleware fonksiyonunu yazarak public klasörümüzü uygulamamıza kaydedelim.
- EJS modülünü indirelim.
- Uygulamamızda EJS modülünü kullanacağımızı belirtelim.
- Views klasörü oluşturalım ve tüm .html dosyalarımız views klasörü içerisinde .ejs dosyalarına çevirelim.
- Partials klasör yapısını oluşturalım.
- İlgili yönlendirmeleri ve \_navigation.ejs klasöründeki link düzenlemelerini yapalım.

### Ödev 8 - CLEAN Blog Projesi

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
