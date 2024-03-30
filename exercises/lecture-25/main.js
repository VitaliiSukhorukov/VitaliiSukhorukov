"use strict"


// <!-------------------------------------------- Task 1 Start -------------------------------------------->
// Використовуючи метод createElement, створити невпорядкований список на основі масиву list та вставити його на сторінку.
const list = ['html', 'css', 'javascript', 'react.js']
let ul = document.createElement('ul')
list.forEach((item) => {
    let li = document.createElement('li')
    li.textContent = item
    ul.appendChild(li)
})
document.body.appendChild(ul)


// <!-------------------------------------------- Task 1 End -------------------------------------------->


// <!-------------------------------------------- Task 2 Start -------------------------------------------->
// Використовуючи метод createElement, створити впорядкований список на основі масиву listWithHref, де кожний елемент списку є тегом, а з відповідним посиланням. Наприклад, для першого елемента списку:
const listWithHref = [{'html': "https://developer.mozilla.org/en-US/docs/Web/HTML"}, {'css': "https://developer.mozilla.org/en-US/docs/Web/CSS"}, {'javascript': "https://developer.mozilla.org/en-US/docs/Web/JavaScript"}, {'react.js': "https://react.dev"}];
let ol = document.createElement('ol')
listWithHref.forEach((elem, index) => {

    let tag = Object.keys(elem)[0]
    let url = Object.values(elem)[0]
    let item = `<li><a href="${url}">${tag}</a></li>`
    ol.insertAdjacentHTML("afterbegin", item)
})
document.body.appendChild(ol)

// <!-------------------------------------------- Task 2 End -------------------------------------------->


// <!-------------------------------------------- Task 3 Start -------------------------------------------->
// Використовуючи метод createElement, створити таблицю на основі масиву students. Заголовки стовпчиків таблиці - firstName, lastName, degree. Встановити для заголовків стовпчиків таблиці css-властивості: background-color: blue; color: azure; Додайте таблицю на сторінку
const students = [
    {'firstName': 'Tom', 'lastName': 'Cat', 'degree': 230},
    {'firstName': 'Nary', 'lastName': 'Ann', 'degree': 336},
    {'firstName': 'John', 'lastName': 'Doe', 'degree': 400},
    {'firstName': 'James', 'lastName': 'Bond', 'degree': 700},
]

function createTable(strings, ...values) {
    let headers = '';
    let rows = '';


    values[0].forEach((elem, index) => {
        if (index === 0) {
            headers = `<tr>${Object.keys(elem).map(key => `<th style="background-color: blue; color: azure;">${key}</th>`).join('')}</tr>`
        }
        rows += `<tr>${Object.values(elem).map(key => `<td>${key}</td>`).join('')}</tr>`
    });

    return `${strings[0]}${headers}${strings[1]}${rows}${strings[2]}`
}

let table = createTable`<table>
   <thead>
        ${students}
   </thead>
   <tbody>
        ${students}
   </tbody>
</table>`

document.body.insertAdjacentHTML('afterbegin', table)


// <!-------------------------------------------- Task 3 End -------------------------------------------->


// <!-------------------------------------------- Task 4 Start -------------------------------------------->

// <!-------------------------------------------- Task 4 End -------------------------------------------->

// <!-------------------------------------------- Task 5 Start -------------------------------------------->

// <!-------------------------------------------- Task 5 End -------------------------------------------->


// <!-------------------------------------------- Task 6 Start -------------------------------------------->

// <!-------------------------------------------- Task 6 End -------------------------------------------->


// <!-------------------------------------------- Task 7 Start -------------------------------------------->
// <!-------------------------------------------- Task 7 End -------------------------------------------->