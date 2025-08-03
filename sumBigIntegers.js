/*
 Створіть функцію sumBigIntegers, яка приймає два рядки (numStr1 та numStr2), що представляють великі числа.
 Функція повинна перетворити ці рядки на BigInt і повернути їх суму.

 console.log(sumBigIntegers('9007199254740991', '9007199254740991')); // виводить 18014398509481982n
*/

export {sumBigIntegers} ;

function sumBigIntegers(numStr1, numStr2) {
  let bigInt1 = BigInt(numStr1);
  let bigInt2 = BigInt(numStr2);
  let bigIntSum = bigInt1 + bigInt2;
  return bigIntSum;
}
