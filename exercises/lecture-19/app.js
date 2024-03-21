// <!-------------------------------------------- Task 1 Statrt -------------------------------------------->
// Чи мають рядки str1 та str2 однакову довжину. Перевірити на рівність (недбалу та строгу) рядки str1 та str2.
let str1 = 'I\'m a string!';
let str2 = "I'm a string!";

function checkLength(str1, str2) {
    let lengthStr1 = str1.length
    let lengthStr2 = str2.length

    if (lengthStr1 != lengthStr2) {

        lengthStr1 > lengthStr2
            ? console.log('Строка 1 більше, ніж Строка 2')
            : console.log('Строка 1 менше, ніж Строка 2')
    } else {

        lengthStr1 === lengthStr2
            ? console.log('Недбала перевірка: рядки мають однакову довжину') : '';
        lengthStr1 === lengthStr2
            ? console.log('Строга перевірка: рядки мають однакову довжину') : '';
    }
}

checkLength(str1, str2)
// <!-------------------------------------------- Task 1 End -------------------------------------------->
// Повернути перший символ рядка string5. Виконайте завдання, використовуючи індекс та метод charAt.
let string5 = 'Hello World';

let firstLetterIndex = string5[0]
let firstLetterCharAt = string5.charAt(0)

console.log(firstLetterIndex,'--- firstLetterIndex');
console.log(firstLetterCharAt,'--- firstLetterCharAt');
// <!-------------------------------------------- Task 2 Start -------------------------------------------->

// <!-------------------------------------------- Task 2 End -------------------------------------------->


// <!-------------------------------------------- Task 3 Start -------------------------------------------->
// повернути символ J рядка str3:
let str3 = "Hello Javascript";
let letterToFind = "J";

let index = str3.indexOf(letterToFind);

if (index !== -1) {
    let foundLetter = str3[index];
    console.log(foundLetter); // Output: J
} else {
    console.log(`Символ '${letterToFind}' не существует`);
}
// <!-------------------------------------------- Task 3 End -------------------------------------------->


// <!-------------------------------------------- Task 4 Start -------------------------------------------->
// Використовуючи індекс, отримати доступ до останнього символу рядка двома способами
console.log(str3[str3.length - 1]);
console.log(str3.slice(-1));
// <!-------------------------------------------- Task 4 End -------------------------------------------->


// <!-------------------------------------------- Task 5 Start -------------------------------------------->
// Напишіть три варіанти функції lastChar, що повертає останній символ рядка
function lastCharFirst(str) {
    return str.charAt(str.length - 1);
}

function lastCharSecond(str) {
    return str.slice(-1);
}

function lastCharThird(str) {
    return str[str.length - 1];
}

console.log(lastCharFirst(string5));
console.log(lastCharSecond(string5));
console.log(lastCharThird(string5));
// <!-------------------------------------------- Task 5 End -------------------------------------------->


// <!-------------------------------------------- Task 6 Start -------------------------------------------->

let a = 'When candles are out,';
let b = 'all cats are grey.';
let concat = a.concat(' ',b)
console.log(concat);

// <!-------------------------------------------- Task 6 End -------------------------------------------->


// <!-------------------------------------------- Task 7 Start -------------------------------------------->
// Маємо код
// Використовуючи змінні a, b, fact, змінити значення fact та вивести його на консоль, щоб результат виглядав так: Fifteen is the same as 15

(function () {
    let fact = "Fifteen is the same as"
    let a = 5;
    let b = 10;
    fact += " " + (a + b);
    console.log(fact);
}())

// <!-------------------------------------------- Task 7 End -------------------------------------------->


// <!-------------------------------------------- Task 8 Start -------------------------------------------->
// Маємо код
// Напишіть функцію getFullName, що повертає результат: "Tom Cat"

let firstName = "Tom";
let lastName = "Cat";

function getFullName(firstName, lastname) {

    return `${firstName} ${lastname}`
}

console.log(getFullName(firstName, lastName));
// <!-------------------------------------------- Task 8 End -------------------------------------------->


// <!-------------------------------------------- Task 9 Start -------------------------------------------->
// Напишіть функцію greeting, що використовує виклик функції getFullName та повертає такий результат: Hello, Tom Cat!
function getGreeting(firstName, lastName, callback) {
    let fullName = callback(firstName, lastName)
    return `Hello, ${fullName}`
}

