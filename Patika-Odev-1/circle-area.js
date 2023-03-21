const arguments = process.argv.slice(2);
//console.log(arguments);

function CircleAreaCalc(radius) {
  const pi = 3.14159265359;
  const area = pi * Math.pow(radius, 2);
  console.log(
    `Yarıçapı (${radius}) olan dairenin alanı: (${parseFloat(area).toFixed(2)})`
  );
}

CircleAreaCalc(arguments[0]);
