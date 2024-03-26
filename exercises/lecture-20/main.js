// <!-------------------------------------------- Task 1 Start -------------------------------------------->
// Створити об'єкт person, що має властивості name з типом рядка та age з типом цілого числа. Надати значення цим властивостям. Вивести значення властивостей об'єкту на консоль
let person  = new Object(
    {
        name: "Ivan",
        age: 18
    }
)

console.log('object person:',person);
console.log('person.name:', person.name);
console.log('person.age:', person.age);
// <!-------------------------------------------- Task 1 End -------------------------------------------->



// <!-------------------------------------------- Task 2 Start -------------------------------------------->
// Змінити тип властивості name з рядка на об'єкт, з ключами firstName та lastName. Надати значення цим властивостям. Вивести значення властивостей об'єкту на консоль.
person.name  = {
    firstname:"Ivan",
    lastname:"Ivanov",
}
console.log('object person:', person);
console.log('person.name:', person.name);
// <!-------------------------------------------- Task 2 End -------------------------------------------->

// <!-------------------------------------------- Task 3 Start -------------------------------------------->
// Створити метод об'єкту bio(), що виводить на консоль ім'я, прізвище та вік person.
// person = {

person.bio = function () {
        let fullName = `${this.name.firstname} ${this.name.lastname}`

        console.log(`Name: ${fullName}, Age:${this.age}`)

        return `Name: ${fullName}, Age:${this.age}`
    }
person.bio()
// <!-------------------------------------------- Task 3 End -------------------------------------------->


// <!-------------------------------------------- Task 4 Start -------------------------------------------->
// Створити метод об'єкту introduceSelf, що виводить на консоль Hi! I'm firstName.
person.introduceSelf = function () {
    return console.log(`Hi! I'm ${this.name.firstname}`)
}
person.introduceSelf()

// <!-------------------------------------------- Task 4 End -------------------------------------------->



// <!-------------------------------------------- Task 5 Start -------------------------------------------->
// Створити функцію-шаблон createPerson, що приймає аргумент name та повертає новий об'єкт з властивістю name та методом introduceSelf. Створити за допомогою createPerson 2 екземпляри об'єкта.

function createPerson(name) {
    return {
        name:name,
        introduceSelf: function () {
            return console.log(`Hi! I'm ${this.name}`)
        }
    }
}

let firstPerson = createPerson("Vitalii")
let secondPerson = createPerson("Ivan")

firstPerson.introduceSelf()
secondPerson.introduceSelf()
// <!-------------------------------------------- Task 5 End -------------------------------------------->



// <!-------------------------------------------- Task 6 Start -------------------------------------------->
// Створити функцію-конструктор Person, що приймає аргумент name та повертає новий об'єкт з властивістю name та методом introduceSelf. Створити за допомогою Person 2 екземпляри об'єкта mary та tom.
function Person(name) {
    this.name = name;
}

Person.prototype.introduceSelf = function () {
    return console.log(`Hi! I'm ${this.name}`)
}

personMary = new Person('Mary')
personTom = new Person('Tom')
personMary.introduceSelf()
personTom.introduceSelf()

if ('prop' in personMary) {
    console.log('Объект personMary содержит свойство с именем prop.');
} else {
    console.log('Объект personMary не содержит свойства с именем prop.');
}

// <!-------------------------------------------- Task 6 End -------------------------------------------->



// <!-------------------------------------------- Task 7 Start -------------------------------------------->
// Створіть об'єкт DirtyMartini, що має 2 методи english_please() та excuse_my_french() 


let DirtyMartini = {
    ingredients: {
        gin:6,
        vermouth :1,
        olive_brine:1,
        olives:4,

    },
    english_please: function () {
        console.log(`      ingredients:
                                        ${this.ingredients.gin} fluid ounces gin
                                        ${this.ingredients.vermouth} dash dry vermouth (0.0351951ml) 
                                        ${this.ingredients.olive_brine} fluid ounce brine from olive jar
                                        ${this.ingredients.olives} stuffed green olives`
        )
    },
    excuse_my_french: function () {
        console.log(`        ingrédients:
                                         ${this.convertToMilliliters(this.ingredients.gin)} ml de gin
                                         ${this.ingredients.vermouth} trait de vermouth sec (0.0351951ml)
                                         ${this.convertToMilliliters(this.ingredients.olive_brine)} ml de saumure du pot d'olive
                                         ${this.ingredients.olives} olives vertes farcies`
        )

    },
    convertToMilliliters: function (ounces) {
        return Number(ounces*28.4131)
    }
}
DirtyMartini.english_please();
DirtyMartini.excuse_my_french();
// <!-------------------------------------------- Task 7 End -------------------------------------------->
