"use strict";
const classes = ['first', 'second', 'third', 'fourth'];

// <!-------------------------------------------- Task 1 Start -------------------------------------------->
// Отримати всі елементи з тегом h1. Вивести на консоль тип отриманого об'єкту та його розмір. Використовуючи цикл for, вивести на консоль кожний елемент з отриманого об'єкту.
console.log('------------------------- Отримати всі елементи з тегом h1. Вивести на консоль тип отриманого об\'єкту та його розмір. Використовуючи цикл for, вивести на консоль кожний елемент з отриманого об\'єкту.\n -------------------------');

let elementsH1 = document.getElementsByTagName('h1');
console.log('Type', typeof elementsH1);
console.log('Size', elementsH1.length);

for (let i = 0; i < elementsH1.length; i++){
    console.log(`Element № ${[i]}`, elementsH1[i]);
}
// <!-------------------------------------------- Task 1 End -------------------------------------------->



// <!-------------------------------------------- Task 2 Start -------------------------------------------->
// Отримати перший абзац за допомогою document.querySelector('#id') за його ідентифікатором p1. Встановити для нього стиль background-color = "gold"
console.log('------------------------- Перший абзац встановити для нього стиль background-color = "gold -------------------------');

let paragraphFirst = document.querySelector('#p1');
paragraphFirst.style.backgroundColor = "gold";

console.log('backgroundColor:', paragraphFirst.style.backgroundColor);
// <!-------------------------------------------- Task 2 End -------------------------------------------->



// <!-------------------------------------------- Task 3 Start -------------------------------------------->

// <!-------------------------------------------- Task 3 End -------------------------------------------->
// Отримати другий абзац за допомогою document.querySelector('#id') за його ідентифікатором p2. Встановити для нього стилі background-color:gold; color: blue; font-size: 2rem;
console.log('------------------------- Другий абзац встановити для нього стилі background-color:gold; color: blue; font-size: 2rem; -------------------------');

let paragraphSecond = document.querySelector('#p2');
paragraphSecond.style.cssText = "background-color:gold; color: blue; font-size: 2rem";

console.log(' These styles have been set: background-color:gold; color: blue; font-size: 2rem', paragraphSecond.style.cssText);

// <!-------------------------------------------- Task 2 End -----------

// <!-------------------------------------------- Task 4 Start -------------------------------------------->
// Отримати третій абзац за допомогою document.querySelector('#id') за його ідентифікатором p3. Призначити для нього клас third
console.log('------------------------- Третій абзац встановити для нього стилі призначити для нього клас third-------------------------');

let paragraphThird = document.querySelector('#p3');
paragraphThird.classList.add('third')

console.log('Class Third was set in the third paragraph:', paragraphThird.className);
// <!-------------------------------------------- Task 4 End -------------------------------------------->



// <!-------------------------------------------- Task 5 Start -------------------------------------------->
// Отримати четвертий абзац за допомогою document.querySelector('#id') за його ідентифікатором p4. Призначити для нього класи fourth та border
console.log('------------------------- Четвертий абзац встановити для нього класи fourth та border-------------------------');

let paragraphFourth = document.querySelector('#p4');
paragraphFourth.classList.add('fourth', 'border')

console.log('Classes fourth and border were set in the fourth paragraph:', paragraphFourth.className);
// <!-------------------------------------------- Task 5 End -------------------------------------------->



// <!-------------------------------------------- Task 6 Start -------------------------------------------->
// Знайти всі елементи з класом container. Використовуючи цикл for, вивести на консоль перший елемент для кожного зі знайдених елементів.
console.log('------------------------- Знайти всі елементи з класом container. Використовуючи цикл for, вивести на консоль перший елемент -------------------------');
let containers = document.getElementsByClassName('container')

for (let i = 0; i < containers.length; i++){
    console.log(`Container ${[i]}`, containers[i].firstElementChild);
}
// <!-------------------------------------------- Task 6 End -------------------------------------------->



// <!-------------------------------------------- Task 7 Start -------------------------------------------->
// Знайти всі елементи з класом container. Використовуючи цикл for, вивести на консоль вміст першого елементу для кожного першого елемента зі знайдених елементів.
console.log('------------------------- Знайти всі елементи з класом container. Використовуючи цикл for, вивести на консоль перший елемент та його вмiст -------------------------');
let containersInner = document.getElementsByClassName('container')

for (let i = 0; i < containersInner.length; i++){
    console.log(`Container ${[i]}`, containersInner[i].firstElementChild.innerHTML);
}
// <!-------------------------------------------- Task 7 End -------------------------------------------->


// <!-------------------------------------------- Task 8 Start -------------------------------------------->
// Знайти колекцію всіх елементів з селектором '.container header', зберегти її в змінній headers. Використовуючи цикл for для отриманої колекції headers, замінити заголовки h1 таким чином
console.log('------------------------- Змінити заголовки та додати класи -------------------------');

document.querySelectorAll('.container header').forEach((header, index) => {
    const title = header.querySelector("h1");
    title.classList.add(classes[index]);

    if (index !== 0) {
        const newTagName = `h${index + 1}`;
        const newTitle = document.createElement(newTagName);
        newTitle.className = title.className;
        newTitle.id = title.id;
        newTitle.innerHTML = title.innerHTML;

        title.parentNode.replaceChild(newTitle, title);
    }
});

// <!-------------------------------------------- Task 8 End -------------------------------------------->