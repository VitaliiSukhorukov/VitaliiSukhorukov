"use strict"
const MINLENGTH = 0;
const MAXLENGTH = 256;
const form = document.querySelector('form')
const inputElements = document.querySelectorAll('input')
const button = document.querySelector('input[type="submit"]')

let objErrors = {}
let isFieldValid = {
    username: false,
    email: false,
    password: false,
}

const isNotCyrillic = value => !/[а-яА-ЯёЁіІїЇєЄ]/.test(value);
const hasUppercase = value => /[A-Z]/.test(value);
const hasLowercase = value => /[a-z]/.test(value);
const hasDigit = value => /\d/.test(value);
 const hasSpecialChar = value => /[\W_]/.test(value);
 const isValidLength = (value, min = 0, max = 256) => new RegExp(`^.{${min},${max}}$`).test(value);
 const isNotSpaces = value => !/\s/.test(value);
 const isValidEmail = value => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
 const isNotEmpty = value => Boolean(value);

function validateField(value, field, funcArr = [], min = MINLENGTH, max = MAXLENGTH ) {
    const funcNames = funcArr.map(func => func.name);
    const errors = {
        isNotCyrillic: isNotCyrillic(value),
        isNotSpaces: isNotSpaces(value),
        isNotEmpty: isNotEmpty(value),
        isValidEmail: isValidEmail(value),
        hasUppercase: hasUppercase(value),
        hasLowercase: hasLowercase(value),
        hasDigit: hasDigit(value),
        hasSpecialChar: hasSpecialChar(value),
        isValidLength: isValidLength(value, min, max),
    };

    funcArr.forEach(func => {
        errors[func] = func(value)
    });

    objErrors[field] = Object.keys(errors).reduce((acc, elem) => {
        if (funcNames.includes(elem)) {
            acc[elem] = errors[elem]
        }
        return acc
    }, {})

    showErrorsMessage(objErrors, min, max);


    return checkAllValid(objErrors[field]);
}

function getErrorMessageText(errorKey, field, min = MINLENGTH, max = MAXLENGTH) {
    return {
        isNotCyrillic: `Поле "${field}" должно содержать только латинские символы`,
        isNotSpaces: `Поле "${field}" не должно содержать пробелов`,
        isValidEmail: `Неверный адрес электронной почты`,
        isNotEmpty: `Поле "${field}" не должно быть пустое`,
        hasUppercase: `Поле "${field}" должно содержать хотя бы 1 большую букву`,
        hasLowercase: `Поле "${field}" должно содержать хотя бы 1 маленькую букву`,
        hasDigit: `Поле "${field}" должно содержать хотя бы 1 цифру`,
        hasSpecialChar: `Поле "${field}" должно содержать хотя бы 1 специальный символ: @, #, *`,
        isValidLength: `Длина поля "${field}" должна быть от ${min} до ${max} символов`,
    }[errorKey];
}

function createElement(errorKey, field, min, max) {
    let newErrorElement = document.createElement('div')
    Object.assign(newErrorElement.dataset, {error: errorKey, field: field});
    newErrorElement.textContent = `${getErrorMessageText(errorKey, field, min, max)}`
    document.querySelector('#errorMessages').appendChild(newErrorElement)

}

function removeElement(errorElement) {
    errorElement?.parentNode?.removeChild(errorElement);
}

function showErrorsMessage(errorObject,  min, max) {
    Object.keys(errorObject).forEach(outerKey => {
        let innerObject = errorObject[outerKey]
        Object.keys(innerObject).forEach(innerKey => {
            const errorElement = document.querySelector(`[data-error="${innerKey}"][data-field="${outerKey}"]`)
            if (innerObject[innerKey] === false) {
                if (!errorElement) {
                    createElement(innerKey, outerKey, min, max)
                }
            } else {
                removeElement(errorElement)
            }
        })
    })
}

let checkAllValid = obj => Object.values(obj).every((isValid) => isValid);

let disableButton = boolean => button.disabled = !boolean;


function addErrorClass(field) {
    let input = document.querySelector(`#${field}`)
    if (input && input.classList.contains('success')) {
        input.classList.remove('success')
    }
    input.classList.add('error')
}

function replaceErrorClass(field) {
    let input = document.querySelector(`#${field}`)
    input.classList.replace('error', 'success')
}

inputElements.forEach(element => {
    element.addEventListener('input', () => {
        let value = element.value.trim()
        let field = element.id
        let isValid = ''
        if (field === 'username') {
            isValid = validateField(value, field, [isNotCyrillic, isValidLength, isNotSpaces, isNotEmpty], 2);
        } else if (field === 'email') {
            isValid = validateField(value, field, [isNotCyrillic, isNotSpaces, isNotEmpty, isValidEmail]);
        } else if (field === 'password') {
            isValid = validateField(value, field, [isNotCyrillic, isNotSpaces, isNotEmpty, hasUppercase, hasLowercase,
                                                            hasDigit, hasSpecialChar, isValidLength],8, MAXLENGTH)
        }
        isFieldValid[field] = isValid;
        isValid ? replaceErrorClass(field) : addErrorClass(field)
        disableButton(checkAllValid(isFieldValid));
    })
})

form.addEventListener('submit', (e) => {
    e.preventDefault();
    form.reset();
    inputElements.forEach(input => input.classList.remove('success'));
    button.disabled = true

})

