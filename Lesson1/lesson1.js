// Asal Sayı bulma Örneği

const arguments = process.argv.slice(2);

function showPrimeNumbers(lowNumber, highNumber) {
  for (let i = lowNumber; i < highNumber; i++) {
    let isPrime = true;
    for (let j = 2; j < i; j++) {
      if (i % j === 0 && j !== i) {
        isPrime = false;
      }
    }
    if (isPrime) {
      console.log(i);
    }
  }
}

// argümanlar array içerisinde string olarak döner bu nedenle number a çevirme işlemi yapmalıyız.
showPrimeNumbers(arguments[0] * 1, arguments[1] * 1);

//console.log(process.argv);

// Process Object
/*
Process objesi node.js çalışma ortamında o an yapılan iş ile ilgili bilgileri içerir.
Bizim için önemli olan kısmı ise process.argv özelliğidir.
process.argv bize node.js programı çalıştığında komut satırından girilen argümanları bir array olarak bize sunar.


Örneğin test.js dosyasını node test.js one two three komutuyla çalıştırdığımızda, (rakamlar satır sırasını gösteriyor)

konsol ekranından çağırmak için nede lesson1 2 11 // bu şekilde girdiğimizde 2 ile 11 arasındaki asal sayılar bize getirilir.
*/
