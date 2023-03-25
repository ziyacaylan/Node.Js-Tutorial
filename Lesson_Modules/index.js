import { readFile, writeFile, appendFile, unlink, mkdir, rmdir } from "node:fs";

// DOSYA OKUMA
// readFile("./password.txt", "utf-8", (err, data) => {
//   err && console.log(err);
//   data && console.log(data);
// });

// DOSYA YAZDIRMA
// writeFile(
//   "./example.txt",
//   "YENİ OLUŞTURULAN EXAMPLE.JS DOSYASI",
//   "utf-8",
//   (err) => {
//     if (err) console.log(err);
//     console.log("DOSYA BAŞARILI BİR ŞEKİLDE OLUŞTURULDU");
//   }
// );

// writeFile("./example.json", '{"name":"Ziya","age":40}', "utf-8", (err) => {
//   if (err) console.log(err);
//   console.log("DOSYA BAŞARILI BİR ŞEKİLDE OLUŞTURULDU");
// });

// VERİ EKLEME
// appendFile(
//   "./example.txt",
//   "\n ***************** YENİ VERİ ***************** \n Patika.DEV YENİ VERİ \n ***************** YENİ VERİ *****************",
//   "utf-8",
//   (err) => {
//     if (err) console.log(err);
//     console.log("DOSYAYA YENİ VERİ EKLENDİ");
//   }
// );

// DOSYA SİLMEK
// unlink("./example1.txt", (err) => {
//   if (err) console.log(err);
//   console.log("DOSYA SİLİNDİ...!");
// });

// KLASOR OLUŞTURMA
// mkdir("./upload/img", { recursive: true }, (err) => {
//   if (err) console.log(err);
//   console.log("DOSYA OLUŞTURULDU...!");
// });

// KLASÖR SİLME
rmdir("./upload", { recursive: true }, (err) => {
  if (err) console.log(err);
  console.log("DOSYA SİLİNDİ...!");
});