console.log(getGreeting(firstName, lastName, getFullName))
// <!-------------------------------------------- Task 9 End -------------------------------------------->


// <!-------------------------------------------- Task 10 Start -------------------------------------------->
// Використовуючи функцію greeting, створити такий шаблон:
let html = `<div><h1>${getGreeting(firstName, lastName, getFullName)}</h1></div>`
console.log(html)
// <!-------------------------------------------- Task 10 End -------------------------------------------->

// <!-------------------------------------------- Task 11 Start -------------------------------------------->


// Потрібно отримати такі результати
// "The name of our game"
// "The name of our game  "
// "  The name of our game"

let string1 = "  The name of our game  ";
console.log(string1.trim())
console.log(string1.trimStart(), "-----")
console.log(string1.trimEnd())


// Потрібно отримати такі результати
// => '555-123'
// => '555-123 \n'
const phoneNumber = '\t  555-123\n ';
console.log(phoneNumber.trim())
console.log(phoneNumber.trimStart())
//<!-------------------------------------------- Task 11 End -------------------------------------------->


// <!-------------------------------------------- Task 12 Start -------------------------------------------->
// Перевірити, чи містить рядок значення 'look up'
// Перевірити, чи містить рядок значення 'look on'
// Перевірити, чи містить рядок значення 'look on'Б починаючи з 8-ї позиції
let sentence = 'Always look on the bright side of life';
console.log(sentence.includes('look up'));
console.log(sentence.includes('look on'));
console.log(sentence.includes('look on', 8));


// <!-------------------------------------------- Task 12 End -------------------------------------------->


// <!-------------------------------------------- Task 13 Start ------------------------------------------->
// Знайти індекс символу 'l'
// Знайти індекс символу 'l', починаючи з 3-ї позиції
// Знайти індекс символу 'L'
(function () {
    let sentence = 'Always look on the bright side of life';
    console.log(sentence.indexOf('l'));
    console.log(sentence.indexOf('l',3));
    console.log(sentence.indexOf('L'));
}());


// <!-------------------------------------------- Task 13 End -------------------------------------------->


// <!-------------------------------------------- Task 14 Start -------------------------------------------->
// Отримати підрядок 'look on the bright side of life'
// Отримати підрядок 'Always'
// Отримати підрядок 'look'
(function () {
    let sentence = 'Always look on the bright side of life';
    console.log(sentence.substring(7));
    console.log(sentence.substring(0, 6));
    console.log(sentence.split(" ")[1]);

}());

// <!-------------------------------------------- Task 14 End -------------------------------------------->


// <!-------------------------------------------- Task 15 Start -------------------------------------------->
// Створити регулярний вираз, який призначений для перевірки імені користувача, що може містити цифри, літери у нижньому регістрі та символи - і _. Довжину імені користувача встановити від 8 до 16 знаків.
function validateName(name) {
    const regex = /^[a-z0-9_-]{8,16}$/;
    console.log(regex)
    if (regex.test(name)) {
        console.log("Ім'я користувача валідне.");
    } else {
        console.log("Ім'я користувача не відповідає вимогам.");
    }
}
validateName('teacher1900')
// <!-------------------------------------------- Task 15 End -------------------------------------------->


// <!-------------------------------------------- Task 16 Start -------------------------------------------->
// Створити регулярний вираз, який призначений для перевірки email на коректність.
function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    console.log(regex)
    if (regex.test(email)) {
        console.log("Email валіден.");
    } else {
        console.log("Email не відповідає вимогам.");
    }
}
validateEmail('lorem')
// <!-------------------------------------------- Task 16 End -------------------------------------------->


// <!-------------------------------------------- Task 17 Start -------------------------------------------->
// Напишіть функцію truncateText скорочення тексту до 50 символів, використовуючи метод substring
// Напишіть функцію truncateText скорочення тексту до 50 символів, використовуючи метод substr
sentence = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in sapien eu velit eleifend ullamcorper eget vitae nulla. Aenean euismod purus sed neque dictum, nec lobortis ante faucibus.';
function truncateTextSubString(text) {
    return text.substring(0,50)
}

console.log(truncateTextSubString(sentence))

function truncateTextSubStr(text) {
    return text.substr(0,50)
}

console.log(truncateTextSubStr(sentence));
// <!-------------------------------------------- Task 17 End -------------------------------------------->


// <!-------------------------------------------- Task 18 Start -------------------------------------------->
// <!-------------------------------------------- Task 18 End -------------------------------------------->