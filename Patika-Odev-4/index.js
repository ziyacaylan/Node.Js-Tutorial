import { readFile, writeFile, appendFile, unlink, mkdir, rmdir } from "node:fs";

// DOSYA OLUŞTURMA
writeFile(
  "./employees.json",
  '{"name": "Employee 1 Name", "salary": 2000}',
  "utf-8",
  (err) => {
    if (err) console.log(err);
    console.log("DOSYA BAŞARILI BİR ŞEKİLDE OLUŞTURULDU");
  }
);

//DOSYA OKUMA
readFile("./employees.json", "utf-8", (err, data) => {
  err && console.log(err);
  data && console.log(data);
});

// DOSYA GÜNCELLEME
appendFile(
  "./employees.json",
  '{"name": "Employee 2", "salary": 6000}',
  "utf-8",
  (err, data) => {
    err && console.log(err);
    data && console.log(data);
  }
);

// DOSYA SİLME
unlink("./employees.json", (err) => {
  if (err) console.log(err);
  console.log("DOSYA SİLİNDİ...!");
});
