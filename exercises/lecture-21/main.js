// <!-------------------------------------------- Task 1 Start -------------------------------------------->
// Перетворити рядок fruits у масив. Результат зберегти у масиві fruits.
const fruits = 'apple banana cantaloupe blueberries grapefruit'.split(' ')
console.log('------------------------- Create Array from string -------------------------');
console.log(fruits);


// <!-------------------------------------------- Task 1 End -------------------------------------------->

// <!-------------------------------------------- Task 2 Start -------------------------------------------->
// Використовуючи цикл for, вивести на консоль список елементів з масиву fruits.
console.log('------------------------- For -------------------------');
for (let i = 0; i < fruits.length; i++){
    console.log(fruits[i])
}
// <!-------------------------------------------- Task 2 End -------------------------------------------->



// <!-------------------------------------------- Task 3 Start -------------------------------------------->
// Використовуючи цикл while, вивести на консоль список елементів з масиву fruits.
console.log('------------------------- While -------------------------');
let counter = 0;
while (counter < fruits.length){
    console.log(fruits[counter])
    counter++;
}
// <!-------------------------------------------- Task 3 End -------------------------------------------->



// <!-------------------------------------------- Task 4 Start -------------------------------------------->
// Використовуючи цикл do...while, вивести на консоль список елементів з масиву fruits.
console.log('------------------------- do while -------------------------');
let counterNew = 0;
do {
    console.log(fruits[counterNew])
    counterNew++;
} while (counterNew < fruits.length);
// <!-------------------------------------------- Task 4 End -------------------------------------------->



// <!-------------------------------------------- Task 5 Start -------------------------------------------->
// Використовуючи цикл for...of, вивести на консоль список елементів з масиву fruits.
console.log('------------------------- For of-------------------------');
for (let fruit of fruits){
    console.log(fruit)
}

// <!-------------------------------------------- Task 5 End -------------------------------------------->



// <!-------------------------------------------- Task 6 Start -------------------------------------------->
// Використовуючи цикл for, вивести на консоль парні елементи з масиву Numbs.
console.log('------------------------- Парні елементи-------------------------');

const Numbs = [1,2,3,4,5,6,7,8,9,10];

for (let i = 0; i < Numbs.length; i++){
    Numbs[i] % 2 === 0
        ? console.log(Numbs[i])
        : '';
}
// <!-------------------------------------------- Task 6 End -------------------------------------------->



// <!-------------------------------------------- Task 7 Start -------------------------------------------->
// Додати 'Joker' в кінець масиву names:
console.log('------------------------- Додати \'Joker\' в кінець масиву -------------------------');

const namesEnd = ['Batman'];
namesEnd.push('Joker')
console.log(namesEnd)

// <!-------------------------------------------- Task 7 End -------------------------------------------->


// <!-------------------------------------------- Task 8 Start -------------------------------------------->
// Додати 'Joker' на початок масиву names
console.log('------------------------- Додати \'Joker\' в початок масиву -------------------------');
const namesBegin = ['Batman'];
namesBegin.unshift('Joker')
console.log(namesBegin)

// <!-------------------------------------------- Task 8 End -------------------------------------------->



// <!-------------------------------------------- Task 9 Start -------------------------------------------->
// Додати 'Catwoman' на початок масиву names, використовуючи метод unshift
console.log('------------------------- Метод unshift -------------------------');

let namesUnshift = ['Batman', 'Joker', 'Bane'];
namesUnshift.unshift('Catwoman')
console.log(namesUnshift)
// <!-------------------------------------------- Task 9 End -------------------------------------------->



// <!-------------------------------------------- Task 10 Start -------------------------------------------->
// Додати 'Catwoman' на початок масиву names, використовуючи оператор ...
console.log('------------------------- Метод spread -------------------------');
let namesSpread = ['Batman', 'Joker', 'Bane'];
namesSpread = ['Catwoman', ...namesSpread]
console.log(namesSpread);

// <!-------------------------------------------- Task 10 End -------------------------------------------->



// <!-------------------------------------------- Task 11 Start -------------------------------------------->
// Додати до names елемент 'Catwoman', розмістивши його з індексом 1
console.log('------------------------- Метод Concat -------------------------');
let namesConcat = ['Batman', 'Joker', 'Bane'];
let addedArray = ['Catwoman']
let newArray = addedArray.concat(namesConcat)
console.log(newArray)
// <!-------------------------------------------- Task 11 End -------------------------------------------->


// <!-------------------------------------------- Task 12 Start -------------------------------------------->
// Видалити елементи 'Catwoman' і 'Joker' з масиву names:
console.log('------------------------- Метод Splice -------------------------');
const namesSlice = ['Batman', 'Catwoman', 'Joker', 'Bane'];
namesSlice.splice(1,2)
console.log(namesSlice);
// <!-------------------------------------------- Task 12 End -------------------------------------------->


// <!-------------------------------------------- Task 13 Start -------------------------------------------->
console.log('------------------------- Замінити елементи \'Catwoman\' і \'Joker\' на \'Alfred\' у масиві names -------------------------');
// Замінити елементи 'Catwoman' і 'Joker' на 'Alfred' у масиві names
const namesChange = ['Batman', 'Catwoman', 'Joker', 'Bane'];
let fromIndex = 1;
let newArray2 = [...namesChange.slice(0, fromIndex), 'Alfred', ...namesChange.slice(3)];
console.log(newArray2);
// <!-------------------------------------------- Task 13 End -------------------------------------------->


// <!-------------------------------------------- Task 13 Start -------------------------------------------->
// Перевірити чи існує рядок 'Alfred' у масиві names, і якщо не існує, додати його до кінця масиву..log('------------------------- Замінити елементи \'Catwoman\' і \'Joker\' на \'Alfred\' у масиві names-------------------------');
console.log('------------------------- Перевірити чи існує рядок \'Alfred\' у масиві names -------------------------');
const namesIncludesAndAdd = ['Batman', 'Catwoman', 'Joker', 'Bane',];
const searchOrAdd ='Alfred';
namesIncludesAndAdd.includes(searchOrAdd)
    ? console.log(`Element'${searchOrAdd}' exists`)
    : namesIncludesAndAdd.push(searchOrAdd);
        console.log(`Element'${searchOrAdd}' doesn\`t exist. '${searchOrAdd}' was added`)

console.log(namesIncludesAndAdd);

// <!-------------------------------------------- Task 13 End -------------------------------------------->


// <!-------------------------------------------- Task 13 Start -------------------------------------------->
// Перевірити, чи існує рядок 'Alfred' у масиві names, і якщо існує, видалити його з масиву.console.log('------------------------- Перевірити чи існує рядок \'Alfred\' у масиві names -------------------------');
const namesIncludesAndRemove = ['Batman', 'Catwoman', 'Joker', 'Bane',];
const searchOrRemove ='Alfred';
const indexToDelete = namesIncludesAndRemove.indexOf(searchOrRemove)
indexToDelete !== -1
    ? namesIncludesAndRemove.splice(indexToDelete, 1) && console.log(`${searchOrRemove} was deleted`)
    : console.log(`Element '${searchOrRemove}' was not found`)
console.log(namesIncludesAndRemove);
// <!-------------------------------------------- Task 13 End -------------------------------------------->