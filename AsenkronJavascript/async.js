function getData(data) {
  return new Promise((res, jej) => {
    console.log("Veriler alınmaya çalışılıyor...");

    if (data) {
      return res("Veriler Alındı...");
    } else {
      return jej("Veriler Alınamadı...!");
    }
  });
}

function clearData(receivedData) {
  return new Promise((res, rej) => {
    console.log("Veriler düzenleniyor...");

    if (receivedData) {
      res("Veriler düzenlendi...");
    } else {
      rej("Veriler düzenlenemedi...!");
    }
  });
}
