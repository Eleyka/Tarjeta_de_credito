//Algoritmo de Luhn
//Declaramos la función isValidCard considerenado como parámetro a cardDigits
function isValidCard(cardDigits) {
  var numReverse = 0; // Se crea una variable denominado numReverse
  var tarj = cardDigits;// Se crea una variable para alamacenar los digitos de la tarjeta
  var array = [];// Se crea la variable array para guardar los digitos en orden inverso
  var numSum = 0;
  var value = 0;
 
  do {
    numReverse = numReverse * 10 + (tarj % 10);
    tarj = Math.floor(tarj / 10); // Se almacena  la parte entera del resultado
  } while (tarj > 0)
  return numReverse;

  for (var i = 1; i <= 16; ++i) {
    if (i % 2 === 0) {
      value = 2 * numReverse[i];
      if (value >= 10) {
        value = (Math.floor(value / 10) + value % 10);
      }
    } else {
      value = +numReverse[i];
    }
    numSum += value;

  }

  return (numSum % 10 === 0);


}
console.log(isValidCard(123));