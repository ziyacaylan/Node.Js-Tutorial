function getData(data) {
  return new Promise((res, rej) => {
    console.log("Veriler alınmaya çalışılıyor...");

    if (data) {
      res("Veriler Alındı...");
    } else {
      rej("Veriler Alınamadı...!");
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

// getData(true)
//   .then((result) => {
//     return clearData(false);
//   })
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));

// Async - Await

async function processData() {
  try {
    const receivedData = await getData(false);
    console.log(receivedData);
    const cleanedData = await clearData(true);
    console.log(cleanedData);
  } catch (error) {
    console.log(error);
  }
}
processData();
