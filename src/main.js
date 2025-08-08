console.log("JS #2. Домашнє завдання. Від простих до складних обчислень і рядків")

/*
 * #1
 *
 * Створіть змінну i, для якої виконайте префіксний та постфіксний інкремент та декремент.
 * Поекспериментуйте з результатами, виводячи їх у консоль.
 */

var i = 5;

console.log("Начальное значение i:", i);

// Префіксний інкремент (++i)
console.log("Префиксный инкремент ++i:", ++i);
console.log("Значение после префиксного инкремента:", i);

// Постфіксний інкремент (i++)
console.log("Постфиксный инкремент i++:", i++);
console.log("Значение после постфиксного инкремента:", i);

// Префіксний декремент (--i)
console.log("Префиксный декремент --i:", --i);
console.log("Значение после префиксного декремента:", i);

// Постфіксний декремент (i--)
console.log("Постфиксный декремент i--:", i--);
console.log("Значение после постфиксного декремента:", i);


/*
 * #2
 *
 * Створіть нову змінну myTest та присвойте їй значення 20.
 * Виконайте присвоєння з операцією, використовуючи оператори: +=, –=, *=, /=, %=.
 * Результати присвоюються в myTest, потім виводяться в консоль.
 * У розрахунках можна використовувати раніше оголошену змінну myNum та/або числа.
 */
var myNum = 10;
var myTest = 20;

myTest += myNum;
console.log("После += myTest =", myTest);

myTest -= myNum;
console.log("После -= myTest =", myTest);

myTest *= myNum;
console.log("После *= myTest =", myTest);

myTest /= myNum;
console.log("После /= myTest =", myTest);

myTest %= myNum;
console.log("После %= myTest =", myTest);


/*
 * #3
 *
 * Використовуючи властивості та методи об'єкта Math, присвойте змінним та відобразіть у консолі.
 */

var myPi = Math.PI;
console.log("myPi:", myPi);

var myRound = Math.round(89.279);
console.log("myRound:", myRound);

var myRandom = Math.random() * 10;
console.log("myRandom:", myRandom);

var myPow = Math.pow(3, 5);
console.log("myPow:", myPow);


/*
 * #4
 *
 * Створіть об'єкт з ім'ям strObj.
 * Присвойте ключу str рядок тексту "Мама мыла раму, рама мыла маму", ключу length встановіть довжину цього рядка.
 */

var strObj = {
    str: "Мама мыла раму, рама мыла маму"
};

strObj.length = strObj.str.length;

console.log(strObj);


/*
 * #5
 *
 * Перевірте наявність тексту 'рама' у полі str об'єкта strObj (див.п.4), результат збережіть у змінній isRamaPos та виведіть її у консоль.
 * Результатом для isRamaPos має бути індекс входження.
 * Результатом для isRama має бути буль true.
 */

var isRamaPos = strObj.str.indexOf("рама");
var isRama = isRamaPos !== -1;

console.log("Позиция 'рама':", isRamaPos);
console.log("Содержит 'рама':", isRama);


/*
 * #6
 *
 * Виконайте перейменування підрядка у рядку.
 * Як вихідний рядок використовуйте значення поля str об'єкта strObj (див.п.4), результат збережіть у змінній strReplace та відобразіть у консолі.
 * Вихідний рядок: 'Мама мыла раму, рама мыла маму'
 *      Результат: 'Мама моет раму, Рама держит маму'
 */

var strReplace = strObj.str
    .replace("мыла", "моет")
    .replace("рама мыла маму", "Рама держит маму");

console.log("strReplace:", strReplace);


/*
 * #7
 *
 * Преобразуйте текст 'some STRING' у верхній, потім у нижній регістри, результат відобразіть у консолі.
 */

var someStr = "some STRING";

var upperStr = someStr.toUpperCase();
var lowerStr = someStr.toLowerCase();

console.log("upperStr:", upperStr);
console.log("lowerStr:", lowerStr);
