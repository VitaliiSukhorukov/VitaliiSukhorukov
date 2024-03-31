"use strict"

function calculate(numbers) {
    let sum = 0;
    for (const number of numbers) {
        sum = sum + number;
    }
    return sum;
}
calculate([1, 2, 4]); // => 7

// sum() - це функція, яка описує операцію додавання.
function sum(n1, n2) {
    return n1 + n2;
}

// multiply() - це функція, яка описує операцію множення.

function multiply(n1, n2) {
    return n1 * n2;
}

let numbers = [3, 6, 9]

// <!-------------------------------------------- Task 1 Start -------------------------------------------->
function higherFunction(callback, initialValue, numbers) {
    let result = initialValue;
    for (const number of numbers) {
        result = callback(number,result)
    }
    return result

}

console.log(higherFunction(multiply, 1, numbers));
// <!-------------------------------------------- Task 1 End -------------------------------------------->


// <!-------------------------------------------- Task 2 Start -------------------------------------------->
let student_names = ["Wick", "Malcolm", "Smith"]
let a = student_names.map( (elem, i, arr) => {

    return `name: ${elem} | index: ${i} | array: [ "${arr.join('", "')}"]`
})
console.log(a);
//Не совсем увер что сделал то что нужно
// <!-------------------------------------------- Task 2 End -------------------------------------------->


// <!-------------------------------------------- Task 3 Start -------------------------------------------->
// Маємо масив об'єктів students_information, що представляє результати іспитів кожного студента у полі degree:
// Максимальна оцінка degree = 600 Розрахувати відсоткове значення отриманої оцінки по кожному студенту, використовуючи метод map, та вивести на консоль отриманий результат у такому вигляді:
let students_information = [
    {"name": "Wick", "degree": 375},
    {"name": "Malcolm", "degree": 405},
    {"name": "Smith", "degree": 453},
];

let result = students_information.map((student) => {
    let maxDegree = 600;
    student.percentage = (student.degree/maxDegree)*100

    return student
})

console.log(...result);

// <!-------------------------------------------- Task 3 End -------------------------------------------->


// <!-------------------------------------------- Task 4 Start -------------------------------------------->
// Використовуючи метод reduce, звести масив до одномірного


let arr = [1, 2, 3, [10, 11, 12], 21, 22, 23, [31, 32, 33, 34], [41, 42]];

result = arr.reduce((previousValue, currentValue) => {
    return previousValue.concat(Array.isArray(currentValue) ? currentValue : [currentValue])


}, []);

console.log(result);
// <!-------------------------------------------- Task 4 End -------------------------------------------->

// <!-------------------------------------------- Task 5 Start -------------------------------------------->
// Створити конструктор прототипу масиву upperCase(), що перетворює символи рядка у символи верхнього регістру.

function myFunc() {
    let arr = ["Algorithm", "Data Structure", "Operating System", "html"];
    arr.upperCase();
    console.log(arr);
}
Array.prototype.upperCase = function () {
    for (let i = 0; i < this.length; i++) {
        this[i] = this[i].toUpperCase()
    }
}
myFunc(); // [ 'ALGORITHM', 'DATA STRUCTURE', 'OPERATING SYSTEM', 'HTML' ]
// <!-------------------------------------------- Task 5 End -------------------------------------------->


// <!-------------------------------------------- Task 6 Start -------------------------------------------->

// <!-------------------------------------------- Task 6 End -------------------------------------------->


// <!-------------------------------------------- Task 7 Start -------------------------------------------->
// <!-------------------------------------------- Task 7 End -------------------------------------------->