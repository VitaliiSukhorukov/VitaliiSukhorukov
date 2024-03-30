## Домашні вправи до лекції 25

Exercises for lecture №25 - Замикання у JavaScript
В середині exercises створіть піддиректорію lecture-25. В середині lecture-25 створіть файли index.html, app.css та app.js

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="app.css">
</head>
<body>

    <script src="app.js"></script>
</body>
</html>
Маємо масив list
const list = ['html', 'css', 'javascript', 'react.js'];
Використовуючи метод createElement, створити невпорядкований список на основі масиву list та вставити його на сторінку.

Маємо масив listWithHref
const listWithHref = [
{'html': "https://developer.mozilla.org/en-US/docs/Web/HTML"},
{'css': "https://developer.mozilla.org/en-US/docs/Web/CSS"},
{'javascript': "https://developer.mozilla.org/en-US/docs/Web/JavaScript"},
{'react.js': "https://react.dev"}
];
Використовуючи метод createElement, створити впорядкований список на основі масиву listWithHref, де кожний елемент списку є тегом a з відповідним посиланням. Наприклад, для першого елемента списку:

<a href="https://developer.mozilla.org/en-US/docs/Web/HTML">html</a>
Додайте створений список на сторінку.

Маємо масив students
const students = [
{'firstName': 'Tom', 'lastName': 'Cat', 'degree': 230},
{'firstName': 'Nary', 'lastName': 'Ann', 'degree': 336},
{'firstName': 'John', 'lastName': 'Doe', 'degree': 400},
{'firstName': 'James', 'lastName': 'Bond', 'degree': 700},
]
Використовуючи метод createElement, створити таблицю на основі масиву students. Заголовки стовпчиків таблиці - firstName, lastName, degree. Встановити для заголовків стовпчиків таблиці css-властивості: background-color: blue; color: azure; Додайте таблицю на сторінку.