## CLEAN Blog Projesi

### İlk Aşama Projede Yapılanlar.

- Proje klasörünü oluşturalım
- Package.json dosyasını (npm init) oluşturalım.
- Express ve Nodemon modüllerini indirelim (npm i express, npm i nodemon)
- Ben projemi github da komple bir Tutorial klasöründe tutuyorum. Ayrı bir klasörde tutacak olanlar "git init" komutu ile local repo oluşturup daha sonra github üzerinde bir repo oluşturarak oraya push layabilirler. Ben görev tamamlandığında commit oluşturup göndereceğim.
- get request görevi : const blog = { id: 1, title: "Blog title", description: "Blog description" }, içeriğini gönderelim.
- son olarak .gitignore dosyasını oluşturmayı unutmayalım.
- Ben prettier i globalde kullandığımdan görevin o kısmını projeye dahil etmiyorum.

### Ödev 7 - CLEAN Blog Projesi

<details>  
  <summary>Details</summary>
  ### package.json

```json
{
  "name": "patika-odev-7",
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
    "express": "^4.18.2",
    "nodemon": "^2.0.22"
  }
}
```

### app.js

```js
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  const blog = {
    id: 1,
    title: "Blog Title",
    description: "Blog Description",
  };
  res.send(blog);
});

const port = 3000;

app.listen(port, () => {
  console.log(`Sunucu ${port} portunda başlatıldı..`);
});
```

## <a href="./Patika-Odev-7">Ödev Linki <<<---<a/>

</details>
