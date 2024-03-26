
const alert = document.querySelector('.alert');
let arrClasses = ['alert-primary', 'alert-secondary', 'alert-success', 'alert-danger', 'alert-info', 'null'];

function removeAlertClasses ()  {
    arrClasses.forEach((key) => {
        alert.classList.remove(key)
    })
}

function updateAlert(className, text) {

    removeAlertClasses ()

    className ? alert.classList.add(className) : '';
    alert.textContent = text;
}


// <!-------------------------------------------- Task 1 Start -------------------------------------------->
// Знайти на сторінці кнопку з класом btn-primary. Призначте знайденому елементу подію onclick. Написати функцію обробки події onclick, що додає CSS-клас alert-primary до елемента з id = alert та змінює значення властивості textContent цього елемента на "A simple primary alert—check it out!".


function onClick() {

    updateAlert('alert-primary', 'A simple primary alert—check it out!')

}


// <!-------------------------------------------- Task 1 End -------------------------------------------->
// Знайти на сторінці кнопку з класом btn-secondary. Додати до кнопки прослуховувач події "click". Написати функцію обробки події click, що додає CSS-клас alert-primary до елемента з id = alert та змінює значення властивості textContent цього елемента на "A simple secondary alert—check it out!"

// <!-------------------------------------------- Task 2 Start -------------------------------------------->
let btnSecondary = document.querySelector('.btn-secondary')

btnSecondary.addEventListener('click', click)

function click() {

    updateAlert('alert-secondary', 'A simple secondary alert—check it out!')

}

// <!-------------------------------------------- Task 2 End -------------------------------------------->



// <!-------------------------------------------- Task 3 Start -------------------------------------------->
// Знайти на сторінці кнопку з класом btn-success. Додати до кнопки прослуховувач події "mouseover". Написати функцію обробки події mouseover, що додає CSS-клас alert-success до елемента з id = alert та змінює значення властивості textContent цього елемента на "A simple success alert—check it out!"
let btnSuccess = document.querySelector('.btn-success')

btnSuccess.addEventListener('mouseover', () => {

    updateAlert('alert-success', 'A simple success alert—check it out!')

})

btnSuccess.addEventListener('mouseout', () => {

    updateAlert(null, null)

})
// <!-------------------------------------------- Task 3 End -------------------------------------------->



// <!-------------------------------------------- Task 4 Start -------------------------------------------->
// Знайти на сторінці кнопку з класом btn-danger. Додати до кнопки прослуховувач події "focus". Написати функцію обробки події focus, що додає CSS-клас alert-danger до елемента з id = alert та змінює значення властивості textContent цього елемента на "A simple danger alert—check it out!" Додати до кнопки прослуховувач події "focusout". Написати функцію обробки події focusout, що видаляє CSS-клас alert-danger з елемента alert та змінює значення властивості textContent цього елемента на пустий рядок.
let btnFocus = document.querySelector('.btn-danger')

btnFocus.addEventListener('focus', () => {

    updateAlert('alert-danger', 'A simple danger alert—check it out!')
})
btnFocus.addEventListener('focusout', () => {

    updateAlert('', '')
})
// <!-------------------------------------------- Task 4 End -------------------------------------------->



// <!-------------------------------------------- Task 5 Start -------------------------------------------->
// Знайти на сторінці кнопки з класом btn-dark та btn-light. Написати функцію toggleMode, що перемикає клас «dark-mode» елемента document.body за допомогою методу classList.toggle(). Одночасно при перемиканні класу dark-mode потрібно приховувати або показувати відповідну кнопку. Якщо ввімкнено режим dark-mode, показати кнопку btn-light та сховати кнопку dark-mode, і навпаки, якщо вимкнено режим dark-mode, показати кнопку btn-dark та сховати кнопку btn-light
let btnDark = document.querySelector('.btn-dark')
let btnLight = document.querySelector('.btn-light')
// console.log(btnDark, btnLight)
function toggleMode(e) {

    btnDark.classList.remove('hide');
    btnLight.classList.remove('hide');

    document.body.classList.toggle('dark-mode')
    e.target.classList.toggle('hide')

}
btnDark.addEventListener('click', function (e) {
    toggleMode(e)
})
btnLight.addEventListener('click', function(e) {
    toggleMode(e)
})
// <!-------------------------------------------- Task 5 End -------------------------------------------->



// <!-------------------------------------------- Task 6 Start -------------------------------------------->
// Знайти на сторінці кнопку з класом btn-info. Додати до кнопки прослуховувач події "keypress". Написати функцію обробки події keypress, що перевіряє, чи є натиснута клавіша, клавішею "Enter". Якщо це так, типову дію події потрібно скасовувати за допомогою методу event.preventDefault(). Після скасування дії за замовчуванням, додати CSS-клас alert-info до елемента з id = alert та змінити значення властивості textContent цього елемента на "A simple info alert—check it out!";
let btnInfo = document.querySelector('.btn-info')

btnInfo.addEventListener('keypress', function(e) {

    if (e.key === 'Enter') {
        e.preventDefault()
        updateAlert('alert-info', 'A simple info alert—check it out!')

    }
})
// <!-------------------------------------------- Task 6 End -------------------------------------------->



// <!-------------------------------------------- Task 7 Start -------------------------------------------->
// Знайти на сторінці всі селектори .card. Використовуючи цикл for, вивести на консоль вміст кожного елемента з класом .card-title
let cards = document.querySelectorAll('.card')
for (let i = 0; i < cards.length; i++) {
    console.log(cards[i].querySelector('.card-title').textContent)
}




// <!-------------------------------------------- Task 7 End -------------------------------------------->



// <!-------------------------------------------- Task 8 Start -------------------------------------------->
// Знайти на сторінці всі селектори .card. Використовуючи цмкл for, вивести на консоль вміст кожного елемента з класом .card-title
for (let i = 0; i < cards.length; i++) {
   let btn = cards[i].querySelector('.add-to-cart')
    btn.addEventListener('click', () => {
        console.log(cards[i].querySelector('.card-title').textContent)
    })
}



// <!-------------------------------------------- Task 8 End -------------------------------------------->

