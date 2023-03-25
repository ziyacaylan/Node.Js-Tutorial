const pi = 3.14159265359;
const circleArea = (radius) => {
  const area = pi * Math.pow(radius, 2);
  console.log(`Yarıçapı ${radius} olan dairenin alanı : ${area}'dır.`);
};
const circleCircumference = (radius) => {
  const circleCircumference = 2 * pi * radius;
  console.log(
    `Yarıçapı ${radius} olan dairenin çevresi : ${circleCircumference}'dır.`
  );
};

module.exports = { circleArea, circleCircumference };
