import {getRandomInt} from './getRandomInt.js';
import {greetByName} from './greetByName.js'
import {sumBigIntegers} from './sumBigIntegers.js'

console.log('main.js\n')
console.log('------------getRandomInt.js----------------------')
console.log(getRandomInt(1, 10));
console.log(getRandomInt(40, 50));
console.log(getRandomInt(1, 100));
console.log('\n------------greetByName.js-----------------------')
console.log(greetByName('Hi', 'John')) // Hi, John
console.log(greetByName('Hey', 'Bob')) // Hey, Bob
console.log(greetByName('Hello', 'Mary')) // Hello, Mary
console.log('\n------------sumBigIntegers.js---------------------')
console.log(sumBigIntegers('9007199254740991', '9007199254740991')); // виводить 18014398509481982n
